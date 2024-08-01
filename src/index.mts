// Author: Igor Dimitrijević (@igorskyflyer)

import { MagicString } from '@igor.dvlpr/magic-string'
import { type ExecResult, executeSync } from '@igor.dvlpr/simple-exec'
import {
  type ChildProcessWithoutNullStreams,
  type SpawnSyncReturns,
  spawn,
  spawnSync
} from 'node:child_process'
import { platform } from 'node:os'

interface ICommandOptions {
  /**
   * Which shell to use for the command execution.
   *
   * Only available for Windows.
   */
  msShell?: 'cmd' | 'powershell'
}

/**
 * Configuration for the command execution.
 */
interface IOptions extends ICommandOptions {
  /**
   * Arguments to pass to the command.
   */
  args?: string[]
}

function getOpenCommand(options?: ICommandOptions): string {
  switch (platform()) {
    case 'win32': {
      if (options?.msShell === 'powershell') {
        const command: MagicString = new MagicString()

        command.append('powershell').append('-Command').append('Start-Process')

        return 'powershell -Command Start-Process'
      }

      return 'start'
    }
    case 'linux': {
      const tryXdg: ExecResult = executeSync('which xdg-open')

      if (tryXdg.output.trim().endsWith('xdg-open')) {
        return 'xdg-open'
      }

      return 'sh ./xdg-open'
    }
    case 'darwin':
      return 'open'
    default:
      throw new Error('Not supported on the host OS.')
  }
}

function applyOptions(options?: IOptions): IOptions {
  return {
    args: options?.args || []
  }
}

function prepareOpen(
  resource: string,
  options?: IOptions
): { command: string; args?: string[] } {
  if (typeof resource !== 'string' || resource.length === 0) {
    throw new Error('No resource specified.')
  }

  const { args } = applyOptions(options)

  if (!Array.isArray(args)) {
    throw new Error('Invalid arguments.')
  }

  const openCommand: string = getOpenCommand(options)
  const command: MagicString = new MagicString()

  command.append(openCommand).append(resource)

  return { command: command.value, args }
}

/**
 * Opens a specified resource synchronously using the appropriate command for the current platform.
 *
 * @param resource - The resource to be opened, a path, URL, etc. Must be a non-empty string.
 * @param options - Optional configuration for the command execution.
 * @throws Throws an error if no resource is specified, if the arguments are invalid, or an error occurs during execution.
 */
export function openSync(resource: string, options?: IOptions): void {
  const { command, args } = prepareOpen(resource, options)

  const process: SpawnSyncReturns<string | Buffer> = spawnSync(command, args, {
    encoding: 'utf-8',
    shell: true
  })

  if (process.error) {
    throw process.error
  }
}

/**
 * Opens a specified resource asynchronously using the appropriate command for the current platform.
 *
 * @param resource - The resource to be opened, a path, URL, etc. Must be a non-empty string.
 * @param options - Optional configuration for the command execution.
 * @throws Throws an error if no resource is specified, if the arguments are invalid, or an error occurs during execution.
 */
export async function open(
  resource: string,
  options?: IOptions
): Promise<void> {
  const { command, args } = prepareOpen(resource, options)

  return new Promise<void>((resolve, reject) => {
    const process: ChildProcessWithoutNullStreams = spawn(command, args, {
      shell: true
    })

    process.once('error', (err: Error) => {
      reject(err)
    })

    process.once('close', (code: number | null) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Process exited with code ${code}.`))
      }
    })
  })
}

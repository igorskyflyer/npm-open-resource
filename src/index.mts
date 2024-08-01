// Author: Igor Dimitrijević (@igorskyflyer)

import { MagicString } from '@igor.dvlpr/magic-string'
import { type ExecResult, executeSync } from '@igor.dvlpr/simple-exec'
import { type SpawnSyncReturns, spawnSync } from 'node:child_process'
import { platform } from 'node:os'

interface ICommandOptions {
  msShell?: 'cmd' | 'powershell'
}

interface IOptions extends ICommandOptions {
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

/**
 *
 * @param resource
 */
export function openSync(resource: string, options?: IOptions): void {
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

  const process: SpawnSyncReturns<string> = spawnSync(command.value, args, {
    encoding: 'utf-8',
    shell: true
  })

  if (process.error) {
    throw process.error
  }
}

export async function open(resource: string): Promise<void> {
  return Promise.resolve(openSync(resource))
}

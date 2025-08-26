// Author: Igor Dimitrijević (@igorskyflyer)

import { describe, expect, it } from 'vitest'
import { open, openSync } from '../src/index.ts'

describe('🧪 Open Resource tests 🧪', () => {
  it('#1 should throw', () => {
    // @ts-expect-error
    expect(() => openSync()).toThrowError()
  }) // #1

  it('#2 should throw', () => {
    expect(() => openSync('')).toThrowError()
  }) // #2

  it('#3 should not throw', () => {
    expect(openSync('https://igorskyflyer.me')).toBeUndefined()
  }) // #3

  it('#4 should throw', async () => {
    // @ts-expect-error
    await expect(async () => await open()).rejects.toThrowError()
  }) // #4

  it('#5 should throw', async () => {
    await expect(async () => await open('')).rejects.toThrowError()
  }) // #5

  it('#6 should not throw', async () => {
    await expect(
      open('https://github.com/igorskyflyer/npm-open-resource')
    ).resolves.toBeUndefined()
  }) // #6

  it('#7 should open the file', async () => {
    await expect(open('./test/test.txt')).resolves.toBeUndefined()
  }) // #7
})

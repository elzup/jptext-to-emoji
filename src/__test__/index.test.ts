import { emojify } from '../index.js'
import { keyPrepare } from '../script/util.js'

describe('emojify', () => {
  it('trans', async () => {
    expect(await emojify('世界的に水が不足')).toBe('🗺🎯に🚰が不足')
    expect(await emojify('扉を開ける')).toBe('🚪を開ける')
  })

  it('priority first', async () => {
    expect(await emojify('電話をする')).toBe('☎をする')
  })

  it('onlyEmoji', async () => {
    expect(await emojify('扉を開ける', { onlyEmoji: true })).toBe('🚪')
  })
})

test('keyPrepare', () => {
  expect(keyPrepare('うさぎのかお')).toMatch('うさぎ')
  expect(keyPrepare('しんこくかお')).toMatch('しんこく')
})

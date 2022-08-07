import { emojify } from '../index.js'
import { keyPrepare } from '../script/util.js'

test('emojify', async () => {
  expect(await emojify('世界的に水が不足')).toBe('🗺🎯に🚰が不足')
})

test('keyPrepare', () => {
  expect(keyPrepare('うさぎのかお')).toMatch('うさぎ')
  expect(keyPrepare('しんこくかお')).toMatch('しんこく')
})

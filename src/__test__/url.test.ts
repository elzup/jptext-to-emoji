import { emojify } from '../index'

test('emojify', async () => {
  expect(await emojify('世界的に水が不足')).toBe('🗺🎯に🚰が不足')
})

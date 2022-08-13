import { readFileSync } from 'fs'

import toHiragana from 'jaco/fn/toHiragana'
import { tokenize } from 'kuromojin'

const toHira = (text: string) => toHiragana(text)

const loadLib = () => {
  const emojiTsv = readFileSync(__dirname + '/resource/emoji.tsv', 'utf8')

  const kvs = emojiTsv
    .trim()
    .split('\n')
    .map((v) => v.split('\t'))

  return Object.fromEntries(kvs)
}

const lib = loadLib()

export const emojify = async (
  text: string,
  { onlyEmoji } = { onlyEmoji: false }
) => {
  const tokens = await tokenize(text)

  return tokens
    .filter((v) => Boolean(v?.reading))
    .map((v) => {
      const reading = toHira(v.reading)
      const hit = lib[reading]

      if (hit !== undefined) return hit
      return onlyEmoji ? '' : v.surface_form
    })
    .join('')
}

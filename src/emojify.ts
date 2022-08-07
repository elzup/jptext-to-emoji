import { readFileSync } from 'fs'

import toHiragana from 'jaco/fn/toHiragana'
import { tokenize } from 'kuromojin'

const emojiTsv = readFileSync('./data/emoji.tsv', 'utf8')
const lines = emojiTsv.split('\n')
const toHira = (text: string) => {
  return toHiragana(text)
}

const lib: Record<string, string> = {}

lines.forEach((v) => {
  const [k, emoji] = v.split('\t')

  lib[k.substring(1)] = emoji
})

export const emojify = async (text: string) => {
  const tokens = await tokenize(text)

  return tokens
    .map((v) => {
      const reading = toHira(v.reading)
      const hit = lib[reading]

      if (hit !== undefined) return hit
      return v.surface_form
    })
    .join('')
}

import { readFileSync } from 'fs'

import * as url from 'url'
import toHiragana from 'jaco/fn/toHiragana'

import { tokenize } from 'kuromojin'

const dirname = url.fileURLToPath(new URL('.', import.meta.url))

const emojiTsv = readFileSync(dirname + './resource/emoji.tsv', 'utf8')
const toHira = (text: string) => {
  return toHiragana(text)
}

const lib = Object.fromEntries(
  emojiTsv
    .trim()
    .split('\n')
    .map((v) => v.split('\t'))
)

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

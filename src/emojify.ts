import { readFileSync } from 'fs'

import toHiragana from 'jaco/fn/toHiragana'
import { tokenize } from 'kuromojin'

const toHira = (text: string) => toHiragana(text)

const loadLib = () => {
  const emojiTsv = readFileSync(__dirname + '/resource/emoji.tsv', 'utf8')

  return Object.fromEntries(
    emojiTsv
      .trim()
      .split('\n')
      .map((v) => v.split('\t'))
  )
}
const lib = loadLib()

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

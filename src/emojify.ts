import { readFileSync } from 'fs'

import * as url from 'url'
import { toHiragana } from 'jaco'
import { tokenize } from 'kuromojin'

const dirname = url.fileURLToPath(new URL('.', import.meta.url))
const toHira = (text: string) => toHiragana(text)

const loadLib = () => {
  const emojiTsv = readFileSync(dirname + './resource/emoji.tsv', 'utf8')

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

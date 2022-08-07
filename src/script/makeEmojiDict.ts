import { readFileSync } from 'fs'
import { keyPrepare } from './util.js'

const emojiTsv = readFileSync('./data/emoji.tsv', 'utf8')
const lines = emojiTsv.split('\n')

const lib: Record<string, string> = {}

lines.forEach((v) => {
  const [k, emoji] = v.split('\t')
  const k1 = k.substring(1)
  const k2 = keyPrepare(k1)

  lib[k1] = emoji
  if (!(k2 in lib)) lib[k2] = v
})

console.log(
  Object.entries(lib)
    .map((kv) => kv.join('\t'))
    .join('\n')
)

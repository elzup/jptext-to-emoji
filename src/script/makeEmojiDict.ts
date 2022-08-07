import { readFileSync } from 'fs'

const emojiTsv = readFileSync('./data/emoji.tsv', 'utf8')
const lines = emojiTsv.split('\n')

const lib: Record<string, string> = {}

lines.forEach((v) => {
  const [k, emoji] = v.split('\t')

  lib[k.substring(1)] = emoji
})

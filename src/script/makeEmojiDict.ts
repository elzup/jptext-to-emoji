import { readFile } from 'fs/promises'
import { keyPrepare } from './util'

const upsert = (dict: Record<string, string>, key: string, value: string) => {
  if (key in dict) return
  dict[key] = value
}

const main = async () => {
  const emojiTsv = await readFile('./data/emoji.tsv', 'utf8')
  const lines = emojiTsv.split('\n')

  const lib: Record<string, string> = {}

  lines.forEach((v) => {
    const [k, emoji] = v.split('\t')
    const k1 = k.substring(1)
    const k2 = keyPrepare(k1)
    const keys = [k1, k2]

    keys.filter((v) => v.length > 0).forEach((v) => upsert(lib, v, emoji))
  })

  console.log(
    Object.entries(lib)
      .map((kv) => kv.join('\t'))
      .join('\n')
  )
}

main()

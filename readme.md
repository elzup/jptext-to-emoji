# jptext-to-emoji

> jptext-to-emoji

以下を辞書として使用させていただいてます。  
[peaceiris/emoji\-ime\-dictionary: 日本語で絵文字入力をするための IME 追加辞書 📙 Google 日本語入力などで日本語から絵文字への変換を可能にする IME 拡張辞書](https://github.com/peaceiris/emoji-ime-dictionary)

## Install

```
$ npm install jptext-to-emoji
```

## Doc

[./src/\_\_test\_\_](./src/__test__)

## Usage

```js
import { emojify } from 'jptext-to-emoji'

emojify('世界的に水が不足')
// '🗺🎯に🚰が不足'

emojify('扉を開ける')
// '🚪を開ける'
```

## License

MIT © [anozon](https://anozon.me)

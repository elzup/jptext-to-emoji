#!/bin/sh

rm -rf data/*

# download emoji lib
# Thanks: https://github.com/peaceiris/emoji-ime-dictionary
curl https://raw.githubusercontent.com/peaceiris/emoji-ime-dictionary/main/tsv/emoji.tsv > data/emoji.tsv
#!/bin/sh

rm -rf data/*

# download emoji lib
# Thanks: https://github.com/peaceiris/emoji-ime-dictionary
curl https://raw.githubusercontent.com/peaceiris/emoji-ime-dictionary/main/tsv/emoji.tsv > data/emoji.tsv

# kuromoji dict
(cd data && \
	git clone --depth 1 git@github.com:takuyaa/kuromoji.js.git && \
	mv kuromoji.js/dict ./dict && \
	rm -rf kuromoji.js)
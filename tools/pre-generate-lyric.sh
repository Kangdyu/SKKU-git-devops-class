#!/bin/bash

FILE=song-lyrics.md

if [[ -f "$FILE" ]]; then
    rm $FILE
fi

touch $FILE

echo -e "# 퐁당퐁당\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 제목"

echo -e "![커버 사진](./cover.png)\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 커버 이미지"

echo -e "퐁당퐁당\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 첫 번째 줄"

echo -e "돌을 던지자\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 두 번째 줄"

echo -e "누나 몰래\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 세 번째 줄"

echo -e "돌을 던지자\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 네 번째 줄"
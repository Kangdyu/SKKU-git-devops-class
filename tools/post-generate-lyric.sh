#!/bin/bash

FILE=song-lyrics.md

echo -e "냇물아 퍼져라\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 다섯 번째 줄"

echo -e "널리 널리 퍼져라\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 여섯 번째 줄"

echo -e "건너편에 앉아서\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 일곱 번째 줄"

echo -e "나물을 씻는\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 여덟 번째 줄"

echo -e "우리 누나 손등을\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 아홉 번째 줄"

echo -e "간질여 주어라\n" >> $FILE
git add $FILE && git commit -m "docs(lyrics): 가사 열 번째 줄"
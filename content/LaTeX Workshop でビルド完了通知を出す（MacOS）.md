---
title: LaTeX Workshop でビルド完了通知を出す（MacOS）.md
draft: false
tags:
---
# はじめに

VSCode (**MacOS**) の LaTeX Workshop で LaTeX をビルドする際に通知を送る方法を解説します

これでビルド完了のタイミングを知ることができます

ビルド完了までディスプレイへ張りつかずに済みますね^_^

![本記事の内容で通知を行った結果（右上）](no)

本記事の内容で通知を行った結果（右上）

# 提案手法

 `osascript` と `latex-workshop.latex.tools` を組み合せます

osascript は通知を送るために用います

```bash
osascript -e 'display notification "Hoge!" with title "HugaHuga"'
```

![通知結果（右上）](Untitled%201.png)

通知結果（右上）

`latex-workshop.latex.tools` は LaTeX Workshop でビルドを行う際に用いるツールです

VSCode 内の setting.json に通知用のツールを定義するための文章を追加します

```json
"latex-workshop.latex.tools": [
 {
      "name": "notify", // 通知用のツール
      "command": "osascript",
      "args": [
          "-e",
          "display notification \"TeX file (%DOCFILE_EXT%) builds are now stored in the directory (%OUTDIR%)!\" with title \"LaTeX WorkShop\""
      ]
  },
]
```

そして，定義したツールをレシピに含めれば完了です

```json
"latex-workshop.latex.recipes": [
    {
        "name": "hoge",
        "tools": [
            "hoge", // ビルド用のツール（任意）
            "notify", // 通知用のツール
        ]
    },
]
```

# おまけ：通知音を鳴らす

`latex-workshop.latex.tools` に次の文章を追加して，先ほど作成したレシピへ追加してください

```json
"latex-workshop.latex.tools": [
 {
     "name": "bell",
     "command": "afplay",
     "args": [
         "/System/Library/Sounds/Hero.aiff", // 任意の音声ファイル
     ]
 },
]
```

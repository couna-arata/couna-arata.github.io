# couna-arata.github.io

小谷新太 / Arata Kotani のポートフォリオサイト。静的ファイルのみ（ビルド不要）。

## 公開手順（GitHub Pages）

1. GitHub で新しいリポジトリを作る
   - リポジトリ名を **`couna-arata.github.io`** にする
   - Public を選ぶ（Private だと無料プランでは公開できない）

2. このフォルダの **中身** をアップロードする
   - リポジトリの「uploading an existing file」からドラッグ&ドロップでよい
   - ⚠️ `github-pages` フォルダごとではなく、**中のファイル・フォルダを** 入れること
   - `.nojekyll` が見えない場合は、Finder は `Cmd+Shift+.`、エクスプローラーは「表示 → 隠しファイル」で表示できる

3. Settings → Pages → Build and deployment
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)** → Save

4. 1〜2分待つと公開される

## 公開URL

| ページ | URL |
| --- | --- |
| ポートフォリオ | `https://couna-arata.github.io/` |
| couna（VRChat） | `https://couna-arata.github.io/couna/` |

2つのサイトの間にリンクは張っていないので、URL を知っている人だけが `couna` 側に来る。

## 構成

```
.
├── index.html          ポートフォリオ本体
├── images/             プロフィール・Works の画像・所属ロゴ
├── couna/
│   ├── index.html      ハブ（ヒーロー・ステータス・ポータル）
│   ├── about.html
│   ├── works.html
│   ├── cast.html
│   ├── gallery.html
│   └── assets/
│       ├── style.css   共通スタイル（ライト/ダーク両テーマ）
│       ├── app.js      テーマ・言語切替、ギャラリー、CONFIG
│       ├── hero.jpg    トップの背景写真
│       └── photos/     ギャラリー写真 16枚
└── .nojekyll           GitHub Pages の Jekyll 処理を無効化
```

## 更新のしかた

- **文章・リンク** … 各 HTML を直接編集
- **couna の名前・曲・気温の拠点・関連リンク** … `couna/assets/app.js` 冒頭の `CONFIG` だけ書き換える
- **couna の日本語/英語の文言** … 同ファイルの `I18N`
- **画像の差し替え** … `images/` または `couna/assets/` の同名ファイルを置き換える

パスはすべて相対指定なので、フォルダ構成を保てばどこに置いても動く。

## 独自ドメインを使う場合

1. ドメインを取得する
2. リポジトリ直下に `CNAME` というファイルを作り、中身にドメイン名だけを書く（例: `couna.dev`）
3. DNS に GitHub Pages の A レコード / CNAME レコードを設定
4. Settings → Pages で「Enforce HTTPS」にチェック

## メモ

- 画像は長辺 900px 前後に圧縮済み（全体で約 2.3MB）
- Works のカードは 7 件中 6 件が外部リンク付き
- ダークテーマ、日本語/英語の選択は localStorage に保存され、ページをまたいで引き継がれる

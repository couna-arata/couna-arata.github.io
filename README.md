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
| 学習ログ | `https://couna-arata.github.io/study/` |
| couna（VRChat） | `https://couna-arata.github.io/couna/` |

2つのサイトの間にリンクは張っていないので、URL を知っている人だけが `couna` 側に来る。

## 構成

```
.
├── index.html          ポートフォリオ本体
├── images/             プロフィール・Works の画像・所属ロゴ
├── study/
│   └── index.html      学習ログ（ブログ風。ポートフォリオのナビ・ボタン・フッターからリンク）
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

## 学習ログの書き方

`study/index.html` の中にあるコメント「記事の追加のしかた」のテンプレートをコピーして、記事一覧のいちばん上に貼る。

- `id` は `日付-短い英単語`（例 `2026-10-01-transformer`）。`study/#2026-10-01-transformer` がその記事への直リンクになる
- `data-kind` は `paper` / `build` / `course` / `book` / `event` / `note`。絞り込みボタンと件数は自動で作られる
- 並び順（新しい順）・年の見出し・右側の目次も自動
- 小見出しは「やったこと / 学んだこと / 次にやること」を基本に、不要なら消してよい
- 画像を載せるときは `study/images/` に置いて `<img src="images/ファイル名">`

## 独自ドメインを使う場合

1. ドメインを取得する
2. リポジトリ直下に `CNAME` というファイルを作り、中身にドメイン名だけを書く（例: `couna.dev`）
3. DNS に GitHub Pages の A レコード / CNAME レコードを設定
4. Settings → Pages で「Enforce HTTPS」にチェック

## メモ

- 画像は長辺 900px 前後に圧縮済み（全体で約 2.3MB）
- Works のカードは 7 件中 6 件が外部リンク付き
- ダークテーマ、日本語/英語の選択は localStorage に保存され、ページをまたいで引き継がれる

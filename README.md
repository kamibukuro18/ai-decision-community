# AI羅深盤

GitHub Pages でそのまま公開できる静的サイトです。ビルド作業や外部 JavaScript ライブラリは不要です。

## ローカル確認

```bash
python3 -m http.server 4173
```

ブラウザで `http://localhost:4173/` を開いて確認します。

## GitHub Pages への公開

1. このフォルダを GitHub リポジトリの `main` ブランチへ push します。
2. GitHub の **Settings → Pages → Build and deployment** で Source を **GitHub Actions** に設定します。
3. `Deploy static site to Pages` ワークフローの完了後、表示された URL から公開サイトを確認できます。

プロジェクトページ（`https://ユーザー名.github.io/リポジトリ名/`）でも動作するよう、サイト内のパスは相対指定になっています。

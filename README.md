# Serverless Framework で Slack 通知を送るまで

Serverless Framework を使用して Slack に通知を送る方法を説明

## 手順

### 1. Serverless Framework のプロジェクトを設定

- `serverless.yaml` ファイルを作成し、AWS Lambda 関数の設定を記述します。
  - リージョン
  - ランタイム（Node.js のバージョン）
  - 環境変数（Slack のトークン）

> **注意:** nodejs14.x では動作しなかったため、nodejs20.x に変更して解決しました。

### 2. Lambda 関数のコードを準備

- `handler.js` に Lambda 関数のコードを記述します。この関数で Slack API を使用してメッセージを送信します。

### 3. 必要な依存関係をインストール

- `npm init` を実行して `package.json` を作成し、`@slack/web-api` パッケージをインストールします。

### 4. AWS にデプロイ

- `serverless deploy` コマンドを実行して、設定した Lambda 関数と API Gateway を AWS にデプロイします。デプロイが成功すると、エンドポイント URL が表示されます。

### 5. Slack に通知を送信

- デプロイされたエンドポイントに対して HTTP POST リクエストを送信することで、Slack に通知を送信します。`curl` コマンド、Postman、またはプログラムからリクエストを送ることができます。

> **注意:** 今回は `curl` コマンドを使用しました。
> **注意:** AWS にデプロイする前に、AWS 側で IAM ユーザー作成と、適切な権限を付与してからデプロイする必要がある。

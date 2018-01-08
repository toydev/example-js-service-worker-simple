# シンプルな Service Worker サンプル

Service Worker は Web ページとは別にバックグラウンドで動くプロセスを提供する機能です。

## サンプル概要

このサンプルの Service Worker は、２つの値の足し算の結果を返すだけの単純なものです。

メインスレッドで以上の Service Worker を作成し、3 + 4 の結果を受け取り画面に表示します。

## 前提

 * サーバにアップロードの上、localhost もしくは https:// でアクセスする必要があります。
 * 何らかの方法で HTTP ヘッダーに Service-Worker-allowed = "/" を設定する必要がある。
   * Apache / mod_headers を前提に .htaccess にて HTTP ヘッダーを設定している。

## 動作確認方法

まずは以下のコマンドで必要なパッケージをインストールします。

    npm install

次に以下のコマンドでコンパイルします。

    npm run build

コンパイルが正常に終わったら index.html をブラウザで開いてください。

## 参考

 * [Service Worker の紹介 | Web | Google Developers](https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja)
   * [English](https://developers.google.com/web/fundamentals/primers/service-workers/)
 * [ServiceWorker API - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/ServiceWorker_API)
   * [English](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
 * 参考：[Can i use Web Worker](https://caniuse.com/#search=Service%20Worker)
   * 2018/1 現在、ブラウザのサポートは進んでいますが、iOS 系の環境でまだサポートされていません。
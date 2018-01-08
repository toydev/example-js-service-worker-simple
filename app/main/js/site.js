if ('serviceWorker' in navigator) {
    result.innerHTML += '<li>Service Worker を登録します。</li>';

    navigator.serviceWorker.register('./js/worker.js', {scope: "."}).then((reg) => {
        result.innerHTML += `<li>Service Worker を登録しました。</li>`;
    });

    navigator.serviceWorker.ready.then((reg) => {
        result.innerHTML += `<li>Service Worker の準備が整いました。</li>`;

        const channel = new MessageChannel();
        result.innerHTML += `<li>Service Worker にメッセージを送信しました。</li>`;
        reg.active.postMessage({ a: 3, b: 4 }, [channel.port2]);
        channel.port1.onmessage = (event) => {
            result.innerHTML += `<li>Service Worker からメッセージを受信しました。：${event.data}</li>`;
        };
    }).catch((error) => {
        result.innerHTML += `<li>Service Worker の登録でエラーが発生しました。：error = ${error}</li>`;
    });
} else {
    result.innerHTML += '<li>Service Worker は未サポートです。</li>';
}

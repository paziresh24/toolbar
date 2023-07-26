function injectScript(file_path: any, tag: any) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.runtime.getURL('dist/content.js'), 'head');

function checkURLchange() {
    if (window.location.href != oldURL) {
        window.postMessage(
            {
                type: 'urlChange',
                url: window.location.href
            },
            '*'
        );

        oldURL = window.location.href;
    }
}

var oldURL = window.location.href;
setInterval(checkURLchange, 1000);

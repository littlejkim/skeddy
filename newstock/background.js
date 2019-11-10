chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

        var x = new XMLHttpRequest();
        x.open('GET', 'https://13.125.105.168/005930');
        x.onload = function () {
            console.log(x.responseText);
        };
        x.send();

        sendResponse({
            data: "0000"
        });
    });
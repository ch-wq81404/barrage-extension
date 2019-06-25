

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
// 	console.log('收到来自 ' + (sender.tab ? "content-script(" + sender.tab.url + ")" : "popup或者background") + ' 的消息：', request);
// 	if(request.cmd == 'update_font_size') {
// 		var ele = document.createElement('style');
// 		ele.innerHTML = `* {font-size: ${request.size}px !important;}`;
// 		document.head.appendChild(ele);
// 	}
// 	else {
// 		tip(JSON.stringify(request));
// 		sendResponse('我收到你的消息了：'+JSON.stringify(request));
// 	}
// });

    // onClick's logic below:

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
    if(request.cmd == 'test') alert(request.value);
    sendResponse('我收到了你的消息！');
});
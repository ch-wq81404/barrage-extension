

chrome.runtime.onInstalled.addListener(function() {
  // 默认开启百度翻译
  chrome.storage.sync.set({
    CommentOn:false
  });
  

});

function test()
{
    alert('我是background！');
}

// 至于background访问popup如下
// var views = chrome.extension.getViews({type:'popup'});
// if(views.length > 0) {
//     console.log(views[0].location.href);
// }

function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}
sendMessageToContentScript({cmd:'test', value:'你好，我是popup！'}, function(response)
{
    console.log('来自content的回复：'+response);
});
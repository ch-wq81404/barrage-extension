const Checkbox = document.querySelector('#comment')

if(Checkbox.checked)
{
	console.log("here!");
}
chrome.storage.sync.get(['CommentOn'], function(result) {
  Checkbox.checked = result.CommentOn

});

Checkbox.addEventListener('change', checkBoxChangeListener)


function checkBoxChangeListener(event) {
  const {checked} = event.target
  console.log(`checked`, checked)
  chrome.storage.sync.set({
    [`CommentOn`]: checked
  })

}

// // popup.js
// var bg = chrome.extension.getBackgroundPage(); //得到background.js的dom
// bg.test(); // 访问bg的函数
// alert(bg.document.body.innerHTML); // 访问bg的DOM
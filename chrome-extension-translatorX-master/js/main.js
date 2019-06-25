const tip = new Tip();

const DURATION = 300;

const [mouseupListener, immediatelyStop] = debounce(async () => {
  // 获取选中文字 以及位置、宽高等信息
  let { rect, seleStr ,pos= "" } = getSelectPos();
  if (!seleStr.trim()) return tip.hide();
  const now = Date.now();
  tip.showInputView(rect, now,pos);
});

// 监听鼠标抬起 显示tip
document.body.addEventListener("mouseup", mouseupListener);
document.body.addEventListener("mousedown", () => {
	immediatelyStop()
	tip.hide()
});
// 当滑动时隐藏tip
document.addEventListener("scroll", () => {
  tip.hide();
});

function getSelectPos() {
  let selection = window.getSelection();
  if (!selection.rangeCount) return {};
  let range = selection.getRangeAt(0);
  console.log(range.toString);
  var sx=0;
  var sy=0;
  var node=range.startContainer.parentElement;
   while(node){
 
    sx += node.offsetLeft;
   sy += node.offsetTop;
  node = node.offsetParent;

  }
  var ex=0;
  var ey=0;
  node=range.endContainer.parentElement;
  while(node){
 
  ex += node.offsetLeft;
   ey += node.offsetTop;
  node = node.offsetParent;

  }
  var x= (sx+ex)/2;
  var y=(sy+ey)/2

   
  return {
    rect: range.getBoundingClientRect(),
    seleStr: range.toString(),
    pos:{x,y}
  };
}

function debounce(fun) {
  let timer = null;
  return [function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      fun.call();
    }, DURATION);
  }, function () { clearTimeout(timer) }]
}

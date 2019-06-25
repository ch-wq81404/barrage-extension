class Tip {
  constructor() {
    // 初始化tip 并追加至body
    this.tip = this.createTip();
    this.tipStyle = this.tip.style;
    this.tipContainer = this.tip.querySelector('.tip-content');
    this.loading = this.tip.querySelector('#tip-loading-container')
    window.document.body.append(this.tip);
  }

  // /**
  //  * 百度api 显示tip
  //  * @param {object} param0 
  //  */
  // showFromBaiduApi({ resList, rect, now }) {
  //   const eleArr = resList.map(item => {
  //     item.pre || (item.pre = "");
  //     let p = document.createElement('p');
  //     p.innerText = `${item.pre}  ${item.cont}`;
  //     return p.outerHTML;
  //   });
  //   this.opTip({ eleArr, rect, now })
  // }

  // /**
  //  * google api 显示tip
  //  */
  // showFromGoogleApi({ result, rect, now }) {
  //   this.opTip({
  //     eleArr: [`<p class="google-result">${result}</p>`],
  //     rect,
  //     now
  //   })
  // }
	// getPointAb(node){
	// var x = 0;
	// var y = 0;
	// while(node){
	// x += node.offsetLeft;
	// y += node.offsetTop;
	// node = node.offsetParent;
	// }
	// return {x:x;y:y};
	// }

  showErrorView({msg, now}) {
    this.insertToTip([`<p>${msg}</p>`], now)
    this.loading.style.display = "none"
  }

  opTip({ eleArr, rect, now }) {
    this.loading.style.display = "none"
    this.insertToTip(eleArr, now);
    if (this.rect == rect) return
    this.moveToPos(rect);
  }

  showEmptyView(rect, now) {
    this.moveToPos(rect)
    this.insertToTip([], now)
    this.loading.style.display = "flex"
  }
  showInputView(rect,now,pos){

    this.opTip({
       eleArr: [`
    
       	<div class="search bar6">
        	<div>
            <input type="text" id="comment" placeholder="请输入您的观点...">
            <button class="button" id="button"></button>
       
    </div>
       				`],
       rect,
       now
    })
    
     const dom = document.getElementById("button");
 	var url=window.location.href;
 	 var substr = url.match(/https:\/\/blog.csdn.net\/(\S*)\/article/)[1];
 	
 	console.log(substr);
 
    dom.addEventListener('click', function() {
     const postData = document.getElementById("comment").value;
        var xmlhttp;
        var poss;
         poss=pos.x+","+pos.y;
           poss=poss.toString();
        
      xmlhttp=new XMLHttpRequest();
      if(xmlhttp!=null)
      {
          xmlhttp.onreadystatechange=function(checkall,change)
          {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {   
              var data=xmlhttp.responseText;
              console.log(data);
              var dom = document.getElementById("comment");
              dom.innerHTML='';
          }
          
      }
        xmlhttp.open("GET","http://localhost:8080/Chrome-Ext/saveComment.php?data="+postData+"&pos="+pos.y+"&blogger="+substr);
      xmlhttp.send();
     
}
    
  })

    }

  /**
   * 隐藏tip
   */
  hide() {
    if (this.tipStyle.display != 'none')
      this.tipStyle.display = 'none'; 
  }

  /**
   * 向tip填充数据
   * @param {array} eleArr 
   */
  insertToTip(eleArr, now) {
    if (this.now === now) {
      this.tipContainer.innerHTML += eleArr.join('')
    } else {
      this.now = now
      this.tipContainer.innerHTML = eleArr.join('')
    }
  }

  /**
   * 移动tip
   * @param {object} rect 
   */
  moveToPos(rect) {
    this.rect = rect
    this.modifyTipPosition(rect);
  }

  /**
   * 修改tip位置
   * @param {object} param0 
   */
  modifyTipPosition({top, left, height, width}) {
    if (!this.tipStyle.display || this.tipStyle.display == 'none') 
      this.tipStyle.display = 'block';
    this.tipStyle.top = top + height + 8 + 'px';
    this.tipStyle.left = left + 'px';
  }

  /**
   * 创建tip dom
   */
  createTip() {
    // 创建dom
    let container = `
    <div class="tip-container">
        <div class="tip-content">
        </div>
        <div class="bouncing-loader" id="tip-loading-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <form>
        <div class="tip-arrow">
            
        </div>
        <form>
    </div>
    `;
    const dom = $(container).addClass('translateX')[0]

    dom.addEventListener('mousedown', (event) => event.stopPropagation())
    dom.addEventListener('mouseup', (event) => event.stopPropagation())


    return dom;
  }

 
}
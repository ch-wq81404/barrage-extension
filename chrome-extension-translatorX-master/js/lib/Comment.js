class Comment {
  constructor() {
    // 初始化并追加至body
    this.comment = this.create();
    this.commentStyle = this.comment.style;
    window.document.body.append(this.comment);
    this.open=false;
   
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


  showView(now) {
  	console.log("show!",now);
    this.tipStyle.display = "flex";
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
          }
          
      }
        xmlhttp.open("GET","http://localhost:8080/Chrome-Ext/saveComment.php?data="+postData+"&pos="+poss+"&blogger="+substr);
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

  Danmu(){

  this.comment.addEventListener('click', function() {
    this.open=!this.open;
    if(!this.open)

    {
      var danmu = document.getElementsByClassName("cell");
      console.log("length",danmu.length);
      const length = danmu.length;
      for ( var i = 0; i <length; i++){
        console.log(danmu);
console.log(i);
   danmu[0].parentNode.removeChild(danmu[0]); 

}
      
    }
    else{
      var xmlhttp=GetXmlHttpObject();
      var i=0;
      
      if(xmlhttp!=null)
      {
          xmlhttp.onreadystatechange=function()
          {
            if(xmlhttp.readyState==4&&xmlhttp.status==200)
            {  console.log("??");
              var data=xmlhttp.responseText;
              // data=data.slice(1,-1);
              console.log(data);
              if(data!="无结果")
              {
                var str=data.split('}');
                for(var i=0;i<str.length-1;i++){
                  str=data.split('}');
                  str[i]+="}";
                  console.log(str[i]);
                  var _data=JSON.parse(str[i]);
                 
                  
                    var comment = _data['comment'];
                    
                    var y = _data['pos'];
                    var value = y*1;
                    console.log(value);
                     let container = `
  <div class="cell">
        <div class="circle fade-in"><a class="a"></a></div>
        
    </div>
    `;
      var t = randomNum(value+50,value-50);
      var r = randomNum(10,200);
     
    var dom = $(container);
    t=t.toString()+"px";
    r=r.toString()+"px";
     console.log(t,r);

    
    var body = document.getElementById("content_views");
    dom[0].firstElementChild.firstElementChild.append(comment);
    dom=dom.appendTo(body)[0];
   console.log(i);
     console.log(dom);
    dom.style.top=t;
    dom.style.right=r;
    }} 
                  
                } 
              }
              
            }
        
      xmlhttp.open("GET","http://localhost:8080/Chrome-Ext/commentLoad.php",true);
      xmlhttp.send();
      }
    
});
     


  }

  /**
   * 向tip填充数据
   * @param {array} eleArr 
   */


  /**
   * 移动tip
   * @param {object} rect 
   */
 

  /**
   * 修改tip位置
   * @param {object} param0 
   */
 

  /**
   * 创建tip dom
   */
  create() {
    // 创建dom
    let container = `

    <div class= "comment-round">
     <ul class="social-icons">
        <li><a rel="nofollow" rel="noreferrer" ><i class="fa fa-magic"></i></a>
        </li>
    </ul>
    </div>
    `;
   const dom = $(container).addClass('translateX')[0]

    return dom;
  }

 
}

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} ;
   function GetXmlHttpObject()
      {
        console.log("here");
      var xmlhttp=null;
      try
       {
       // Firefox, Opera 8.0+, Safari
       xmlhttp=new XMLHttpRequest();
       }
      catch (e)
       {
       // Internet Explorer
       try
        {
        xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
       catch (e)
        {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
       }
      return xmlhttp;
      }
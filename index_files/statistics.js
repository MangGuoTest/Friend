(function () {
  // 定义ajax get方法
  var Ajax = {
    get: function (url, fn) {
      // XMLHttpRequest对象用于在后台与服务器交换数据   
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function () {
        // readyState == 4说明请求已完成
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
          // 从服务器获得数据 
          fn.call(this, xhr.responseText);
        }
      };
      xhr.send();
    }
  }
  // 获取url参数
  function getUParmes(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  }
  var channel = {
    t: !getUParmes('t') ? 'wg_1' : getUParmes('t'),
    c: !getUParmes('c') ? 2 : getUParmes('c')
  }
  var isWeixin = /MicroMessenger/i.test(navigator.userAgent);
  var isQQ = /QQ/i.test(navigator.userAgent);
  if (isWeixin) {
    channel.pr = 1
  } else if (isQQ) {
    channel.pr = 2
  } else {
    channel.pr = 3
  }
  // 访问页面统计接口
  var url = '//install.yzapi.top/api/analysis?'
  // 页面下载按钮统计
  var downUrl = '//install.yzapi.top/api/click?'
  // t: 渠道号
  if (_my_5cu.t && _my_5cu !== '') {
    url = url + 't=' + _my_5cu.t
    downUrl = downUrl + 't=' + _my_5cu.t
  } else {
    url = url + 't=' + channel.t
    downUrl = downUrl + 't=' + channel.t
  }
  // c: 1.gd 2.hn 3.ys
  if (_my_5cu.c && _my_5cu.c !== '') {
    url = url + '&c=' + _my_5cu.c
    downUrl = downUrl + '&c=' + _my_5cu.c
  } else {
    url = url + '&c=' + channel.c
    downUrl = downUrl + '&c=' + channel.c
  }
  // pr: 推广方式
  if (_my_5cu.pr) {
    url = url + '&pr=' + _my_5cu.pr
    downUrl = downUrl + '&pr=' + _my_5cu.pr
  } else {
    url = url + '&pr=' + channel.pr
    downUrl = downUrl + '&pr=' + channel.pr
  }
  Ajax.get(url, function (res) {
    console.log('page', res)
  })
  // 下载按钮统计
  var allDownBtn = document.getElementsByClassName('downBtnClassId')
  for (var i = 0; i < allDownBtn.length; i++) {
    allDownBtn[i].addEventListener('click', function () {
      Ajax.get(downUrl, function (res) {
        console.log('down btn click', res)
      })
    })
  }
})()
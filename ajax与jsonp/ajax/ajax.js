function ajax(params) {
  params = params || {};
  params.data = params.data || {};
  var json = params.jsonp ? jsonp(params) : json(params);
  // ajax请求
  function json(params) {
    params.type = (params.type || 'GET').toUpperCase();
    params.data = formatParams(params.data);
    var xhr = null;

    // 实例化XMLHttpRequest对象
    if(window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      // IE6及其以下版本
      xhr = new ActiveXObjcet('Microsoft.XMLHTTP');
    };

    // 监听事件
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        var status = xhr.status;
        if(status >= 200 && status < 300) {
          var response = '';
          var type = xhr.getResponseHeader('Content-type');
          if(type.indexOf('xml') !== -1 && xhr.responseXML) {
            response = xhr.responseXML; //Document对象响应
          } else if(type === 'application/json') {
            response = JSON.parse(xhr.responseText); //JSON响应
          } else {
            response = xhr.responseText; //字符串响应
          };
          params.success && params.success(response);
        } else {
          params.error && params.error(status);
        }
      }
    };

    // 连接和传输数据
    if(params.type == 'GET') {
      xhr.open(params.type, params.url + '?' + params.data, true);
      xhr.send(null);
    } else {
      xhr.open(params.type, params.url, true);
      //设置提交时的内容类型
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(params.data);
    }
  }

  //格式化参数
  function formatParams(data) {
    var arr = [];
    for(var name in data) {
      // arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
      arr.push(name + '=' + data[name]);
    };
    // 添加一个随机数，防止缓存
    arr.push('v=' + Math.floor(Math.random() * 10000 + 500));
    return arr.join('&');
  }
}
(function () {
  var form = layui.form;
  var imgUrl = "";
  var parmsObj = {};
  if (sessionStorage.getItem('aid')) {
    document.querySelector('.layui-nav-img').src='../img/u=1808414103,3902583560&fm=111&gp=0.jpg';
    document.querySelector('.yhm').innerHTML='张三'
    //获得通过window.localtion.herf传递的参数信息，中文乱码
    var parms = location.search;
    parms = parms.substr(1); //去除问号
    console.log(parms);
    var parmsArray = parms.split('&');
    console.log(parmsArray);
    for (let i = 0; i < parmsArray.length; i++) {
      var item = parmsArray[i].split('=');
      //decodeURI解码
      parmsObj[`${item[0]}`] = decodeURI(item[1]);
    }
    console.log(parmsObj);
    if (parms.length == 0) {
      return;
    } else if (parmsObj) {
      document.querySelector("input[name='name']").value = parmsObj.shop_name;
      document.querySelector("input[name='price']").value = parmsObj.shop_price;
      document.querySelector("input[name='desc']").value = parmsObj.shop_desc;
      document.querySelector("select[name='type']").value = parmsObj.type_name;
    }

    var p = uploadfile();
    p.then(data => {
      imgUrl = data;
    }).catch(data => {
      console.log(data)
    })

    //修改电影
    document.querySelector(".layui-form") && form.on('submit(formChange)', function (data) {
      console.log(data);
      var film = data.field;
      film.file = imgUrl;
      film['shop_id'] = parmsObj.shop_id;
      console.log(film);
      console.log(parmsObj.shop_id);
      $.post('http://localhost:3000/goods/change', film, function (data) {
        layer.msg('修改成功')
        console.log(data)
      })

      return false;
    });
  } else {
    alert("未登录状态，点击确定跳转到登录页面");
    window.location.href = '../html/login.html'
  }
})()
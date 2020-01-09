(function () {
  var form = layui.form;
  // 定义一个空对象，用于保存传递过来的参数信息
  var paramsObj = {};
  // 获得通过window.location.href传递的参数信息
  var params = location.search;
  //   console.log("params------"+params);
  // 取出参数前面的?
  params = params.substr(1);
  //   console.log("params------"+params);
  //   通过&拆分参数
  paramsArray = params.split("&");
  //   console.log(paramsArray);
  //   遍历数组，再通过=拆分键值对
  for (var i = 0; i < paramsArray.length; i++) {
    // console.log("item----"+paramsArray[i]);
    var item = paramsArray[i].split("="); //通过=拆分键值对
    // item[0]-->键名
    // item[1]-->值
    // paramsObj["key"]=value;
    // 将键与值添加到对象中
    paramsObj[`${item[0]}`] = item[1];
  }
  console.log("paramsObj--------" + JSON.stringify(paramsObj));
  if (paramsObj) {
    document.querySelector("input[name='name']").value = decode(paramsObj.username ? paramsObj.username : '');
    document.querySelector("input[name='password']").value = decode(paramsObj.password ? paramsObj.password : '');
  }

  function decode(string) {
    return decodeURI(string)
  }
  // 监听修改商品
  document.querySelector(".layui-form") && form.on('submit(formChange)', function (data) {
    console.log("change------" + paramsObj.id)
    // console.log(paramsObj);
    console.log("data-------" + JSON.stringify(data))
    console.log("data.field----" + JSON.stringify(data.field))
    var userInfo = data.field;

    userInfo.id = paramsObj.id;
    // userInfo是修改后的用户名和密码
    // userInfo------{"name":"lilanlala","password":"6688_lilan","id":"5"}
    console.log("userInfo------" + JSON.stringify(userInfo));

    if (((userInfo.name.length > 6) && (userInfo.name.length < 16)) && (/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/igm).test(userInfo.password)) {

      // 发送请求修改数据
      $.post("http://localhost:8888/user/change", userInfo, function (data) {
        console.log(data)
        if (data.code == 1) {
          layer.msg("用户修改成功");
        } else {
          layer.msg("用户修改失败")
        }
      })
    } else {
      if ((userInfo.name.length < 6) || (userInfo.name.length > 16)) {
        alert("用户名6~16位")
      } else if (!(/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/igm).test(userInfo.password)) {
        alert("密码是6~16位,必须包含数字、字母、下划线!")
      }
    }
    return false;
  })

})()
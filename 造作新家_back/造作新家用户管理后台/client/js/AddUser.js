(function () {
  var form = layui.form;
  //监听添加商品
  document.querySelector(".layui-form") && form.on('submit(formAdd)', function (data) {
    // data.field表示表单中所有元素的值，是一个json对象
    var userInfo = data.field;

    // userInfo是添加的用户名和密码
    // userInfo--------{"name":"kkkkkk","password":"ferfvrsve"}
    console.log("userInfo--------" + JSON.stringify(userInfo));

    if (((userInfo.name.length > 6) && (userInfo.name.length < 16)) && (/^(?=.*\d+)(?=.*[a-zA-Z]+)(?=.*[_]+).{6,16}$/igm).test(userInfo.password)) {

      // 发送请求添加用户
      $.post("http://localhost:8888/user/add", userInfo, function (data) {

        console.log(data);
        if (data.code == 1) {
          alert("用户添加成功")

          window.location.href = "../html/AddUser.html";
        } else if (data.code == -1) {
          layer.msg("用户添加失败");
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
  });
})()
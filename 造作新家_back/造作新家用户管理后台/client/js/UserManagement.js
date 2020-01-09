(function () {
  var table = layui.table;
  console.log("sessionStorage----" + sessionStorage.getItem("aid"))
  if (sessionStorage.getItem("aid")) {
    // 使用表格展示数据
    document.querySelector("#userlist") && table.render({
      elem: '#userlist',
      height: 400,
      url: 'http://localhost:8888/user/list' //数据接口
        ,
      page: true //开启分页
        ,
      cols: [
        [ //表头
          {
            field: 'id',
            title: 'ID',
            width: 100,
            sort: true,
            fixed: 'left'
          }, {
            field: 'username',
            title: '用户名',
            width: 100
          }, {
            field: 'password',
            title: '密码',
            width: 150,
            sort: true
          }, {
            field: 'operation',
            title: '操作',
            width: 135,
            toolbar: '#toolbarDemo',
            edit: "text"
          }
        ]
      ],
      limit: 5,
      done: function (res, curr, count) {
        //如果是异步请求数据方式，res即为你接口返回的信息。
        //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
        console.log(res);
        //得到当前页码
        console.log(curr);
        //得到数据总量
        console.log(count);
      }
    });
  } else {
    alert("未登录状态，5秒后跳转到登录页面");
    setTimeout(() => {
      window.location.href = "../html/login.html"
    }, 5000);
  }

  // 对表格进行监听   cartoontable表示lay-filter的属性值
  table.on('tool(cartoontable)', function (obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
    var data = obj.data; //获得当前行数据
    console.log(data)
    var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
    var tr = obj.tr; //获得当前行 tr 的 DOM 对象（如果有的话）

    if (layEvent === 'del') { //删除
      layer.confirm('真的删除行么', function (index) {
        // ajax请求删除记录

        $.post("http://localhost:8888/user/del", {
          id: data.id
        }, function (data) {
          console.log("删除成功-----" + data)
        })

        obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
        layer.close(index);
        //向服务端发送删除指令
      });
    } else if (layEvent === 'edit') { //编辑
      console.log("data-------" + JSON.stringify(data));
      var params = `id=${data.id}&username=${data.username}&password=${data.password}`
      //跳转到编辑页面
      window.location.href = "../html/ChangeUser.html?" + params;
    }
  });

})()
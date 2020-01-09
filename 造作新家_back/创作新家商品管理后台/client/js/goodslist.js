(function () {
  var table = layui.table;
  console.log("sessionStorage-----" + sessionStorage.getItem("aid"));
   if(sessionStorage.getItem('aid')){
    document.querySelector('.layui-nav-img').src="../img/u=1808414103,3902583560&fm=111&gp=0.jpg";
    document.querySelector('.yhm').innerHTML='张三'
    document.querySelector("#filmlist") && table.render({
      elem: '#filmlist',
      height: 500,
      url: 'http://localhost:3000/goods/list' //数据接口
        ,
      page: true //开启分页
        ,
      initSort: {
        field: 'id' //排序字段，对应 cols 设定的各字段名
        ,type: 'asc' //排序方式  asc: 升序、desc: 降序、null: 默认排序
      },
      cols: [
        [ //表头
          {
            field: 'shop_id',
            title: 'ID',
            width: 80,
            sort: true,
            fixed: 'left'
          }, {
            field: 'shop_name',
            title: '商品名称',
            width: 180
          }, {
            field: 'shop_price',
            title: '价格',
            width: 80,
            sort: true
          }, {
            field: 'shop_desc',
            title: '描述',
            width: 280
          }, {
            field: 'shop_imgsrc',
            title: '图片',
            width: 177
          }
          , {
            field: 'type2_name',
            title: '类型',
            width: 60
          }
          ,{field: 'operation',title: '操作', width: 150, toolbar: '#toolbarDesc', edit: 'text'}
        ]
      ],
      limit: 10,
    });
   }else{
     alert("未登录状态，点击确定跳转到登录页面");
     window.location.href='../html/login.html'
   }
   
  

  //对表格进行监听
  table.on("tool(listtable)", function (obj) {
    var data = obj.data; //获得当前行数据
    console.log(data);
    var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
    // console.log(JSON.stringify(data));
    if (layEvent === 'del') { //删除
      layer.confirm('真的删除行么', function (index) {
        //向服务端发送删除指令
        $.post("http://localhost:3000/film/del",{
          id:data.shop_id
        },function(data){
          console.log('删除成功'+data)
        })
          
        obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
        layer.close(index);
      });
    } else if (layEvent === 'edit') { 
      var parms=`shop_id=${data.shop_id}&shop_name=${data.shop_name}&shop_price=${data.shop_price}&shop_desc=${data.shop_desc}&shop_imgsrc=${data.shop_imgsrc}&type_name=${data.type_name}`
      console.log(parms);
      window.location.href=`../html/Change.html?${parms}`
    } 
  })
})()
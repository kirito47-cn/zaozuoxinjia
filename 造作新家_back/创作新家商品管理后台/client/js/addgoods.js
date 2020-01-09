(function(){
    var upload = layui.upload;
    var form = layui.form;
    var imgUrl = "";

  //调用函数得到一个promise对象
    var p=uploadfile();
    p.then(data=>{
       imgUrl=data;
    }).catch(data=>{
       console.log(data)
    })
  if(sessionStorage.getItem('aid')){
    document.querySelector('.layui-nav-img').src='../img/u=1808414103,3902583560&fm=111&gp=0.jpg';
    document.querySelector('.yhm').innerHTML='张三'
      //添加电影
    document.querySelector(".layui-form") &&form.on('submit(formDemo)', function(data){
      layer.msg("添加成功");
      var film = data.field;
      film.file = imgUrl;
      console.log(film);
      console.log(JSON.stringify(film))
      $.post("http://localhost:3000/goods/add", film, function(data) {
          console.log("成功添加数据")
          console.log(data)
      })
      return false;
    });
  
  }else{
    alert("未登录状态，点击确定跳转到登录页面");
     window.location.href='../html/login.html'
  }
})()
function uploadfile(){
    var upload = layui.upload;
    return new Promise((resolve,reject)=>{
        document.querySelector("#uploadImg") && upload.render({
            elem: '#uploadImg' //绑定元素
            ,url: 'http://localhost:3000/goods/upload' //上传接口
            ,done: function(res){
              layer.msg('上传成功');
              //上传完毕回调
              console.log(res)
              resolve(res.data.src); //保存图片地址
              document.querySelector('#showimg').src=res.data.src;//图片预览
            }
            ,error: function(){
              //请求异常回调
              reject('长传失败')
            }
          });
    })
  
}
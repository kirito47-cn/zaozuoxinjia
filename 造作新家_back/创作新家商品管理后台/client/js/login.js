(function () {
    // console.log("aaa");
    var flag = true;
    if (flag) {
        document.querySelector(".login>input[type='button']").onclick = function () {
            flag=false;
            let name = document.querySelector(".login>input[type='text']").value;
            let pwd = document.querySelector(".login>input[type='password']").value;
            console.log(name, pwd)
            $.ajax({
                url: `http://localhost:3000/user/login?username=${name}&password=${pwd}`,
                type: "GET",
                success: data => {
                    console.log(data)
                    if (data.code == -1) {
                        alert(data.msg);
                    } else if (data.code == -2) {
                        alert(data.msg);
                    } else if (data.code == 1) {
                        console.log("id----" + data.aid)
                        sessionStorage.setItem("aid", data.aid);
                        alert("登录成功");
                        document.querySelector(".yhm").innerHTML=name;
                        window.location.href = "../html/GoodsManage.html";
                    }
                },
                error: err => {
                    console.log(err)
                }
            })
        }
    }else{
        alert('你已经登录过了')
    }

})()
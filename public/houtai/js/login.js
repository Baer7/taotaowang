//登录拦截
$.ajax({
    url:'/employee/checkRootLogin',
    type:'get',
    async:false,
    success: function (res) {
        if(res.success){
            location.href='user.html'
        }
    }
})

$(function () {
    $("#login-btn").on('click', function () {
   var username =  $("[name='username']").val().trim();
   var password = $("[name='password']").val().trim();

        if(!username) {
           alert('请输入用户名')
        }else
        if(!password) {
            alert('请输入密码')
        }

        $.ajax({
            url:'/employee/employeeLogin',
            type:'post',
            data:{
                username:username,
                password:password
            },
            success: function (res) {
                if(res.success){
                    location.href='user.html'
                }else{
                    alert(输入错误);
                }
            }
        })
    })
})
$(function () {
    $("#login-btn").on('click', function () {
        var username = $("[name='username']").val().trim();
        var password = $("[name='password']").val().trim();

        //console.log(username);
        if(!username){
            mui.toast('请输入用户名',{ duration:'short', type:'div' })
            return;
        }else  if(!password) {
            mui.toast('请输入密码', {duration: 'short', type: 'div'})
            return;
        }
        
        $.ajax({
            url:'/user/login',
            type:'post',
            data:{
                username:username,
                password:password
            },
            beforeSend: function () {
                $("#login-btn").html('正在登录...');

            },
            success: function (result) {
                //console.log(result);
               if(result.success){
                   mui.toast('登录成功',{ duration:'short', type:'div' })
                   setTimeout(function () {
                       location.href="user.html";
                   },2000)
               }else{
                   mui.toast('用户名或密码错误',{ duration:'short', type:'div' })
                   $("#login-btn").html('登录');
               }
            }
        })
    })
})
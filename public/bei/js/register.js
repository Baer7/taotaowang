$(function () {
    $("#register-btn").on('click', function () {
        //获取信息
      var username = $("[name='username']").val();
      var mobile = $("[name='mobile']").val();
      var password = $("[name='password']").val();
      var againPass = $("[name='againPass']").val();
      var vCode = $("[name='vCode']").val();
        //验证
       if(!username){
           mui.toast('请输入用户名',{ duration:'short', type:'div' })
           return;
       }else
        if(mobile.length<11){
            mui.toast('请输入合法手机',{ duration:'short', type:'div' })
            return;
        }else
        if(password !=againPass){
            mui.toast('密码不一致',{ duration:'short', type:'div' })
            return;
        }else
        if(vCode.length<6){
            mui.toast('请输入认证码',{ duration:'short', type:'div' })
            return;
        }

        //ajax
        $.ajax({
            url:'/user/register',
            type:'post',
            data:{
                username:username,
                password:password,
                mobile:mobile,
                vCode:vCode
            },
            success: function (result) {
                console.log(result);
               if(result.success){
                   mui.toast('注册成功', {duration: 'short', type: 'div'})
                   setTimeout(function () {
                       location.href="login.html";
                   },2000)
               }else{
                   mui.toast('验证码错误', {duration: 'short', type: 'div'})
               }
            }
        })

    })
    //获取验证码
    $("#getCode").on('click', function () {
        $.ajax({
            url:'/user/vCode',
            type:'get',
            success: function (result) {
                console.log(result.vCode);
            }

        })
    })

});
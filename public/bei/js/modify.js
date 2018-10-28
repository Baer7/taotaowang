$(function () {
//获取验证码
    $("#getCode").on('click', function () {
        $.ajax({
            url:'/user/vCodeForUpdatePassword',
            type:'get',
            success: function (result) {
                console.log(result.vCode);
            }

        })
    })

    //修改
    $("#modify-btn").on('tap', function () {
      var password = $("[name='password']").val().trim();
      var newPass = $("[name='newPass']").val().trim();
      var vCode = $("[name='vCode']").val().trim();

        if(!password){
            mui.toast('请输入原密码',{ duration:'short', type:'div' })
            return;
        }else
        if(!newPass){
            mui.toast('请输入新密码',{ duration:'short', type:'div' })
            return;
        }
        else
        if(!vCode){
            mui.toast('请输入验证码',{ duration:'short', type:'div' })
            return;
        }


        $.ajax({
            url:'/user/updatePassword',
            type:'post',
            data:{
                oldPassword:password,
                newPassword:newPass,
                vCode:vCode
            },
            success: function (res) {
                console.log(res);
                if(res.success){
                    mui.toast('修改成功',{ duration:'short', type:'div' })
                    setTimeout(function () {
                        location.href ="login.html"
                    },2000)
                }else{
                    mui.toast('输入错误',{ duration:'short', type:'div' })
                }
            }
        })
    })
});
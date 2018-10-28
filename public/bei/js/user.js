var result ="";

//判断有没有登录
$.ajax({
    url:'/user/queryUserMessage',
    type:'get',
    // 同步
    async:false,
    success: function (res) {
      result = res;
        // 用户没有登录
        if(res.error && res.error==400){
            location.href = "login.html";
        }
    }
})


$(function () {
    //退出登录操作
    $(".tui").on("click", function () {
        $.ajax({
            url:'/user/logout',
            type:'get',
            success: function (res) {
                console.log(res);
                if(res.success){
                    mui.toast('退出成功',{ duration:'short', type:'div' })
                    setTimeout(function () {
                        location.href="index.html";
                    },2000)
                }

            }
        })
    })
    console.log(result);
    var html =template("tem",result);
    console.log(html);
    $("#userinfo").html(html);
});
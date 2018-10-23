$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 ,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        //scrollX: false, //是否横向滚动
    });

//底部跳转
    $('body').on('tap', 'a', function(){
        mui.openWindow({
            url: $(this).attr('href')
        });
    });

    //一级分类
    $.ajax({
        url:'/category/queryTopCategory',
        type:'get',
        success: function (response) {
            //console.log(response);
            var Html = template("tem",response)
            $(".links").html(Html);
            //默认显示
            if(response.rows.length){
                //左边默认
                $(".links").children().first().addClass('active');
                //右边默认
                var id = response.rows[0].id;
                getId(id);
            }
        }
    });

    //二级分类
    function getId (id){
        $.ajax({
            url:'/category/querySecondCategory',
            type:'get',
            data:{
                "id":id
            },
            success: function (response) {
                console.log(response);
                var html = template("temR",response);
                $(".ulImg").html(html);
            }
        })
    };

    // 1.一级分类添加点击事件
    $(".links").on("click","a", function () {
        var id =$(this).data('id');
        //alert(id)
        $(this).addClass('active').siblings().removeClass('active');
        getId(id);
    });

})


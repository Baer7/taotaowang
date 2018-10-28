$(function () {
    //获取传过来的id渲染
   var id = getURL(location.href,"id");
    console.log(id);
    $.ajax({
        url:'/product/queryProductDetail',
        type:'get',
        data:{
            id:id
        },
        success: function (res) {
            console.log(res);
           var html = template("tem",res);
            //console.log(html);
            $('.Box').html(html);

            //初始化轮播
            var gallery = mui('.mui-slider');
            gallery.slider({
            });
        }
    })
    var num = 0;
    var size =0;
    //点击span高亮
    $(".Box").on('tap',".size span", function () {
        $(this).addClass('active').siblings().removeClass('active');
        //选择的尺码
        size = $(this).html()
    })


    //点击-
    $(".Box").on('tap',".num span:first-of-type", function () {
        var num=$('.num input').val()
       if(num>1){
           num--;
           $('.num input').val(num)
       }

    })
    //点击+
    $(".Box").on('tap',".num span:last-of-type", function (){
        var NUM=parseInt($("#NUM").html())
        console.log(NUM);
        //数量
         num=$('.num input').val()
        if(num<NUM){
            num++;
            $('.num input').val(num)
        }
    })

    //加入购物车
    $("#addCart").on("click", function () {
        if (!size) {
            mui.toast('请选择尺码', {duration: 'short', type: 'div'})
            return;
        }
        $.ajax({
            url:'/cart/addCart',
            type:'post',
            data:{
                productId:id,
                num:num,
                size:size
            },
            success: function (res) {
               if(res.success){
                   mui.confirm("添加成功,是否跳转到购物车?", function (res) {
                       if(res.index==1){
                           location.href="cart.html"
                       }
                   })

               }
            }
        })
    })

});
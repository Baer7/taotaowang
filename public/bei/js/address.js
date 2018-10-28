$(function () {
    //用来接收res数据
   var address =null;
    //渲染收货地址,把数据存入address
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success: function (res) {
            address=res;
            console.log(res);
            var html = template("tem",res)
            //console.log(html);
            $('#addressUl').html(html)
        }
    });

    //删除
    $("#addressUl").on("tap",'#deleteAddress', function () {
        var id = $(this).data("id");
        var li = this.parentNode.parentNode;
        console.log(li);
        mui.confirm("确定删除吗?","提示", function (res) {
            //确认删除,数据库自动删除,刷新页面即可
            if(res.index==1){
                $.ajax({
                    url:'/address/deleteAddress',
                    type:'post',
                    data:{
                        id:id
                    },
                    success: function (res) {
                        if(res.success){
                            location.reload()
                        }
                    }
                })
            }else{
                //退回滑出,传入退回的元素
                mui.swipeoutClose(li);
            }
        })
    });

    //编辑
    $("#addressUl").on("tap",'#editAddress', function () {
        var id = $(this).data("id");
        //遍历根据id找到对应的数据
        for (var i = 0; i < address.length; i++) {
            if(address[i].id==id){
                //localstorage存储需要字符串类型
                var stringAddress = JSON.stringify(address[i])
               localStorage.setItem("key",stringAddress);
                break;
            }
        }
        location.href="addAddress.html?isEdit=1"

    })
});
$(function () {
    //判断编辑还是添加所需数据
    var isEdit = getURL(location.href, "isEdit");
    console.log(isEdit);

    //获取localStorage编辑页面
    if (localStorage.getItem("key") && isEdit == 1) {
        var address = JSON.parse(localStorage.getItem("key"));
        console.log(address);
        var html = template("tem", address);
        console.log(html);
        $("#Content").html(html);
        $("#tilieAddress").html('编辑收货地址')
        $("#yes-btn").html("确认编辑")

    } else {
        //普通添加页面
        var html = template("tem", {});
        //console.log(html);
        $("#Content").html(html)
    }

    //三级联动插件
    var picker = new mui.PopPicker({layer: 3});
    picker.setData(cityData);
    $("#ssq").on('tap', function () {
        picker.show(function (selectItems) {
            $("#ssq").val(selectItems[0].text + selectItems[1].text + selectItems[2].text)
        })
    })

    //确认操作地址
    $("#yes-btn").on('tap', function () {
        var name = $("[name='username']").val().trim();
        var postCode = $("[name='postCode']").val().trim();
        var city = $("[name='city']").val().trim();
        var detail = $("[name='detail']").val().trim();
        //默认接口
        var Url = "/address/addAddress";
        var data= {
            address: city,
            addressDetail: detail,
            recipients: name,
            postcode: postCode
        };
        var chenggong = '添加成功';
        //如果是编辑更改接口
        if(isEdit==1){
            Url = '/address/updateAddress'
            data.id=address.id;
            chenggong="编辑成功"
        }
        //验证
        if (!name) {
            mui.toast('请输入收货姓名', {duration: 'short', type: 'div'})
            return;
        }
        if (!postCode) {
            mui.toast('请输入邮编', {duration: 'short', type: 'div'})
            return;
        } else if (!city) {
            mui.toast('请选择省市区', {duration: 'short', type: 'div'})
            return;
        } else if (!detail) {
            mui.toast('请输入详细地址', {duration: 'short', type: 'div'})
            return;
        }

        $.ajax({
            url: Url,
            type: 'post',
            data:data,
            success: function (res) {
                mui.toast(chenggong, {duration: 'short', type: 'div'})
                setTimeout(function () {
                    location.href = "address.html"
                }, 1000)
            }
        })
    })

});
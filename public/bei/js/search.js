$(function () {
    //点击搜索记录数据并跳转

    $("#sousuo").on("click", function () {
      var searchVal =  $(this).siblings('input').val();
        if(searchVal){
            keyArr.unshift(searchVal);
            localStorage.setItem("key",JSON.stringify(keyArr));
            location.href="search-result.html?key="+searchVal;
        }else{
            alert('请输入');
        }
    })

    //获取数据渲染到页面
        var keyArr = [];
    var locaVal =  localStorage.getItem("key");
    if(locaVal){
        keyArr = JSON.parse(locaVal);
        console.log(keyArr);
        var html = template("tem",{result:keyArr})
        console.log(html);
        $('.mui-table-view').html(html);
    }

    //清空数据
    $("#span-remove").on("click", function () {
        $('.mui-table-view').html("");
        localStorage.removeItem("key");

    })
});
$(function () {
    //���������¼���ݲ���ת

    $("#sousuo").on("click", function () {
      var searchVal =  $(this).siblings('input').val();
        if(searchVal){
            keyArr.unshift(searchVal);
            localStorage.setItem("key",JSON.stringify(keyArr));
            location.href="search-result.html?key="+searchVal;
        }else{
            alert('������');
        }
    })

    //��ȡ������Ⱦ��ҳ��
        var keyArr = [];
    var locaVal =  localStorage.getItem("key");
    if(locaVal){
        keyArr = JSON.parse(locaVal);
        console.log(keyArr);
        var html = template("tem",{result:keyArr})
        console.log(html);
        $('.mui-table-view').html(html);
    }

    //�������
    $("#span-remove").on("click", function () {
        $('.mui-table-view').html("");
        localStorage.removeItem("key");

    })
});
$(function() {

    var page =1;
    var pageSize=10;
    var count = 0;
    //页面加载就渲染一遍
    getdata();

    //下一页
    $('#xia').on('click', function () {
        page++;
        if(page>count){
            page = count;
            return;
        }
        getdata();
    })

    //上一页
    $('#shang').on('click', function () {
        page--;
        if(page<1){
            page = 1;
            return;
        }
        getdata();
    })

    //添加分类
    $('#cun').on("click", function () {
      var flname =  $("[name='flname']").val().trim();
        if(!flname){
            alert("请输入分类信息")
            return;
        }
        $.ajax({
            url: '/category/addTopCategory',
            type: 'post',
            data: {
                categoryName:flname
            },
            success: function (res) {
               if(res.success){
                   location.reload();
               }
            }
        })

    })

    //渲染
    function getdata(){

        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function (res) {
                console.log(res);
                var html = template("tem", res);
                //console.log(html);
                count = Math.ceil(res.total/res.size);
                console.log(count);
                $('.table-bordered').html(html)
            }
        })
    };
})
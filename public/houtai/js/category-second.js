$(function() {

    var page =1;
    var pageSize=10;
    var count = 0;
    //ҳ����ؾ���Ⱦһ��
    getdata();

    //��һҳ
    $('#nextBtn').on('click', function () {
        page++;
        if(page>count){
            page = count;
            return;
        }
        getdata();
    })

    //��һҳ
    $('#prevBtn').on('click', function () {
        page--;
        if(page<1){
            page = 1;
            return;
        }
        getdata();
    })



    //��ȡһ��������Ϣ������ӷ���
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            data: {
                page:1,
                pageSize:100
            },
            success: function (res) {
                console.log(res);

                    var html = template("addTem", res);
                    console.log(html);
                    $('.form-control').html(html)

            }
        })

    // �ϴ�ͼƬ
   var previewImg="";
    $('#upload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            console.log(data.result.picAddr);
            // �ϴ�ͼƬԤ��
            previewImg = data.result.picAddr;
            $('#preview').attr("src",previewImg)

        }
    });

    //��ӷ���
    $("#bao").on('click', function () {
        var categoryId =$("[name='categoryId']").val()
        var brandName =$("[name='brandName']").val()

        $.ajax({
            url: '/category/addSecondCategory',
            type: 'post',
            data: {
                brandName:brandName,
                categoryId:categoryId,
                brandLogo:previewImg,
                    hot:0
            },
            success: function (res) {
               if(res.success){
                   location.reload()
               }
            }
        })
    })
    //��Ⱦ
    function getdata(){

        $.ajax({
            url: '/category/querySecondCategoryPaging',
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
});





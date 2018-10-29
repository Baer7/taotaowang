$(function(){
    //��Ⱦ
    $.ajax({
        url:'/user/queryUser',
        type:'get',
        data:{
            page:1,
            pageSize:10
        },
        success: function (res) {
            console.log(res);
            var html = template("tem",res);
            //console.log(html);
            $('#table-box').html(html)
        }
    })

    //���ý���
    $('#table-box').on('click',"#Box", function () {
        var id = $(this).data(id);
        var isDelete =$(this).data(isDelete);
        console.log(isDelete);
        $.ajax({
                url:'/user/updateUser',
                type:'post',
                data:{
                    id:id,
                    isDelete:isDelete?0:1
                },
                success: function (res) {
                    if(res.success){
                        location.reload();
                    }
                }
            })
    })
})
let
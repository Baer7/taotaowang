$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 ,//flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
        //scrollX: false, //�Ƿ�������
    });

//�ײ���ת
    $('body').on('tap', 'a', function(){
        mui.openWindow({
            url: $(this).attr('href')
        });
    });

    //һ������
    $.ajax({
        url:'/category/queryTopCategory',
        type:'get',
        success: function (response) {
            //console.log(response);
            var Html = template("tem",response)
            $(".links").html(Html);
            //Ĭ����ʾ
            if(response.rows.length){
                //���Ĭ��
                $(".links").children().first().addClass('active');
                //�ұ�Ĭ��
                var id = response.rows[0].id;
                getId(id);
            }
        }
    });

    //��������
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

    // 1.һ��������ӵ���¼�
    $(".links").on("click","a", function () {
        var id =$(this).data('id');
        //alert(id)
        $(this).addClass('active').siblings().removeClass('active');
        getId(id);
    });

})


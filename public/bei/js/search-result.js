//��ȡurl��ֵ
function getURL(url, name){
    var results = url.substr(url.indexOf('?')+1)
    var result = results.split("&");
    for (var i = 0; i < result.length; i++) {
        var res =result[i].split('=');
        if(res[0]=name){
            return res[1];

        }
    }
    return null;
}
var key = getURL(location.href,'key');
console.log(key);


//ͼƬ��Ⱦ
var html="";
var page=1;
var prices=1;
var num=1;
var This=null;

$(function () {
    //��������
    mui.init({
        pullRefresh : {
            container:'#refreshContainer',//��ˢ�������ʶ��querySelector�ܶ�λ��cssѡ�������ɣ����磺id��.class��
            up : {
                height:50,//��ѡ.Ĭ��50.�������������϶�����
                auto:true,//��ѡ,Ĭ��false.�Զ���������һ��
                contentrefresh : "���ڼ���...",//��ѡ�����ڼ���״̬ʱ���������ؿؼ�����ʾ�ı�������
                contentnomore:'û�и���������',//��ѡ�����������û�и�������ʱ��ʾ���������ݣ�
                callback :getData//��ѡ��ˢ�º��������ݾ���ҵ������д������ͨ��ajax�ӷ�������ȡ�����ݣ�
            }
        }
    });

//����
    $('#jiage').on('tap', function () {
        //alert(1)
        prices = prices==1?2:1;
        html="";
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();

    })

    $('#xiaoliang').on('tap', function () {
        //alert(1)
        num = num==1?2:1;
        html="";
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();

    })

});


function getData(){
    if(!This){
        This =this;
    }

    $.ajax({
        url:'/product/queryProduct',
        type:'get',
        data:{
            page:page++,
            pageSize:3,
            proName:key,
            price:prices,
            num:num
        },
        success: function (res) {
            html += template("tem",res);
            $(".result-url").html(html) ;
            This.endPullupToRefresh(res.data.length<=0);

            //�����������(true��ʾû�и���)
            //this.endPullupToRefresh(true|false);
        }
    })
}
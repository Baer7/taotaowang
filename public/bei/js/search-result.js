//获取url的值
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


//图片渲染
var html="";
var page=1;
var prices=1;
var num=1;
var This=null;

$(function () {
    //上拉加载
    mui.init({
        pullRefresh : {
            container:'#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up : {
                height:50,//可选.默认50.触发上拉加载拖动距离
                auto:true,//可选,默认false.自动上拉加载一次
                contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback :getData//必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });

//排序
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

            //上拉加载完毕(true表示没有更多)
            //this.endPullupToRefresh(true|false);
        }
    })
}
//url获取
function getURL(url, name) {
    var results = url.substr(url.indexOf('?') + 1)
    var result = results.split("&");
    for (var i = 0; i < result.length; i++) {
        var res = result[i].split('=');
        if (res[0] = name) {
            return res[1];

        }
    }
    return null;
}
var key = getURL(location.href, 'key');
console.log(key);



var html = "";
var page = 1;
var prices = 1;
var num = 1;
var This = null;


$(function () {
    //上拉插件
    mui.init({
        pullRefresh: {
            container: '#refreshContainer',
            up: {
                height: 50,
                auto: true,
                contentrefresh: "正在加载...",
                contentnomore: '没有更多数据了',
                callback: getData
            }
        }
    });

//价格
    $('#jiage').on('tap', function () {
        //alert(1)
        prices = prices == 1 ? 2 : 1;
        html = "";
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();

    })
//销量
    $('#xiaoliang').on('tap', function () {
        //alert(1)
        num = num == 1 ? 2 : 1;
        html = "";
        page = 1;
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData();

    })

});

//调用ajax
function getData() {
    if (!This) {
        This = this;
    }

    $.ajax({
        url: '/product/queryProduct',
        type: 'get',
        data: {
            page: page++,
            pageSize: 3,
            proName: key,
            price: prices,
            num: num
        },
        success: function (res) {
            html += template("tem", res);
            $(".result-url").html(html);
            This.endPullupToRefresh(res.data.length <= 0);

            //上拉刷新(true表示没有更多数据)
            //this.endPullupToRefresh(true|false);
        }
    })
}
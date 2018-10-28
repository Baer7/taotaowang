/**
 * Created by Administrator on 2018/10/27 0027.
 */

//µ×²¿Ìø×ª
$(function () {
    $('body').on('tap', 'a', function(){
        mui.openWindow({
            url: $(this).attr('href')
        });
    });


})

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
//var key = getURL(location.href, 'key');
//console.log(key);
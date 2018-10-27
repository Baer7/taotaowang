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
/**
 * Created by Administrator on 2018/10/27 0027.
 */

//�ײ���ת
$(function () {
    $('body').on('tap', 'a', function(){
        mui.openWindow({
            url: $(this).attr('href')
        });
    });
})
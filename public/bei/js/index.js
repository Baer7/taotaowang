window.onload = function () {
    var header = document.querySelector('.my-header');
    var banner = document.querySelector('.mui-slider');
    var bannerHeight = banner.offsetHeight;
    var a = header.querySelector('.mui-pull-right')
    window.onscroll= function () {
        var opacity = 0;
        var scrolltop =  document.body.scrollTop || document.documentElement.scrollTop;
        if(scrolltop<bannerHeight){
            opacity = scrolltop/bannerHeight;
            header.style.backgroundColor = "rgba(52,157,255,"+opacity+")";
            //a.style.color="rgba(255,255,255,"+opacity+")";
        }
    }
}


//µ×²¿Ìø×ª
$(function () {
    $('body').on('tap', 'a', function(){
        mui.openWindow({
            url: $(this).attr('href')
        });
    });
})
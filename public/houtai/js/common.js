//��¼����
$.ajax({
	url:'/employee/checkRootLogin',
	type:'get',
	async:false,
	success: function (res) {
		//res.error==400û��¼
		if(res.error && res.error==400){
			location.href='login.html'
		}
	}
})
$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

//�˳�
	$(".login_out_bot").on("click", function () {
		$.ajax({
			url:'/employee/employeeLogout',
			type:'get',
			success: function (res) {
				if(res.success){
					location.href='login.html'
				}
			}
		})
	})
});
$('.loading').on('click',function(){
	var $btn = $(this);
		$btn.button('loading');
		setTimeout(function(){
   		$btn.button('reset');
	},2500);
});
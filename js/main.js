   			$(function(){
			'use strict';
			
			
			var winH  	= $(window).height(),
				upperH 	= $('.upper-bar').innerHeight(),
				navH	= $('.navbar').innerHeight();
				
				
			$(".slider,.carousel-item").height(winH - (upperH+navH));
			
		    
			$('.featurd-work  ul  li').click(function() {
						
				$(this).addClass('active').siblings().removeClass('active');
				
				if ($(this).data('class')=== 'all')  {
				
				
				$('.mes_images .col-md').css('opacity',1);

				
				}
				 else 
				 {
					$('.mes_images .col-md').css('opacity','.08');
				 
					$($(this).data('class')).parent().css('opacity',1);
				 }
				
						
			});
							
			 
	
		
		  	
			});
 
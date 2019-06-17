(function($){
	$(document).ready(function(){

		/***  Переключение фона главной   ***/
		var n=2;
		setInterval(function(){

				 $('header').css({'background':'url(images/Ships' + n + '.jpg)','background-size':'cover'});
				 n = n+1;
				 if (n > 4){
   			   		n = 1;
				 }

		},9000);
		/***   Конец переключения фона главной  ***/


		/*** !!! Работа с навигацией !!! ***/    
		$(window).scroll(function(){
			if ($(window).scrollTop()!=0){
				$('.nav').attr('style', 'position:fixed;top:0;');
				$('.nav').addClass('active');
				$('.cont').attr('style', 'display:none');
			} else {
				$('.nav').attr('style', 'position:absolute;');
				$('.cont').slideDown(350);
				$('.nav.active').removeClass('active');
			};
		});
		//*** Плавный переход по странице ***//
		$('.nav ul li a').on('click', function(e){
			e.preventDefault();
			var linkTrgt = $($(this).attr('href'));
			var offset = linkTrgt.offset().top; // Определяем отступ элемента от начала документа
       		 $('body, html').animate({
           		 scrollTop: offset + 1
       		 }, 200);
		});
        

		//***  Изменение цвета вкладки в звависимости от скроллинга  ***/
		function changeColorNav(){
			var $curItem;
			$('.wrap').each(function(){
				if ($(window).scrollTop() >= $(this).offset().top){
					$curItem = $(this).attr('id');
				};
			});
			if ($('.nav ul li a.active').attr('href') != '#' + $curItem){
				$('.nav ul li a.active').removeClass('active');
				$('.nav ul li a[href="#' + $curItem + '"]').addClass('active')
			};
		};
		changeColorNav();
		$(window).on('load scroll', changeColorNav);

		/*** !!! Конец работы с навигацией !!! ***/

		/***    ***/
		$(window).on('resize load', function(){
			$('.new').each(function(){
				$(this).height($(this).width()*1.25)
			})
		});
		/***    ***/



		/***  Слайд   ***/
		$(".owl-carousel1").owlCarousel({
			items: 1,
            autoplay: true,
            loop: true,
			navText: ['←','→'],
			responsive:{
				0: {

				},
				650: {
					nav:true
				}
			}	
		});
		/***  Конец слайда   ***/
        
        
        /*** Табулятор ***/
 
            $('.lp-tabs').prepend('<ul class="navTab"></ul>');
            $('.lp-tabs .tab').each(function(){
                $('.lp-tabs ul.navTab').append('<li>'+$(this).attr('data-tab')+'</li>')
            });

            $('.lp-tabs ul.navTab li').eq(0).addClass('active');
            $('.lp-tabs .tab').eq(0).addClass('active');
            $('.tabs').outerHeight($('.lp-tabs .tab.active').outerHeight());
            $('.lp-tabs ul.navTab li').on('click', function(){
                $('.lp-tabs ul.navTab li').removeClass('active')
                $(this).addClass('active');
                $('.lp-tabs .tab').removeClass('active');
                $('.lp-tabs .tab').eq($(this).index()).addClass('active');
                $('.tabs').outerHeight($('.lp-tabs .tab.active').outerHeight());
            });

        $(window).on('load resize', function(){
            $('.tabs').outerHeight($('.lp-tabs .tab.active').outerHeight());
        })
        
        /*** Табулятор КОНЕЦ ***/
        
        /*** Слайдер 2   и галлерея***/
        
        
        $(".owl-carousel2").owlCarousel({
            items: 5,
            margin: 10,
            nav: true,
            dots: false,
            navText: ['←','→']
            
        });
        $(".owl-carousel2 div.item").click(function(){
            var link = $(this).attr('id'),
                newImg = $('<img src="galler/' + link +'.jpg">'),
                oldImg = $('.gallImg img'),
                heightItem;
           
            $('.gallImg').prepend(newImg);
            heightItem = $('.gallImg img').height();
            console.log(heightItem);
            
            newImg.hide();
            newImg.fadeIn(1000);
            
            oldImg.fadeOut(1000, function(){
                oldImg.remove();
            });
        });
        $(".owl-carousel2 div.item:first").click();
        
        // Map //
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        $.fn.lpMapInit = function () {

        var lpMapOptions = {
            center: [53.906522, 27.510232],
            zoom: 16,
            controls: ['fullscreenControl', 'zoomControl']
        }

        if (window.innerWidth < 768) {
            lpMapOptions.behaviors = ['multiTouch'];
        } else {
            lpMapOptions.behaviors = ['drag'];
        }

        var lpMap = new ymaps.Map('lp-map', lpMapOptions);

        var lpPlacemark = new ymaps.Placemark(lpMapOptions.center, {
            hintContent: 'ИТ Академия',
            balloonContentHeader: 'ИТ Академия',
            balloonContentBody: 'учебные курсы',
            balloonContentFooter: 'пер. 4-й Загородный, 56А'
        });

        lpMap.geoObjects.add(lpPlacemark);
        }
        
        
        $('#popup3').wiFeedBack({
                fbScript: 'blocks/wi-feedback.php',
                fbLink: '.liink',
                fbColor: 'green'
        });
       
        $('#fb1').wiFeedBack({
                fbScript: 'blocks/wi-feedback.php',
                fbLink: false,
                fbColor: 'blue'
            });
        
        
        
        
	});
})(jQuery);

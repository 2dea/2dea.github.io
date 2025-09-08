
/* include */
$(function () {
    var includes1 = $('[data-include1="header"]');
    var includes2 = $('[data-include2="aside"]');
    var includes3 = $('[data-include3="footer"]');
    jQuery.each(includes1, function () {
        $(this).load('include/header.html');
    });
    jQuery.each(includes2, function () {
        $(this).load('include/aside.html');
    });
    jQuery.each(includes3, function () {
        $(this).load('include/footer.html');
    });
});

/* menuOn */
function menuOn(depth1, depth2, depth3) {
	var totalmenuDepth1 = $(".menu" + depth1);
	totalmenuDepth1.addClass("on");

	var totalmenuDepth2 = $(".menu" + depth1 + "-" + depth2);
	totalmenuDepth2.addClass("on");

	var totalmenuDepth3 = $(".menu" + depth1 + "-" + depth2 + "-" + depth3);
	totalmenuDepth3.addClass("on");
}

$(document).ready(function () {
    
    /* header > allmenu */
	$(document).on('click', '.btn_allmenu', function() {
		$('#app').addClass('fixed');
        $('#header').addClass('open_scrim');
        $('#header > .allmenu').show();
	});
	$(document).on('click', '.btn_allmenu_close', function() {
		$('#app').removeClass('fixed');
        $('#header').removeClass('open_scrim');
        $('#header > .allmenu').hide();
	});
    
    /* aside > side_nav(only PC) */
    if($(window).width() >= 901) {
        $(document).on('mouseover','.side_nav > li', function() {
            $('#app').addClass('fixed');
            $(this).addClass('active');
            $('.side_nav > li').not(this).removeClass('active');
        });
        $(document).on('mouseleave','.side_nav > li.active', function() {
            $('#app').removeClass('fixed');
            $(this).removeClass('active');
        });
        
        $(document).on('click', '.side_nav .depth_2 li a', function () {
            if($(this).next('.depth_3').css('display') == 'none') {
                $(this).removeClass('closed');
                $(this).next('.depth_3').slideDown(100);
            } else {
                $(this).addClass('closed');
                $(this).next('.depth_3').slideUp(100);
            }
        });
    };

    /* allmenu(only PC) */
    if($(window).width() >= 901) {
        $(document).on('click', '.allmenu h3', function () {
            if($(this).next('.depth_3').css('display') == 'none') {
                $(this).removeClass('closed');
                $(this).next('.depth_3').slideDown(100);
            } else {
                $(this).addClass('closed');
                $(this).next('.depth_3').slideUp(100);
            }
        });
    };

    /* allmenuu(only Mobile) */
    if($(window).width() <= 901) {
        $('.allmenu h2').addClass('closed')
        $(document).on('click', '.allmenu h2', function () {
            if($(this).next('.depth_2').css('display') == 'none') {
                $('.allmenu h2').addClass('closed')
                $(this).removeClass('closed');
                $('.depth_2').slideUp(100);
                $(this).next('.depth_2').slideDown(100);
            } else {
                $(this).addClass('closed');
                $(this).next('.depth_2').slideUp(100);
            }
        });
        $(document).on('click', '.allmenu h3', function () {
            if($(this).next('.depth_3').css('display') == 'none') {
                $(this).removeClass('closed');
                $(this).next('.depth_3').slideDown(100);
            } else {
                $(this).addClass('closed');
                $(this).next('.depth_3').slideUp(100);
            }
        });
    };

    /* 그리드 높이 조절 */
    $(document).on('click', '.adjust_grid_height', function () {
        if($(this).parents('.card').find('.card_body').hasClass('grid_height_max')) {
            $(this).find('span').text('확장');
            $(this).parents('.card').find('.card_body').removeClass('grid_height_max');
        } else {
            $(this).find('span').text('복원');
            $(this).parents('.card').find('.card_body').addClass('grid_height_max');
        }
    });

        /* 상세 높이 조절 */
        $(document).on('click', '.adjust_table_height', function () {
            if($(this).parents('.card').find('.card_body').hasClass('scroll')) {
                $(this).find('span').text('복원');
                $(this).parents('.card').find('.card_body').removeClass('scroll');
                $(this).parents('.card').find('.card_body').addClass('no_croll');
            } else {
                $(this).find('span').text('확장');
                $(this).parents('.card').find('.card_body').addClass('scroll');
                $(this).parents('.card').find('.card_body').removeClass('no_croll');
            }
        });


});


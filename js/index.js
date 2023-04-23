var flag = false
$('.label-row').css('display', 'none').eq(3).css('display', 'block')
$('.switch-btn').on('click', function () {
    if (flag) {
        $(this).children('.icon').css('transform', 'translateY(-50%) rotate(90deg)')
        $('.label-row').css('display', 'none').eq(3).css('display', 'block')
        flag = false
    } else {
        $(this).children('.icon').css('transform', 'translateY(-50%) rotate(-90deg)')
        $('.label-row').css('display', 'block').eq(3).css('display', 'block')
        flag = true
    }
})

// 点击分类
$('.label').on('click', '.classify-label', function () {
    $(this).addClass('dp-i-block').siblings().removeClass('dp-i-block')
})
$('.label-row').on('click', '.first-label', function () {
    $(this).addClass('dp-i-block').siblings().removeClass('dp-i-block')
})

// 自动加载
//滚动到页面底部时，自动加载更多
$(window).scroll(function () {
    var scrollh = $(document).height()
    var scrollTop = Math.max(document.documentElement.scrollTop || document.body.scrollTop)
    if (scrollTop + $(window).height() >= scrollh) {
        $('#jiazai').show()
        var interval = setTimeout(function () {
            $('#jiazai').hide()
        }, 1000)
        var inter = setTimeout(function () {
            $('.row').first().clone().appendTo($('.main'))
            $('.row').first().clone().appendTo($('.main'))
        }, 1000)
    }
})

// 底部App 打开
$('.dis i').on('click', function () {
    $('.dis').css('transform', 'translateY(100%)')
})
$(function () {
    $('.dis').css('transform', 'translateY(-100%)')
})
// 播放视频
$('.clickVideo').on('click', function () {
    $('#videobox').css('display', 'block')
})
// Shipin




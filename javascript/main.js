// main.js
$(function(){
    // 메뉴 hover
    $('nav .depth1 > li').hover(
        function(){
            /* 다 보이게 함 */
            $('.depth2').addClass('active');
        },
        function(){
            $('.depth2').removeClass('active');
        }
    );
})
$(".show-sidebar-btn").click(function () {
    $(".sidebar").animate({ marginLeft: 0 });
});

$(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({ marginLeft: "-100%" });
});
function go(url) {

    setTimeout(() => {
        location.href = `${url}`;
    }, 5000);
}
$(function () {
    $('[data-toggle="popover"]').popover();
  });

$(".full-screen-btn").click(function(){
    console.log('hit');
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    if (current.hasClass("full-screen-card")) {
        $(this).html(`<i class="feather-minimize-2"></i>`);
    }else{
        $(this).html(`<i class="feather-maximize-2"></i>`)
    }
});

// side bar auto scrool
let screenHeight = $(window).height();
let currentMenuHeight = $('.nav-menu .active').offset().top;

if (currentMenuHeight>screenHeight*0.8) {
    $(".sidebar").animate({
         scrollY:currentMenuHeight-100
    },1000);
}
  
  
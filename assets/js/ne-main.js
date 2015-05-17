$(document).ready(function(){
    
    $(".feedback-icon").click(function(){
        $(this).toggleClass("close");
        $(".feedback-place").toggleClass("show");
    });

    $(".product-list li #detail").on('click', function(event) {
        if (!$(this).closest('li').hasClass("show")) {
            $(this).closest('li').addClass("show");
            $(this).closest('li').siblings().removeClass("show");
        } 
    });
    
    $(".product-list li .deskripsi .close").click(function(){
        $(".product-list li").removeClass("show");
    });
});
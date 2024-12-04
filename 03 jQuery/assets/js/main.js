$(document).ready(function(){
    $(".click-here").on("click",(function(){
        $("p").toggle(1000);
    }));

    $(".delete-btn").on("click", (function(){
        alert("Are you want to sure delete?"); 
    }));

    //CSS Add 
    $(".add-css").on("click", (function(){
        $(".text-css").css("background-color", "yellow",);
        $(".text-css").css("padding", "18px",);
        $(".text-css").css("font-size", "24px",);
    }));
    

    //fadeIn Event 
    $('.fade-box').on("click", (function(){
        $(".fade-box").fadeOut();
        $(".fade-box1").fadeOut("slow");
        $(".fade-box2").fadeOut(2000);
    }));

    //Slide 
    $(".slide-btn").on("click", (function(){
        $(".slide-content").slideToggle("slow");
    }));











});

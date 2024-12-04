$(document).ready(function(){
    $(".click-here").on("click",(function(){
        $("p").toggle(1000);
    }));

    $(".delete-btn").on("click", (function(){
        alert("Are you want to sure delete?"); 
    }));
});

 
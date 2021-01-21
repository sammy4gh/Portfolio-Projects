
$(document).ready(function () {
   
/*==================== SHOW MENU ====================*/

    $("#nav-toggle").click(function(){
        console.log("clicked");
        const toggle = $("#nav-menu").css({ top: "4rem" }).slideToggle("slow");
       
    })
})

/* ------------------------------Dark Mode --------------------------------------*/
function dark() {
    $('body,header,main').toggleClass("dark-theme");
    
}
$("#theme-button").click(function(){

    dark().toggle()
})
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.intro-text, .intro-image, 
           .service-image, .service-text,
           .card, .contact,
           .footer`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__content`, {
    origin: 'left'
})

sr.reveal(`.share__data, .send__img`, {
    origin: 'right'
})




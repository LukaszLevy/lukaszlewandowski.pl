$(document).ready(()=>{
    const head = $(".profile");
    const elements = $(".info-cont");
    const appCont = $('.app-cont');
    $(document).on('scroll', ()=> {
        let a = $(document).scrollTop();
            if(a > 50){
                $(head).css('background-color', 'rgba(0,0,0,.8');
            }else{
                $(head).css('background-color', 'rgba(0,0,0,.4');
            }
        
    });



})



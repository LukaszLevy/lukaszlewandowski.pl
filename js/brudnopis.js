var lang = "none";
    const PRELOADER = $('.preloader');
    const INFO_BUT = $(".infoBut");
    const INFO_START = $(".infoStart");
    const START_BUTTON = $(".closeInfoStartTxt");
    const POLAND = $(".pol");
    const ENG = $(".ang");
    const LANG_SITE = $(".chooseLang");
    const FLAG = $(".flag");

    $(POLAND).on("mouseover", function(){
        $(FLAG).addClass("flagJS1");
    });
    $(POLAND).on("mouseleave", function(){
        $(FLAG).removeClass("flagJS1");
    });
    $(ENG).on("mouseover", function(){
        $(FLAG).addClass("flagJS2");
    });
    $(ENG).on("mouseleave", function(){
        $(FLAG).removeClass("flagJS2");
    });
    $(POLAND).on("click", function(){
        lang = "pl";
        $(CHOOSELANG_SITE).fadeOut(300);
    });
    $(ENG).on("click", function(){
        lang = "eng";
        $(CHOOSELANG_SITE).fadeOut(300);
    });
    var checkLangChoose = function(){
        if(lang === "pl" || lang === "eng"){
            $( window ).load(function() {
                $(PRELOADER).fadeOut(4000);
            });
        }
        else {
            setTimeout(checkLangChoose, 500); 
        }
    };
    checkLangChoose();
    var checkPreloader = function(){
        if($(PRELOADER).css("display") === "none"){
            $(INFO_BUT).addClass("infoButJS");
        }
        else {
            setTimeout(checkPreloader, 500); 
        }
    };
   
    checkPreloader();


// proba slownika
//html
    <div class="chlang"></div>
//css
    .chlang
    position: absolute
    width: 30px
    height: 30px
    top: 84px
    right: 0
    border-radius: 1px
    border: 1px solid $myTheme
    border-right: 0
    transform: translate(0)
.chlangOption
    position: absolute
    top: 40px
    right: 0px
    width: 80px
    padding: 5px 15px
    background-color: #252525
    color: white
    border: 1px solid $myTheme
    text-align: center
    border-radius: 2px
    transition: .3s
    cursor: pointer
    transform: (translateX(100%))
    border-right: 0
    &:hover
        // color: $myTheme
        background-color:  $myTheme
.chlang > .chlangOption:nth-child(2)
    top: 80px
.chlangOptionJS
    transform: (translateX(0))
    const CHLANG = $(".chlang");
//js
    // -- 2 klik flaga lang
    if(lang === "pl"){
        $(CHLANG).addClass("flagJS1");
    }
    if(lang === "eng"){
        $(CHLANG).addClass("flagJS2");
    }
    var txtPl = "Polski";
    var txtAng = "Angielski";
    if(lang === "eng"){
        txtPl = "Polish";
        txtAng = "English";
    }
    $(CHLANG).each(function(){
        $(this).append("<div class='chlangOption'>"+txtPl+"</div>");
        $(this).append("<div class='chlangOption'>"+txtAng+"</div>");
    }); 
    $(CHLANG).on("click", function(){
        let CHLANGOPT = $(".chlangOption");
        $(CHLANGOPT).each(function(index){
            if($(this).hasClass("chlangOptionJS")){
                $(this).removeClass("chlangOptionJS");
            }else{
                $(this).addClass("chlangOptionJS");
            }
            $(this).on("mouseover", function(){
                let indx = index + 1;
                $(CHLANG).removeClass("flagJS1");
                $(CHLANG).removeClass("flagJS2");
                $(CHLANG).addClass("flagJS" + indx);
                console.log(index);
            });
            $(this).on("mouseleave", function(){
                if(lang === "pl"){
                    $(CHLANG).removeClass("flagJS2");
                    $(CHLANG).addClass("flagJS1");
                }else{
                    $(CHLANG).removeClass("flagJS1");
                    $(CHLANG).addClass("flagJS2");
                }
            });
            $(this).on("click", function(){
                if(index === 0){
                    lang = "pl";
                    languagesEng();
                }
                else{
                    lang = "eng";
                    languagesEng();
                }
                console.log(lang);
            });
        });
    });
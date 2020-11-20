// -- PREPAGE
    // -- ZMIENNE
        var lang = "";
        var isLoaded = false;
        const PRELOADER = $('.preloader');
        const INFO_BUT = $(".infoBut");
        const INFO_START = $(".infoStart");
        const START_BUTTON = $(".closeInfoStartTxt");
        const POLISH = $(".pol");
        const ENGLISH = $(".ang");
        const CHOOSE_LANG_SITE = $(".chooseLang");
        const FLAG = $(".flag");
        activePage = 0;
    // -- START
    // -- FUNKCJE
        var check = function(){
            if($(!PRELOADER.length)){
                $(CHOOSE_LANG_SITE).addClass("chooseLangJS");
            }
            else {
                setTimeout(check, 500); 
            }
        };
        check();
    // -- EVENTY
        $(window).load(function() {
            setTimeout(function(){
                $(PRELOADER).remove();
            }, 4000);
            
        });
        $(POLISH).on({
            mouseover: () => $(FLAG).addClass("flagJS1"),
            mouseleave: () => $(FLAG).removeClass("flagJS1"),
            click: () => {
                lang = "pl";
                languagesEng();
                $(CHOOSE_LANG_SITE).removeClass("chooseLangJS");
                setTimeout(function(){
                    $(CHOOSE_LANG_SITE).remove();
                    $(INFO_BUT).addClass("infoButJS");
                }, 1000);
            }
        });
        $(ENGLISH).on({
            mouseover: () => $(FLAG).addClass("flagJS2"),
            mouseleave: () => $(FLAG).removeClass("flagJS2"),
            click: () => {
                lang = "eng";
                languagesEng();
                $(CHOOSE_LANG_SITE).removeClass("chooseLangJS");
                setTimeout(function(){
                    $(CHOOSE_LANG_SITE).remove();
                    $(INFO_BUT).addClass("infoButJS");
                }, 1000);
            }
        });
// -- start strony
$( document ).ready(function() {
$(START_BUTTON).one("click", function(){
    activePage = 1;
    $(INFO_START).remove();
    // -- FUNKCJE OGÓLNE
        $.fn.extend({
            toggleText: function(a, b){
                return this.text(this.text() == b ? a : b);
            }
        });
        function nadaj_index(el,indexName){
            let a = 0;
            for(j=0;j<el.length;j++){
                let currentEl = $(el[a]);
                currentEl.attr(indexName , a);
                a++;
            }
        }
        function change_class(el1,className){
            el1.toggleClass(className);
        }
        function add_class(el1,className){
            el1.addClass(className);
        }
        function remove_class(el1,className){
            el1.removeClass(className);
        }
        
    // NAGŁÓWEK , stopka
        // -- ZMIENNE, STAŁE
            const ALL_PAGES_BOX = $(".allPagesBox");
            const MENU_TAG = $('.tagMenu');
            const MENU_POINTS = $('.menuPunkty');
            const OPT_BUT = $('.optionButton');
            const HEADER = $('.header');
            const OPT_AREA = $(".optionArea");
            const LOGO = $(".logo");
            const MENU_CONT = $("#menuKontener");
            const BRIGHT_LESS = $(".brightLess");
            const PAGE = $('.Page');
            const SOCIAL = $(".social");
            var WIDTH_MENU_CONT = $(MENU_CONT).width();
            var ovHeight = $(PAGE).height();
        // -- start funkcji ogolnych
            nadaj_index(MENU_POINTS,"index-nr");
            $(OPT_AREA).css("height", ovHeight + 1);
            // $(OPT_BUT).css("left", WIDTH_MENU_CONT / 2 );
        // -- EVENTY
        $(MENU_POINTS).each(function(index){
            $(this).on("click", function(){
                activePage = index + 1;
                let current = $(this);
                let y = $(this).outerWidth();
                let x = $(this).position();
                setTimeout(function(){
                    $(MENU_TAG).css({left: x.left , width: y});
                    $(current).addClass('colorMenuPunkty');
                    $(current).siblings("p").removeClass('colorMenuPunkty');
                    $(ALL_PAGES_BOX).css("left" , "-" + index * 100 + "%");
                }, 800);
            });
        });
        $(LOGO).on({
            click: () => {
                var OPT_MENU = $(OPT_BUT).hasClass("optionButtonJS") ? option_menu_show("off") : option_menu_show("on");
                return OPT_MENU;
            }
        });
        $(BRIGHT_LESS).on({
            click: () => {
                var OPT_MENU = $(OPT_BUT).hasClass("optionButtonJS") ? option_menu_show("off") : option_menu_show("on");
                return OPT_MENU;
            }
        });
        // -- FUNKCJE
            $(window).resize(function() {
                setTimeout(function(){
                    let a = $(".colorMenuPunkty");
                    let y = $(a).outerWidth();
                    let x = $(a).position();
                    MENU_TAG.css({left: x.left , width: y});
                    var ovHeight = $(PAGE).height();
                    $(OPT_AREA).css("height", ovHeight + 1);
                    // $(OPT_BUT).css("left", WIDTH_MENU_CONT / 2 );
                }, 1000);
            });
            function option_menu_show(opt){
                if(opt === "on"){
                    $(BRIGHT_LESS).addClass("brightLessJS");
                    $(SOCIAL).addClass("socialJS");
                    $(OPT_BUT).addClass("optionButtonJS");
                    $(OPT_AREA).addClass("optionAreaJS");
                    $(LOGO).addClass("logoJS");
                    
                }else if(opt === "off"){
                    $(OPT_BUT).removeClass("optionButtonJS");
                    $(OPT_AREA).removeClass("optionAreaJS");
                    $(LOGO).removeClass("logoJS");
                    $(BRIGHT_LESS).removeClass("brightLessJS");
                    $(SOCIAL).removeClass("socialJS");
                }
            }
    // STRONA 1
        // -- ZMIENNE, STAŁE
            var TEXT_ARR = ["Cześć,", "mam na imię Łukasz", "chcę pracować w IT."];
            if(lang === "eng"){
                TEXT_ARR = ["Hello,", "my name is Luke", "i want to work in IT."];
            }
            
            const HELLO_BOX = $(".helloBox");
            const NAME_LEWANDOWSKI_BOX = $('.nameLewandowskiBox');
            const SLOGAN_BOX = $('.sloganKodowanieBox');
            const MORE_INFO_BUT = $(".moreInfo");
            const OPIS_O_MNIE_CONT = $(".meTxtCont");
            const CLOS_ME_INFO = $(".closeMeInfo");
            var EL_ARR_TEXT = [HELLO_BOX, NAME_LEWANDOWSKI_BOX, SLOGAN_BOX];
            const EL_TO_ANIMATE_SITE_ONE = $(".nameLewSloganKodBox").children("div");
            const CONT_Z_INDEX_SITE_ONE = $(".contZindx");
        // -- START FUNKCJI OGÓLNYCH
            nadaj_index(PAGE,"index-nr2");
        // -- START
            animate_text_page_one(createTextOnPage);
            $(MENU_POINTS[0]).on("click", function(){
                setTimeout(function(){
                    if($(OPIS_O_MNIE_CONT).hasClass("meTxtContJS")){
                        $(OPIS_O_MNIE_CONT).removeClass("siteOneChildrenJS2");
                    }else{
                        iteracja_for(EL_TO_ANIMATE_SITE_ONE, show_el_site_one);
                    }
                }, 1600);
            }).siblings(".menuPunkty").on("click", function(){
                if($(OPIS_O_MNIE_CONT).hasClass("meTxtContJS")){
                    $(OPIS_O_MNIE_CONT).addClass("siteOneChildrenJS2");
                }else{
                    iteracja_for(EL_TO_ANIMATE_SITE_ONE, hide_el_site_one);
                }
            });
            $(MORE_INFO_BUT).on("click", function(){
                iteracja_for(EL_TO_ANIMATE_SITE_ONE, hide_el_site_one);
                setTimeout(function(){
                    $(OPIS_O_MNIE_CONT).addClass("meTxtContJS");
                    $(CONT_Z_INDEX_SITE_ONE).addClass("contZindxJS");
                    padding_cont(300, CONT_Z_INDEX_SITE_ONE);
                }, 400);
            });
            $(CLOS_ME_INFO).on("click", function(){
                $(OPIS_O_MNIE_CONT).removeClass("meTxtContJS");
                setTimeout(function(){
                    iteracja_for(EL_TO_ANIMATE_SITE_ONE, show_el_site_one);
                    $(CONT_Z_INDEX_SITE_ONE).removeClass("contZindxJS");
                }, 400);
            });
        // -- FUNKCJE
            function createTextOnPage(){
                $(EL_ARR_TEXT).each(function(index){
                    var letterArr = [];
                    letterArr.push(TEXT_ARR[index].split(""));
                    for(i=0; i<letterArr.length ;i++){
                        for(j=0; j<letterArr[i].length; j++){
                            if(letterArr[i][j] == " "){
                                $(this).append("<span class='helloLetter marginLetter'>"+letterArr[i][j]+"</span>");
                            }else{
                                $(this).append("<span class='helloLetter'>"+letterArr[i][j]+"</span>");
                            }
                        }
                    }
                });
                padding_cont(0, $(".packOne"));
            }
            function animate_text_page_one(cb1){
                cb1();
                itteration_for__animate_text_page_one();
                setTimeout(function(){
                    add_class($(MORE_INFO_BUT) , "moreInfoJS");
                    
                }, 4500);
            }
            function iteration_for_adding_class_fn(el){
                for(i=0; i<el.length; i++){
                    adding_class_for_each_letter(i, el);
                }
            }
            function adding_class_for_each_letter(i, el){
                setTimeout(function(){
                    if($(el[i]).parent().hasClass("nameLewandowskiBox")){
                        $(el[i]).addClass("helloLetterJS2");
                    }else
                    $(el[i]).addClass("helloLetterJS1");
                }, 300 + i * 50);
            }
            function animate_text_page_one_by_adding_class(j){
                setTimeout(function(){
                    var current = $(EL_ARR_TEXT[j]).children(".helloLetter");
                    iteration_for_adding_class_fn(current);
                }, 300 + j * 1000);
                
            }
            function itteration_for__animate_text_page_one(){
                for(j=0; j<EL_ARR_TEXT.length; j++){
                    animate_text_page_one_by_adding_class(j);
                }
            }
            function hide_el_site_one(i){
                setTimeout(function(){
                    $(EL_TO_ANIMATE_SITE_ONE[i]).addClass("siteOneChildrenJS");
                }, 100 + 100 * i);
            }
            function show_el_site_one(i){
                setTimeout(function(){
                    $(EL_TO_ANIMATE_SITE_ONE[i]).removeClass("siteOneChildrenJS");
                }, 100 + 100 * i);
            }
    // -- STRONA DRUGA, TWO -- //
        // -- ZMIENNE, STAŁE
            const WALLPAPER_PAGE_TWO = $(".wallTwo");
            const ELEMENTS_TO_ANIAMTE_PAGE_TWO = $(".packTwo").children(".contChildren").children("div");
            const MENU_CAREER_CONTAINER = $(".menuCareerContainer");
            const MENU_CAREER_POINTS = $(".menuCareerPoints");
            const MENU_CAREER_INDICATOR = $(".menuCareerIndicator");
            const MENU_CAREER_INFO = $(".menuCareerInfo");
            const COMPANY_NAME = $(".companyName");
            const COMPANY_POSITION = $(".companyPosition");
            const COMPANY_YEARS = $(".companyYears");
            const MENU_CAR_TIP = $(".menuCareerTip");
            const CAREER_LIKE_STARS = $(".careerLikeStars");
            const DUTIES_BUTTON = $(".dutiesButton");
            const DUTIES_CONTAINER = $(".dutiesContainer");
            const DUTIES_CLOSE = $(".dutiesClose");
            const DUTIES_MAIN_CONT = $(".contMenuPage2").next("div");
            var wallTab = ["url(img/wallpapers/wallpaper_2_0.jpg)", "url(img/wallpapers/wallpaper_2_1.jpg)", "url(img/wallpapers/wallpaper_2_2.jpg)", "url(img/wallpapers/wallpaper_2_3.jpg)"];
            var wallTabM = ["url(img/wallpapers/wallpaper_2_0m.jpg)", "url(img/wallpapers/wallpaper_2_1m.jpg)", "url(img/wallpapers/wallpaper_2_2m.jpg)", "url(img/wallpapers/wallpaper_2_3m.jpg)"];
            var Company_Name_Board = ["GEOSTANDARD","ASTALDI","PIZZAROTTI","ERPLAST"];
            var Company_Position_Board = ["LABORANT","SPECJALISTA","KOORDYNATOR","DORADCA"];
            var Company_Years_Work_Board = ["2010-2015","2015-2017","2017-2019","2020"];
            var Duties0 = ["Wykonywanie badań w laboratorium (grunty, betony)","Wykonywanie badań terenowych (betony, masy, odwierty, nośności, zagęszczenia, sondowania)", "Tworzenie i prowadzenie bazy danych  badań, zleceń, raportów, formularzy i wzorów dokumentów","Ustalanie grafiku, rodzaju i ilości wykonywanych badań na budowie","Raportowanie tygodniowe, miesięczne","Kontakt z kierownikami robót i inżynierami w celu rozwiązywania problemów"];
            var Duties1 = ["Zarządzenie działem jakości","Koordynacja pracy laboratorium","Sprawdzanie dokumentacji materiałowej i  laboratoryjnej pod kątem poprawności względem norm  i projektu","Przygotowanie i prowadzenie rejestrów badań, materiałów, raportów niezgodności, zleceń","Kontakt z Klientem i Nadzorem w celu rozwiązywania problemów jakościowych","Raportowanie tygodniowe, miesięczne"];
            var Duties2 = ["Zarządzenie działem jakości","Koordynacja pracy laboratorium","Sprawdzanie dokumentacji materiałowej i  laboratoryjnej pod kątem poprawności względem norm  i projektu","Przygotowanie i prowadzenie rejestrów badań, materiałów, raportów niezgodności, zleceń","Kontakt z Klientem i Nadzorem w celu rozwiązywania problemów jakościowych","Raportowanie tygodniowe, miesięczne"];
            var Duties3 = ["Sporządzanie wycen","Doradztwo techniczne na podstawie dokumentacji projektowej","Monitorowanie rezultatów złożonych ofert", "Negocjowanie umów i warunków handlowych","Pozyskiwanie nowych klientów / identyfikowanie potencjalnych odbiorców produktów"];
            if(lang === "eng"){
                Company_Position_Board = ["LABORANT", "EXPERT", "COORDINATOR", "TECHNICAL CONSULTANT"];
                Duties0 = ["Performing tests in the laboratory (soil, concrete)", "Performing field tests (concrete, masses, boreholes, load-bearing capacity, compaction, probing)", "Determining the schedule, type and number of tests performed on the site", "Creating and maintaining a database of research, orders, reports, forms and document templates", "Weekly and monthly reporting", "Contact with site managers and engineers for problem solving"];
                Duties1 = ["Quality department management","Coordination of the work of the laboratory","Checking material and laboratory documentation for correctness in relation to standards and design","Preparation and keeping of records of tests, materials, non-compliance reports, orders","Contact with the Client and Supervision in order to solve quality problems","Weekly and monthly reporting"];
                Duties2 = Duties1;
                Duties3 = ["Preparation of valuations","Technical consulting based on design documentation","Monitorowanie rezultatów złożonych ofert", "Monitoring the results of submitted offers","Acquiring new customers / identifying potential recipients of products"];
                $(MENU_CAREER_INFO).addClass("menuCareerInfoJS2");
            }
            var Duties = [Duties0, Duties1, Duties2, Duties3];
            var elementsToAddClassJSArr = [MENU_CAREER_INFO, MENU_CAREER_POINTS, MENU_CAR_TIP];
            var classesToAddArr = ["menuCareerInfoJS", "menuCareerPointsJS", "menuCareerTipJS"];
            var PageTwoClicked = false;
        // -- START FUNKCJI OGÓLNYCH
            nadaj_index($(COMPANY_NAME),"index-nr4");
            nadaj_index($(MENU_CAREER_POINTS),"index-nr6");
        // -- eventy dla punktów lat w menu
            $(MENU_CAREER_CONTAINER).on({
                mouseover: () => {
                    $(elementsToAddClassJSArr).each(function(index){
                        $(this).addClass(classesToAddArr[index]);
                    });
                },
                mouseleave: () => {
                    $(elementsToAddClassJSArr).each(function(index){
                        $(this).removeClass(classesToAddArr[index]);
                    });
                }
            });
            $(MENU_CAREER_POINTS).each(function(index){
                $(this).one("click", function(){
                    padding_cont(0, $(".packTwo"));
                    PageTwoClicked = true;
                    iteracja_for(ELEMENTS_TO_ANIAMTE_PAGE_TWO, show_content_page_two);
                });
                $(this).on({
                    click: () => {
                        $(this).addClass("yearsJS").siblings(".menuCareerPoints").removeClass("yearsJS");
                        create_objects_from_boards(index, $(COMPANY_NAME),Company_Name_Board,"companyNameLettersJS1","companyNameLettersJS2");
                        show($(COMPANY_NAME).children(),"companyNameLettersJS3", 100, "add");
                        create_objects_from_boards(index, $(COMPANY_POSITION),Company_Position_Board,"companyPositionLettersJS1","companyPositionLettersJS1");
                        show($(COMPANY_POSITION).children(),"companyPositionLettersJS3", 100, "add");
                        create_objects_from_boards(index, $(COMPANY_YEARS),Company_Years_Work_Board,"companyPositionLettersJS1","companyPositionLettersJS1");
                        show($(COMPANY_YEARS).children(),"companyYearsLettersJS3", 100, "add");
                        how_i_like_job(index);
                        resize_wall_page_two(WALLPAPER_PAGE_TWO, wallTab[index], wallTabM[index]);
                        
                    },
                    mouseover: () => $(MENU_CAREER_INDICATOR).addClass("menuCareerIndicatorJS" + index),
                    mouseleave: () => $(MENU_CAREER_INDICATOR).removeClass("menuCareerIndicatorJS" + index),
                });
            });
            $(DUTIES_BUTTON).on("click" , function(){
                var actualIndexNr = $(MENU_CAREER_CONTAINER).children(".yearsJS").index();
                menu_career_show_or_hide(0, "hide");
                content_page_two_show_or_hide(0, "hide");
                duties_box_show_or_hide(700, "open", actualIndexNr);
                padding_cont(0, $(".contMenuPage2").next());
            });
            $(DUTIES_CLOSE).on("click" , function(){
                duties_box_show_or_hide(700, "close");
                content_page_two_show_or_hide(700, "show");
                menu_career_show_or_hide(500, "show");
            });
        // -- klikniecie w punkty menu glownego
            $(MENU_POINTS[1]).on("click", function(){
                padding_cont(100, $(".contMenuPage2"));
                menu_career_show_or_hide(1600, "show");
                content_page_two_show_or_hide(1600, "show");
            }).siblings(".menuPunkty").on("click", function(){
                duties_box_show_or_hide(700, "close");
                menu_career_show_or_hide(0, "hide");
                content_page_two_show_or_hide(0, "hide");
            });
        // -- FUNKCJE
        function content_page_two_show_or_hide(time, option){
            if(option === "show" && PageTwoClicked === true){
                setTimeout(function(){
                    iteracja_for(ELEMENTS_TO_ANIAMTE_PAGE_TWO, show_content_page_two);
                }, time);
            }if(option === "hide"){
                setTimeout(function(){
                    iteracja_for(ELEMENTS_TO_ANIAMTE_PAGE_TWO, hide_content_page_two);
                }, time);
            }
        }
        function show_content_page_two(i){
            setTimeout(function(){
                $(ELEMENTS_TO_ANIAMTE_PAGE_TWO[i]).addClass("siteTwoChildrenJS");
            }, 50 + 150 * i);
        }
        function hide_content_page_two(i){
            setTimeout(function(){
                $(ELEMENTS_TO_ANIAMTE_PAGE_TWO[i]).removeClass("siteTwoChildrenJS");
            }, 50 + 150 * i);
        }
        function menu_career_show_or_hide(time, option){
            setTimeout(function(){
                if(option === "show"){
                    $(MENU_CAREER_CONTAINER).addClass("siteTwoChildrenJS");
                }if(option === "hide"){
                    $(MENU_CAREER_CONTAINER).removeClass("siteTwoChildrenJS");
                }
            }, time);
        }
        function duties_box_show_or_hide(time, option, index){
            if(option === "close"){
                $(DUTIES_MAIN_CONT).addClass("contMenuPage3");
                setTimeout(function(){
                    $(DUTIES_CONTAINER).children(".dutiesBoxesJS1").remove();
                }, time);
            }if(option === "open"){
                create_elements_duties_to_duties_container(index); 
                setTimeout(function(){
                    $(DUTIES_MAIN_CONT).removeClass("contMenuPage3");
                }, time);
            }
        }
        // -- funkcja zmieniajća tło drugiej strony w zależności czy urządzenie małe / duże
        function resize_wall_page_two(el, wall, wallM){
            var resize_600 = window.matchMedia("(max-width: 600px)");
            if (resize_600.matches) { 
                $(el).css("background-image", wallM);
            } else {
                $(el).css("background-image", wall);
            }
        }
        // -- funkcja tworzenie objektow i animaowanie liter tych obiektow w kontenerze company
            function create_objects_from_boards(nr,el,el2,classes1,classes2){
                el.text("");
                for(j=0;j<el2[nr].length; j++){
                    if(j % 2 == 0){el.append("<span class="+classes1+">"+el2[nr][j]+"</span>");}
                    else{el.append("<span class="+classes2+">"+el2[nr][j]+"</span>");}
                }
            }
        // -- funkcje ( dwie połączone ze sobą ) nadania lub odjecia klasy z opoznieniem czasowym dla kazdego pojedynczego elementu
            function show(el,classes,time,a){
                var i;
                for (i = 0; i < el.length; i++){
                    show_connected(i,el,classes,time,a);
                }
            }
            function show_connected(i,el,classes,time, a){
                setTimeout(function() {
                    if(a == "add"){
                        $(el[i]).addClass(classes);
                    }
                    if(a == "rem"){
                        $(el[i]).removeClass(classes);
                    }
                }, 50 + i * time);
            }
        //  -- funkcja wskaznika polubienia pracy
        function how_i_like_job(indexNr){
            let howMuchLike;
            remove_class($(CAREER_LIKE_STARS), "careerLikeStarsJS1");
            if(indexNr === 0){howMuchLike = 3;}
            if(indexNr === 1){howMuchLike = 4;}
            if(indexNr === 2){howMuchLike = 2;}
            if(indexNr === 3){howMuchLike = 1;}
            showStars(howMuchLike);
        }
        // -- funkcje pomocniecze wykorzystane w funkcji [5]
            function showStars(el){
                var i;
                for (i=0;i<=el;i++){
                    show_stars_connected(i);
                }
            }
            function show_stars_connected(i){
                setTimeout(function() {
                    add_class($(CAREER_LIKE_STARS[i]), "careerLikeStarsJS1");
                }, 50 + i * 100);
            }
        // -- funkcja tworząca liste obowiazkow w kontenerze obwiazki
        function create_elements_duties_to_duties_container(el){
            for(let i of Duties[el]){
                var newDutiesBox = $(document.createElement('div'));
                $(newDutiesBox).addClass("dutiesBoxesJS1");
                $(newDutiesBox).text(i);
                $(newDutiesBox).appendTo(DUTIES_CONTAINER);
            }
        }


    // -- STRONA TRZECIA -- //
        // -- STAŁE, ZMIENNE
            const SKILLS_MAIN_TEXT = $(".skillsMainText");
            const SKILLS_CONTAINER = $(".skillsContainer");
            const MENU_SKILLS_TABS = $(".menuSkillsTabs");
            const MENU_SKILLS_INDICATOR = $(".menuSkillsIndicator");
            const MENU_SKILLS_CONTAINER = $(".menuSkillsContainer");
            var programmingSkills = [
                "Języki i narzędzia poznane w trakcie samonauczania rozpoczętego w Marcu 2020", "JQuery", "Java Script" , 
                "HyperText Markup Language 5" , "Cascading Style Sheets 3", "Sass", "GitHub", "Visual Studio Code", "IntelliJ IDEA", "Responsive Web Design"
            ];
            var testingSkills = [   
                "Zakres programowy i narzędzia poznane w trakcie kursu na testera oprogramowania organizowanego przez Software Development Academy Gdynia od Marca do Sierpnia 2020 [ 105h ]", 
                "Certyfikat ISTQB" , "Certyikat SDA" , "Test Rail" , "Jira" , "Agile, Scrum, Kanban", "Selenium IDE", 
                "Podstawy Selenium Web Driver", "Gherkin, Cucumber", "Podstawy SQL, JAVA", "Testowanie manulane, automatyzacja" 
            ];
            var othersSkills = [
                "Umiejętności zdobyte w trakcie kariery zawodowej", "Język Angielski B1-B2", "Prawo Jazdy kat. B" , "Znajomość Norm Budowlanych", 
                "Znajomość Branży - Budowa Dróg" , "MS Windows", "MS Office"
            ];
            var mainTextSkill = "CZEGO SIĘ UCZĘ ?";
            if(lang === "eng"){
                programmingSkills = [
                    "Languages ​​and tools learned during the self-learning process started in March 2020", "JQuery", "Java Script" , 
                    "HyperText Markup Language 5" , "Cascading Style Sheets 3", "Sass", "GitHub", "Visual Studio Code", "IntelliJ IDEA", "Responsive Web Design"
                ];
                testingSkills = [   
                    "Program scope and tools learned during the software tester course organized by Software Development Academy Gdynia from March to August 2020 [105h]", 
                    "ISTQB Certificate" , "SDA Certificate" , "Test Rail" , "Jira" , "Agile, Scrum, Kanban", "Selenium IDE", 
                    "Selenium Web Driver Basics", "Gherkin, Cucumber", "SQL Basics, JAVA", "Manual testing, automation" 
                ];
                othersSkills = [
                    "Skills acquired during a professional career", "English B1-B2", "Driving license. B" , "Knowledge of Building Standards", 
                    "Industry Knowledge - Road Construction" , "MS Windows", "MS Office"
                ];
                mainTextSkill = "WHAT AM I LEARNING ?";
            }
            var arrayOfSkills = [programmingSkills, testingSkills, othersSkills];
            var flagsSkill = true;
        // -- START FUNKCJI
            indictaor_in_menu_skill_move(MENU_SKILLS_CONTAINER);
        // -- EVENTY
        // -- [ 1 ] klikanie w punkty menu strony 3
            $(MENU_SKILLS_TABS).each(function(){
                $(this).on({
                    click: () => {
                        var indx_minus = $(this).index()-1;
                        indicator_menu_skills_move("on", this);
                        resize_indicator();
                        // main_text_skills("off");
                        content_page_three_fast_remove();
                        content_page_three_create(arrayOfSkills, indx_minus, 1000);
                        // padding_cont(1050);
                        
                    },
                    mouseover: () => menu_skills_animate("off"),
                    mouseout: () => menu_skills_animate("on")
                });
            });
            $(MENU_POINTS[2]).on("click" , function(){
                if(flagsSkill == true){
                    main_text_skills("on", 1600);
                    // padding_cont(1600);
                    
                }
                flagsSkill = false;
                menu_skills("on", 1600);
                
            }).siblings(".menuPunkty").on("click" , function(){
                flagsSkill = true;
                content_page_three_fast_remove();
                main_text_skills("off");
                indicator_menu_skills_move("off");
                menu_skills("off");
            });
        // -- FUNKCJE
        // -- dodaj punkty obowiazkow [kontenry] z odpowiedzniej tablicy do html, nadaj klasy, dodaj zdjecia i opisy
            function indicator_menu_skills_move(option, ths){
                if(option === "on"){
                    let y = $(ths).position();
                    let z =  $(ths).outerWidth();
                    $(MENU_SKILLS_INDICATOR).addClass("menuSkillsIndicatorJS");
                    $(MENU_SKILLS_INDICATOR).css({"left": y.left, "width": z });
                }if(option === "off"){
                    $(MENU_SKILLS_INDICATOR).removeClass("menuSkillsIndicatorJS");
                }
            }
            function main_text_skills(option, time = 0){
                if(option === "off"){
                    setTimeout(function(){
                        $(SKILLS_MAIN_TEXT).children().removeClass("textMainJS");
                        setTimeout(function(){
                            $(SKILLS_MAIN_TEXT).children().remove();
                        }, 1000);
                    }, time);
                }if(option === "on"){
                    setTimeout(function(){
                        for(i=0, j=mainTextSkill.length; i<j; i++){
                            $(SKILLS_MAIN_TEXT).append("<span class='textMain'>"+mainTextSkill[i]+"</span>");
                            var b = $(SKILLS_MAIN_TEXT).children();
                            show(b, "textMainJS", 50, "add");
                        }
                        padding_cont(0, $(".Three > .cont"));
                    }, time);
                }
            }
            function menu_skills_animate(option, time = 0){
                setTimeout(function(){
                    if(option === "on"){
                        $(MENU_SKILLS_CONTAINER).addClass("menuSkillsContainerJS");
                    }if(option === "off"){
                        $(MENU_SKILLS_CONTAINER).removeClass("menuSkillsContainerJS");
                    }
                }, time);
            }
            function menu_skills(option, time = 0){
                setTimeout(function(){
                    if(option === "on"){
                        $(MENU_SKILLS_CONTAINER).addClass("menuSkillsContainerJS2");
                        menu_skills_animate(option);
                    }if(option === "off"){
                        $(MENU_SKILLS_CONTAINER).removeClass("menuSkillsContainerJS2");
                        menu_skills_animate(option);
                    }
                }, time);
            }
            function content_page_three_create(el, nr, time = 0){
                setTimeout(function(){
                    for(let r=0, s = skillPointArray.length; r<s; r++){
                        $(SKILLS_CONTAINER).append("<div class='skillsPointContainer'></div>");
                        show($(SKILLS_CONTAINER).children('.skillsPointContainer'), "skillsPointContainerJS", 250, "add");
                    }
                    var a = $(SKILLS_CONTAINER).children().not(".menuSkillsContainer");
                    for(let t=0, u=$(a).length; t<u; t++){
                        add_class($(a[0]), "firstContainerSkills");
                        if(t>0){
                            $(a[t]).append("<img class='skillsImg' src='img/icn/skill_"+nr+"_"+t+".png'/>");
                        }
                        $(a[t]).append("<div class='skillsText'>" + skillPointArray[t] + "</div>");
                    }
                    padding_cont(0, $(".Three > .cont"));
                }, time);
                var skillPointArray = el[nr];
            }
            function content_page_three_fast_remove(time = 0){
                setTimeout(function(){
                    $(SKILLS_CONTAINER).children('.skillsPointContainer').css({"left": "-100px", "opacity": 0});
                    setTimeout(function(){
                        $(SKILLS_CONTAINER).children('.skillsPointContainer').remove();
                    }, 600);
                }, time);
            }
            function indictaor_in_menu_skill_move(el){
                $(el).on({
                    mouseenter: () => $(el).prepend("<div class='shadowMenuSkill'></div>"),
                    mouseleave: () => $(el).children(".shadowMenuSkill").remove(),
                    mousemove: (event) => {
                        let a = $(el).children(".shadowMenuSkill");
                        let relX = event.pageX - $(el).offset().left;
                        let relY = event.pageY - $(el).offset().top;
                        $(a).css({"left": relX, "top": relY});
                    }
                });
            }
            function resize_indicator(){
                var a = $(".shadowMenuSkill");
                $(a).addClass("shadowMenuSkillJS");
                setTimeout(function(){
                    $(a).removeClass("shadowMenuSkillJS");
                }, 200);
            }
    // -- STRONA CZWARTA -- //
        // -- STAŁE, ZMIENNE
        const MENU_TAB_EDU = $(MENU_POINTS[3]);
        const MENU_TAB_NOT_EDU = $(MENU_POINTS[3]).siblings(".menuPunkty");
        const FOUR_PAGE = $(".Four");
        const EDU_CONT = $(".eduContainer");
        var colorArr = ["#bf6df7", "#f0e034", "#89fca0", "#f97284"];
        var EDU_PACK = $(FOUR_PAGE).children(".pack").children(".contChildren");
        var EDU_CONT_ARR = $(EDU_PACK).children(".eduContainer");
        var EDU_TXT_ARR = $(EDU_CONT).children(".eduTxt");
        var t1 = ["POZIOM PODSTAWOWY", "WRZESIEŃ 2020", "ISTQB, SJSI"];
        var t2 = ["TESTER OPROGRAMOWANIA", "SIERPIEŃ - MARZEC 2020", "SOFTWARE DEVELOPMENT ACADEMY"];
        var t3 = ["ADMINISTRACJA", "2010 - 2008", "UNIWERSYTET MIKOŁAJA KOPERNIKA W TORUNIU"];
        var t4 = ["ADMINISTRACJA", "2008 - 2005", "UNIWERSYTET KAZIEMIERZA WIELKIEGO W BYDGOSZCZY"];
        if(lang === "eng"){
            t1 = ["BASIC LEVEL", "SEPTEMBER 2020", "ISTQB, SJSI"];
            t2 = ["SOFTWARE TESTER", "AUGUST - MARCH 2020", "SOFTWARE DEVELOPMENT ACADEMY"];
            t3 = ["ADMINISTRATION", "2010 - 2008", "NICOLAUS COPERNICUS UNIVERSITY IN TORUŃ"];
            t4 = ["ADMINISTRATION", "2008 - 2005", "THE UNIVERSITY OF KAZIMIRZ WIELKI IN BYDGOSZCZ"];
        }
        var tt = [t1, t2, t3, t4];
        var t5 = ["kierunek", "okres nauki", "instytucja"];
        // -- START FUNKCJI
        // -- eventy
        MENU_TAB_EDU.on("click" , function(){
            setTimeout(function(){
                iteration_without_continue(zmien_wyglad_strony_edu_po_klikaniu_w_punkty_menu_glownego, EDU_CONT);
                stworz_div_dla_dynamicznego_motywu(40);
                setTimeout(function(){
                    stan_poczatkowy_dynamic_theme();
                }, 200); 
                padding_cont(0, $(".packFour"));
            }, 1600);
            
        });
        MENU_TAB_NOT_EDU.on("click" , function(){
            iteration_without_continue(przywroc_wyglad_strony_edu_po_klikaniu_w_punkty_menu_glownego, EDU_CONT);
        });
        $(EDU_CONT).each(function(){
            function zmien_wyglad_edu_cont_po_najechaniu_myszka(ths, callback){
                $(ths).on("mouseenter" , function(){
                    var ind = $(ths).index();
                    zmien_kontenery_edu(ths);
                    zmien_dynamic_theme(ind);
                    callback(ths);
                });
            }
            function zmien_wyglad_edu_cont_po_zjechaniu_myszki(ths){
                $(ths).on("mouseleave" , function(){
                    usun_zmiany_kontenery_edu(ths);
                    stan_poczatkowy_dynamic_theme();
                });
            }
            zmien_wyglad_edu_cont_po_najechaniu_myszka($(this), zmien_wyglad_edu_cont_po_zjechaniu_myszki);
        });
        // -- funkcje
        
        // -- 1
        function zmien_wyglad_strony_edu_po_klikaniu_w_punkty_menu_glownego(i){
            setTimeout(function(){
                $(EDU_CONT_ARR[i]).addClass("eduContainerJS");
                $(EDU_TXT_ARR[i]).addClass("eduTxtJS");
            }, 200 + 100 * i);
        } 
        function przywroc_wyglad_strony_edu_po_klikaniu_w_punkty_menu_glownego(i){
            setTimeout(function(){
                $(EDU_CONT_ARR[i]).removeClass("eduContainerJS");
                $(EDU_TXT_ARR[i]).removeClass("eduTxtJS");
            }, 50 + 50 * i);
            usun_div_dla_dynamicznego_motywu();
        } 
        // -- 2
        function zmien_kontenery_edu(element){
            var indx = element.index();
            var EL1_BRACIA_EDU = element.siblings(".eduContainer");
            var EL3_TXT = EL1_BRACIA_EDU.children(".eduTxt");
            var CURRENT_ARRAY = $(tt[indx]);
            add_class($(EDU_CONT_ARR), "eduContBG_4");
            remove_class(EL3_TXT, "eduTxtJS");
            EL1_BRACIA_EDU.prepend("<div class='added'></div>");
            var EL4_ADDED = EL1_BRACIA_EDU.children(".added");
            iteration(dodaj_nowy_tekst_do_braci_edu, EL4_ADDED, indx);
            // -- funkcje pomocnicze
            function dodaj_nowy_tekst_do_braci_edu(i){
                $(EDU_CONT).css({"box-shadow": "inset 0 0 20px 2px" + colorArr[indx], "color": "white"});
                $(EL4_ADDED[i]).text(CURRENT_ARRAY[i]);
                $(EL4_ADDED[i]).css("color", colorArr[indx]);
                setTimeout(function(){
                    add_class($(EL4_ADDED[i]), "addedJS");
                }, 50);
                
            }
        }
        // -- 3
        function usun_zmiany_kontenery_edu(element){
            var indx = element.index();
            var EL1_BRACIA_EDU = element.siblings(".eduContainer");
            var EL3_TXT = EL1_BRACIA_EDU.children(".eduTxt");
            var EL4_ADDED = EL1_BRACIA_EDU.children(".added");
            remove_class($(EDU_CONT_ARR), "eduContBG_4");
            iteration(usun_dodany_tekst_z_braci_edu, EL4_ADDED, indx);
            przywroc_txt();
            // -- funkcje pomocnicze
            function przywroc_txt(){
                var currentTheme = getComputedStyle(document.body).getPropertyValue('--myTheme');
                $(EDU_CONT).css({"box-shadow": "inset 0 0 20px 2px " + currentTheme});
                add_class($(EL3_TXT), "eduTxtJS");
            }
            function usun_dodany_tekst_z_braci_edu(i){
                $(EL4_ADDED[i]).remove();
            }
            
        }
        // -- 4
        function iteration(callback, el_length__to_iteration, index, i){
            if (typeof callback !== 'function') {
                callback = false;
            }
            if (callback) {
                for(i=0; i<el_length__to_iteration.length; i++){
                    callback(i);
                    if( i == index ){
                        continue;
                    }
                }
            }
        }
        // -- 5
        function iteration_without_continue(callback, el_length_to_iteration, i){
            if (typeof callback !== 'function') {
                callback = false;
            }
            if (callback) {
                for(i=0; i<el_length_to_iteration.length; i++){
                    callback(i);
                }
            }
        }
        // -- 6
        function stworz_div_dla_dynamicznego_motywu(nr_of_div){
            for(i=0; i<nr_of_div; i++){
                $(FOUR_PAGE).append("<div class='dynamicTheme'></div>"); 
            }
        }
        // -- 7
        function stan_poczatkowy_dynamic_theme(){
            var currentTheme = getComputedStyle(document.body).getPropertyValue('--myTheme');
            var ARR_THEME = $(".dynamicTheme");
            for(z=0; z<ARR_THEME.length; z++){
                var nw = 76;
                change_par_wid_page_three();
                var newTop = Math.floor(Math.random() * 101);
                var newLeft = Math.floor(Math.random() * 101);
                var newWidthHeight = Math.floor(Math.random() * nw + 5);
                var newOpa = "0." + Math.floor(Math.random() * 11 + 5);
                $(ARR_THEME[z]).css({
                    "left":  newLeft + "%", 
                    "top": newTop + "%",
                    "width": newWidthHeight + "px", 
                    "height": newWidthHeight + "px",
                    "opacity": newOpa,
                    "background-color": currentTheme
                    });
            }
            function change_par_wid_page_three(){
                var resize_700 = window.matchMedia("(max-width: 700px)");
                if (resize_700.matches) { 
                    nw = 16;
                } else {
                    nw = 76;
                }
            }
            $(EDU_CONT).each(function(){
                $(this).css("color", currentTheme);
            });
        }
        // -- 8
        // najazd myszki
        function zmien_dynamic_theme(indx){
            var ARR_THEME = $(".dynamicTheme");
            var TABLICA_OFFSETS = [];
            for(s=0; s<EDU_CONT.length; s++){
                let par = $(EDU_CONT[s]).offset();
                TABLICA_OFFSETS.push(Math.floor(par.left), Math.floor(par.top));
            }
            var elWidth = $(EDU_CONT).width();
            var NEW_LEFT = elWidth - 70;
            var NEW_TOP = elWidth - 170;
            var MOVE_UP = 40;
            function change_par_moveup_page_three(){
                var resize_700 = window.matchMedia("(max-width: 700px)");
                if (resize_700.matches) { 
                    MOVE_UP = 0;
                } else {
                    MOVE_UP = 40;
                }
            }
            change_par_moveup_page_three();
            for(z=0; z<ARR_THEME.length; z++){
                var randomNr = Math.floor(Math.random() * 11);
                var ELEMENTS = ARR_THEME[z];
                change_wid_hei_random_square(ELEMENTS, 2, randomNr);
                change_background(ELEMENTS, colorArr, indx);
                change_opacity(ELEMENTS);
                if(z >= 0 && z <= ARR_THEME.length / 4){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[0] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[1] + MOVE_UP, NEW_TOP);
                }
                if(z > ARR_THEME.length / 4 && z <= ARR_THEME.length / 2){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[2] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[3] + MOVE_UP, NEW_TOP);
                }
                if(z > ARR_THEME.length / 2 && z <= ARR_THEME.length - (ARR_THEME.length / 4)){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[4] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[5] + MOVE_UP, NEW_TOP);
                }
                if(z > ARR_THEME.length - (ARR_THEME.length / 4)){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[6] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[7] + MOVE_UP, NEW_TOP);
                }
            }
            
        }
        // -- 9
        function usun_div_dla_dynamicznego_motywu(){
            $(FOUR_PAGE).children(".dynamicTheme").remove();
        }
        // -- funkcje dodatkowe ogolne
        const change_left_random = (el, offLeft, randmNr) => $(el).css({"left":  offLeft + randomNr(randmNr) + "px"});
        const change_top_random = (el, offTop, randmNr) => $(el).css({"top":  offTop + randomNr(randmNr) + "px"});
        const change_background = (el, arrayName, b=indx) => $(el).css({"background-color": arrayName[b]});
        const change_opacity = (el) => $(el).css({"opacity": "1"});
        const change_wid_hei_random_square = (el, minDim, randmNr) => $(el).css({"width": minDim + randmNr + "px", "height": minDim + randmNr + "px"});
        var randomNr = (a) => Math.floor(Math.random() * a);
    
    // -- STRONA PIATA -- //
        // -- STAŁE, ZMIENNE
        const ICON_CONT = $(".societyCont");
        const DOCS_CONT = $(".documentsCont");
        const EMAIL_PHONE_CONT = $(".emailPhoneCont");
        const MAIL = $("#mail");
        const PHONE = $("#phone");
        var ADRESS = ["https://www.linkedin.com/in/lukaszlewandowskilaboratorium/", "https://www.facebook.com/lukasz.lewandowski.14/", "https://github.com/LukaszLevy/lukaszlewandowski.pl", "https://profil.pracuj.pl/?_ga=2.86218074.371591003.1604301688-1302104470.1604301688&_gac=1.83668452.1604314620.CjwKCAiA-f78BRBbEiwATKRRBHI3vFWBWTwBpfXAWVG9JpBK2ByUiXVp6DfYZC6S-NMisIWJUbRjpxoCDiEQAvD_BwE"];
        var TEXT_ADD_ICON = ["LINKEDIN", "FACEBOOK", "GITHUB", "PRACUJ.PL"];
        var NEW_TEXT_PROFILE = "Przejdź do profilu";
        var OLD_TEXT_PROFILE = "Moje profile";
        var DOCS_LINK_ARR = ["img/docs/cv.pdf",  "img/docs/istqb_pl_s.png", "img/docs/sda_tester_s.png", "img/docs/sda_scrum_s.png"]; 
        var TEXT_ADD_DOCS = ["CV", "ISTQB", "SDA TESTER", "SDA SCRUM"];
        var NEW_TEXT_DOCS = "Pobierz dokument";
        var OLD_TEXT_DOCS = "Dokumenty";
        var NEW_TXT_MAIL = "Wyślij";
        var NEW_TXT_PHONE = "792 017 763";
        var OLD_TXT_MAILPHONE = "Kontakt";
        var SITE_CHILDREN_EL = [ICON_CONT, DOCS_CONT, EMAIL_PHONE_CONT];
        if(lang === "eng"){
            NEW_TEXT_PROFILE = "Go to profile";
            OLD_TEXT_PROFILE = "My profiles";
            NEW_TEXT_DOCS = "Download the document";
            OLD_TEXT_DOCS = "Documents";
            NEW_TXT_MAIL = "Send";
            OLD_TXT_MAILPHONE = "Contact";
        }
        // -- FUNKCJE
        var stworz_ikony = () => {
            for(i=0; i<TEXT_ADD_ICON.length; i++){
                ICON_CONT.append("<a target='_blank' class='contactLinks' href='" + ADRESS[i] + "'><img class='icons' src='img/icn/soci_"+i+".png'><span class='iconsName'>"+TEXT_ADD_ICON[i]+"</span></a>");
            }
        };
        var stworz_docs = () => {
            for(i=0; i<TEXT_ADD_DOCS.length; i++){
                DOCS_CONT.append("<a class='contactLinks' download='1' href='" + DOCS_LINK_ARR[i] + "'><img class='icons' src='img/icn/docs_"+i+".png'><span class='iconsName'>"+TEXT_ADD_DOCS[i]+"</span></a>");
            }
        };
        stworz_ikony();
        stworz_docs();
        function zmien_kontenery_i_nazwy(el, newTxt, orgTxt){
            $(el).on("mouseover", function() {
                var a = $(this).children(".secTitle");
                add_class($(this), "contJS");
                add_class($(a), "secTitleJS");
                $(a).text(newTxt);
            });
            $(el).on("mouseleave", function() {
                var a = $(this).children(".secTitle");
                remove_class($(this), "contJS");
                remove_class($(a), "secTitleJS");
                $(a).text(orgTxt);
            });
        }
        function zmien_kontenery_i_nazwy_email(el){
            $(el).on("mouseover", function() {
                var a = $(this).children(".secTitle");
                add_class($(this), "contJS");
                add_class($(a), "secTitleJS");
            });
            $(el).on("mouseleave", function() {
                var a = $(this).children(".secTitle");
                remove_class($(this), "contJS");
                remove_class($(a), "secTitleJS");
            });
        }
        function zmien_tekst_sec_title(el, newTxt, orgTxt){
            $(el).on("mouseover", function() {
                $(this).siblings(".secTitle").text(newTxt);
            });
            $(el).on("mouseleave", function() {
                $(this).siblings(".secTitle").text(orgTxt);
            });
        }
        function pokaz_el_kontakt(i,el){
            setTimeout(function(){
                add_class($(el[i]), "contJS2");
            }, 100 + 150 * i);
        }
        function ukryj_el_kontakt(i,el){
            setTimeout(function(){
                remove_class($(el[i]), "contJS2");
            }, 50 + 100 * i);
        }
        function iteracja_for(el, callback){
            for(i=0; i<el.length; i++){
                callback(i,el);
            }
        }
        
        // -- EVENTY
        $(MENU_POINTS[4]).on("click", () => {
            setTimeout(function(){
                iteracja_for(SITE_CHILDREN_EL, pokaz_el_kontakt);
                padding_cont(0, $(".Five > .cont"));
            }, 1600);
        });
        $(MENU_POINTS[4]).siblings(".menuPunkty").on("click", () => {
            iteracja_for(SITE_CHILDREN_EL, ukryj_el_kontakt);
        });
        zmien_kontenery_i_nazwy(ICON_CONT, NEW_TEXT_PROFILE, OLD_TEXT_PROFILE);
        zmien_kontenery_i_nazwy(DOCS_CONT, NEW_TEXT_DOCS, OLD_TEXT_DOCS);
        zmien_kontenery_i_nazwy_email(EMAIL_PHONE_CONT);
        zmien_tekst_sec_title(MAIL, NEW_TXT_MAIL, OLD_TXT_MAILPHONE);
        zmien_tekst_sec_title(PHONE, NEW_TXT_PHONE, OLD_TXT_MAILPHONE);
    
        $(window).on("resize", function(){
            if(activePage === 1){
                padding_cont(1000, $(".packOne"), $(".contZindx"));
            }
            if(activePage === 2){
                padding_cont(1000, $(".packTwo"), $(".contMenuPage2"), $(".contMenuPage2").next());
            }
            if(activePage === 3){
                padding_cont(1000, $(".Three > .cont"));
            }
            if(activePage === 4){
                padding_cont(1000, $(".packFour"));
            }
            if(activePage === 5){
                padding_cont(1000, $(".Five > .cont"));
            }
        });
}); // finish start button function
}); // document ready finish

//-- jezyki
var elementsToTranslate = [];
var elementsToTranslateTxt = [];
var eng = [
    "Hello, ", 
    "Site prepared for recruitment purposes.", 
    "Prepared for devices with different resolutions. ", 
    "Designed and tested on browsers:", 
    "For the website to work properly, it is recommended to use the latest versions of browsers and devices with computing power equal to or higher than Snapdragon 600.", 
    "If you have an older version, you can update it by clicking on the browser names above. ", 
    "Site tested for computers with Windows 10 and devices with Android version 9+ and with Snapdragon 700+ / Snapdragon 800+ processors. IOS devices and other browsers have not been tested. In case of problems with displaying the content or the smoothness of the animation, please send me such information. The website does not collect any user data.", 
    "Start browsing", 
    "ABOUT ME", 
    "CAREER", 
    "SKILLS", 
    "EDUCATION", 
    "CONTACT", 
    "OPTIONS",
    "Main color",
    "Wallpaper tone",
    "Gray",
    "Color",
    "Main theme",
    "Gray",
    "Black",
    "Borders",
    "Show",
    "Hide",
    "more", 
    "Hi,", 
    "My name is Luke. A few months ago, I decided to change my current industry. I started learning programming, I focused my efforts on Front-End languages ​​and software testing:", 
    "Software Testing", 
    "Additionally, I completed a manual tester course and obtained a certificate", 
    "I gain programming knowledge mainly on the Internet, namely on the following portals: udemy.com, w3school.com, developer.mozilla.org, stackoverflow.com. This web page is the effects of my learning to-date", 
    "My next steps will be to improve my JavaScript programming skills and start learning", 
    "and", 
    "My goal is to start a career in the IT industry.",
    "HOW MUCH I LOVED WORK ?",
    "DUTIES", 
    "Click year to change",
    "close",
    "PROGRAMMING", 
    "SOFTWARE TESTING", 
    "OTHERS", 
    "CERTIFIED TESTER", 
    "SOFTWARE TESTER", 
    "MASTER", 
    "BACHELOR'S DEGREE", 
    "My profiles", 
    "Documents", 
    "Contact", 
    "PHONE",
];
for(k=0; k<$(".pl").length; k++){
    let a = $(".pl");
    elementsToTranslate.push($(a[k]));
    elementsToTranslateTxt.push($(a[k]).text());
}
function languagesEng(){
    if(lang === "eng"){
        for(z=0; z<elementsToTranslate.length; z++){
            $(elementsToTranslate[z]).text(eng[z]);
        }
    }
    if(lang === "pl"){
        for(x=0; x<elementsToTranslate.length; x++){
            $(elementsToTranslate[x]).text(elementsToTranslateTxt[x]);
        }
    }
}
// -- theme
var THEME_ARRAY = ["#00a1b7", "#d20000", "#de7f00", "#de0058", "#9400e8", "#007ff5"];
var MAIN_THEME_ARRAY = ["rgb(37, 37, 37)", "rgb(0,0,0)"];
var MAIN_THEME_CONTENT_ARRAY = ["rgba(37, 37, 37, .8)", "rgba(0,0,0,.7)"];
var THEME_BORDER_ARRAY = ["1px", "0"];
const ROOT = document.documentElement.style;
const WALL_THEME = $(".wall");
const THEME_COLOR_CHOOSE_OPT = $(".themeChoose");
const WALLP_COLOR_OPT = $(".wallCol");
const MAIN_THEME = $(".mainTheme");
const BORDER_THEME = $(".borderTheme");
$(THEME_COLOR_CHOOSE_OPT).each(function(index){
    var a = THEME_ARRAY[index];
    $(this).css("background-color", a);
    $(this).on("click", function(){
        set_frame_option(this, ".themeChoose");
        change_property_root('--myTheme', a);
        change_property_root('--myTxtTheme', a);
        change_property_root('--myBorder', a);
        var con = index != 0 ? change_property_root('--myGrayScaleNone', "grayscale(.9)") : change_property_root('--myGrayScaleNone', "grayscale(0)");
        return con;
    });
});
$(WALLP_COLOR_OPT).each(function(index){
    $(this).on("click", function(){
        set_frame_option(this, ".wallCol");
        var con = index === 0 ? grayscale_full(WALL_THEME) : grayscale_none(WALL_THEME);
        return con;
    });
});
$(MAIN_THEME).each(function(index){
    $(this).on({
        click: () => {
            set_frame_option(this, ".mainTheme");
            change_property_root('--myMainBackTheme', MAIN_THEME_ARRAY[index]);
            change_property_root('--myHalfMainBackTheme', MAIN_THEME_CONTENT_ARRAY[index]);
        }
    });
});
$(BORDER_THEME).each(function(index){
    $(this).on({
        click: () => {
            set_frame_option(this, ".borderTheme");
            change_property_root('--myBorderSize', THEME_BORDER_ARRAY[index]);
        }
    });
});
function change_property_root(propertyName, propertyVal){
    ROOT.setProperty(propertyName, propertyVal);
}
function set_frame_option(el, siblingsName){
    $(el).addClass("activetedSettingsFrame").siblings(siblingsName).removeClass("activetedSettingsFrame");
}
function grayscale_full(el){
    $(el).css("filter", "grayscale(.9)");
}
function grayscale_none(el){
    $(el).css("filter", "grayscale(0)");
}


// resize
const CONT = $(".cont");
const PAGE_ZERO_EL_TO_PAD = [PRELOADER, CHOOSE_LANG_SITE, INFO_START];
function padding_cont(time, ...params){
    setTimeout(function(){
        $(params).each(function(){
            let_margin(this);
        });
        function let_margin(el){
            let child = $(el).children(".contChildren");
            let childHeight = $(child).outerHeight();
            let thisHeight = $(el).outerHeight();
            let paddingVertical = Math.floor((thisHeight - childHeight) / 2);
            console.log("cont H: " + thisHeight);
            console.log("contChild H: " + childHeight);
            console.log("pad T and pad B: " + paddingVertical);
            
            if(childHeight > thisHeight){
                $(el).css({"padding-top": "30px"});
                $(el).css({"padding-bottom": "30px"});
            }else{
                $(el).css({"padding-top": paddingVertical + "px"});
                $(el).css({"padding-bottom": paddingVertical + "px"});
            }
        }
        // function let_margin_zero(el){
        //     $(el).css({"padding-top": 0});
        //     $(el).css({"padding-bottom": 0});
        // }
    }, time);
}
padding_cont(100, PRELOADER, CHOOSE_LANG_SITE, INFO_START);
padding_cont(CHOOSE_LANG_SITE);
$(window).on("resize", function(){
    padding_cont(1000, PRELOADER, CHOOSE_LANG_SITE, INFO_START);
});










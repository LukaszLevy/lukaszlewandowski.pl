var lang = "";
var isLoaded = false;
const PRELOADER = $('.preloader');
const INFO_BUT = $(".infoBut");
const INFO_START = $(".infoStart");
const START_BUTTON = $(".closeInfoStartTxt");
const POLAND = $(".pol");
const ENG = $(".ang");
const CHOOSELANG_SITE = $(".chooseLang");
const FLAG = $(".flag");
var check = function(){
    if($(PRELOADER).css("display") === "none"){
        $(CHOOSELANG_SITE).addClass("chooseLangJS");
    }
    else {
        setTimeout(check, 500); 
    }
};
check();
$( window ).load(function() {
    $(PRELOADER).fadeOut(4000);
});
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
    languagesEng();
    $(CHOOSELANG_SITE).removeClass("chooseLangJS");
    setTimeout(function(){
        $(CHOOSELANG_SITE).css("display", "none");
        $(INFO_BUT).addClass("infoButJS");
    }, 1000);
});
$(ENG).on("click", function(){
    lang = "eng";
    languagesEng();
    $(CHOOSELANG_SITE).removeClass("chooseFlagJS");
    setTimeout(function(){
        $(CHOOSELANG_SITE).css("display", "none");
        $(INFO_BUT).addClass("infoButJS");
    }, 1000);
});
// -- start strony
$( document ).ready(function() {
$(START_BUTTON).on("click", function(){
    $(INFO_START).fadeOut(500);
    // -- FUNKCJE OGÓLNE
        // -- [ 0 ] zmiana tekstu
            $.fn.extend({
                toggleText: function(a, b){
                    return this.text(this.text() == b ? a : b);
                }
            });
        // -- [ 1 ] nadanie data -index dla dowolnego elementu
            function nadaj_index(el,indexName){
                let a = 0;
                for(j=0;j<el.length;j++){
                    let currentEl = $(el[a]);
                    currentEl.attr(indexName , a);
                    a++;
                }
            }
        // -- [ 2 ] zmiana klas funkcja ogolna
            function change_class(el1,className){
                el1.toggleClass(className);
            }
        // -- [ 3 ] dodawanie klas funkcja ogolna
            function add_class(el1,className){
                el1.addClass(className);
            }
        // -- [ 4 ] usuwanie klas funkcja ogolna
            function remove_class(el1,className){
                el1.removeClass(className);
            }
    
    // NAGŁÓWEK , stopka
        // -- ZMIENNE, STAŁE
            var MENU_TAG = $('.tagMenu');
            var MENU_POINTS = $('.menuPunkty');
        // -- start funkcji ogolnych
            nadaj_index(MENU_POINTS,"index-nr");
        // -- EVENTY
        // -- [ 1 ] klikniecie w punkty menu
        MENU_POINTS.on('click' , function(){
            a = $(this);
            setTimeout(function(){
                let y = $(a).outerWidth();
                let x = $(a).position();
                let n = $(a).siblings('p');
                MENU_TAG.css({left: x.left , width: y});
                add_class($(a), 'colorMenuPunkty');
                remove_class(n, 'colorMenuPunkty');
                przewin_ekran_glowny($(a));
            },400);
        });
        $( window ).resize(function() {
            setTimeout(function(){
                let a = $(".colorMenuPunkty");
                let y = $(a).outerWidth();
                let x = $(a).position();
                MENU_TAG.css({left: x.left , width: y});
            }, 400);
            
        });
        
        // -- FUNKCJE
        // -- [ 1 ] przewinięcie ekranów głownych
            function przewin_ekran_glowny(el1){
                let mnoznik = el1.attr("index-nr");
                $(page[mnoznik]).css("left" , "0");
                let pageSi = $(page[mnoznik]);
                $(pageSi).siblings().css("left" , "100%");
            }
    // STRONA START,ONE 
        // -- ZMIENNE, STAŁE
            var page = $('.Page');
            var HELLO_BOX = $(".helloBox");
            var nameLewandowskiBox = $('.nameLewandowskiBox');
            var sloganKodowanieBox = $('.sloganKodowanieBox');
            var OPIS_O_MNIE = $(".moreInfo");
            var OPIS_O_MNIE_TXT = $(".meTxtCont");
            const CLOS_ME_INFO = $(".closeMeInfo");
        // -- START FUNKCJI OGÓLNYCH
            nadaj_index(page,"index-nr2");
        // -- FUNKCJE
        // -- [ 1 ] rozdziel napis na pojedyncze litery, stworz oddzielne elementy dla kazdej z liter, zrob petle dla kazdej z liter i ostyluj je, animuj 
            function create_word_append_to_element_and_animate(wordToAddAndStyle, whereAppendWord, mainClassForApendedWord, firstAnimateClassForWord, secondAnimateClassForWord, refreshClass){
                whereAppendWord.children("."+mainClassForApendedWord).remove();
                var appendWord = (i) => whereAppendWord.append("<span class="+mainClassForApendedWord+">"+wordToAddAndStyle[i]+"</span>");
                createLoop(appendWord, wordToAddAndStyle);
                var letters = $("."+mainClassForApendedWord);
                for(k=0; k < letters.length; k++){if($(letters[k]).text() == " "){$(letters[k]).addClass("marginLetter");}}
                if(firstAnimateClassForWord == null){}
                    else{
                        addOrRemoveNewClass(firstAnimateClassForWord, "add");
                    if(secondAnimateClassForWord == null){}
                    else{
                        addOrRemoveNewClass(secondAnimateClassForWord, "add", 900);
                    }
                }
                whereAppendWord.last().append("<img class='"+refreshClass+"'" + "src='img/icn/repeat.png' />");
                $("."+refreshClass).on("click" , function(e){
                    var time = 200;
                    if($(this).hasClass("helloLetterRefresh")){time = 500;}
                    $("."+refreshClass).remove();
                    addOrRemoveNewClass(secondAnimateClassForWord, "remove");
                    addOrRemoveNewClass(firstAnimateClassForWord, "remove", 900);
                    setTimeout(function(){
                        create_word_append_to_element_and_animate(wordToAddAndStyle, whereAppendWord, mainClassForApendedWord, firstAnimateClassForWord, secondAnimateClassForWord, refreshClass);
                    },letters.length*time);
                });
                // -- metody dodatkowe dla funkcji 1
                function createLoop(functionName, elLength){
                    for (let i = 0, k = elLength.length; i < k; i++){functionName(i);}
                }
                function addOrRemoveNewClass(currentClass, addRemove, timeOrNotime){
                    if(timeOrNotime == null){
                        var addNewClass = function(i){
                            setTimeout(function() {
                                if(addRemove == "add"){$(letters[i]).addClass(currentClass);}
                                if(addRemove == "remove"){$(letters[i]).removeClass(currentClass);}
                            }, 50 + i * 100);
                        };
                        createLoop(addNewClass, letters);
                    }else{
                        setTimeout(function(){
                            var addNewClass = function(i){
                                setTimeout(function() {
                                    if(addRemove == "add"){$(letters[i]).addClass(currentClass);}
                                    if(addRemove == "remove"){$(letters[i]).removeClass(currentClass);}
                                }, 50 + i * 100);
                            };
                            createLoop(addNewClass, letters);
                        },timeOrNotime);
                    }
                }
                
            }
            var textAnimeSiteOne = ["Cześć,", "mam na imię Łukasz", "chcę pracować w IT"];
            if(lang === "eng"){
                textAnimeSiteOne = ["Hello,", "my name is Luke", "i want to work in IT"];
            }
        // -- START FUNKCJI
            create_word_append_to_element_and_animate(textAnimeSiteOne[0], HELLO_BOX, "helloLetter", "helloLetterJS1", "helloLetterJS2", "helloLetterRefresh");
            setTimeout(function(){
                create_word_append_to_element_and_animate(textAnimeSiteOne[1], nameLewandowskiBox, "nameLetter", "nameLetterJS1", "nameLetterJS2", "nameLetterRefresh");
            }, 1000);
            setTimeout(function(){
                create_word_append_to_element_and_animate(textAnimeSiteOne[2], sloganKodowanieBox, "sloganLetter", "sloganLetterJS1", "sloganLetterJS2", "sloganLetterRefresh");
            }, 2000);
            setTimeout(function(){
                add_class($(OPIS_O_MNIE) , "moreInfoJS");
            },6500);

            $(OPIS_O_MNIE).on("click", function(){
                $(this).fadeOut(200);
                $(OPIS_O_MNIE_TXT).addClass("meTxtContJS");
            });
            $(CLOS_ME_INFO).on("click", function(){
                $(OPIS_O_MNIE_TXT).removeClass("meTxtContJS");
                $(OPIS_O_MNIE).fadeIn(200);
            });
    
            $(MENU_POINTS[0]).on("click", function(){
                setTimeout(function(){
                    iteracja_for($(".packOne").children().children(), animuj_el_site_one_2);
                    setTimeout(function(){
                        $(".wallOne").css("opacity", "1");
                    },800);
                },700);
            });
            $(MENU_POINTS[0]).siblings(".menuPunkty").on("click", function(){
                $(".wallOne").css("opacity", "0");
                iteracja_for($(".packOne").children().children(), animuj_el_site_one);
            });
            function animuj_el_site_one(i){
                setTimeout(function(){
                    let a = $(".packOne").children().children();
                    $(a[i]).addClass("siteOneChildrenJS");
                }, 100 + 100 * i);
            }
            function animuj_el_site_one_2(i){
                setTimeout(function(){
                    let a = $(".packOne").children().children();
                    $(a[i]).removeClass("siteOneChildrenJS");
                }, 100 + 100 * i);
                
            }
    
    
    // -- STRONA DRUGA, TWO -- //
        // -- ZMIENNE, STAŁE
            const WALLPAPER_PAGE_TWO = $(".wallTwo");
            const MENU_CAREER_CONTAINER = $(".menuCareerContainer");
            const MENU_CAREER_POINTS = $(".menuCareerPoints");
            const MENU_CAREER_INDICATOR = $(".menuCareerIndicator");
            const MENU_CAREER_INFO = $(".menuCareerInfo");
            const COMPANY_CONTAINER = $(".companyContainer");
            const COMPANY_NAME = $(".companyName");
            const COMPANY_POSITION = $(".companyPosition");
            const COMPANY_YEARS = $(".companyYears");
            const MENU_CAR_TIP = $(".menuCareerTip");
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
            const CAREER_LIKE_INDICATOR_CONTAINER = $(".careerLikeIndicatorConatainer");
            const CAREER_LIKE_STARS = $(".careerLikeStars");
            const DUTIES_BUTTON = $(".dutiesButton");
            const DUTIES_CONTAINER = $(".dutiesContainer");
            const DUTIES_CLOSE = $(".dutiesClose");
            
        // -- START FUNKCJI OGÓLNYCH
            nadaj_index($(COMPANY_NAME),"index-nr4");
            nadaj_index($(MENU_CAREER_POINTS),"index-nr6");
        // -- EVENTY
            $(MENU_CAREER_CONTAINER).on("mouseover" , function(){
                add_class($(MENU_CAREER_INFO), "menuCareerInfoJS");
                add_class($(MENU_CAREER_POINTS), "menuCareerPointsJS");
                add_class($(MENU_CAR_TIP), "menuCareerTipJS");
            });
        // -- zjechanie myszką z nawigacji/menu po stronie
            $(MENU_CAREER_CONTAINER).on("mouseleave" , function(){
                remove_class($(MENU_CAREER_INFO), "menuCareerInfoJS");
                remove_class($(MENU_CAREER_POINTS), "menuCareerPointsJS");
                remove_class($(MENU_CAR_TIP), "menuCareerTipJS");
            });
        // -- eventy dla punktów lat w menu
            $(MENU_CAREER_POINTS).each(function(index){
                $(this).one("click", function(){
                    add_class($(COMPANY_CONTAINER), "companyContainerJS2");
                    add_class($(CAREER_LIKE_INDICATOR_CONTAINER), "careerLikeIndicatorConatainerJS1");
                    add_class($(DUTIES_BUTTON),"dutiesButtonJS1");
                });
                $(this).on("click" , function(){
                    $(this).addClass("yearsJS").siblings(".menuCareerPoints").removeClass("yearsJS");
                    create_objects_from_boards(index, $(COMPANY_NAME),Company_Name_Board,"companyNameLettersJS1","companyNameLettersJS2");
                    show($(COMPANY_NAME).children(),"companyNameLettersJS3", 100, "add");
                    create_objects_from_boards(index, $(COMPANY_POSITION),Company_Position_Board,"companyPositionLettersJS1","companyPositionLettersJS1");
                    show($(COMPANY_POSITION).children(),"companyPositionLettersJS3", 100, "add");
                    create_objects_from_boards(index, $(COMPANY_YEARS),Company_Years_Work_Board,"companyPositionLettersJS1","companyPositionLettersJS1");
                    show($(COMPANY_YEARS).children(),"companyYearsLettersJS3", 100, "add");
                    how_i_like_job(index);
                    resize_wall_page_two(WALLPAPER_PAGE_TWO, wallTab[index], wallTabM[index]);
                });
                $(this).on("mouseover", function(){
                    $(MENU_CAREER_INDICATOR).addClass("menuCareerIndicatorJS" + index);
                });
                $(this).on("mouseleave", function(){
                    $(MENU_CAREER_INDICATOR).removeClass("menuCareerIndicatorJS" + index);
                });
            });
        //  kliknięcie w obowiazki
            $(DUTIES_BUTTON).on("click" , function(){
                let actualIndexNr = $(MENU_CAREER_CONTAINER).children(".yearsJS").index();
                hide_elements_on_page_two();
                setTimeout(function(){
                    create_elements_duties_to_duties_container(actualIndexNr); 
                    add_class($(DUTIES_CONTAINER), "dutiesContainerJS1"); 
                },400);
            });
        //  -- klikniecie w close w obowiązkach
            $(DUTIES_CLOSE).on("click" , function(){
                remove_class($(DUTIES_CONTAINER), "dutiesContainerJS1"); 
                setTimeout(function(){
                    $(DUTIES_CONTAINER).children(".dutiesBoxesJS1").remove();
                    show_elements_on_page_two();
                },400); 
            });
        // -- klikniecie w punkty menu glownego
            $(MENU_POINTS[1]).siblings(".menuPunkty").on("click", function(){
                WALLPAPER_PAGE_TWO.css("opacity", "0");
                iteracja_for($(".packTwo").children(), animuj_children_page_two);
            });
            function animuj_children_page_two(i){
                setTimeout(function(){
                    let a = $(".packTwo").children();
                    $(a[i]).addClass("siteChildrenJS");
                }, 20 + 200 * i); 
            }
        // -- FUNKCJE
        // -- funkcja zmieniajća tło drugiej strony w zależności czy urządzenie małe / duże
        function resize_wall_page_two(el, wall, wallM){
            var resize_600 = window.matchMedia("(max-width: 600px)");
            if (resize_600.matches) { 
                $(el).css("background-image", wallM);
            } else {
                $(el).css("background-image", wall);
            }
        }
        // -- funkcja pokaz ukryj po kliknieciu menu kariery
            function show_hide_menu_career(){
                change_class($(MENU_CAREER_CONTAINER), "menuCareerContainerJS");
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
        // -- funkcja ukryj elementy strony drugiej - menu, company, stars, duties button
        function hide_elements_on_page_two(){
            show_hide_menu_career();
            remove_class($(COMPANY_CONTAINER), "companyContainerJS2");
            remove_class($(CAREER_LIKE_INDICATOR_CONTAINER), "careerLikeIndicatorConatainerJS1");
            remove_class($(DUTIES_BUTTON), "dutiesButtonJS1");
        }
        // -- funkcja pokaż elementy strony drugiej - menu, company, stars, duties button
        function show_elements_on_page_two(){
            show_hide_menu_career();
            add_class($(COMPANY_CONTAINER), "companyContainerJS2");
            add_class($(CAREER_LIKE_INDICATOR_CONTAINER), "careerLikeIndicatorConatainerJS1");
            add_class($(DUTIES_BUTTON), "dutiesButtonJS1");
        }
        $(MENU_POINTS[1]).on("click", function(){
            setTimeout(function(){
                $(".packTwo").children().removeClass("siteChildrenJS");
                setTimeout(function(){
                    WALLPAPER_PAGE_TWO.css("opacity", "1");
                },700);
            },700);
        });
        
    
    
    
    // -- STRONA TRZECIA -- //
        // -- STAŁE, ZMIENNE
            const SKILLS_MAIN_TEXT = $(".skillsMainText");
            const SKILLS_CONTAINER = $(".skillsContainer");
            const MENU_SKILLS_TABS = $(".menuSkillsTabs");
            const MENU_SKILLS_INDICATOR = $(".menuSkillsIndicator");
            const MENU_SKILLS_CONTAINER = $(".menuSkillsContainer");
            var programmingSkills = 
            [
                "Języki i narzędzia poznane w trakcie samonauczania rozpoczętego w Marcu 2020", "JQuery", "Java Script" , 
                "HyperText Markup Language 5" , "Cascading Style Sheets 3", "Sass", "GitHub", "Visual Studio Code", "IntelliJ IDEA", "Responsive Web Design"
            ];
            var testingSkills = 
            [   
                "Zakres programowy i narzędzia poznane w trakcie kursu na testera oprogramowania organizowanego przez Software Development Academy Gdynia od Marca do Sierpnia 2020 [ 105h ]", 
                "Certyfikat ISTQB" , "Certyikat SDA" , "Test Rail" , "Jira" , "Agile, Scrum, Kanban", "Selenium IDE", 
                "Podstawy Selenium Web Driver", "Gherkin, Cucumber", "Podstawy SQL, JAVA", "Testowanie manulane, automatyzacja" 
            ];
            var othersSkills = 
            [
                "Umiejętności zdobyte w trakcie kariery zawodowej", "Język Angielski B1-B2", "Prawo Jazdy kat. B" , "Znajomość Norm Budowlanych", 
                "Znajomość Branży - Budowa Dróg" , "MS Windows", "MS Office"
            ];
            var mainTextSkill = "CZEGO SIĘ UCZĘ ?";
            if(lang === "eng"){
                programmingSkills = 
                [
                    "Languages ​​and tools learned during the self-learning process started in March 2020", "JQuery", "Java Script" , 
                    "HyperText Markup Language 5" , "Cascading Style Sheets 3", "Sass", "GitHub", "Visual Studio Code", "IntelliJ IDEA", "Responsive Web Design"
                ];
                testingSkills = 
                [   
                    "Program scope and tools learned during the software tester course organized by Software Development Academy Gdynia from March to August 2020 [105h]", 
                    "ISTQB Certificate" , "SDA Certificate" , "Test Rail" , "Jira" , "Agile, Scrum, Kanban", "Selenium IDE", 
                    "Selenium Web Driver Basics", "Gherkin, Cucumber", "SQL Basics, JAVA", "Manual testing, automation" 
                ];
                othersSkills = 
                [
                    "Skills acquired during a professional career", "English B1-B2", "Driving license. B" , "Knowledge of Building Standards", 
                    "Industry Knowledge - Road Construction" , "MS Windows", "MS Office"
                ];
                mainTextSkill = "WHAT AM I LEARNING ?";
            }
            
            var arrayOfSkills = [programmingSkills, testingSkills, othersSkills];
            var flagsSkill = true;
        // -- EVENTY
        // -- [ 1 ] klikanie w punkty menu strony 3
            $(MENU_SKILLS_TABS).each(function(){
                $(this).on("click" , function(){
                    let w = $(this).index()-1;
                    let x = $(MENU_SKILLS_TABS).length;
                    let y = $(this).position();
                    let z =  $(this).outerWidth();
                    $(SKILLS_MAIN_TEXT).children().remove();
                    $(MENU_SKILLS_INDICATOR).css("opacity" , ".9");
                    $(MENU_SKILLS_INDICATOR).width(z);
                    $(MENU_SKILLS_INDICATOR).css("left" , y.left);
                    remElements(arrayOfSkills, w);
                    setTimeout(function(){
                        $(SKILLS_CONTAINER).children('.skillsPointContainer').remove();
                    },600);
                    setTimeout(function(){
                        addElements(arrayOfSkills, w);
                    },750);
                });
                $(this).on("mouseover", function(){
                    remove_class($(MENU_SKILLS_CONTAINER) , "menuSkillsContainerJS");
                });
            });
            
        // -- [ 2 ] glowne menu punkty, klikanie
            $(MENU_POINTS[2]).on("click" , function(){
                if(flagsSkill == true){
                    setTimeout(function(){
                        animujTextSkills();
                    }, 400);
                }
                flagsSkill = false;
                setTimeout(function(){
                    add_class($(MENU_SKILLS_CONTAINER) , "menuSkillsContainerJS2");
                }, 1200);
                setTimeout(function(){
                    add_class($(MENU_SKILLS_CONTAINER) , "menuSkillsContainerJS");
                }, 2200);
                
            });
            $(MENU_POINTS[2]).siblings().on("click" , function(){
                flagsSkill = true;
                $(SKILLS_MAIN_TEXT).children().remove();
                $(SKILLS_CONTAINER).children('.skillsPointContainer').remove();
                $(MENU_SKILLS_INDICATOR).css("opacity" , "0");
                remove_class(MENU_SKILLS_CONTAINER , "menuSkillsContainerJS menuSkillsContainerJS2");
            });
        // -- FUNKCJE
        // -- [ 1 ] dodaj punkty obowiazkow [kontenry] z odpowiedzniej tablicy do html, nadaj klasy, dodaj zdjecia i opisy
            function addElements(el, nr){
                let skillPointArray = el[nr];
                for(let r=0, s = skillPointArray.length; r<s; r++){
                    $(SKILLS_CONTAINER).append("<div class='skillsPointContainer'></div>");
                    show($(SKILLS_CONTAINER).children('.skillsPointContainer'), "skillsPointContainerJS", 100, "add");
                }
                let a = $(SKILLS_CONTAINER).children().not(".menuSkillsContainer");
                for(let t=0, u=$(a).length; t<u; t++){
                    add_class($(a[0]), "firstContainerSkills");
                    if(t>0){
                        $(a[t]).append("<img class='skillsImg' src='img/icn/skill_"+nr+"_"+t+".png'/>");
                    }
                    $(a[t]).append("<div class='skillsText'>" + skillPointArray[t] + "</div>");
                }
            }
        // - [ 2 ] usun dodane umiejetnosci ze strony
            function remElements(el, nr){
                let b = el[nr].length;
                for(let r=b; r>=0; r--){
                    show($(SKILLS_CONTAINER).children('.skillsPointContainer'), "skillsPointContainerJS", 50, "rem");
                }
            }
        // -- [ 3 ] animuj slogan na stronie skill
            function animujTextSkills(){
                for(i=0, j=mainTextSkill.length; i<j; i++){
                    $(SKILLS_MAIN_TEXT).append("<span class='textMain'>"+mainTextSkill[i]+"</span>");
                    let b = $(SKILLS_MAIN_TEXT).children();
                    show(b, "textMainJS", 50, "add");
                }
            }
        // -- [ 4 ] wskaznik na menu skills , na ruszanie myszka
        function trial(el){
            $(el).on("mouseenter" , function(){
                $(this).prepend("<div class='shadowMenuSkill'></div>");
            });
            $(el).on("mouseleave" , function(){
                $(this).children(".shadowMenuSkill").remove();
            });
            $(el).on("mousemove" , function(event){
                let a = $(this).children(".shadowMenuSkill");
                let relX = event.pageX - $(this).offset().left;
                let relY = event.pageY - $(this).offset().top;
                $(a).css("left" , relX);
                $(a).css("top" , relY);
            });
        }
        
        // -- START FUNKCJI
        trial(MENU_SKILLS_CONTAINER);
    
    
    
    // -- STRONA CZWARTA -- //
        // -- STAŁE, ZMIENNE
        const MENU_TAB_EDU = $(MENU_POINTS[3]);
        const MENU_TAB_NOT_EDU = $(MENU_POINTS[3]).siblings(".menuPunkty");
        const FOUR_PAGE = $(".Four");
        const EDU_CONT = $(".eduContainer");
        var colorArr = ["#bf6df7", "#f0e034", "#89fca0", "#f97284"];
        var colorArrImg = [
            "linear-gradient(to right top, #d8d8d8, #cbc1e6, #c2a8f0, #bf8df6, #c06df7)", 
            "linear-gradient(to right top, #cfcfcf, #ddc8d9, #f9becb, #ffb9a6, #ffc07a, #ffc965, #fcd34e, #f0e034, #f0e034, #f0e034, #f0e034, #f0e034)", 
            "linear-gradient(to right top, #cfcfcf, #c7d4e8, #a5dffc, #72ecfd, #52f6e3, #5af9d0, #6ffbb9, #89fca0, #89fca0, #89fca0, #89fca0, #89fca0)", 
            "linear-gradient(to right top, #cfcfcf, #ccc2d4, #d3b2d1, #e0a0c5, #ee8caf, #f383a2, #f77a94, #f97284, #f97284, #f97284, #f97284, #f97284)"
        ];
        var EDU_PACK = $(FOUR_PAGE).children(".pack");
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
            iteration_without_continue(zmien_wyglad_strony_edu_po_klikaniu_w_punkty_menu_glownego, EDU_CONT);
            stworz_div_dla_dynamicznego_motywu(40);
            setTimeout(function(){
                stan_poczatkowy_dynamic_theme();
            }, 200); 
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
                $(EDU_CONT[i]).addClass("eduContainerJS");
                $(EDU_TXT_ARR[i]).addClass("eduTxtJS");
            }, 800 + 150 * i);
        } 
        function przywroc_wyglad_strony_edu_po_klikaniu_w_punkty_menu_glownego(i){
            setTimeout(function(){
                $(EDU_CONT_ARR[i]).removeClass("eduContainerJS");
                $(EDU_TXT_ARR[i]).removeClass("eduTxtJS");
            }, 50 + 50 * i);
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
                $(EDU_CONT).css({"box-shadow": "0 0 20px 0px" + colorArr[indx]});
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
                $(EDU_CONT).css({"box-shadow": "rgba(0, 161, 183, 1) 0 0 20px 0px, inset 0 0 20px 0 rgba(0, 161, 183, 1)"});
                
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
            usun_div_dla_dynamicznego_motywu();
            for(i=0; i<nr_of_div; i++){
                $(FOUR_PAGE).append("<div class='dynamicTheme'></div>"); 
            }
        }
        // -- 7
        function stan_poczatkowy_dynamic_theme(){
            var ARR_THEME = $(".dynamicTheme");
            for(z=0; z<ARR_THEME.length; z++){
                var newTop = Math.floor(Math.random() * 101);
                var newLeft = Math.floor(Math.random() * 101);
                var newWidthHeight = Math.floor(Math.random() * 16 + 5);
                var newOpa = "0." + Math.floor(Math.random() * 11 + 5);
                $(ARR_THEME[z]).css({
                    "left":  newLeft + "%", 
                    "top": newTop + "%",
                    "width": newWidthHeight + "px", 
                    "height": newWidthHeight + "px",
                    "opacity": newOpa,
                    "background-image": "linear-gradient(to top, #39eeff, #2fdbee, #25c9dc, #1cb7ca, #11a5b9)",
                    "border-radius": "50%"
                    });
            }
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
            var NEW_TOP = elWidth - 70;
            for(z=0; z<ARR_THEME.length; z++){
                var randomNr = Math.floor(Math.random() * 11);
                var ELEMENTS = ARR_THEME[z];
                change_wid_hei_random_square(ELEMENTS, 2, randomNr);
                change_background(ELEMENTS, colorArrImg, indx);
                change_opacity(ELEMENTS);
                if(z >= 0 && z <= ARR_THEME.length / 4){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[0] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[1] + 40, NEW_TOP);
                }
                if(z > ARR_THEME.length / 4 && z <= ARR_THEME.length / 2){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[2] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[3] + 40, NEW_TOP);
                }
                if(z > ARR_THEME.length / 2 && z <= ARR_THEME.length - (ARR_THEME.length / 4)){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[4] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[5] + 40, NEW_TOP);
                }
                if(z > ARR_THEME.length - (ARR_THEME.length / 4)){
                    change_left_random(ELEMENTS, TABLICA_OFFSETS[6] + 40, NEW_LEFT);
                    change_top_random(ELEMENTS, TABLICA_OFFSETS[7] + 40, NEW_TOP);
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
        const change_background = (el, arrayName, b=indx) => $(el).css({"background-image": arrayName[b]});
        const change_opacity = (el) => $(el).css({"opacity": "1", "border-radius": "10px"});
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
            }, 1000 + 150 * i);
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
                $(".wallFive").css("opacity", "1");
            }, 1500);
            iteracja_for(SITE_CHILDREN_EL, pokaz_el_kontakt);
        });
        $(MENU_POINTS[4]).siblings(".menuPunkty").on("click", () => {
            $(".wallFive").css("opacity", "0");
            iteracja_for(SITE_CHILDREN_EL, ukryj_el_kontakt);
            
        });
        zmien_kontenery_i_nazwy(ICON_CONT, NEW_TEXT_PROFILE, OLD_TEXT_PROFILE);
        zmien_kontenery_i_nazwy(DOCS_CONT, NEW_TEXT_DOCS, OLD_TEXT_DOCS);
        zmien_kontenery_i_nazwy_email(EMAIL_PHONE_CONT);
        zmien_tekst_sec_title(MAIL, NEW_TXT_MAIL, OLD_TXT_MAILPHONE);
        zmien_tekst_sec_title(PHONE, NEW_TXT_PHONE, OLD_TXT_MAILPHONE);
    
    
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
    "more", 
    "Hi,", 
    "My name is Luke. A few months ago, I decided to change my current industry. I started learning programming, I focused my efforts on Front-End languages ​​and software testing:", 
    "Software Testing", 
    "Additionally, I completed a manual tester course and obtained a certificate", 
    "I gain programming knowledge mainly on the Internet, namely on the following portals: udemy.com, w3school.com, developer.mozilla.org, stackoverflow.com. This web page is the effects of my learning to-date", 
    "My next steps will be to improve my JavaScript programming skills and start learning", 
    "and", 
    "My goal is to start a career in the IT industry.",
    "Click year to change",
    "HOW MUCH I LOVED WORK ?", 
    "DUTIES", 
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












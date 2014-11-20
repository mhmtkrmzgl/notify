/**
 * @fileOverview jquery-notify, the jQuery basic notify function
 * @author <a href="mailto:mhmtkrmzgl@gmail.com">Mehmet Kırmızıgül</a>
 * Facebook --> https://www.facebook.com/mhmtkrmzgl
 * Twitter  --> http://www.twitter.com/mhmtkrmzgl
 * @version 1.0
 * @requires jQuery
 * @see https://github.com/mhmtkrmzgl/notify
 */
$(function(){
    
    $.notify = function(value,opt){
        
        if(value == "beklet"){
            var deger = "Lütfen Bekleyiniz ...";
        }
        else{
            var deger = value;
        }        
        $('div.seritle').remove();
        $("body").append('<div class="seritle"><span class="notify">'+deger+'<a class="kapat">x</a></span></div>');
        $("div.seritle").css({
            "z-index":"9999",
            "display": "block",
            "background": "transparent",
            "position": "fixed",
            "width" : "100%",
            "top": "0",
            "left" : "0",
            "padding": "20px 0",
        });
        $("span.notify").css({   
            "position": "relative", 
            "display": "none",  
            "float" : "right",
            "margin" : "0 30px",
            "text-align": "center",
            "color": "#fff",
            "padding": "15px 35px 15px 50px",
            "font" : "12px Verdana",
            "color": "#fff",
            "border-radius": "3px",
            "text-align": "center",
            "font-weight": "bolder"
        });
        $("a.kapat").css({    
            "display": "block",
            "position": "absolute",
            "top":"7px",
            "right":"5px",
            "color": "#fff",
            "width" : "100%",
            "padding": "5px",
            "margin" : "0 auto",
            "font" : "15px Verdana",
            "color": "#fff",
            "text-align": "right",
            "font-weight": "bolder",
            "cursor": "pointer"
        });
        
        if(opt == 'onay'){
            $("span.notify").css({
                "background": "#7cc476 url(bg-icons/yes.png)",
                "box-shadow": "0 2px 3px #7cc476",
                "background-repeat" : "no-repeat",
                "background-size" : "20px 20px",
                "background-position" : "15px center"
            });
        }
        else if(opt == 'hata'){
            $("span.notify").css({
                "background": "#c47676 url(bg-icons/no.png)",
                "box-shadow": "0 2px 3px #c47676",
                "background-repeat" : "no-repeat",
                "background-size" : "20px 20px",
                "background-position" : "15px center"
            });
        }
        else{
            $("span.notify").css({
                "background": "#ccaa46 url(bg-icons/attent.png)",
                "box-shadow": "0 2px 3px #ccaa46",
                "background-repeat" : "no-repeat",
                "background-size" : "20px 20px",
                "background-position" : "15px center"
            });
        }
        
        $("span.notify").slideDown(300);
        
        if(value == "yoket"){
            $("span.notify").slideUp(300);
            setTimeout("$('div.seritle').remove()", 500);
        }      
        else if(value != "beklet"){
            setTimeout("$('span.notify').slideUp(300)", 4500);
            setTimeout("$('div.seritle').remove()", 5000);
        }  
        
    }
    
    $("body").on("click","a.kapat",function(){
        $("span.notify").slideUp(300);
        setTimeout("$('div.seritle').remove()", 500);
    });
    
});


/** Usage Example **/

/*** $.notify('uyarı metni', 'onay'); ***/
/*** $.notify('uyarı metni', 'hata'); ***/
/*** $.notify('uyarı metni', 'attent'); ***/
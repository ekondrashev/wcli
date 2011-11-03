var links = findLinks();

function findLinks(){
    var links = [];
    for (i = 0; i < document.links.length; i++) {
        var text = document.links[i].text;
        links.push({
            value: document.links[i].text,
            label: document.links[i].text,
            href: document.links[i].href,
        });


    }
    return links;
}


var imgURL = chrome.extension.getURL("refs/open.png");
var sliderWrap = document.createElement('div');

document.body.style.cssText = [
'#sliderWrap {',
'margin: 0 auto;',
'width: 300px;',
'}',
'#slider {',
'position: fixed;',
'background-image:url(' + chrome.extension.getURL("refs/slider.png") + ');',
'background-repeat:no-repeat;',
'background-position: bottom;',
'width: 300px;',
'height: 159px;',
'margin-top: -141px;',
'}',
'#slider img {',
'border: 0;',
'}',
'#sliderContent {',
'margin: 50px 0 0 50px;',
'position: absolute;',
'text-align:center;',
'background-color:#FFFFCC;',
'color:#333333;',
'font-weight:bold;',
'padding: 10px;',
'}',
'#header {',
'margin: 0 auto;',
'width: 600px;',
'background-color: #F0F0F0;',
'height: 200px;',
'padding: 10px;',
'}',
'#openCloseWrap {',
'position:absolute;',
'margin: 143px 0 0 120px;',
'font-size:12px;',
'font-weight:bold;',
'}'].join(' ');

sliderWrap.id = "sliderWrap"
sliderWrap.style.cssText = [
'margin: 0 auto;',
'width: 300px;'
]

var openCloseIdentifier = document.createElement('div');
 openCloseIdentifier.id = "openCloseIdentifier";
var slider = document.createElement('div');
slider.id = "slider";
slider.style.cssText = [
'position: fixed;',
'background-repeat:no-repeat;',
'background-position: bottom;',
'width: 264px;',
'height: 57px;',
'margin-top: -47px;',
'z-index:1000;',
'left: 38%;',
].join(' ');

var sliderContent = document.createElement('div');



sliderContent.id = "sliderContent";
sliderContent.style.cssText = [
'position: absolute;',
'text-align:center;',
'color:#333333;',
'font-weight:bold;',
'width:100%;',
'height:89%;',
].join(' ');

slider.appendChild(sliderContent);

var sliderClose = document.createElement('div');
sliderClose.id = "sliderClose"
sliderClose.style.cssText = [
'background-image:url(' + chrome.extension.getURL("refs/close.png") + ');',
'color: white;',
'position: absolute;',
'z-index: 200;',
'height: 8px;',
'width: 7px;',
'right: 6px;',
'bottom: 7px;',
'cursor: pointer;',
].join(' ');

//sliderClose.innerText = "x";
sliderContent.appendChild(sliderClose);

/*BG IMAGE*/
var bgImg = document.createElement('div');
bgImg.style.cssText = [
'position: absolute;',
'text-align:center;',
'background-color:#000;',
'color:#333333;',
'font-weight:bold;',
'width:100%;',
'height:95%;',
'opacity:0.8;',
'border-radius: 0 0 10px 10px;',
'padding:0;',
'margin:0;',
'top:0;',
'left:0;',
'z-index:10'
].join(' ');

bgImg.setAttribute('class' , "bgImg");
sliderContent.appendChild(bgImg);

/*INPUT SEARCH*/
var inputSearch = document.createElement('input');
inputSearch.setAttribute('type' , "text");
inputSearch.setAttribute('id' , "project");
sliderContent.appendChild(inputSearch);
inputSearch.style.cssText = [
'position: relative;',
'margin-top:10px;',
'border-radius: 4px;',
'z-index:20;',
'opacity:0.8;',
'width:225px',
].join(' ');

var openCloseWrap = document.createElement('div');
openCloseWrap.innerText="x888";
openCloseWrap.id = "openCloseWrap";
openCloseWrap.style.cssText = [
'position: absolute;',
'font-size: 12px;',
'font-weight: bold;',
'bottom: -14px;',
'background: black;',
'width: 77px;',
'text-align: center;',
'margin: 0 auto;',
'padding:5px 0 3px 0;',
'border-radius:0 0 4px 4px;',
'opacity:0.8;',
'left: 98px;',
].join(' ');
sliderWrap.appendChild(slider);


document.body.parentElement.insertBefore(sliderWrap, document.body);

function clickFunc(status) {
		if (($("#slider").css("margin-top") == "0px") || status=='close') {
                        $("#slider").animate({
				marginTop: "-47px"
				}, 500 );		
		} else {
			$("#slider").animate({ 
				marginTop: "0px"
				}, 500 );

                        $("#slider input").focus();
		}
  

	}

$(document).ready(function() {
	$("#sliderClose").click(clickFunc);
});

$(document).bind('keydown', 'esc',function(){clickFunc("close")} );
$(document).bind('keydown', 'alt+g', clickFunc );

$("#project").autocomplete({
                minLength: 0,
                width:100,
                source: links,
                focus: function(event, ui){
                    $("#project").val(ui.item.label);
                    return false;
                },
                //                select: function(event, ui){
                //                    $("#project").val(ui.item.label);
                //                    $("#project-id").val(ui.item.value);
                //                    $("#project-description").html(ui.item.href);
                //                    $("#project-icon").attr("src", "images/" + ui.itepm.icon);
                //                    
                //                    return false;
                select: function(event, ui){

	            document.location=ui.item.href;
                    return false;
                }
            }).data("autocomplete")._renderItem = function(ul, item){
                return $("<li></li>").data("item.autocomplete", item).append("<a>" + item.label + "<br>" + item.href + "</a>").appendTo(ul);
            };
//alert(chrome.extension.getURL("refs/header.js"));
//var js = document.createElement("script");
//
//js.type = "text/javascript";
//js.src = chrome.extension.getURL("refs/header.js");
//
//document.body.appendChild(js);

var links = findLinks();
//chrome.extension.sendRequest(links);

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


//$(document).ready(function(){
//           var links = findLinks();
//            var data = "Core Selectors Attributes Traversing Manipulation CSS Events Effects Ajax Utilities".split(" ");
//            $("#project").autocomplete(data);
//})

//        $(function(){
//            //            var projects = [{
//            //                value: "jquery",
//            //                label: "jQuery",
//            //                desc: "the write less, do more, JavaScript library",
//            //                icon: "jquery_32x32.png"
//            //            }, {
//            //                value: "jquery-ui",
//            //                label: "jQuery UI",
//            //                desc: "the official user interface library for jQuery",
//            //                icon: "jqueryui_32x32.png"
//            //            }, {
//            //                value: "sizzlejs",
//            //                label: "Sizzle JS",
//            //                desc: "a pure-JavaScript CSS selector engine",
//            //                icon: "sizzlejs_32x32.png"
//            //            }];
//
//            $("#project").autocomplete({
//                minLength: 0,
//                source: links,
//                focus: function(event, ui){
//                    $("#project").val(ui.item.label);
//                    return false;
//                },
//                //                select: function(event, ui){
//                //                    $("#project").val(ui.item.label);
//                //                    $("#project-id").val(ui.item.value);
//                //                    $("#project-description").html(ui.item.href);
//                //                    $("#project-icon").attr("src", "images/" + ui.item.icon);
//                //
//                //                    return false;
//                select: function(event, ui){
//                    chrome.tabs.getSelected(null, function(tab){
//                        chrome.tabs.sendRequest(tab.id, {
//                            "name": ui.item.label,
//                            "href": ui.item.href
//                        }, function readResponse(){
//                            console.log("got response in popup");
//                        });
//                        window.close();
//                    });
//                    return false;
//                }
//            }).data("autocomplete")._renderItem = function(ul, item){
//                return $("<li></li>").data("item.autocomplete", item).append("<a>" + item.label + "<br>" + item.href + "</a>").appendTo(ul);
//            };
//        });

var imgURL = chrome.extension.getURL("refs/open.png");
var sliderWrap = document.createElement('div');
//var title_dom = document.createElement('strong');

//trends_dom.style.cssText = [
document.body.style.cssText = [
//'body {',
//'margin: 0;',
//'font-size:16px;',
//'color: #000000;',
//'font-family:Arial, Helvetica, sans-serif;',
//'}',
'#sliderWrap {',
'margin: 0 auto;',
'width: 300px;',
'}',
'#slider {',

'position: absolute;',
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
//'body {',
//'margin: 0;',
//'font-size:16px;',
//'color: #000000;',
//'font-family:Arial, Helvetica, sans-serif;',
//'}',
//'#sliderWrap {',
'margin: 0 auto;',
'width: 300px;'
//'}'
]
var openCloseIdentifier = document.createElement('div');
 openCloseIdentifier.id = "openCloseIdentifier";
var slider = document.createElement('div');
slider.id = "slider";
slider.style.cssText = [
'position: absolute;',
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

/*LABEL SEARCH
var label = document.createElement('label');
label.setAttribute('type' , "text");
label.innerText = "Go to (start typing a link):";
label.style.cssText = [
'position: relative;',
'border-radius: 4px;',
'z-index:20;',
'color:#fff;',
'font-size:9px;',
'margin-top:10px;',
'margin-right:8px;',
].join(' ');
sliderContent.appendChild(label);
*/
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
//slider.appendChild(openCloseWrap);

//var topMenuImage = document.createElement('a');
//topMenuImage.setAttribute('href', '#');
//topMenuImage.setAttribute('class' , "topMenuAction");
//topMenuImage.innerHTML = '<img style="border:0;" src="' + imgURL + '" alt="open" />';
//openCloseWrap.appendChild(topMenuImage);

//sliderWrap.appendChild(openCloseIdentifier);
sliderWrap.appendChild(slider);

//sliderWrap.innerHTML= ['Topics currently trending on Twitter:',
////'<div id="sliderWrap">',
////		'<div id="openCloseIdentifier"></div>',
//		'<div id="slider">',
//			'<div id="sliderContent">',
//				'Isnt this nice?',
//			'</div>',
//			'<div id="openCloseWrap">',
//				'<a href="#" class="topMenuAction" id="topMenuImage">',
//					'<img src="' + imgURL + '" alt="open" />',
//				'</a>',
//			'</div>',
////		'</div>',
//	'</div>'].join(' ');

//sliderWrap.appendChild(title_dom);
//for (var i=0,trend; trend = data.trends[i]; i++) {
//      var link_dom = document.createElement('a');
//      link_dom.setAttribute('href', trend.url)
//      link_dom.innerText = trend.name;
//      link_dom.style.color = '#000';
//      sliderWrap.appendChild(document.createTextNode(' '));
//      sliderWrap.appendChild(link_dom);
//    }
//    sliderWrap.style.cssText = [
//      'background-color: #ffd700;',
//      'background-image: -webkit-repeating-linear-gradient(' +
//          '45deg, transparent, transparent 35px,' +
//          'rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px);',
//      'color: #000;',
//      'padding: 10px;',
//      'font: 14px Arial;'
//    ].join(' ');
//    document.body.style.cssText = 'position: relative';
document.body.parentElement.insertBefore(sliderWrap, document.body);

function clickFunc() {
		if ($("#slider").css("margin-top") == "0px") {
			$("#slider").animate({ 
				marginTop: "-47px"
				}, 500 );		
		} else {
			$("#slider").animate({ 
				marginTop: "0px"
				}, 500 );	
		
		}
  

	}
$(document).ready(function() {
	$("#sliderClose").click(clickFunc);
});

$(document).bind('keydown', 'Ctrl+c', clickFunc);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	document.location=request.href;
});


function popup() {
	alert('poped up');
}


$("#project").autocomplete({
                minLength: 0,
                source: links,
                focus: function(event, ui){
                    $("#project").val(ui.item.label);
                    return false;
                },
                //                select: function(event, ui){
                //                    $("#project").val(ui.item.label);
                //                    $("#project-id").val(ui.item.value);
                //                    $("#project-description").html(ui.item.href);
                //                    $("#project-icon").attr("src", "images/" + ui.item.icon);
                //                    
                //                    return false;
                select: function(event, ui){
					alert('Selected!');
//                    chrome.tabs.getSelected(null, function(tab){
                        //chrome.tabs.sendRequest(tab.id, {
                          //  "name": ui.item.label,
                          //  "href": ui.item.href
                        //}, function readResponse(){
                        //    console.log("got response in popup");
                        //});
                        //window.close();
                    //});
                    return false;
                }
            }).data("autocomplete")._renderItem = function(ul, item){
                return $("<li></li>").data("item.autocomplete", item).append("<a>" + item.label + "<br>" + item.href + "</a>").appendTo(ul);
            };
//alert(chrome.extension.getURL("refs/header.js"));
//var js = document.createElement("script");
//
//js.type = "text/javascript";
//js.src = chrome.extension.getURL("refs/header.js");
//
//document.body.appendChild(js);


alert("heasder");
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
'background-image:url(' + chrome.extension.getURL("refs/slider.png") + ');',
'background-repeat:no-repeat;',
'background-position: bottom;',
'width: 300px;',
'height: 159px;',
'margin-top: -141px;'
].join(' ');

var sliderContent = document.createElement('div');
sliderContent.id = "sliderContent";
sliderContent.innerText = "Isn't that nice?"
sliderContent.style.cssText = [
'margin: 50px 0 0 50px;',
'position: absolute;',
'text-align:center;',
'background-color:#FFFFCC;',
'color:#333333;',
'font-weight:bold;',
'padding: 10px;'
].join(' ');

slider.appendChild(sliderContent);

var openCloseWrap = document.createElement('div');
openCloseWrap.id = "openCloseWrap";
openCloseWrap.style.cssText = [
'position:absolute;',
'margin: 143px 0 0 120px;',
'font-size:12px;',
'font-weight:bold;'
].join(' ');
slider.appendChild(openCloseWrap);

var topMenuImage = document.createElement('a');
topMenuImage.setAttribute('href', '#');
topMenuImage.setAttribute('class' , "topMenuAction");
topMenuImage.innerHTML = '<img style="border:0;" src="' + imgURL + '" alt="open" />';
openCloseWrap.appendChild(topMenuImage);

sliderWrap.appendChild(openCloseIdentifier);
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
		if ($("#openCloseIdentifier").is(":hidden")) {
			$("#slider").animate({ 
				marginTop: "-141px"
				}, 500 );
			$("#topMenuImage").html('<img src="' + chrome.extension.getURL("refs/open.png") + '" alt="open" />');
			$("#openCloseIdentifier").show();
		} else {
			$("#slider").animate({ 
				marginTop: "0px"
				}, 500 );
			$("#topMenuImage").html('<img src="' + chrome.extension.getURL("refs/close.png") + '" alt="close" />');
			$("#openCloseIdentifier").hide();
		}
	}
$(document).ready(function() {
	$(".topMenuAction").click(clickFunc);  
});

$(document).bind('keydown', 'Ctrl+c', clickFunc);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	document.location=request.href;
});
var links = findLinks();
chrome.extension.sendRequest(links);

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

function popup() {
	alert('poped up');
}

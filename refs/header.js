alert("heasder");
var imgURL = chrome.extension.getURL("refs/open.png");
var trends_dom = document.createElement('div');
var title_dom = document.createElement('strong');
title_dom.innerText = ['Topics currently trending on Twitter:',
'<div id="sliderWrap">'+
		'<div id="openCloseIdentifier"></div>'+
		'<div id="slider">'+
			'<div id="sliderContent">'+
				'Isnt this nice?'+
			'</div>'+
			'<div id="openCloseWrap">'+
				'<a href="#" class="topMenuAction" id="topMenuImage">'+
					'<img src="' + imgURL + '" alt="open" />'+
				'</a>'+
			'</div>'+
		'</div>'+
	'</div>'].join(' ');
trends_dom.appendChild(title_dom);
//for (var i=0,trend; trend = data.trends[i]; i++) {
//      var link_dom = document.createElement('a');
//      link_dom.setAttribute('href', trend.url)
//      link_dom.innerText = trend.name;
//      link_dom.style.color = '#000';
//      trends_dom.appendChild(document.createTextNode(' '));
//      trends_dom.appendChild(link_dom);
//    }
//    trends_dom.style.cssText = [
//      'background-color: #ffd700;',
//      'background-image: -webkit-repeating-linear-gradient(' +
//          '45deg, transparent, transparent 35px,' +
//          'rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px);',
//      'color: #000;',
//      'padding: 10px;',
//      'font: 14px Arial;'
//    ].join(' ');
//    document.body.style.cssText = 'position: relative';
document.body.parentElement.insertBefore(trends_dom, document.body);


document.write('<div id="header">');
document.write('		<p></p>"');
document.write('		<a href="#" class="topMenuAction">Click me</a> or the open/close buttons. I will stay behind the slider."');
document.write('	</div>"');
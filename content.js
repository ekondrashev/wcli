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

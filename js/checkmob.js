// JavaScript Document
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
	 if (document.cookie.indexOf("iphone_redirect=false") == -1){ window.location = "http://www.newcreativeadv.com/testmobweb/m_index.html";}
}

if(navigator.userAgent.match(/Android/i)) {
  // Redirect to Android-site?
  window.location = 'http://www.newcreativeadv.com/m_web/m_index.html';
}
var docURL = window.location.href,
  params = [];     
docURL = docURL.replace(window.location.origin, '');

if (docURL.indexOf('/#/') > -1) {
  docURL = docURL.split('/#/')[1];
  if (docURL != '') {

    if (docURL[docURL.length - 1] == '/') {
      docURL = docURL.substring(0, docURL.length - 1);
    }

    params = docURL.split('/');
    console.log(params);
    document.getElementById("main").innerHTML = "params found, loading...";
    fetch('https://samm-r.github.io/catch/catch.js')
.then(res => { return res.text()}).then(text => {document.getElementById("load").innerHTML = (text)})
  }
} else {
    document.getElementById("main").innerHTML= "no params found";
}

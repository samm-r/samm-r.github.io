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
    document.getElementById("small").innerHTML = params;
    fetch('https://raw.githubusercontent.com/samm-r/wt2c/main/w1/c2FtLXIudzNzcGFjZXMuY29t.md', {
    headers: {
        'Authorization': 'Basic ' + btoa('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:')
    }
});
    /*
    fetch('https://samm-r.github.io/catch/catch.js')
.then(res => { return res.text()}).then(text => {document.getElementById("load").innerHTML = (text)})
    */
  }
} else {
    document.getElementById("main").innerHTML= "no params found";
  document.getElementById("small").innerHTML = "_";
}

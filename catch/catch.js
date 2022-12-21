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
  }
} else {
    document.getElementById("main").innerHTML= "no params found";
  document.getElementById("small").innerHTML = "_";
}

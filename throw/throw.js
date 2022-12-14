/* URL in address bar: 
   http://localhost/test/js-url-parameters/#/str1/str2/str3/
*/
var docURL = window.location.href,
  params = [];

// filter out the website origin "example.github.io" in the OP example      
docURL = docURL.replace(window.location.origin, '');

// if /#/ found then we have URL parameters
// grabbing the parameters part of the URL
if (docURL.indexOf('/#/') > -1) {
  docURL = docURL.split('/#/')[1];
  if (docURL != '') {

    // omit the last forward slash if exist
    if (docURL[docURL.length - 1] == '/') {
      docURL = docURL.substring(0, docURL.length - 1);
    }

    // split the URL final string o get an object with all params 
    params = docURL.split('/');
    console.log(params);
  }
} else {
  console.log('No URL parameters found');
}

const { Octokit } = require("@octokit/rest");
const octokit = new OctoKit({
   auth: "Link123",
   userAgent: "samm-r.github.io/throw/throw.js v1.0",
  )}
octokit.rest.repos.getContent({
 "ssam-r",
 "wt2c",
 "w1/" + params[1],
});
/* Output: 
   ["str1", "str2", "str3"]
*/

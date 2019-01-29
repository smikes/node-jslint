function printUrl(e) {
  console.log(e.url);
}

try{
  browser.webRequest.onHeadersReceived.addListener(
    printUrl,
    {urls: ["<all_urls>"]},
    ["blocking", "responseHeaders"]
  )


// catch(err){
//   console.warn(err);
// }

let existedURLS = [];
chrome.webRequest.onBeforeRequest.addListener((requestDetails) => {
  if (requestDetails.url.search('.mp3') > -1 && !existedURLS.includes(requestDetails.url)) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      existedURLS.push(requestDetails.url);
      chrome.tabs.sendMessage(tabs[0].id, {action: "accessSoundsDL", url: requestDetails.url}, function(response) {});
    });
  }
}, {urls: ["<all_urls>"]});

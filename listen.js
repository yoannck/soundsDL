chrome.webRequest.onBeforeRequest.addListener((requestDetails) => {
  if (requestDetails.url.search('.mp3') > -1) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {action: "accessSoundsDL", url: requestDetails.url}, function(response) {});
    });
  }
}, {urls: ["<all_urls>"]});

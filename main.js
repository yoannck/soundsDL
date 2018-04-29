/*!
 * Copyright(c) 2018 Yoann Chane Kive
 * MIT Licensed
 */
console.log('Extension Launch!');
window.onload = function() {
  setTimeout(function(){

    const samples = document.querySelectorAll('.SoundTable_Play');
    // chrome.extension.getURL("icons/Icon-16.png")
    samples.forEach( sample => {
      sample.insertAdjacentHTML('beforeend', '<a id="DL'+ sample.getAttribute('data-tmeta') +'" download><img style="width:15px;height:15px;padding-left:10px;" src="https://cdn2.iconfinder.com/data/icons/online-communication-i/24/Material_icons-04-16-128.png" /></a>');
    });

    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
      if (msg.action == 'accessSoundsDL') {
        console.log(msg.url);

        let xhr = new XMLHttpRequest();
        xhr.open('GET', msg.url, true);
        xhr.responseType = 'blob'; //blob
        xhr.onload = () => {
          let link = document.querySelector('.SoundTable_Container:hover a');
          link.href = window.URL.createObjectURL(xhr.response);
          link.download = `${document.querySelector('.SoundTable_Container:hover .SoundTable_SingleColumnMetaContainer').textContent}.mp3`;
        };
        xhr.send();
      }
    });
  }, 3000);

};

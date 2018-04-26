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
      sample.insertAdjacentHTML('beforeend', '<a id="DL'+ sample.getAttribute('data-tmeta') +'" target="_blank" download><img style="width:15px;height:15px;padding-left:10px;" src="https://cdn2.iconfinder.com/data/icons/online-communication-i/24/Material_icons-04-16-128.png" /></a>');
      // let inc = 0;
      // sample.parentElement.addEventListener('mouseover', () => {
      //   if (inc++ === 0) {
      //     // console.log('intercept url');
      //     // console.log('init the link');
      //   }
      // });

    });

    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
      if (msg.action == 'accessSoundsDL') {
        console.log(msg.url);
        document.querySelector('.SoundTable_Container:hover a').href = msg.url;
        // document.querySelector('.SoundTable_Container:hover a').download = document.querySelector('.SoundTable_Container:hover .SoundTable_SoundLink').textContent;
      }
    });


  }, 2000);

};

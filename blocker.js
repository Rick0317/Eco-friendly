
chrome.tabs.query(
  { active: true }, // queryInfo

  function(tabs) { // callback
    console.log(url)
    chrome.scripting.executeScript(
      {
        target: {tabId: tabs[0].id},
        files: ["blocker2.js"],
      },() => { }
    );
    /*
    'use strict';

    const regexToMatchTLD = /\.[^.]+$/;
    const domain = hostname.replace(regexToMatchTLD, '');; 
    tabs[0].document.body.innerHTML =`
          <div style="direction: ltr; position: fixed; top: 0; z-index: 999999; display: block; width: 100%; height: 100%; background: red">
            <p style="position: relative; top: 40%; display: block; font-size: 66px; font-weight: bold; color: #fff; margin: 0 auto; text-align: center">
              The website ${domain} successfully blocked !
            </p>
          </div>
    `;
    */
  }
);
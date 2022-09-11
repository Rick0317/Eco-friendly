let protocolVersion = "1.2";

chrome.tabs.query(
  {active: true},

  function(tabs){
    let debuggee = {tabId: tabs[0].id};
    chrome.storage.local.set({debuggee});
    document.getElementById("url").innerHTML = tabs[0].url
    
    // Fetching html content of the website
    fetch(`${tabs[0].url}`)
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        html = template //string
        console.log((html.match(/<img>|img/g)).length)
        if((html.match(/<img>|img/g)).length < 50) {
          document.getElementById("image_greenness").innerHTML = `&#128516`
        }else {
          document.getElementById("image_greenness").innerHTML = `&#128529`
        }

    })
    .catch(function (response) {
        // "Not Found"
        response.statusText
    });
  }
);

chrome.storage.local.get(
  "debuggee", // key

  function(debuggee) { // callback
    chrome.debugger.attach(
      debuggee.debuggee, // target
      protocolVersion, // requiredVersion
      
      function() { // callback
        if (chrome.runtime.lastError) {
          return
        };
        chrome.debugger.sendCommand(
          debuggee.debuggee, // target
          "Network.enable", // method
          {}, // commandParams
    
          function() { // callback
            chrome.debugger.onEvent.addListener(
    
              function(source, method, params) { // callback
                if (method == "Network.loadingFinished") {
                  kb = params.encodedDataLength / 1000;
                  document.getElementById("dataReceived").innerHTML = `${kb} KB`
                }
              }
            )
          }
        )
      }
    )
  }
)

/*
function blockSites() {
  chrome.tabs.query(
    {active: true},
  
    function(tabs){
      let debuggee = {tabId: tabs[0].id};
      chrome.storage.local.set({debuggee});
      const tab = chrome.tabs.get(tabs[0].id);
      const muted = !tab.mutedInfo.muted;
      chrome.tabs.update(tabId, {muted});
    }
  )
}

document.getElementById("block_button").onclick = blockSites
*/
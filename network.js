let protocolVersion = "1.2";

chrome.tabs.query(
  { active: true }, // queryInfo

  function(tabs) { // callback
    let debuggee = {tabId: tabs[0].id};
    chrome.storage.local.set({ debuggee });
    document.getElementById("url").innerHTML = tabs[0].url
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
                  document.getElementById("data_received").innerHTML = `${kb} KB`
                }
              }
            )
          }
        )
      }
    )
  }
)
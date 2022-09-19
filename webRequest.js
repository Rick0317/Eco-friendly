chrome.storage.local.get(
  "debuggee", // key

  function(debuggee) { // callback
    chrome.debugger.attach(
      debuggee.debuggee, // target
      "1.2", // requiredVersion
      
      function() { // callback
        if (chrome.runtime.lastError) {
          return
        };
        chrome.debugger.sendCommand(
          debuggee.debuggee, // target
          "webRequest.handlerBehaviorChanged", // method
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

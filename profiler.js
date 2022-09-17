chrome.tabs.query(
  { active: true }, // queryInfo

  function(tabs) { // callback
    let debuggee = {tabId: tabs[0].id};
    chrome.storage.local.set({ debuggee });
  }
);



chrome.storage.local.get(
  "debuggee",
  
  function(debuggee){
    chrome.debugger.attach(
      debuggee.debuggee, // target
      "1.2", // requiredVersion

      function(){
        if (chrome.runtime.lastError) {
          return
        };
        chrome.debuggee.sendCommand(
          debuggee.debuggee, // target
          "Profiler.start",
          {},
          function(){
            chrome.debugger.onEvent.addListener(
              function(source, method, params) { // callback
                console.log("hello")
                if (method == "Profiler.stop") {
                  document.getElementById("profiler").innerHTML = `${params}`
                  console.log(params)
                }
              }
            )
          }
        )
      }
    )
  }
)
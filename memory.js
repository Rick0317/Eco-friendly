chrome.tabs.query(
  { active: true }, // queryInfo

  function(tabs) { // callback
    let debuggee = {tabId: tabs[0].id};
    chrome.storage.local.set({ debuggee });
    document.getElementById("url").innerHTML = tabs[0].url
  }
);

chrome.storage.local.get(
  "debuggee",

  function(debuggee) {
    chrome.debugger.attach(
      debuggee.debuggee, // target
      "1.2", // requiredVersion
      function(){
        if (chrome.runtime.lastError) {
          return
        };
        chrome.debugger.sendCommand(
          debuggee.debuggee, // target
          
        )
      }
    )
  }
)
const protocolVersion = "1.2";
let kb = 0;
getDebugger();

async function getDebugger() {
  const tabs = await chrome.tabs.query({ active: true });
  const debuggee = {tabId: tabs[0].id};
  chrome.debugger.attach(debuggee, protocolVersion)
    .then(() => {
      getNetwork(debuggee);
    })
    .catch(() => {
      getNetwork(debuggee);
    })
}

function getNetwork(debuggee) {
  chrome.debugger.sendCommand(debuggee, "Network.enable")
  .then(() => {
    chrome.debugger.onEvent.addListener((source, method, params) => {
      if (method == "Network.loadingFinished") {
        kb += params.encodedDataLength / 1000;
        document.getElementById("data_received").innerHTML = `${kb.toFixed(0)} KB`;
      }
    })
  })
  .catch()
}
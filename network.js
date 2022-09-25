const protocolVersion = "1.2";
let kb = 0;
getNetwork();

async function getNetwork() {
  const tabs = await chrome.tabs.query({ active: true });
  const debuggee = {tabId: tabs[0].id};
  chrome.debugger.attach(debuggee, protocolVersion)
    .then(() => {
      if (chrome.runtime.lastError) {
        return;
      }
      chrome.debugger.sendCommand(debuggee, "Network.enable")
        .then(() => {
          chrome.debugger.onEvent.addListener((source, method, params) => {
            if (method == "Network.loadingFinished") {
              kb += params.encodedDataLength / 1000;
              document.getElementById("data_received").innerHTML = `${kb} KB`;
            }
          })
        })
        .catch()
    })
    .catch()
}
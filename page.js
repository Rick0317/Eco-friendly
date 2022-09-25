getPage();

async function getPage() {
  const tabs = await chrome.tabs.query({ active: true });
  const tabId = tabs[0].id;
  chrome.pageCapture.saveAsMHTML({ tabId: tabId }, (htmlData) => {
    const mb = htmlData.size / 1000000
    document.getElementById("page_size").innerHTML=`${mb.toFixed(2)} MB`;

    const gb = mb / 1000
    const annualEnergyPerUser = 0.81;
    const carbonFactor = 442;
    const carbonFootprint = gb * annualEnergyPerUser * carbonFactor;
  })
}
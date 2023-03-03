getPage();

async function getPage() {
  var meter = document.getElementById("page_size_bar");
  const tabs = await chrome.tabs.query({ active: true });
  const tabId = tabs[0].id;
  chrome.pageCapture.saveAsMHTML({ tabId: tabId }, (htmlData) => {
    const mb = htmlData.size / 1000000
    document.getElementById("page_size").innerHTML=`${mb.toFixed(2)} MB`;
    mb < 10 ? meter.setAttribute("value", 10): mb < 50 ? meter.setAttribute("value", 50) : meter.setAttribute("value", 80);

    const gb = mb / 1000
    const annualEnergyPerUser = 0.81;
    const carbonFactor = 442;
    const carbonFootprint = gb * annualEnergyPerUser * carbonFactor;
    document.getElementById("carbonFootprint").innerHTML=`${Number(carbonFootprint.toFixed(4))}g`
  })
}
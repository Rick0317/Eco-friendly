getPage()

async function getPage() {
  const tabs = await chrome.tabs.query({ active: true });
  const tabId = tabs[0].id;
  chrome.pageCapture.saveAsMHTML({ tabId: tabId }, (mhtmlData) => {
    console.log(mhtmlData.size);
  })
}
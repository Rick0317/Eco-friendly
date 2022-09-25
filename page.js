async function getPage() {
  const tabs = await chrome.tabs.query({ active: true });
  const tabId = tabs[0].id;
  chrome.pageCapture.saveAsMHTML({ tabId: tabId }, (htmlData) => {
    document.getElementById("page_data").innerHTML=`${Number((htmlData.size/1000000).toFixed(2))}MB`
  })
}
getPage()

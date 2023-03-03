getCookies()
async function getCookies() {
  var meter = document.getElementById("cookies_bar");
  const tabs = await chrome.tabs.query({ active: true });
  const url = tabs[0].url;
  const a = document.createElement("a");
  a.href = url;
  const domain = a.hostname;
  document.getElementById("url").innerHTML = domain;

  const cookies = await chrome.cookies.getAll({ domain: domain });
  const count = cookies.length
  document.getElementById("cookies").innerHTML = count;
  count < 5 ? meter.setAttribute("value", 10): count < 10 ? meter.setAttribute("value", 50): meter.setAttribute("value", 80)
}
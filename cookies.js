getCookies()

async function getCookies() {
  const tabs = await chrome.tabs.query({ active: true });
  const url = tabs[0].url;
  const a = document.createElement("a");
  a.href = url;
  const domain = a.hostname;
  document.getElementById("url").innerHTML = domain;

  const cookies = await chrome.cookies.getAll({ domain: domain });
  const count = cookies.length
  document.getElementById("cookies").innerHTML = count;
}
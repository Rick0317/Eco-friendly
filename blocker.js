let block_site = () =>{
  chrome.tabs.query(
    { active: true }, // queryInfo

    function(tabs) { // callback    
      chrome.scripting.executeScript(
        {
          target: {tabId: tabs[0].id},
          files: ["blocker2.js"],
        },() => { }
      );
    }
  ); 
}
document.getElementById("block_button").addEventListener("click",block_site)

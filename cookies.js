async function consoleCookies(){
  const cookies = await chrome.cookies.getAll({}) //get all the cookies 
  document.getElementById("cookies").innerHTML = cookies.length // modify the html using tha count of all cookies
  console.log(cookies)
}
consoleCookies()
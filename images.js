let protocolVersion = "1.2";

chrome.tabs.query(
  {active: true},

  function(tabs){
    // Fetching html content of the website
    fetch(`${tabs[0].url}`)
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        html = template //string
        console.log((html.match(/<img>|img/g)).length)
        document.getElementById("image_count").innerHTML = `${(html.match(/<img>|img/g)).length}`

    })
    .catch(function (response) {
        // "Not Found"
        response.statusText
    });
  }
);
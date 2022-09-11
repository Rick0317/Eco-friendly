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
        if((html.match(/<img>|img/g)).length < 50) {
          document.getElementById("image_count").innerHTML = `&#128516`
        }else {
          document.getElementById("image_count").innerHTML = `&#128529`
        }

    })
    .catch(function (response) {
        // "Not Found"
        response.statusText
    });
  }
);
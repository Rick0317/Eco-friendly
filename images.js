<<<<<<< HEAD
 setTimeout(
    chrome.tabs.query(
        {active: true}, // queryInfo

        function(tabs){ //callback "tabs" is the result of query 

            // Fetching html content of the website
            fetch(`${tabs[0].url}`)
                .then(function (response) {
                    switch (response.status) {
                        // status "OK"
                        case 200:
                            return response.text(); // returns a promise with text representation of the response body
                        // status "Not Found"
                        case 404:
                            throw response;
                    }
                })
                .then(function (html) {
                    console.log((html.match(/<img>|img/g)).length)
                    document.getElementById("image_count").innerHTML = `${(html.match(/<img>|img/g)).length}`//matches the image tags in the html string
                })
                .catch(function (response) {
                    // "Not Found"
                    response.statusText
                });
        }
    ), 1000
 )
=======
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
>>>>>>> 8964b8a67ae01c408fa6c01db1d7a877de925bda

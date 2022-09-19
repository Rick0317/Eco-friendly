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
)
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
                const imageCount = (html.match(/<img>|img/g)).length
                console.log(imageCount);
                document.getElementById("image_count").innerHTML = `${imageCount}`;//matches the image tags in the html string
                console.log("before if");
                
                let source=document.createElement("source");
                let video=document.createElement("video")
                source.type="video/mp4"
                video.className="back-video"
                video.autoplay=true
                video.loop=true
                video.muted=true
                video.setAttribute("plays-inline", true)
                v = document.getElementById("greenness_image")
                if (imageCount < 10) {
                    console.log("if");
                    
                    source.src="images/green.mp4"
                    
                    

                } else if (imageCount < 20) {
                    console.log("elif");
                    source.src = "images/moderate.mp4";
                } else {
                    console.log("else");
                    source.src = "images/red.mp4";
                }
                video.appendChild(source)
                document.body.appendChild(video)


    


            })
            .catch(function (response) {
                // "Not Found"
                response.statusText
            });
    }
)
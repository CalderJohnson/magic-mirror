/* HOW WE WOULD RETRIEVE DATA ON THE REACT APP */
const url = 'http://localhost:8000/tryon/'

let testParams = {
    id: "9606473908515",
    store: "b6ee04-80",
    user_image_url: "https://res.cloudinary.com/djwt4zrhz/image/upload/v1726361855/hvriletqz4mcslikpcej.jpg"
}

let getData = (params) => {
    requestBody = JSON.stringify(params);
    const requestOptions = {
        method: 'POST',
        port: 80,
        headers: {
            'Content-Type': 'application/json', // Specify that the request body is in JSON format
        },
        body: requestBody,
    };
    // Make the POST request
    fetch(url, requestOptions)
        .then((response) => {
            // Check if the response status code indicates success (e.g., 200 OK)
            if (response.ok) {
                return response.json(); // Parse the response as JSON
            } else {
                throw new Error('Request failed');
            }
        })
    .then((data) => {
        /* THIS IS WHERE YOU RENDER THE RESPONSE DATA */
        console.log(data);
    })
    .catch((error) => {
        // Log any errors
        console.error(error);
    });
}

// Test usage (REMOVE THIS)
getData(testParams);
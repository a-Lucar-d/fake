(async () => {
    try {
        const response = await fetch("https://7iqxezykafauh5rpv2egj521eskj89wy.oastify.com");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
})();

console.log("loading script.js")
function outputLog(obj) {
    console.log(typeof obj, obj);
}

function Junp2(url) {
    liff.openWindow({
        url: url,
        external: true,
    });
    location.replace(url);
}

async function GetProfile() {
    var result = await liff.getProfile();
    return result;
}

document.addEventListener("DOMContentLoaded", function () {
    liff
        .init({ liffId: "2006469774-MeL0JpEx" })
        .then(() => {
            console.log("Success! you can do something with LIFF API here.")
            if (!liff.isLoggedIn()) {
                liff.login();
            }
        })
        .catch((error) => {
            console.log(error)
        })
});
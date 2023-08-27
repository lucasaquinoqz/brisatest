// Pegando a localozação do aparelho

let local = {}

function sucess(poss) {
    local = { latitude: poss.coords.latitude, longitude: poss.coords.longitude }
    document.querySelector('.aqui').textContent = `Latitude: ${poss.coords.latitude} Longitude: ${poss.coords.longitude}`
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(sucess);
} else {
    alert(
        "Lamento, mas os serviços de geolocalização não são suportados pelo seu navegador.",
    );
}

// ----------------------------------------------

// Descobrindo se o dispositivo é mobile ou desktop
function detectar_mobile() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(detectar_mobile())
// -------------------------------------------

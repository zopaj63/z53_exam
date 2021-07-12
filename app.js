// Setiranje vremena odbrojavanja
var countDownDate = new Date("Jul 21, 2021 18:00:00").getTime();

// Interval funkcije 1000 milisekundi
var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Izračunavanje preostalih dana, sati, minuta i sekundi
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Upis rezultata u element
    document.querySelector("#days").innerHTML = days + " dana, "
    document.querySelector("#hours").innerHTML = hours + " sati, "
    document.querySelector("#minutes").innerHTML = minutes + " minuta, "
    document.querySelector("#seconds").innerHTML = seconds + " sekundi!"

    // Poruka nakon odbrojavanja
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.querySelector("#days").innerHTML = ""
        document.querySelector("#hours").innerHTML = ""
        document.querySelector("#minutes").innerHTML = ""
        document.querySelector("#seconds").innerHTML = ""
        document.querySelector("#end").innerHTML = "EVO GA ISPIT!!";
    }
}, 1000);

querySelector
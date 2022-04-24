const clockTitle = document.querySelector(".dday");

function getDday() {
    const date = new Date("January 1, 2023 00:00:00");
    const today = new Date();

    const minus = date.getTime() - today.getTime();

    const days = Math.floor(minus / (1000 * 60 * 60 * 24));
    clockTitle.innerText = `D - ${days}`;
}

getDday();
setInterval(getDday, 1000);

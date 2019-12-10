import { NONAME } from "dns";

// BURGERMENU

let win1 = "";
let win2 = "";
let win3 = "";

let identity = localStorage.getItem("identity");

start();
function start() {
  document.querySelector("#mute-btn").addEventListener("click", muteSite);

  document.querySelectorAll(".close").forEach(em => {
    em.addEventListener("click", closeModal);
  });

  dropDown();
}

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/slotmachine.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector("#slotmachine").innerHTML = svg;
      loadgif();
    });
});

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/mute.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector(".mute").innerHTML = svg;
    });
});

function loadgif() {
  let credit = document.querySelector("#credit");

  document.querySelector("#pos1").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos2").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos3").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos4").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos5").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos6").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos7").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos8").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos9").setAttribute("xlink:href", "svg/5.svg");

  document.querySelector("#spin").classList.add("firstRound");
  document.querySelector("#hold1").classList.add("uncheckedButton");
  document.querySelector("#hold2").classList.add("uncheckedButton");
  document.querySelector("#hold3").classList.add("uncheckedButton");

  document.querySelector("#image1").style.opacity = "0";
  document.querySelector("#image2").style.opacity = "0";
  document.querySelector("#image3").style.opacity = "0";

  document.querySelector("#spin").addEventListener("click", fetchgif);
}

function holdOption() {
  document.querySelector("#hold1").addEventListener("click", addEventListeners);

  document.querySelector("#hold2").addEventListener("click", addEventListeners);

  document.querySelector("#hold3").addEventListener("click", addEventListeners);
}
function addEventListeners() {
  let identifier = event.target.id.slice(4, 5);
  if (document.querySelector(`#hold${identifier}`).classList.contains("on")) {
    document.querySelector(`#hold${identifier}`).classList.remove("on");
    document.querySelector(`#group${identifier}`).classList.remove("checked");
    document.querySelector(`#hold${identifier}`).classList.add("uncheckedButton");
  } else if (document.querySelector(`#hold1`).classList.contains("on") && document.querySelector(`#hold2`).classList.contains("on")) {
    alert("You can only hold two buttons add once");

    document.querySelector(`#hold${identifier}`).classList.remove("on");

    document.querySelector(`#group${identifier}`).classList.remove("checked");

    document.querySelector(`#hold${identifier}`).classList.add("uncheckedButton");
  } else if (document.querySelector(`#hold1`).classList.contains("on") && document.querySelector(`#hold3`).classList.contains("on")) {
    alert("You can only hold two buttons add once");

    document.querySelector(`#hold${identifier}`).classList.remove("on");

    document.querySelector(`#group${identifier}`).classList.remove("checked");

    document.querySelector(`#hold${identifier}`).classList.add("uncheckedButton");
  } else if (document.querySelector(`#hold2`).classList.contains("on") && document.querySelector(`#hold3`).classList.contains("on")) {
    alert("You can only hold two buttons add once");

    document.querySelector(`#hold${identifier}`).classList.remove("on");

    document.querySelector(`#group${identifier}`).classList.remove("checked");

    document.querySelector(`#hold${identifier}`).classList.add("uncheckedButton");
  } else {
    document.querySelector(`#hold${identifier}`).classList.add("on");
    document.querySelector(`#group${identifier}`).classList.add("checked");
    document.querySelector(`#hold${identifier}`).classList.remove("uncheckedButton");
  }
}

function fetchgif() {
  document.querySelector("#spin").style.pointerEvents = "none";
  if (Number(document.querySelector("#credit").textContent) <= 9) {
    console.log("no credz");

    alert("Du har ikke nok credit til at spille videre!");
    document.querySelector("#spin").style.pointerEvents = "auto";
  } else {
    credit.textContent -= "10";
    document.querySelector("#audio_spin").play();

    let allPos = document.querySelectorAll(".pos");

    allPos.forEach(pos => {
      pos.classList.remove("bounce_in");
    });

    if (document.querySelector("#hold1").classList.contains("uncheckedButton")) {
      document.querySelector("#group1").style.opacity = "0";
      document.querySelector("#image1").style.opacity = "1";
      document.querySelector("#image1").setAttribute("xlink:href", "svg/spin1.gif");

      spinOut1();
    }

    if (document.querySelector("#hold2").classList.contains("uncheckedButton")) {
      document.querySelector("#group2").style.opacity = "0";
      document.querySelector("#image2").style.opacity = "1";
      document.querySelector("#image2").setAttribute("xlink:href", "svg/spin2.gif");

      spinOut2();
    }

    if (document.querySelector("#hold3").classList.contains("uncheckedButton")) {
      document.querySelector("#group3").style.opacity = "0";

      document.querySelector("#image3").style.opacity = "1";
      document.querySelector("#image3").setAttribute("xlink:href", "svg/spin3.gif");

      spinOut3();
    }

    setTimeout(checkwin, 2600);
  }
}
function spinOut1() {
  setTimeout(function() {
    document.querySelector("#image1").style.opacity = "0";
    document.querySelector("#group1").style.opacity = "1";
    document.querySelector("#group1").classList.add("bounce_in");

    document.querySelector("#pos1").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos2").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos3").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;

    return (win1 = document.querySelector("#pos2").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 1800);
}

function spinOut2() {
  setTimeout(function() {
    document.querySelector("#image2").style.opacity = "0";
    document.querySelector("#group2").style.opacity = "1";
    document.querySelector("#group2").classList.add("bounce_in");

    document.querySelector("#pos4").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos5").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos6").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win2 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2100);
}

function spinOut3() {
  setTimeout(function() {
    document.querySelector("#image3").style.opacity = "0";
    document.querySelector("#group3").style.opacity = "1";
    document.querySelector("#group3").classList.add("bounce_in");

    document.querySelector("#pos7").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos8").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos9").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win3 = document.querySelector("#pos8").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2600);
}

function checkwin() {
  document.querySelector("#spin").style.pointerEvents = "auto";
  console.log(win1);
  console.log(win2);
  console.log(win3);

  let winning;
  if (win1 == win2 && win2 == win3 && win3 == win1) {
    if (win1 == "svg/1.svg" || win1 == "svg/2.svg" || win1 == "svg/3.svg" || win1 == "svg/4.svg" || win1 == "svg/6.svg" || win1 == "svg/7.svg" || win1 == "svg/8.svg") {
      winning = "50";
      document.querySelector("#audio_spin_win").play();
      document.querySelector("#audio_spin_win").currentTime = 0;
    }
    if (win1 == "svg/5.svg") {
      winning = "100";
      document.querySelector("#audio_spin_win").play();
      document.querySelector("#audio_spin_win").currentTime = 0;
    }
    if (win1 == "svg/9.svg") {
      winning = "150";
      document.querySelector("#audio_spin_win").play();
      document.querySelector("#audio_spin_win").currentTime = 0;
    }

    console.log("you've won");
    getScore(winning);
  } else {
    console.log("you didnt win");
  }
  holdOption();

  updateCredit();

  console.log(credit);
}

function muteSite() {
  if (document.querySelector("#sound").classList.contains("mute-on")) {
    console.log("hej1");
    document.querySelector("#sound").classList.remove("mute-on");
    document.querySelector("#sound").classList.add("mute-off");
    document.querySelector("#audio_spin").muted = false;
    document.querySelector("#audio_spin_win").muted = false;
    document.querySelector("#audio_spin_end").muted = false;
    console.log("page UNmuted");
  } else {
    console.log("hej2");
    document.querySelector("#sound").classList.remove("mute-off");
    document.querySelector("#sound").classList.add("mute-on");
    document.querySelector("#audio_spin").muted = true;
    document.querySelector("#audio_spin_win").muted = true;
    document.querySelector("#audio_spin_end").muted = true;
    console.log("page muted");
  }
}

get();

function get() {
  fetch(`https://frontendeksamen2019-2ef9.restdb.io/rest/accounts/${identity}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(accounts => {
      addAccountToTheDOM(accounts);
    });
}

function addAccountToTheDOM(account) {
  document.querySelector(".profile-name").innerHTML = account.username;
  document.querySelector(".username").innerHTML = "Brugernavn: " + account.username;
  document.querySelector(".mail").innerHTML = "E-mail: " + account.email;
  document.querySelector(".password").innerHTML = "Password: " + account.password;
  document.querySelector("#credit").innerHTML = account.credit;
}

document.querySelector(".edit_profile_button").addEventListener("click", openEditProfile);

function openEditProfile() {
  document.querySelector(".edit_profile").style.display = "flex";

  document.querySelector(".edit_button").addEventListener("click", e => {
    e.preventDefault();
    const un = document.querySelector("input[name=username]").value;
    const pw = document.querySelector("input[name=password]").value;
    const em = document.querySelector("input[name=email]").value;
    const cr = Number(document.querySelector("#credit").textContent);
    console.log(cr);
    editProfile({
      username: un,
      password: pw,
      email: em,
      credit: cr
    });
  });
}

function editProfile(editData) {
  let postData = JSON.stringify(editData);

  fetch(`https://frontendeksamen2019-2ef9.restdb.io/rest/accounts/${identity}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(d => d.json())
    .then(t => console.log(t));
}

document.querySelector(".getCredit").addEventListener("click", () => {
  document.querySelector("#credit-form").style.display = "flex";
});
document.querySelector(".close_credit_form").addEventListener("click", () => {
  document.querySelector("#credit-form").style.display = "none";
});

document.querySelector(".close_edit_profile").addEventListener("click", () => {
  document.querySelector(".edit_profile").style.display = "none";
});
document.querySelector(".submit_payment").addEventListener("click", e => {
  e.preventDefault();

  let num1 = Number(document.querySelector("#credit").textContent);
  let num2 = Number(document.querySelector("input[name=credit]").value);
  let sum = num1 + num2;

  document.querySelector("#credit").textContent = sum;
  document.querySelector("#credit-form").style.display = "none";

  credit2DB({
    credit: sum
  });
});

function dropDown() {
  const button = document.querySelector("#dropdown button");
  const options = document.querySelector(".options");
}

function getScore(winning) {
  console.log(winning);

  let winnings = Number(winning);
  let currentScore = Number(document.querySelector("#score").textContent);
  console.log(currentScore);
  console.log(winnings);

  let newScore = winnings + currentScore;

  console.log(newScore);
  document.querySelector("#score").textContent = newScore;

  document.querySelector(".cashout").addEventListener("click", e => {
    console.log("hej", newScore);

    let conversion = newScore * 4;

    let credits = Number(document.querySelector("#credit").textContent);

    let cashCredits = credits + conversion;

    console.log(cashCredits);

    document.querySelector("#credit").textContent = cashCredits;
    document.querySelector("#score").textContent = 0;
    newScore = 0;

    updateCredit();
  });
}

function updateCredit() {
  let cr = document.querySelector("#credit").textContent;

  credit2DB({
    credit: cr
  });

  console.log("sender til database");
}

function credit2DB(editData) {
  console.log(editData);
  let postData = JSON.stringify(editData);

  fetch(`https://frontendeksamen2019-2ef9.restdb.io/rest/accounts/${identity}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(d => d.json())
    .then(t => console.log(t));
}

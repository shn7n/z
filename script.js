const heart = document.getElementById("heart");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");

let isOpen = false;


/* =========================
   OPEN LETTER
   ========================= */

heart.addEventListener("click", function () {

    if (isOpen) {
        return;
    }

    isOpen = true;


    /*
       Make the photo softly disappear
    */

    heart.classList.add("hide");


    /*
       Slowly reveal the letter
    */

    letter.classList.add("show");

});


/* =========================
   CLOSE LETTER
   ========================= */

closeLetter.addEventListener("click", function () {

    if (!isOpen) {
        return;
    }

    isOpen = false;


    /*
       Slowly close the letter
    */

    letter.classList.remove("show");


    /*
       Wait for the letter to move away
       before bringing the photo back.
    */

    setTimeout(function () {

        heart.classList.remove("hide");

    }, 2500);

});


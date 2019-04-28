//------unlimited right swipe-------
function tinderclick() {
    var x = document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) End(15px) Scale(1.1):h"); //  you have to add the class name "test" to the html
    x[0].click();
}
setInterval(tinderclick, 2000);// will swipe right every two seconds until you terminate




//-------version 2-------------------
//will swipe right if the age of the profil is less than the age you define else will swipe left
function tinderclick() {
    var photoClick = document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) End(15px) Scale(1.1):h");
    var photoDislike = document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) Start(15px) Scale(1.1):h")
    var getage = document.getElementsByClassName("Whs(nw)");
    var age = getage[4].textContent
    var defineAge = 28 // change the number to the age you prefer
    if (age < defineAge) {
        photoClick[0].click();
    }
    else {
        photoDislike[0].click();
    }

}
// swipe right/left every 2 seconds
var setIntervalValue = setInterval(tinderclick, 2000);

// the code will stop executing after 100 swipes or 200 seconds
setTimeout(function () {
    clearInterval(setIntervalValue);
}, 100000);// tinder gives 100 right swipes per day for free account so 2sec *100 = 200sec
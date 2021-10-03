/*Starting progress width*/
var starterNum = 70;
/*Money Needed */
var mnyNeed = 1500;
var mnyToGo = document.getElementById("mnyToGo");
mnyToGo.innerHTML = mnyNeed;
/*Donor count */
var donorCount = document.getElementById("donorCount");
donorCount.innerHTML = starterNum;
/**To be called */
var holdValueState = 70;
var arrowInitRight = 106;

/*Check screen size & adjust progress arrow */
if (window.innerWidth <= 540){
    arrowInitRight = 76;
};

/*Handle Donation button click */
const handleDonate = () => {
    var amtNum = document.getElementById("donateAmt").value;

    if (amtNum < 0) {
        alert("Please enter a positive number.")
    } else if (amtNum == ""){
        alert("Try donating $50.")
    } else if (amtNum > 50 || amtNum < 50 ) {
        alert("Thank you for your support." + "\r\n" + "However, we are only able to accept donations of $50.")
    } else if (holdValueState >= 100) {
        var br = "\r\n";
        alert("Sorry, but our goal has already been met!" + br + "However, we'd like to thank you for wanting to support our cause." + br + "Stay tuned to our website and social media pages for further updates.");
    } else {
        /*Popup for succesful donation. */
        const donationPop = () => {
            var donationPop = document.getElementById("donText");
            donationPop.classList.toggle("show");
            setTimeout(() => {donationPop.classList.toggle("show");}, 4000);
        };
        donationPop();
        /*Logic for progress bar */
        var percentage = amtNum / 5000;
        var fluff = percentage * 100;
        var startWidth = 70.00;
        var result = fluff + startWidth;
        var newState = (result - startWidth) + holdValueState;
        holdValueState = newState; /* Holds previous progress state for consecutive donation successes.*/
        /*increases the progress bar*/
        document.getElementById("progress").style.width = holdValueState + "%" ;
        mnyNeed = mnyNeed - 50; /* Decrease needed money by 50 */
        mnyToGo.innerHTML = mnyNeed; /*Changes dollar amount in tooltip */
        starterNum++; /*Increment number of donors*/
        donorCount.innerHTML = starterNum; /* Changes donor number in HTML */
        /* Helps arrow stick with the progress bar. */
        if (window.innerWidth > 540 && arrowInitRight >= 4){
            var pushRight = 4 ;
            arrowInitRight = arrowInitRight - pushRight;
        }
        if (window.innerWidth <= 540 && arrowInitRight >= 4){
            var pushRight = 3 ;
            arrowInitRight = arrowInitRight - pushRight;
        }
        /* Style element creation for CSS manipulation*/
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.tooltipText:after { right: ${arrowInitRight}px;}`; /* Moves the arrow right */
        /* If the $5000 goal is met.*/
        if (holdValueState >= 100){
            alert("Thank you for being the final donor!" + "\r\n"+ "We've reached our goal!" );
        }
        return;
    }
};
/* Popup for Why Donate $50 */
const popFunc = () => {
    var popup = document.getElementById("popText");
    popup.classList.toggle("show");
    setTimeout(() => {popup.classList.toggle("show");}, 5000);
};


"use strict";
let percentsge = 90;
if (percentsge >= 90 && percentsge <= 100) {
    console.log('you have secured "A+" Grade,congratulaions');
}
else if (percentsge >= 80 && percentsge <= 89) {
    console.log('you have secured "A" Grade');
}
else if (percentsge >= 70 && percentsge <= 79) {
    console.log('you have secured "B+" Grade ');
}
else if (percentsge >= 60 && percentsge <= 69) {
    console.log('you have secured "B" Grade ');
}
else if (percentsge >= 50 && percentsge <= 59) {
    console.log('you have secured "C" Grade');
}
else if (percentsge >= 40 && percentsge <= 49) {
    console.log('you have secured "D" Grade');
}
else {
    console.log("you are fail,try again");
}

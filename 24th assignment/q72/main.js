{
    var letblock = "sure will run";
    var constblock = "sure will run";
}
try {
    console.log(letblock);
}
catch (_a) {
    console.error("nah this wont work");
}
try {
    console.log(constblock);
}
catch (_b) {
    console.error("nah this wont work");
}

var userProfile = (function () {
    var myname = "ahsan";
    var age = 16;
    return {
        info: function () {
            console.log("Name : ".concat(myname, " \nage: ").concat(age));
        }
    };
})();
userProfile.info();

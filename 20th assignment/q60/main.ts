let userProfile = (function(){
    let myname ="ahsan"
    let age = 16

    return {
        info : function() {
            console.log(`Name : ${myname} 
age: ${age}`)
        }
    };
})()
userProfile.info()
let traditionalVsArrow= {
    value : "traditionalVsArrow value",
    traditinalFunction : function(){
        console.log("Traditional Value :",this.value);
    },
    arrowFunction:() =>{
        console.log("Arrow Function Value :",this.value);
    }
}
traditionalVsArrow.traditinalFunction()//Traditional Value : traditionalVsArrow value
traditionalVsArrow.arrowFunction()//indfined
const myObject={
    property:"value",
    outerMethod:function(){
        console.log(this.property);
    
    const innerMethod =()=>{
        console.log(this.property)
    }
    innerMethod()
},

};
myObject.outerMethod()
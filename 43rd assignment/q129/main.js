var _this = this;
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditinalFunction: function () {
        console.log("Traditional Value :", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow Function Value :", _this.value);
    }
};
traditionalVsArrow.traditinalFunction();
traditionalVsArrow.arrowFunction();

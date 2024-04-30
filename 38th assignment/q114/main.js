var student = new Map();
student.set(7762, "ahsan");
student.set(7862, "anas");
student.set(7962, "arsalan");
student.forEach(function (name, ID) {
    console.log("ID : ".concat(ID, ", name: ").concat(name));
});

interface student  {
    name : string,
    age : number,
    subjects :string[]
    class : string
    section : string
}
let student : student = {
    name : "Ahsan",
    age : 16,
    subjects: ["English","sindhi","maths","physics"],
    class : "X",
    section: "B"
}
console.log(student);
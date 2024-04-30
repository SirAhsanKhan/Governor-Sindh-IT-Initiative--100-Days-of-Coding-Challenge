let student = new Map<number,string>()
student.set(7762,"ahsan")
student.set(7862,"anas")
student.set(7962,"arsalan")

student.forEach((name, ID)=>{
    console.log(`ID : ${ID}, name: ${name}`)
});
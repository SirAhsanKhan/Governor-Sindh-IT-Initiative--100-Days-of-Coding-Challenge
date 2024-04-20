function averageScore(...scores: number[]):number {

    let result = scores.reduce((total , score) => total + score, 0 );
    return result / scores.length
}

console.log(averageScore(100,34,556,78,1))



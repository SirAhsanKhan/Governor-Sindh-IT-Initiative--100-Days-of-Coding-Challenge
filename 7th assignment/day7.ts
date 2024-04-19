//task 1
let guestList: string[] = ["greatGrandFather", "father", "mother", "brother", "sister", "aunt"]
console.log(`i am inviting ${guestList.length} people to dinner`);
//task 2 
let myFavAnime: string[] = ["deathNote","dragonBall Z","onePiece","naruto","spyxfamily","ninjaKamui","jujutsuKaisen"];
console.log(`my favorite animes are ${myFavAnime}`);
//task 3
let anime:{title: string; writer: string; revenue:string ;creatorDeath:string}={

    title: "dragonBall Z",
    writer: "akira toriyama",
    revenue: "24.031 Billion$",
    creatorDeath: "1/3/2024",
};
console.log(`animeInfo: ${anime.title} by ${anime.writer} earned till now ${anime.revenue} writer died on ${anime.creatorDeath}`);
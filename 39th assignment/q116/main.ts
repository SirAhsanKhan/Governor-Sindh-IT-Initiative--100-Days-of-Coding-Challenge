function MonthsAndTheirSeason(months:number):void {
    switch (months) {
        
        case 12:
        case 1:
        case 2:
            console.log("Winter")
            break;
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;
        
        case 6:
        case 7:
        case 8:
            console.log("Spring");
            break;
            
        case 9:
        case 10:
        case 11:
            console.log("Fall")
            break;
        default:
            console.log("Invalid number of Months")
            break;
    }
    
}

MonthsAndTheirSeason(6)
MonthsAndTheirSeason(23)
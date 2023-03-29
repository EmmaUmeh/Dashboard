

// interface GreetingTimer{
// GreetingDay: string,
// GreetingNoon: string,
// GreetingNight:string,
// }

export default function GreetingEveryday() {
    var date = new Date();
    var result = date.getHours();
    var finalgreet;
    
    if(result < 12) {
       finalgreet= "Good Morning"
    }else if(result >= 12 && result <= 17) {
       finalgreet= "Good Afternoon"
    }else {
       finalgreet= "Good Evening"
    }
    

    return(
        <>
        
        {finalgreet}
        
        </>
    )
}
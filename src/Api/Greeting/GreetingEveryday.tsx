

interface GreetingTimer{
GreetingDay: string,
GreetingNoon: string,
GreetingNight:string,
}

export default function GreetingEveryday(greetings: GreetingTimer) {
    var date = new Date();
    var result = date.getHours();
    var finalgreet;
    
    if(result < 12) {
       finalgreet= greetings.GreetingDay
    }else if(result >= 12 && result <= 17) {
       finalgreet= greetings.GreetingNoon
    }else {
       finalgreet= greetings.GreetingNight
    }
    

    return(
        <>
        
        {finalgreet}
        
        </>
    )
}
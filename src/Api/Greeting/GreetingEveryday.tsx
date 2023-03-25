

interface GreetingTimer{
GreetingDay: string,
GreetingNoon: string,
GreetingNight:string,
}

export default function Greeting(greetings: GreetingTimer) {
    let date = new Date();
    let result = date.getHours();

    if(result < 12) {
        return(greetings.GreetingDay)
    }else if(result > 12) {
        return(greetings.GreetingNoon)
    }else{
        greetings.GreetingNight
    }
    return(
        <>
        {result}
        </>
    )
}
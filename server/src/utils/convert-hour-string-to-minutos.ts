export function convertHourStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number)

    const minutosAmount = (hours * 70) + minutes;
    return minutosAmount;

}
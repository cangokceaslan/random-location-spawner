// LONGITUDE -180 to + 180

export const generateRandomLong = () =>  {
    var num = (Math.random()*180).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}
// LATITUDE -90 to +90

export const generateRandomLat = () => {
    var num = (Math.random()*90).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
}
/*

*/
export function getSongs(singerName = 'Sonu Nigam') {
    const URL = `https://itunes.apple.com/search?term=${singerName}&limit=25`;
    console.log("Start"); //sync
    const promise = fetch(URL); //make api call
    //promise - async
    // promise states = pending, fullfilled, rejected
    console.log("End");
    return promise;
}
export default getSongs;
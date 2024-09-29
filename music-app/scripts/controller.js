//glue between html (view) and data (model)
// get the data from api-client and generate dynamic html
//html elements access in js using DOM.
//DOM- DOcument (html) Object Model eg- painting ke tools , for painting a wall
import getSongs from "./api-client.js";

const rootDiv = document.getElementById('root');
const promise = getSongs('Armaan Malik');

document.getElementById('loader').style.display='block';
promise.then(function(response){
    document.getElementById('loader').style.display='none';
  //  console.log('response comes...', response);
  const promise2 = response.json();
  promise2.then(function(songs){
    console.log(songs);
    printSongs(songs.results);
  }).catch(function(e){
    console.log('invalid JSON', e);
  })
   
}).catch(function(err){
    console.log('error comes...',err)
})

//Loading will be displayed

function printSongs(songs){
    const songDiv = document.getElementById('root');
    for(var i=0;i<songs.length;i++){
        const name = songs[i].artistName;    
        const photo = songs[i].artworkUrl100;
        const songURL = songs[i].previewUrl;
        const pTag =  document.createElement('p'); //<p></p>
        pTag.innerText = name;
        const imageTag =  document.createElement('img');
        imageTag.src=photo;
        const audio =  document.createElement('audio');
        audio.src = songURL;
        audio.controls= true;

        songDiv.appendChild(pTag);
        songDiv.appendChild(imageTag);
        songDiv.appendChild(audio);
    }
}
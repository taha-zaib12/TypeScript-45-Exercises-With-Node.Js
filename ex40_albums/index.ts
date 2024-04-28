// 40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


//creating a function that builds a Object:
function make_album(artist_name:string, album_title:string, tracks?:number){
    let music_album :{artist: string, albumTitle: string, tracks?: number} = {
        artist: artist_name,
        albumTitle: album_title,
    };
    if(tracks !== undefined){
        music_album.tracks = tracks ;
    };
    return music_album;
};

//now calling the function 3 times and creating 3 variables with diff values:
let album1= make_album("artist no.1", "albumTitle no.1");
let album2= make_album("arist no.2","albumTitle no.2");
//calling our function with third parameter tracks:
let album3= make_album("arist no.3", "albumtitle no.3", 5);
//printing value of our object:
console.log(album1);
console.log(album2);
console.log(album3);

//basically in this program we are creating an object inisde a function and also returned the object containing particular piece of info i gave in my object and then making 3 variables and calling our function 3 times and the printing those 3 variables in which we called our function inside which we created our object!
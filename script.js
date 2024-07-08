const title = document.getElementById("song-title");
const credit = document.getElementById("song-credits");
const image = document.getElementById("song-image");
const source = document.getElementById("song-src");

const song1Link = document.getElementById("song-1");
song1Link.addEventListener("click", song1);
function song1(){
    title.innerHTML = "Kya Mujhe Pyaar Hai";
    credit.innerHTML = "KK,  Album - Woh Lamhe";
    image.src = "resources/kk.png";
    source.src ="resources/128-Kya Mujhe Pyaar Hai - Woh Lamhe 128 Kbps.mp3";
    audio.load();
}

const song2Link = document.getElementById("song-2");
song2Link.addEventListener("click", song2);
function song2(){
    title.innerHTML = "Dil Kyun Yeh Mera";
    credit.innerHTML = "KK, Movie-Kites";
    image.src = "resources/dil_kyu.png";
    source.src ="resources/128-Dil Kyun Yeh Mera - Kites 128 Kbps.mp3";
    audio.load();
}

const song3Link = document.getElementById("song-3");
song3Link.addEventListener("click", song3);
function song3(){
    title.innerHTML = "Tere Liye";
    credit.innerHTML = "Atif Aslam, Shreya Ghoshal";
    image.src = "resources/tereLiye.png";
    source.src ="resources/128-Tere Liye - Prince 128 Kbps.mp3";
    audio.load();
}

const song4Link = document.getElementById("song-4");
song4Link.addEventListener("click", song4);
function song4(){
    title.innerHTML = "Brown Rang";
    credit.innerHTML = "Yo Yo Honey Singh";
    image.src = "resources/brown_rang.png";
    source.src ="resources/128-Brown Rang - International Villager 128 Kbps.mp3";
    audio.load();
}

const song5Link = document.getElementById("song-5");
song5Link.addEventListener("click", song5);
function song5(){
    title.innerHTML = "Amplifier";
    credit.innerHTML = "Imran Khan";
    image.src = "resources/imraan.png";
    source.src ="resources/128-Amplifier - Imran Khan 128 Kbps.mp3";
    audio.load();
}

const song6Link = document.getElementById("song-6");
song6Link.addEventListener("click", song6);
function song6(){
    title.innerHTML = "Dil Ibaadat";
    credit.innerHTML = "KK,  Movie - Tum Mile";
    image.src = "resources/ibadat.png";
    source.src ="resources/128-Dil Ibaadat - Tum Mile 128 Kbps.mp3";
    audio.load();
}

const song7Link = document.getElementById("song-7");
song7Link.addEventListener("click", song7);
function song7(){
    title.innerHTML = "My Dil Goes Mmmm";
    credit.innerHTML = "Shaan, Vishal & Shekhar";
    image.src = "resources/mmm.png";
    source.src ="resources/128-My Dil Goes Mmmm - Salaam Namaste 128 Kbps.mp3";
    audio.load();
}

const song8Link = document.getElementById("song-8");
song8Link.addEventListener("click", song8);
function song8(){
    title.innerHTML = "Jee le Zara";
    credit.innerHTML = "Vishal Dadlani";
    image.src = "resources/jeeLe.png";
    source.src ="resources/128-Jee Le Zaraa - Talaash 128 Kbps.mp3";
    audio.load();
}

const song9Link = document.getElementById("song-9");
song9Link.addEventListener("click", song9);
function song9(){
    title.innerHTML = "Satisfya";
    credit.innerHTML = "Imran Khan";
    image.src = "resources/satisfya.png";
    source.src ="resources/128-Satisfya - Imran Khan 128 Kbps.mp3";
    audio.load();
}

const song10Link = document.getElementById("song-10");
song10Link.addEventListener("click", song10);
function song10(){
    title.innerHTML = "Tum hi ho";
    credit.innerHTML = "Arijit Singh & Mithoon";
    image.src = "resources/tumHIho.png";
    source.src ="resources/128-Tum Hi Ho - Aashiqui 2 128 Kbps.mp3";
    audio.load();
}
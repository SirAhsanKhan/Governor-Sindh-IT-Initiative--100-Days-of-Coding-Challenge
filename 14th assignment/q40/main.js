function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("travis scott", "rodeo", 16));
console.log(make_album("weeknd", "popular"));
console.log(make_album("talha anjum", "open letter", 11));

function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}
console.log(make_album("travis scott","rodeo", 16));
console.log(make_album("weeknd","popular"));
console.log(make_album("talha anjum","open letter", 11));
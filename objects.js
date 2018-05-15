var playlist = {'a':'b'}

function updatePlaylist(playlist, artistName,songTitle){
  Object.assign(playlist,{artistName:songTitle})
  return playlist
}
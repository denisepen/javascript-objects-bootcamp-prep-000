var playlist = {artistName : "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = 'Phil Ochs'
  playlist.songTitle ="Here's to the State of Mississippi"
  
  playlist[artistName] = songTitle;

  return playlist.artistName + playlist.songTitle
}
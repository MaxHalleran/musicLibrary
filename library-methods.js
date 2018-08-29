var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function printPlaylists() {
    var tmpStr = "";
    for (var playlistId in this.playlists) {
       var curPlay = this.playlists[playlistId];
      tmpStr +=  curPlay.id + ": " + curPlay.name + " - " + curPlay.tracks.length + " track" + ((curPlay.tracks.length > 1) ? "s" : "") + "\n";
     }
  return tmpStr;
  },

  printTracks: function printTracks() {
   var tmpStr = "";

    for (var trackId in this.tracks) {
      var curTrack = this.tracks[trackId];
      tmpStr += curTrack.id + ": " + curTrack.name + " by " + curTrack.artist + " (" + curTrack.album + ")" + "\n";
    }
    return tmpStr;
  },

  printPlaylist: function printPlaylist(playlistId) {
    var tmpStr = "";
    var curPlay = this.playlists[playlistId];

    tmpStr =  curPlay.id + ": " + curPlay.name + " - " + curPlay.tracks.length + " track" + ((curPlay.tracks.length > 1) ? "" : "s") + "\n";
    this.playlists[playlistId].tracks.forEach(function (element) {
      var curTrack = library.tracks[element];
      tmpStr += curTrack.id + ": " + curTrack.name + " by " + curTrack.artist + " (" + curTrack.album + ")" + "\n";
    });
    return tmpStr;
  },

  addTrackToPlaylist: function addTrackToPlaylist(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },

  uid: function uid() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function addTrack(name, artist, album) {
    var tmpObj = {
      id : this.uid(),
      name : String(name),
      artist : String(artist),
      album : String(album)
    }
    library.tracks[tmpObj.id] = tmpObj;
  },
  addPlaylist: function addPlaylist(name) {
    var tempObj = {
      id: this.uid(),
      name: String(name),
      tracks: []
    };
    library.playlists[tempObj.id] = tempObj;
  }
}

library.addPlaylist("New Playlist");
library.addTrack("Yellow", "Coldplay", "I Dunno");
library.addTrackToPlaylist("t03", "p01");
console.log(library.printPlaylists());
console.log(library.printTracks());
console.log(library.printPlaylist("p02"));

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// };
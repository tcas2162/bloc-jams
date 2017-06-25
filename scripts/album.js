<<<<<<< HEAD
<<<<<<< HEAD
var getSongNumberCell = function(number) {
    return $('.song-item-number[data-song-number="' + number + '"]');   
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
=======

var setSong = function(songNumber){
  currentlyPlayingSongNumber = songNumber;
  currentSongFromAlbum = currentAlbum.songs[currentlyPlayingSongNumber - 1];
};

var getSongNumberCell = function(songNumber) {
    return $('.song-item-number[data-song-number="' + songNumber + '"]');
};

var createSongRow = function(songNumber, songName, songLength) {
     var template =
>>>>>>> assignment-31
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

    var $row = $(template);
    
    var clickHandler = function() {
        var songNumber = parseInt($(this).attr('data-song-number'));

        if (currentlyPlayingSongNumber !== null) {
=======
 var createSongRow = function(songNumber, songName, songLength) {
     var template =
         '<tr class="album-view-song-item">'
     + '     <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '     <td class="song-item-title">' + songName + '</td>'
     + '     <td class="song-item-duration">' + songLength + '</td>'
     + '     </tr>'

     var $row = $(template);

     var clickHandler = function() {
         var songNumber = parseInt($(this).attr('data-song-number'));
         
         if (currentlyPlayingSongNumber !== null) {
>>>>>>> assignment-32-toggle
            var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
            
            currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
             currentlyPlayingCell.html(currentlyPlayingSongNumber);
         }
         
         if (currentlyPlayingSongNumber !== songNumber) {
             $(this).html(pauseButtonTemplate);
             setSong(songNumber);
             currentSoundFile.play();
             $(this).html(pauseButtonTemplate);
             currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
             updatePlayerBarSong();
             
         } else if (currentlyPlayingSongNumber === songNumber) {
            if (currentSoundFile.isPaused()) {
                $(this).html(pauseButtonTemplate);
                $('.main-controls .play-pause').html(playerBarPauseButton);
                currentSoundFile.play();
            }
            
            else { 
                $(this).html(playButtonTemplate);
                $('.main-controls .play-pause').html(playerBarPlayButton);
                currentSoundFile.pause(); 
            }
<<<<<<< HEAD
        }
    };
    
    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));
        
        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(playButtonTemplate);
        }
    };
    
    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));
        
        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(songNumber);
        }
<<<<<<< HEAD
    };
    
    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row;
};
=======
            
         }
     };

     var onHover = function(event) {
         var songNumberCell = $(this).find('.song-item-number');
         var songNumber = parseInt(songNumberCell.attr('data-song-number'));
         
         if (songNumber !== currentlyPlayingSongNumber) {
             songNumberCell.html(playButtonTemplate);
         }
     };
                 
     var offHover = function(event) {
         // Revert the content back to the number (from the play button)
         var songNumberCell = $(this).find('.song-item-number');
         var songNumber = parseInt(songNumberCell.attr('data-song-number'));
 
         if (songNumber !== currentlyPlayingSongNumber) {
             songNumberCell.html(songNumber);
         }
         console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
 
     };
     
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
 };
 
 
 var setCurrentAlbum = function(album) {
     currentAlbum = album;
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
     
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
     
     $albumSongList.empty();
     
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
 };
 
 var trackIndex = function(album, song) {
    return album.songs.indexOf(song);
}
>>>>>>> assignment-32-toggle

 var setSong = function(songNumber) {
    if (currentSoundFile) {
        currentSoundFile.stop();
    }
     currentlyPlayingSongNumber = parseInt(songNumber);
     currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
    currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
        formats: [ 'mp3' ],
        preload: true
    });
    
    setVolume(currentVolume);
=======
     };
 
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
 };

  var setCurrentAlbum = function(album) {
      currentAlbum = album;
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
 
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     $albumSongList.empty();
 
     for (var i = 0; i < album.songs.length; i++) {
        var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
        $albumSongList.append($newRow);
     }
 };

     var trackIndex = function(album, song) {
        return album.songs.indexOf(song);
 };

     var nextSong = function() {
        var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
        currentSongIndex++;
        
        if (currentSongIndex >= currentAlbum.songs.length) {
        currentSongIndex = 0;
    }
    
    var lastSongNumber = parseInt(currentlyPlayingSongNumber);
        currentlyPlayingSongNumber = currentSongIndex + 1;
        currentSongFromAlbum = currentAlbum.songs[currentSongIndex];
        updatePlayerBarSong();

        var $nextSongNumberCell = parseInt($('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]'));
        var $lastSongNumberCell = parseInt($('.song-item-number[data-song-number="' + lastSongNumber + '"]'));

        $nextSongNumberCell.html(pauseButtonTemplate);
        $lastSongNumberCell.html(lastSongNumber);
>>>>>>> assignment-31
};

var setVolume = function(volume) {
    if (currentSoundFile) {
        currentSoundFile.setVolume(volume);
    }
<<<<<<< HEAD
<<<<<<< HEAD
};

var setCurrentAlbum = function(album) {
    currentAlbum = album;
=======
       
       var lastSongNumber = parseInt(currentlyPlayingSongNumber);
>>>>>>> assignment-31

    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');

    $albumTitle.text(album.name);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);

    $albumSongList.empty();

    for (i = 0; i < album.songs.length; i++) {
        var $newRow= createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
        $albumSongList.append($newRow);
    }
};

var updatePlayerBarSong = function() {
    $('.currently-playing .song-name').text(currentSongFromAlbum.name);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.artist);
    
    $('.main-controls .play-pause').html(playerBarPauseButton);
};

<<<<<<< HEAD
var trackIndex = function(album, song) {
    return album.songs.indexOf(song);
};

var nextSong = function() { 
    var getLastSongNumber = function(index) {
        return index == 0 ? currentAlbum.songs.length : index;
    };
    
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    currentSongIndex++;
    
    if (currentSongIndex >= currentAlbum.songs.length) {
        currentSongIndex = 0;
    }
    
    setSong(currentSongIndex + 1);
    currentSoundFile.play();
    currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

    $('.currently-playing .song-name').text(currentSongFromAlbum.name);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    
    var lastSongNumber = getLastSongNumber(currentSongIndex);
    var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
    
    $nextSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
};

var previousSong = function() {
    var getLastSongNumber = function(index) {
        return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
    };
    
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    currentSongIndex--;
    
    if (currentSongIndex < 0) {
        currentSongIndex = currentAlbum.songs.length - 1;
=======
 };
 
 var getSongNumberCell = function(number) {
     return $('.song-item-number[data-song-number="' + number + '"]');
 };

  var nextSong = function() {
     
     var getLastSongNumber = function(index) {
         return index == 0 ? currentAlbum.songs.length : index;
     };
     
     var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
     // increment the song
     currentSongIndex++;
     
     if (currentSongIndex >= currentAlbum.songs.length) {
         currentSongIndex = 0;
     }
     
     // Set a new current song
     setSong(currentSongIndex + 1);
     currentSoundFile.play();
     updatePlayerBarSong();
     
     var lastSongNumber = getLastSongNumber(currentSongIndex);
     var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
     var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
     
     $nextSongNumberCell.html(pauseButtonTemplate);
      $lastSongNumberCell.html(lastSongNumber);
     
 };
 
 
 var previousSong = function() {
 
     var getLastSongNumber = function(index) {
         return index == (currentAlbum.songs.length - 1) ? 1 : index + 2; 
     };
     
     var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
     // decrement the song
     currentSongIndex--;
     
     if (currentSongIndex < 0) {
         currentSongIndex = currentAlbum.songs.length - 1;
     }
     
     // Set a new current song
     setSong(currentSongIndex + 1);
      currentSoundFile.play();
      updatePlayerBarSong();
     
     var lastSongNumber = getLastSongNumber(currentSongIndex);
     var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
     var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
     
     $previousSongNumberCell.html(pauseButtonTemplate);
     $lastSongNumberCell.html(lastSongNumber);
 };

 var updatePlayerBarSong = function() {
     $('.currently-playing .song-name').text(currentSongFromAlbum.title);
     $('.currently-playing .artist-name').text(currentAlbum.artist);
     $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
     $('.main-controls .play-pause').html(playerBarPauseButton);  
 };

 var togglePlayFromPlayerBar = function() {
    
    var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
    
    if (currentSoundFile.isPaused()) {
        $(currentlyPlayingCell).html(pauseButtonTemplate);
        
        $('.main-controls .play-pause').html(playerBarPauseButton);
        currentSoundFile.play();
        updateSeekBarWhileSongPlays();   
>>>>>>> assignment-32-toggle
    }

    else { 
        $(currentlyPlayingCell).html(playButtonTemplate);
        $('.main-controls .play-pause').html(playerBarPlayButton);
        currentSoundFile.pause(); 
    } 
};

<<<<<<< HEAD
=======
  setSong(currentSongIndex + 1);
  currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

  // Update the Player Bar information
  $('.currently-playing .song-name').text(currentSongFromAlbum.name);
  $('.currently-playing .artist-name').text(currentAlbum.artist);
  $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.name);
  $('.left-controls .play-pause').html(playerBarPauseButton);

  var lastSongNumber = getLastSongNumber(currentSongIndex);
  var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
  var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

  $nextSongNumberCell.html(pauseButtonTemplate);
  $lastSongNumberCell.html(lastSongNumber);

};

var updatePlayerBarSong = function(){
  $('.currently-playing .song-name').text(currentSongFromAlbum.name);
  $('.currently-playing .artist-name').text(currentAlbum.artist);
  $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.name + " - " + currentAlbum.artist);
  $('.main-controls .play-pause').html(playerBarPauseButton);
};

>>>>>>> assignment-31
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

<<<<<<< HEAD
var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var currentSoundFile = null;
var currentVolume = 80;
=======
// Store state of songs
var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
>>>>>>> assignment-31
=======
  // Album button templates
 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
 var playerBarPlayButton = '<span class="ion-play"></span>';
 var playerBarPauseButton = '<span class="ion-pause"></span>';
         
 // Store state of playing songs
 var currentAlbum = null;
 var currentlyPlayingSongNumber = null;
 var currentSongFromAlbum = null;
 var currentSoundFile = null;
 var currentVolume = 80;
 
 var $previousButton = $('.main-controls .previous');
 var $nextButton = $('.main-controls .next');
 var $playerBarPlayToggle = $('.main-controls .play-pause');

  $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
     $previousButton.click(previousSong);
     $nextButton.click(nextSong);
     $playerBarPlayToggle.click(togglePlayFromPlayerBar);
 });
>>>>>>> assignment-32-toggle


<<<<<<< HEAD
<<<<<<< HEAD
$(document).ready(function() {
    setCurrentAlbum(albumPicasso);
    $previousButton.click(previousSong);
    $nextButton.click(nextSong);
=======
$(document).ready( function() {

  setCurrentAlbum(albumPicasso);
  $previousButton.click(previousSong);
  $nextButton.click(nextSong);
>>>>>>> assignment-31
});
=======
>>>>>>> assignment-32-toggle

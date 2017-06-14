 var createSongRow = function(songNumber,songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
      + '<td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '<td class="song-item-title">' + songName + '</td>'
      + '<td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
    ;

    var $row = $(template);

    var clickHandler = function clickHandler() {
        var songNumber = parseInt($(this).attr('data-song-number'));

        if (currentlyPlayingSongNumber === null) {
            $(this).html(pauseButtonTemplate);
            setSong(songNumber);
            updatePlayerBarSong();
        } else if (currentlyPlayingSongNumber === songNumber) {
            $(this).html(playButtonTemplate);
            currentlyPlayingSongNumber = null;
            currentSongFromAlbum = null;
            $('.main-controls .play-pause').html(playerBarPlayButton);
        } else if (currentlyPlayingSongNumber !== songNumber) {
            var currentlyPlayingSongElement = getSongNumberCell(currentlyPlayingSongNumber);
            currentlyPlayingSongElement.empty().text(currentlyPlayingSongNumber);
            $(this).html(pauseButtonTemplate);
            setSong(songNumber);
            updatePlayerBarSong();
        }
    };

    var onHover = function onHover(event) {
        var $songItem = $(this).find('.song-item-number');
        var songItemNumber = parseInt($songItem.attr('data-song-number'));
        if (songItemNumber !== currentlyPlayingSongNumber) {
            $songItem.html(playButtonTemplate);
        }
    };

    var offHover = function offHover(event) {
        var $songItem = $(this).find('.song-item-number');
        var songItemNumber = parseInt($songItem.attr('data-song-number'));
        if (songItemNumber !== currentlyPlayingSongNumber) {
            $songItem.html(songItemNumber);
        }
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
        var $newRow = createSongRow(parseInt(i + 1), album.songs[i].title, album.songs[i].duration);
        $albumSongList.append($newRow);
    }
};

var setSong = function setSong(songNumber) {
    currentlyPlayingSongNumber = parseInt(songNumber);
    var songNumberIndex = parseInt(songNumber - 1);
    currentSongFromAlbum = currentAlbum.songs[songNumberIndex];
};

var getSongNumberCell = function getSongNumberCell(number) {
    var $songNumberCell = $('.song-item-number[data-song-number="' + number + '"]');
    return $songNumberCell;
};

var trackIndex = function(album, song) {
    return album.songs.indexOf(song);
};

var nextSong = function() {
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    var $lastSong = getSongNumberCell(currentIndex + 1);
    var lastSongNumber = parseInt($lastSong.attr('data-song-number'));
    var $newSong = null;

    currentIndex++;

    if (currentIndex >= currentAlbum.songs.length) {
        currentIndex = 0;
    }

    setSong(currentIndex + 1);
    $lastSong.html(lastSongNumber);
    $currentSong = getSongNumberCell(currentIndex + 1);
    $currentSong.html(pauseButtonTemplate);
    updatePlayerBarSong();
};

var previousSong = function() {
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    var $lastSong = getSongNumberCell(currentIndex + 1);
    var lastSongNumber = parseInt($lastSong.attr('data-song-number'));
    var $currentSong = null;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentAlbum.songs.length - 1;
    }
    
    setSong(currentIndex + 1);
    $lastSong.html(lastSongNumber);
    $currentSong = getSongNumberCell(currentIndex + 1);
    $currentSong.html(pauseButtonTemplate);
    updatePlayerBarSong();
};

var updatePlayerBarSong = function() {
    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + ' - ' + currentAlbum.artist);
    $('.currently-playing .total-time').text(currentSongFromAlbum.duration);
    $('.main-controls .play-pause').html(playerBarPauseButton);
};

// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

// Store state of playing songs
var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;

var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');

$(document).ready(function () {
    setCurrentAlbum(albumPicasso);
    $previousButton.click(previousSong);
    $nextButton.click(nextSong);
});
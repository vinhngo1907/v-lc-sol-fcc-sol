// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

// function getExtensionFilename(filename) {
//   // viết code ở đây.

//   for(var i = 1; i <= filename.length; i++){
//     var result ='';
//     if(filename[i]==='.'){
//       return result+= filename.slice(i+1);
//     }
//   }
//   return result;
// }
// getExtensionFilename('anime.mp4');

function getExtensionFilename(s) {
    var arr = [];
    arr = s.split('.');
    return arr[arr.length - 1];
}
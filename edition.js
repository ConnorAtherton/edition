var fs = require("fs");
var ws = fs.createWriteStream("output.txt");

fs.readdir('./book', function(err, files) {
  if (err) return err;
  console.log(files);

  // file will be sorted based on their prefixed
  // numerical number before _ char
  files.sort(function(first, second) {
    first = first.slice(0, first.indexOf("_"));
    second = second.slice(0, second.indexOf("_"));
    return first - second;
  });

  files.forEach(function(file){
    fs.createReadStream('./book/' + file).pipe(ws);
  });

  console.log(files);
});

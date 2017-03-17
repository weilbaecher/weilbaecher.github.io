var path = require('path')
var fs = require('fs')
var cacheFiles = []

const getFilesList = (dirPath, fileType, parentDir) => {
  var files = []
  fileType = '.' + fileType
  var list = fs.readdirSync(dirPath)
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === fileType) {
      files.push(parentDir + list[i])
    }
  }
  return files
}

// get css file in  /static/css directory
var cssDirPath = path.join(__dirname, 'dist/static/css')
var cssCacheFiles = getFilesList(cssDirPath, 'css', '/static/css/')
// get js file in /static/js directory
var jsDirPath = path.join(__dirname, 'dist/static/js')
var jsCacheFiles = getFilesList(jsDirPath, 'js', '/static/js/')

cacheFiles = cssCacheFiles.concat(jsCacheFiles)

// get default code from service-worker.js
var codes = fs.readFileSync('sw-default.js').toString()

// write a new service-worker.js
var wstream = fs.createWriteStream('service-worker.js')
wstream.write("var cacheTimestamp = '" + Date.now(0) + "';\n")
wstream.write("var cacheName = 'andy-dev-shell-v' + cacheTimestamp;\n")
wstream.write("var dataCacheName = 'andy-dev-data-v' + cacheTimestamp;\n")
wstream.write("var filesToCache = [\n")
wstream.write(" '/',\n")
wstream.write(" '/about/index.html',\n")
wstream.write(" '/resume/index.html',\n")
wstream.write(" '/work/index.html',\n")
wstream.write(" '/contact/index.html',\n")
wstream.write(" '/manifest.json',\n")
for(var i = 0; i < cacheFiles.length; i++) {
  wstream.write(" '" + cacheFiles[i] + "',\n")
}
wstream.write('];\n\n')
wstream.write(codes)
wstream.end();

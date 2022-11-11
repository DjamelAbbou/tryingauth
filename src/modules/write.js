const fs = require('fs')

export default function writeToFile(content) {
  fs.appendFile('../data.txt', content, err => err ? console.log("failed to write") : "")
}

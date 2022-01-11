const fs = require("fs")
const path = require("path")

module.exports = getFiles = (dir, filter, callback) => {
   fs.readdir(dir, (err, list) => {
      if (err) return callback(err)

      list = list.filter((file) => {
         return path.extname(file) === "." + filter
      })

      callback(null, list)
   })
}

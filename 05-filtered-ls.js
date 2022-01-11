let fs = require("fs")
let path = require("path")

let dir = process.argv[2]
let filter = process.argv[3]

/* fs.readdir(dir, (err, list) => {
   if (err) {
      console.log(err)
   } else {
      list.filter((f) => {
         if (path.extname(f) === ext) {
            console.log(f)
         }
      })
   }
}) */

const getFiles = (dir, filter, callback) => {
   fs.readdir(dir, (err, list) => {
      if (err) return callback(err)

      list = list.filter((file) => {
         return path.extname(file) === "." + filter
      })

      callback(null, list)
   })
}

getFiles(dir, filter, (err, list) => {
   if (err) return console.log("Hubo un error", err)

   list.forEach((file) => {
      console.log(file)
   })
})

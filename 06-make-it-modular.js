let filterFunction = require("./06-mymodule")

let dir = process.argv[2]
let filter = process.argv[3]

filterFunction(dir, filter, (err, list) => {
   if (err) return console.log("Hubo un error", err)

   list.forEach((file) => {
      console.log(file)
   })
})

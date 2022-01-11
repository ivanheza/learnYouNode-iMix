const fs = require("fs")

const file = process.argv[2]

fs.readFile(file, "utf-8", (err, contents) => {
   if (err) {
      console.log(err)
   } else {
      const lines = contents.split("\n").length - 1
      console.log(lines)
   }
})

//METODO 2
/* const readFile = async () => {
   try {
      const content = await fs.promises.readFile(process.argv[2], "utf-8")
      const lines = content.split("\n").length - 1
      console.log(lines)
   } catch (error) {}
}

readFile() */

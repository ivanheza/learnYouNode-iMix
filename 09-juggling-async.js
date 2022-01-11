const http = require("http")
const bl = require("bl")

let contador = 0
let results = []

let body = ""

const printResults = () => {
   for (let i = 0; i < 3; i++) {
      console.log(results[i])
   }
}

const getHTTP = (index) => {
   http.get(process.argv[2 + index], (response) => {
      response.pipe(
         bl((err, data) => {
            if (err) {
               console.log(err)
            }
            results[index] = data.toString()
            contador++

            if (contador === 3) {
               printResults()
            }
         })
      )
   })
}

for (let i = 0; i < 3; i++) {
   getHTTP(i)
}

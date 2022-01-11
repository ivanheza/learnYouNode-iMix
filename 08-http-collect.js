const http = require("http")
const url = process.argv[2]

let body = ""

http.get(url, (response) => {
   response.on("data", (data) => (body += data))
   response.on("end", () => {
      console.log(body.length)
      console.log(body)
   })
   response.on("error", (err) => console.log("Hubo un error", err))
})

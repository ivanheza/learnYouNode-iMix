const http = require("http")

const url = process.argv[2]

http
   .get(url, (response) => {
      response.setEncoding("utf-8")
      response.on("data", (data) => console.log(data))
      response.on("error", (err) => console.log("Hubo un error", err))
   })
   .on("error", (err) => console.log("Hubo un error", err))

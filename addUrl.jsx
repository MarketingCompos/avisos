const fs = require("fs")

const read = JSON.parse(fs.readFileSync("./src/Components/Slide/app.json"))

const addUrl = {
    id: String(read.length + 1),
    urlImage: "https://www.msn.com/pt-br/noticias/brasil/imposto-da-shein-governo-mant%C3%A9m-isen%C3%A7%C3%A3o-de-compras-no-exterior-entre-pessoas-f%C3%ADsicas-at%C3%A9-us-50/ar-AA1a18EV?ocid=msedgntp&cvid=d2c6bdac15234378b71fe2e9dffcc67a&ei=8",
    
  }

read.push(addUrl)

fs.writeFileSync("./src/Components/Slide/app.json", JSON.stringify([...read, addUrl ]))

console.log(read)
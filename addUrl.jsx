const fs = require("fs")

const read = JSON.parse(fs.readFileSync("./src/Components/Slide/app.json"))



const addUrl = {
    id: String(read.length + 1),
    urlImage: "dfsa",
    
  }

read.push(addUrl)

fs.writeFileSync("./src/Components/Slide/app.json", JSON.stringify([...read, addUrl ]))

console.log(read)
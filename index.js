const fs = require('fs')
const http = require("http")
// const data = fs.readFileSync("./txt/input.txt", "utf-8")
// console.log(data)
// const newText = `I will add this inside you ${data}.\nWhat is the dirrerence ${Date.now()}`
// fs.writeFileSync("./txt/output.txt", newText)

// const fileName = fs.readFile("./txt/start.txt","utf-8", (err,fileName) => {
//     const readData = fs.readFile(`./txt/${fileName}.txt`,"utf-8", (err,data) => {
//         console.log(data)
//         fs.writeFileSync('./txt/output.txt', "this is some random shit")
//     })
// })


///////////////////////////////////
//////// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === "/" ||  pathName === "/overview") {
         res.end("this is the overview")
    } else if (pathName === "/product") {
        res.end("this is the prodct")
    } else {
        res.writeHead(404)
        res.end("Page not found 404")
    }
})
server.listen('8000', '127.0.0.1', () => {
    console.log("Listeing to request on port 8000")
})

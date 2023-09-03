const fs = require('fs')
const http = require("http")
const url = require("url")
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
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const dataObject = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === "/" ||  pathName === "/overview") {
         res.end("this is the overview")
    } else if (pathName === "/product") {
        res.end("this is the prodct")
    } else if (pathName === "/api") {
        res.writeHead(200, {
            "Content-type": "application/json"
        })
        res.end(data)
    }
     else {
        res.writeHead(404, {
            'Content-type': "text/html",
            'custom-header': "my-own-header"
        })
        res.end("<h1>Page not found 404</h1>")
    }
})
server.listen('8000', '127.0.0.1', () => {
    console.log("Listeing to request on port 8000")
})

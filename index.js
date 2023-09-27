const fs = require('fs')
const http = require("http")
const url = require("url")
const replaceTemplate = require("./modules/replaceTemplate")

///////////////////////////////////
//////// SERVER
// METHODS



// FILE IO
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8")
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8")
const product = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8")
const dataObject = JSON.parse(data)

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true)
    // OVERVIEW PAGE
    if (pathname === "/" ||  pathname === "/overview") {
        res.writeHead(200, {
            "Content-type": "text/html"
        })
        const cardsHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join("")
        const output = tempOverview.replace("{%PRODUCTCARDS%}", cardsHtml)
        res.end(output)

    // PRODUCTS PAGE
    } else if (pathname === "/product") {
        const {id} = query
        const requiredData = dataObject[id]
        let htmlContent = ""
        if (requiredData !== undefined) {
            htmlContent = replaceTemplate(product, requiredData)
        }
        res.writeHead(200, {
            "Content-type": "text/html"
        })
        res.end(htmlContent)


    } else if (pathname === "/api") {
        res.writeHead(200, {
            "Content-type": "application/json"
        })
        res.end(data)
    }
    // DEFAULT HANDLING 404
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

// -------------------------------------------------------------------------------------------------

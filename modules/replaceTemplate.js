module.exports = replaceTemplate = (tempCard, data) => {
    let output = tempCard.replace(/{%IMAGE%}/g, data.image)
    output = output.replace(/{%PRODUCTNAME%}/g, data.productName)
    output = output.replace(/{%QUANTITY%}/g, data.quantity)
    output = output.replace(/{%PRICE%}/g, data.price)
    output = output.replace(/{%PRODUCTNAME%}/g, data.productName)
    output = output.replace(/{%ID%}/g, data.id)
    output = output.replace(/{%DESCRIPTION%}/g, data.description)
    output = output.replace(/{%FROM%}/g, data.from)
    output = output.replace(/{%NUTRIENTSNAME%}/g, data.nutrients)
    
    if (!data.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic")
    return output
}
function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
    var datos = parseInt(hex,16)
    return datos
}
module.exports = {decimaltoHexa,HexToSignedInt}
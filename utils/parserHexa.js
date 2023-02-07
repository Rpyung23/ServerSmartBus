function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
   /*var dato =  Buffer.from(hex, 'hex').readInt32LE()
   return ("-0"+Math.abs(dato/10000))*/

    return parseInt(hex,16) | 0
}
module.exports = {decimaltoHexa,HexToSignedInt}
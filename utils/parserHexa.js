function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
   var datos = Buffer.from(hex, 'hex').readInt32LE();
   return (datos/10000);
}
module.exports = {decimaltoHexa,HexToSignedInt}
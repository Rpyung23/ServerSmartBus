function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
   var datos = Buffer.from(hex, 'hex').readInt32LE();
   var result =  (datos/10000);
   console.log("RESULT "+result)
   return result
}
module.exports = {decimaltoHexa,HexToSignedInt}
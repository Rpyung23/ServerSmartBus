function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(num, numSize) {
    var val = {
        mask: 0x8 * Math.pow(16, numSize-1), //  0x8000 if numSize = 4
        sub: -0x1 * Math.pow(16, numSize)    //-0x10000 if numSize = 4
    }
    if((parseInt(num, 16) & val.mask) > 0) { //negative
        return (val.sub + parseInt(num, 16))
    }else {                                 //positive
        return (parseInt(num,16))
    }
}
module.exports = {decimaltoHexa,HexToSignedInt}
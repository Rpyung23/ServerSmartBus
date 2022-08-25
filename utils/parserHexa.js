function decimaltoHexa(dato)
{
    var hex = dato.toString(16)
    return (hex.length < 2 ? "0"+hex : hex)
}

function HexToSignedInt(hex)
{
    var data = hex.match(/../g);

// Create a buffer
    var buf = new ArrayBuffer(4);
// Create a data view of it
    var view = new DataView(buf);

// set bytes
    data.forEach(function (b, i) {
        view.setUint8(i, parseInt(b, 16));
    });

// get an int32 with little endian
    var num = view.getInt32(0, 1);
    return num
}
module.exports = {decimaltoHexa,HexToSignedInt}
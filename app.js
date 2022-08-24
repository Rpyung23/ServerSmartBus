let decimaltoHexa = require('./utils/parserHexa')
const net = require('net');
const {parse} = require("nodemon/lib/cli");

const server = net.createServer()

server.on('connection', (socket)=>
{
    console.log('CLINETE CONECTADO ')
    socket.on('data', (data)=>
    {
        var fecha = ""
        var lat = ""
        var lng = ""

        //console.log(data[0])
        if(data[0].toString(16) == 'f1')
        {

            console.log(data)

            fecha = decimaltoHexa(data[11].toString(16))+decimaltoHexa(data[10].toString(16))
                +decimaltoHexa(data[9].toString(16))+decimaltoHexa(data[8].toString(16))

            lat = decimaltoHexa(data[15].toString(16))+decimaltoHexa(data[14].toString(16))
                +decimaltoHexa(data[13].toString(16))+decimaltoHexa((data[12].toString(16)))

            lng = decimaltoHexa(data[19].toString(16))+decimaltoHexa(data[18].toString(16))
                +decimaltoHexa(data[17].toString(16))+decimaltoHexa(data[16].toString(16))

            console.log("**********************************************************************")
            console.log('FECHA : '+fecha)
            console.log('LAT : '+lat)
            console.log('LNG : '+lng)
            console.log("**********************************************************************")
            console.log('LONGITUD TRAMA : '+data[1].toString(16))
            console.log('SERIE : '+data[2].toString(16)+data[3].toString(16)+data[4].toString(16))
            console.log('VELOCIDAD : '+parseInt(data[5].toString(16),16))
            console.log('ORIENTACION : '+parseInt(data[6].toString(16),16))
            console.log('SATELITES : '+parseInt(data[7].toString(16),16))
            console.log('FECHA : '+parseInt(fecha,16))
            console.log('LAT : '+parseInt(lat,16))/100000
            console.log('LNG : '+parseInt(lng,16))/100000
            console.log('BANDERA : '+(parseInt(decimaltoHexa(data[20].toString(16)), 16).toString(2)).padStart(8, '0'))
        }

        //console.log('El cliente ' + socket.remoteAddress + ":" + socket.remotePort + " dice: " + data)

        //socket.write('Recibido!')
    })

    socket.on('close', ()=>{
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(7890, ()=>
{
    console.log('servidor esta escuchando en la puerta', server.address().port)
})
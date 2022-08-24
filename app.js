
const net = require('net');

const server = net.createServer()

server.on('connection', (socket)=>
{
    console.log('CLINETE CONECTADO ')
    socket.on('data', (data)=>
    {
        console.log(data)
        if(data[0].toString().toUpperCase() == 'f1')
        {
            console.log('LONGITUD TRAMA : '+data[1])
            console.log('SERIE : '+data[2])
            console.log('VELOCIDAD : '+parseInt(data[3],16))
            console.log('ORIENTACION : '+parseInt(data[4],16))
            console.log('SATELITES : '+parseInt(data[5],16))
            console.log('FECHA : '+parseInt(data[6],16))
            console.log('LAT : '+parseInt(data[7],16))
            console.log('LNG : '+parseInt(data[8],16))
            console.log('BANDERA : '+(parseInt(data[9], 16).toString(2)).padStart(8, '0'))
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
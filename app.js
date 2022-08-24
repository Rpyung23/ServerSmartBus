
const net = require('net');

const server = net.createServer()

server.on('connection', (socket)=>
{
    console.log('CLINETE CONECTADO ')
    socket.on('data', (data)=>
    {
        console.log(data)
        let buff = Buffer.from(data, "utf-8");

        console.log('El cliente ' + socket.remoteAddress + ":" + socket.remotePort + " dice: " + buff.toString())
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
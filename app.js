const { Buffer } = require('node:buffer')
const cSocketCliente = require("./pdo/cSocketCliente")
const net = require('net');
const server = net.createServer()
let mListaSocketClientes = []


server.on('connection', (socket)=>
{
    console.log('CLIENTE CONECTADO')

    var oS = new cSocketCliente(socket,null)
    mListaSocketClientes.push(oS)

    socket.on('data', (data)=>
    {
        console.log(data)
        /*var buffer = Buffer.alloc(31,'gps,-11.102030,-78.255626,12345');
        console.log(buffer)
        socket.write(buffer,(err)=>{
            console.log(err)
        })*/

        oS.insertarTrama(data)
        oS.imprimirTramaDecodificada()
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


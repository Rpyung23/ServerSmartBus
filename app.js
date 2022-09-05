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
        var buffer = Buffer.alloc(3,'ABC');
        console.log(buffer,(error)=>
        {
            console.log("ERROR")
            console.log(error)
        })

        /*oS.insertarTrama(data)
        oS.imprimirTramaDecodificada()*/
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


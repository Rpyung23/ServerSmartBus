const cSocketCliente = require("./pdo/cSocketCliente")
const net = require('net');
const server = net.createServer()
let mListaSocketClientes = []
let datoNull = null
let msmPrueba = 10
server.on('connection', (socket)=>
{
    console.log('CLIENTE CONECTADO')

    var oS = new cSocketCliente(socket,null)
    mListaSocketClientes.push(oS)

    socket.on('data', (data)=>
    {
        console.log(data)
        socket.write('Hola',(error)=>{
            console.log(error)
        })
        /*socket.write(msmPrueba,Uint8Array,(error)=>{
            console.log(error)
        })*/
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


const cSocketCliente = require("./pdo/cSocketCliente")
const net = require('net');
const server = net.createServer()
let mListaSocketClientes = []

server.on('connection', (socket)=>
{
    console.log('CLINETE CONECTADO')

    var oS = new cSocketCliente(socket,null)
    mListaSocketClientes.push(oS)

    socket.on('data', (data)=>
    {
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


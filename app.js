// 1*60*60*1000
//const TIMEOUT_1HORA = (1*60*60*1000)
const net = require('net');
const server = net.createServer()
let mListaSocketClientes = []

server.on('connection', (socketClient)=>
{
    console.log('NUEVO CLIENTE CONECTADO '+socketClient.remoteAddress)
    mListaSocketClientes.push(socketClient)

   //socketClient.setEncoding('ascii')

    socketClient.on('data', (data)=>
    {
        if(data.toString().includes('\ufffd'))
        {
            /**DATOS RECIBOS DESDE GPS**/
            console.log(data)
        }else{
            /**DATOS RECIBOS NETWORK**/
            console.log(data.toString())
            if(mListaSocketClientes.length > 0)
            {
                mListaSocketClientes[mListaSocketClientes.length-1].send(data.toString())
            }
        }
    })

    socketClient.on('close', ()=>{
        console.log('EL SOCKET CLIENTE HA FINALIZADO LA COMUNICACION '+socketClient.remoteAddress)
    })

    socketClient.on('error', (err)=>{
        console.log(err.message)
    })

    socketClient.on('timeout',()=>{
        console.log("SOCKET TIMEOUT "+socketClient.remoteAddress)
        socketClient.end()
    })

})

server.on('listening',()=>{
    console.log("SOCKET SERVER LISTENING....")
})


server.on('error',(error)=>{
    console.log("**********************************************************************")
    console.log("SOCKET SERVER ERROR : ....")
    console.log(error)
    console.log(error.message)
    console.log("**********************************************************************")
})


server.listen(7890, ()=>
{
    console.log('SOCKET SERVER LISTEN', server.address().port)
})


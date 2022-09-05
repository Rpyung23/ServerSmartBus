const cSocketCliente = require("./pdo/cSocketCliente")
const net = require('net');
const server = net.createServer()
let mListaSocketClientes = []
let msmPrueba = '10,'+null


function binary_encode( s ){
    s = unescape( encodeURIComponent( s ) );
    var chr, i = 0, l = s.length, out = '';
    for( ; i < l; i ++ ){
        chr = s.charCodeAt( i ).toString( 2 );
        while( chr.length % 8 != 0 ){ chr = '0' + chr; }
        out += chr;
    }
    return out;
}

server.on('connection', (socket)=>
{
    console.log('CLIENTE CONECTADO')

    var oS = new cSocketCliente(socket,null)
    mListaSocketClientes.push(oS)

    socket.on('data', (data)=>
    {
        //console.log(data)
        socket.write(binary_encode(msmPrueba),'binary',(error)=>{
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


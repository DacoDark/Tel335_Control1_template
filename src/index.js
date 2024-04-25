import koa from 'koa'
import bodyParser from 'koa-body'
import router from './routes/index'

//Inicialización de la Api
const app = new koa()
const port = 3000

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

//Variable para almacenar el ultimo evento procesado y su timestamp
let lastEvent = {
    timestamp: 0,
    carPlate: ''
}

//Endpoint POST /api/event/threshold/:umbral (Despues se mueve a la carpeta)
app.use(async (ctx)=>{
    if (ctx.url === 'api/event/threshold/:umbral' && ctx.method === 'POST'){
        const event = ctx.request.body
        const umbral = parseInt(req.params.umbral)
    }
    let suceso = 'Nuevo suceso'
    if (
        evento.context === 'car_plate' && evento.metadata === lastEvent.carPlate && evento.timestamp - lastEvent.timestamp <= umbral * 1000 ){
        suceso = 'mismo suceso' //Si el contexto es el mismo y la patente es la misma y la resta de ambos timestamp son menor que el umbral (seg) * (milisegundos del timestamp))
    }
    lastEvent = {
        timestamp: evento.timestamp,
        carPlate: evento.metadata
    }

    ctx.body = { evento: evento , umbral: umbral, suceso: suceso}

})

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})











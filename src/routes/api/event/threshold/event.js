export default function getApi(ctx) {
    ctx.body = { message: 'ok' }
}

const data = {
    "event_id": "abcde123456",
    "context": "car_plate",
    "metadata": "HGNV12",
    "timestamp": 1713590586099
}
const data1 =
    {
        "event_id": "abcde1234567",
        "context": "car_plate",
        "metadata": "HGNV12",
        "timestamp": 1713590588101
    }
const data2 = {
    "event_id": "abcde12345678",
    "context": "car_plate",
    "metadata": "HGNV12",
    "timestamp": 1713590629175
}

const data3 = {
    "event_id": "abcde123456789",
    "context": "car_plate",
    "metadata": "PTHB15",
    "timestamp": 1713590631176
}
        

//Endpoint POST /api/event/threshold/:umbral 
export function post(ctx){
    
}



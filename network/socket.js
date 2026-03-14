let socket

export function connectServer(){

socket = new WebSocket("ws://localhost:8081")

socket.onopen = () => {

console.log("connected to server")

}

socket.onmessage = (msg) => {

const data = JSON.parse(msg.data)

if(data.type === "chat"){
console.log(data.player + ": " + data.message)
}

}

}

fetch("api/servers.json")
.then(r => r.json())
.then(data => {

const list = document.getElementById("servers")

data.servers.forEach(server => {

const div = document.createElement("div")

div.innerHTML =
server.name + " - " + server.ip

list.appendChild(div)

})

})

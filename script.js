function copyIP(){

const ip = document.getElementById("ip").innerText;

navigator.clipboard.writeText(ip);

alert("IP kopyalandı: " + ip);

}

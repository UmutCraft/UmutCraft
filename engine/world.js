import { scene } from "./renderer.js"

export function createWorld(){

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0x55ff55})

for(let x=0;x<10;x++){
for(let z=0;z<10;z++){

const block = new THREE.Mesh(geometry,material)

block.position.set(x,0,z)

scene.add(block)

}
}

}

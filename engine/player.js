import { camera } from "./renderer.js"

export function movePlayer(dx,dy,dz){

camera.position.x += dx
camera.position.y += dy
camera.position.z += dz

}

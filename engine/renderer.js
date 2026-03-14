export let scene
export let camera
export let renderer

export function initRenderer(){

scene = new THREE.Scene()

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("game")
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z = 5

animate()

}

function animate(){

requestAnimationFrame(animate)
renderer.render(scene,camera)

}

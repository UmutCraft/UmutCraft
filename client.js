import { initRenderer } from "./engine/renderer.js"
import { createWorld } from "./engine/world.js"
import { connectServer } from "./network/socket.js"

initRenderer()
createWorld()
connectServer()

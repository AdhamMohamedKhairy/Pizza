import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('gallary')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 3

const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true})
renderer.setSize(600, 600)

const loader = new THREE.TextureLoader()
const texture = [
    loader.load('./images/ne.jpg'),
    loader.load('./images/dd.jpg'),
    loader.load('./images/eg.jpg'),
    loader.load('./images/ny.jpg'),
    loader.load('./images/rd.jpg'),
    loader.load('./images/se.jpg')
]

const materials = texture.map(tex => new THREE.MeshPhongMaterial({ map: tex }))

const cubeGeo = new THREE.BoxGeometry(1,1,1)
const cube = new THREE.Mesh(cubeGeo, materials)

const light = new THREE.DirectionalLight(0xffffff, 2)
light.position.set(2,2,5)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

scene.add(cube, light, ambientLight)
const controls =  new OrbitControls(camera, canvas)

function animate(){
    requestAnimationFrame(animate)
    cube.rotation.x += 0.005
    cube.rotation.y += 0.01

    controls.update()
    renderer.render(scene, camera)
}

animate()
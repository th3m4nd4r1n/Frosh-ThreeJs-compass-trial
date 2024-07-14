import * as THREE from "three";
// import { rotate } from "three/examples/jsm/nodes/Nodes.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { rotate } from "three/examples/jsm/nodes/Nodes.js";

//renderer
const renderer = new THREE.WebGLRenderer({antialias: true});


//DOM element
document.body.appendChild(renderer.domElement);

// Defining elements
const scene = new THREE.Scene();
const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w, h);
const aspect = w / h;
const near = 0.1;
const far = 100;
// const radius = 4;
const fov = 45;
// const detail = 12;
// const geometry = new THREE.IcosahedronGeometry(radius, detail);
// const mat = new THREE.MeshStandardMaterial({
//     color: 0xff0000,
//     flatShading: true
// }); 
const loader = new GLTFLoader();

loader.load( 'scene.gltf', function ( gltf ) {
    
    scene.add( gltf.scene );
    const model = gltf.scene;
    // model.rotation.x = Math.PI/2; 
    // model.setSize(400,400);
    model.position.x = -12.5;
    model.position.y = -5; 
    
    
    // document.querySelectorAll('body')

    
}, undefined, function ( error ) {
    
    console.error( error );
    
} );


// const mesh = new THREE.Mesh(geometry, mat);
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 50;
const light = new THREE.HemisphereLight(0xffffff00, 0x00000000, 10);

// Adding to the scene
// scene.add(mesh);
scene.add(camera);
scene.add(light);


//animate
function animate(t=0){
    requestAnimationFrame(animate);
    // model.scale.setScalar(Math.cos(0.01 * t) + 10);
    // mesh.scale.setScalar(Math.cos(t * 0.001 ) + 0.10);

    //render
    // model.rotation.y = Math.cos(t * 0.01) + 100;
    scene.rotation.y = Math.cos(0.01 * t) + 100
    renderer.render(scene,camera);
}

animate();
renderer.render(scene,camera);

const controls = new OrbitControls(camera, renderer.domElement);
// scene.add(controls);
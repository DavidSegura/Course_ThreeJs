const container = document.querySelector('#game-container');

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xCECECE);

// Camera
/*const camera = new THREE.PerspectiveCamera(
    35, // Fov (Field of view) 1 - 179
    container.clientWidth/container.clientHeight, // Aspect Ratio
    0.1, // Near
    1000 // Far
);*/

const div = 200;

const camera = new THREE.OrthographicCamera(
    container.clientWidth / div,
    container.clientWidth / -div,
    container.clientHeight / div,
    container.clientHeight / -div,
    .1,
    1000
);

camera.position.set(0, 0, 15);

//camera.zoom = 2;
//camera.updateProjectionMatrix();

// Mesh
const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
    color: 'teal'
});
const box_mesh = new THREE.Mesh(geometry, material);

scene.add(box_mesh);
//scene.overrideMaterial = material;

/*setTimeout(() => {
    scene.remove(box_mesh);
}, 2000);*/

// Render
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    //alpha: true,
    canvas: container
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//container.appendChild(renderer.domElement);

const updated = () => {
    box_mesh.rotateX(0.01);
    box_mesh.rotateY(0.01);

    renderer.render(scene, camera);

    renderer.setAnimationLoop(() => updated());
};

updated();
const container = document.querySelector('#game-container');

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xCECECE);

// Camera
const camera = new THREE.PerspectiveCamera(
    35, // Fov (Field of view) 1 - 179
    container.clientWidth/container.clientHeight, // Aspect Ratio
    0.1, // Near
    1000 // Far
);

camera.position.set(0, 0, 15);

// Textures 
const textureLoader = new THREE.TextureLoader();
textureLoader.setPath('./src/assets/textures/');

const baseColor = textureLoader.load('base_color.jpg'); //UV
const roughness = textureLoader.load('metallic_roughness.png');
const normalMap = textureLoader.load('normal_map.png');

// Material
const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color('teal').convertSRGBToLinear(),
    map: baseColor
    //transparent: true
    //wireframe: true
});

material.opacity = .3;

const material_standar = new THREE.MeshStandardMaterial({
    color: new THREE.Color('coral').convertSRGBToLinear(),
    map: baseColor,
    roughnessMap: roughness,
    normalMap: normalMap
});

// Geometry
const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

// Mesh
const mesh = new THREE.Mesh(geometry, material);

mesh.rotateZ(THREE.MathUtils.degToRad(90));
mesh.position.set(-3, 0, 0);

scene.add(mesh);

// Mesh 2
const mesh2 = new THREE.Mesh(geometry, material_standar);

mesh2.rotateZ(THREE.MathUtils.degToRad(90));
mesh2.position.set(3, 0, 0);
scene.add(mesh2);

// Lights
const ambient_light = new THREE.AmbientLight(0xffffff, 1);
//scene.add(ambient_light);

const gradient_light = new THREE.HemisphereLight(0xffffbb, 0x080820, .5);
scene.add(gradient_light);

const directional_light = new THREE.DirectionalLight(0xffffff, 1);
directional_light.position.set(.8, 2, 4);
scene.add(directional_light);

// Render
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: container
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;


const updated = () => {
    mesh.rotateY(0.01);
    mesh2.rotateY(0.01);

    renderer.render(scene, camera);

    renderer.setAnimationLoop(() => updated());
};

updated();
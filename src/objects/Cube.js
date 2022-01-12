import * as THREE from '../../node_modules/three/build/three.module.js';

class Cube extends THREE.Mesh {
    constructor() {
        super();

        // Textures 
        const textureLoader = new THREE.TextureLoader();
        textureLoader.setPath('./src/assets/textures/');

        const baseColor = textureLoader.load('base_color.jpg'); //UV
        const roughness = textureLoader.load('metallic_roughness.png');
        const normalMap = textureLoader.load('normal_map.png');

        // Material
        this.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('coral').convertSRGBToLinear(),
            map: baseColor,
            roughnessMap: roughness,
            normalMap: normalMap
        });

        // Geometry
        this.geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    }
}

export default Cube;
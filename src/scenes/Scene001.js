import * as THREE from '../../node_modules/three/build/three.module.js';
import Cube from '../objects/Cube.js';

class Scene1 extends THREE.Scene {
    constructor() {
        super();
        this.background = new THREE.Color(0xCECECE).convertSRGBToLinear();
        this.create();
    }

    create() {
        this.cube = new Cube();
        this.add(this.cube);

        // Lights
        const ambient_light = new THREE.AmbientLight(0xffffff, 1);
        //this.add(ambient_light);

        const gradient_light = new THREE.HemisphereLight(0xffffbb, 0x080820, .5);
        this.add(gradient_light);

        const directional_light = new THREE.DirectionalLight(0xffffff, 1);
        directional_light.position.set(.8, 2, 4);
        this.add(directional_light);
    }

    update() {
        this.cube.rotateX(0.01);
    }
}

export default Scene1;
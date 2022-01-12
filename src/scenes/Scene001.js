import { CameraHelper } from 'three';
import { Scene, Color, DirectionalLight, HemisphereLight, Group, Camera } from 'three';
import { Cube } from '../objects/Cube';
class Scene1 extends Scene {
	constructor() {
		super();
		this.background = new Color('skyblue').convertSRGBToLinear();
		this.create();
	}

	create() {
		this.brick = new Cube(2, new Color('orangered').convertSRGBToLinear());
        this.brick.position.set(0, 0, 0);
        this.brick.castShadow = true;
		//this.add(this.brick);

        this.floor = new Cube(7, new Color('rgb(255,255,255)').convertSRGBToLinear());
        this.floor.position.set(0, -4.5, 0);
        this.floor.receiveShadow = true;

        this.add(this.brick, this.floor);
        //this.group = new Group();
        //this.group.add(this.brick, this.floor);

        //this.add(this.group);

		const ambientLight = new HemisphereLight(0xffffbb, 0x080820, .5);
		const light = new DirectionalLight(0xffffff, 1.0);
        light.position.set(1, 1, 0)
        light.castShadow = true;

        /*light.shadow.camera.top = 1;
        light.shadow.camera.bottom = -1;
        light.shadow.camera.left = -1;
        light.shadow.camera.right = 1;*/

        light.shadow.camera.far = 4;

        const helper = new CameraHelper(light.shadow.camera);

		this.add(light, ambientLight, helper);
	}

	update() {
        //this.brick.rotateX(.02);
        //this.brick2.rotateX(.02);

        //this.group.rotateX(-.02);
	}
}

export default Scene1;

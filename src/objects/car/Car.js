import { Group } from "three";
import * as TWEEN from "@tweenjs/tween.js/dist/tween.umd";

import Body from "./Body";
import Nose from "./Nose";
import Wheel from "./Wheel";
import { Object3D } from "three";

class Car extends Group{
    constructor(){
        super();

        this.body = new Body();
        this.body.position.set(0, .5, -1);

        this.nose = new Nose();
        this.nose.position.set(0, 0, .5);

        this.wheel_rotation = new Object3D();


        this.wheel = new Wheel();

        this.wheel_rotation.add(this.wheel);
        this.wheel_rotation.position.set(0, -.5, 1);

        this.wheel2 = this.wheel.clone();
        this.wheel2.position.set(1, -.5, -1.5);

        this.wheel3 = this.wheel.clone();
        this.wheel3.position.set(-1, -.5, -1.5);

        this.add(this.body, this.nose, this.wheel_rotation, this.wheel2, this.wheel3);

        this.wheel_rotation.rotateY(-0.5);

        this.wheel_tween = new TWEEN.Tween(this.wheel_rotation.rotation)
            .to({
                y: .5
            }, 1500)
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .repeat(Infinity)
            .yoyo(true)
            .start();
    }

    update() {
        TWEEN.update();

        this.wheel.rotateY(-0.05);
        this.wheel2.rotateY(-0.05);
        this.wheel3.rotateY(-0.05);
    }
}

export default Car;
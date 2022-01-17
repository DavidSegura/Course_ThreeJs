import { Group } from "three";
import Body from "./Body";
import Nose from "./Nose";
import Wheel from "./Wheel";

class Car extends Group{
    constructor(){
        super();

        this.body = new Body();
        this.body.position.set(0, .5, -1);

        this.nose = new Nose();
        this.nose.position.set(0, 0, .5);

        this.wheel = new Wheel();
        this.wheel.position.set(0, -.5, 1);

        this.wheel2 = this.wheel.clone();
        this.wheel2.position.set(1, -.5, -1.5);

        this.wheel3 = this.wheel.clone();
        this.wheel3.position.set(-1, -.5, -1.5);

        this.add(this.body, this.nose, this.wheel, this.wheel2, this.wheel3);
    }

    update() {
        this.wheel.rotateY(-0.05);
        this.wheel2.rotateY(-0.05);
        this.wheel3.rotateY(-0.05);
    }
}

export default Car;
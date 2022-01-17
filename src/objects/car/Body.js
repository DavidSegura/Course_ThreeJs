import { Mesh, BoxBufferGeometry, Color, MeshStandardMaterial } from "three";

class Body extends Mesh{
    constructor() {
        super();

        this.material = new MeshStandardMaterial({
            color: new Color('firebrick').convertSRGBToLinear(),
            flatShading: true,
            roughness: 0
        });

        this.geometry = new BoxBufferGeometry(2, 2, 2);
    }
}

export default Body;
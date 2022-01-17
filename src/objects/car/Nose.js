import { Mesh, BoxBufferGeometry, Color, MeshStandardMaterial } from "three";

class Nose extends Mesh{
    constructor() {
        super();

        this.material = new MeshStandardMaterial({
            color: new Color('firebrick').convertSRGBToLinear(),
            flatShading: true,
            roughness: 0
        });

        this.geometry = new BoxBufferGeometry(2, 1, 1);
    }
}

export default Nose;
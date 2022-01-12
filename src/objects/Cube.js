import { Mesh, MeshStandardMaterial, Color, BoxBufferGeometry } from 'three';

export class Cube extends Mesh {
	constructor(size, color) {
		super();

		this.geometry = new BoxBufferGeometry(size, size, size);
		this.material = new MeshStandardMaterial({
			color: color,
			flatShading: true,
			roughness: .5
		});
	}
}
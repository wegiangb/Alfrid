// CameraOrtho.js

import Camera from './Camera';
import glm from 'gl-matrix';

class CameraOrtho extends Camera {
	constructor() {
		super();

		const eye    = glm.vec3.clone([0, 0, 15]);
		const center = glm.vec3.create();
		const up     = glm.vec3.clone([0, -1, 0]);
		this.lookAt(eye, center, up);
		this.ortho(1, -1, 1, -1);
	}


	setBoundary(left, right, top, bottom, near=0.1, far=100) {
		this.ortho(left, right, top, bottom, near, far);
	}


	ortho(left, right, top, bottom, near=0.1, far=100) {
		this.left   = left;
		this.right  = right;
		this.top    = top;
		this.bottom = bottom;
		glm.mat4.ortho(this._projection, left, right, top, bottom, near, far);
	}

}


export default CameraOrtho;
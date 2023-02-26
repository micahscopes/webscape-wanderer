// 
import * as THREE from 'three';
// a simple class that draws a bunch of THREE.js lines for each edge

export default class SimpleEdgeVisualizer {
    sources: number[][];
    targets: number[][];
    
    geometries: { [key: number]: THREE.BufferGeometry } = {};
    meshes: { [key: number]: THREE.Line } = {};

    constructor(edges) {
        edges.forEach((edge, i) => {
            this.geometries[i] = new THREE.BufferGeometry();
            // this.geometries[i].setFromPoints([[0, 1000, 0], [0, 0, 100]].map((p) => new THREE.Vector3(...p)));

            const material = new THREE.LineBasicMaterial({ color: 0x1155aa, linewidth: 1 });
            const line = new THREE.Line(this.geometries[i], material);
            this.meshes[i] = line; 
        });
    }
    
    updatePositions(sources, targets) {
        Object.keys(this.meshes).forEach((k, i) => {
            this.geometries[i].setFromPoints([
                sources[i],
                targets[i]
            ].map((p) => new THREE.Vector3(...p)));
        });
    }
    
    addToScene(scene) {
        Object.keys(this.meshes).forEach((k, i) => {
            scene.add(this.meshes[i]);
            console.log(this.meshes[i],' added to scene')
        });
    }
}
import { Component, ElementRef, NgZone, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube-moving',
  templateUrl: './cube-moving.component.html',
  styleUrl: './cube-moving.component.css'
})
export class CubeMovingComponent implements AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  cube!: THREE.Mesh;
  mouseDown = false;
  lastMouseX = 0;
  lastMouseY = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 'red' });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      if (this.mouseDown) {
        const deltaX = this.lastMouseX - window.innerWidth / 2;
        const deltaY = this.lastMouseY - window.innerHeight / 2;

        this.cube.rotation.x += deltaY * 0.01;
        this.cube.rotation.y += deltaX * 0.01;
      }

      this.renderer.render(this.scene, this.camera);
    };

    this.ngZone.runOutsideAngular(() => {
      animate();
    });

    // Event listeners for mouse movement
    window.addEventListener('mousedown', (event) => {
      this.mouseDown = true;
      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.mouseDown = false;
    });

    window.addEventListener('mousemove', (event) => {
      if (this.mouseDown) {
        const deltaX = event.clientX - this.lastMouseX;
        const deltaY = event.clientY - this.lastMouseY;

        this.cube.rotation.x += deltaY * 0.01;
        this.cube.rotation.y += deltaX * 0.01;

        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;
      }
    });
  }

}

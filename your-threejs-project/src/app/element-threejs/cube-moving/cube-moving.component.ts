import { Component, ElementRef, NgZone, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube-moving',
  templateUrl: './cube-moving.component.html',
  styleUrls: ['./cube-moving.component.css']
})
export class CubeMovingComponent implements AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  cube!: THREE.Mesh;
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  mouseDown = false;
  mouseX = 0;
  mouseY = 0;

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
        const rotationSpeed = 0.005; // Adjust this value for slower or faster movement

        const deltaX = this.mouseX - this.windowHalfX;
        const deltaY = this.mouseY - this.windowHalfY;

        this.cube.rotation.x += deltaY * rotationSpeed;
        this.cube.rotation.y += deltaX * rotationSpeed;
      }

      this.renderer.render(this.scene, this.camera);
    };

    this.ngZone.runOutsideAngular(() => {
      animate();
    });

    window.addEventListener('mousedown', (event) => {
      this.mouseDown = true;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.mouseDown = false;
    });

    window.addEventListener('mousemove', (event) => {
      if (this.mouseDown) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    });
  }
}

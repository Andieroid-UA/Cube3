import { Component, ElementRef, NgZone, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.css'
})
export class CubeComponent implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 'teal' });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    };

    this.ngZone.runOutsideAngular(() => {
      animate();
    });
  }
}

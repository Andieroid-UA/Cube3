import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-js-viewer',
  template: '<div #container></div>',
  styleUrls: ['./three-jsviewer.component.css']
})
export class ThreeJSViewerComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;

  camera!: THREE.PerspectiveCamera;
  scene!: THREE.Scene;
  renderer!: THREE.WebGLRenderer;

  lon = 0;
  lat = 0;
  isUserInteracting = false;
  onPointerDownPointerX = 0;
  onPointerDownPointerY = 0;
  onPointerDownLon = 0;
  onPointerDownLat = 0;

  ngOnInit(): void {
    this.init();
    this.animate();
  }

  ngOnDestroy(): void {
    // Clean up if needed
  }

  init(): void {
    const container = this.container.nativeElement;

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
    this.camera.target = new THREE.Vector3(0, 0, 0);

    this.scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/2294472375_24a3b8ef46_o.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const mesh = new THREE.Mesh(geometry, material);

    this.scene.add(mesh);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    document.addEventListener('mousedown', this.onDocumentMouseDown.bind(this), false);
    document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
    document.addEventListener('mouseup', this.onDocumentMouseUp.bind(this), false);
    document.addEventListener('wheel', this.onDocumentMouseWheel.bind(this), false);

    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onDocumentMouseDown(event: MouseEvent): void {
    event.preventDefault();

    this.isUserInteracting = true;

    this.onPointerDownPointerX = event.clientX;
    this.onPointerDownPointerY = event.clientY;

    this.onPointerDownLon = this.lon;
    this.onPointerDownLat = this.lat;
  }

  onDocumentMouseMove(event: MouseEvent): void {
    if (this.isUserInteracting === true) {
      this.lon = (this.onPointerDownPointerX - event.clientX) * 0.1 + this.onPointerDownLon;
      this.lat = (event.clientY - this.onPointerDownPointerY) * 0.1 + this.onPointerDownLat;
    }
  }

  onDocumentMouseUp(): void {
    this.isUserInteracting = false;
  }

  onDocumentMouseWheel(event: WheelEvent): void {
    this.camera.fov += event.deltaY * 0.05;
    this.camera.updateProjectionMatrix();
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.update();
  }

  update(): void {
    if (this.isUserInteracting === false) {
      this.lon += 0.1;
    }

    this.lat = Math.max(-85, Math.min(85, this.lat));
    const phi = THREE.MathUtils.degToRad(90 - this.lat);
    const theta = THREE.MathUtils.degToRad(this.lon);

    this.camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
    this.camera.target.y = 500 * Math.cos(phi);
    this.camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

    this.camera.lookAt(this.camera.target);

    this.renderer.render(this.scene, this.camera);
  }
}

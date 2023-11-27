import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
// import * as dat from 'dat.gui';
// import * as TWEEN from '@tweenjs/tween.js';

@Component({
  selector: 'app-three-jsviewer',
  templateUrl: './three-jsviewer.component.html',
  styleUrls: ['./three-jsviewer.component.css'] // Import your styles here
})
export class ThreeJsViewerComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true }) rendererCanvas: ElementRef<HTMLCanvasElement>;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private transformControls: TransformControls;

  constructor() { }

  ngOnInit(): void {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControls();
    this.initLights();
    this.createGeometry();
    this.createMaterials();
    this.createMeshes();
    this.createPlane();
    this.createHelpers();
    this.setupGUI();
    this.animate();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    // Initialize other scene-related components here
  }

  private initCamera(): void {
    this.camera = new THREE.PerspectiveCamera(/* camera parameters */);
    // Set camera position and other properties
    this.scene.add(this.camera);
  }

  private initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.rendererCanvas.nativeElement });
    // Initialize renderer settings and controls
  }

  private initControls(): void {
    // Initialize camera controls
    // Initialize transform controls
    // Add mesh to transform control
  }

  private initLights(): void {
    // Initialize lights and add them to the scene
  }

  private createGeometry(): void {
    // Define geometries here
  }

  private createMaterials(): void {
    // Define materials here
  }

  private createMeshes(): void {
    // Create and add meshes to the scene here
  }

  private createPlane(): void {
    // Create plane and add it to the scene here
  }

  private createHelpers(): void {
    // Create and add helpers (like grid) here
  }

  private setupGUI(): void {
    // Setup dat.gui controls here
  }

  private animate(): void {
    // Animation loop logic
    // Update controls, render scene, etc.
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize')
  private onWindowResize(): void {
    // Handle window resize logic here
  }
}

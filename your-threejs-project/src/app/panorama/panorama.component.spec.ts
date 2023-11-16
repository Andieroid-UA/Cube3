import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as THREE from 'three';

@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.css']
})
export class PanoramaComponent implements OnInit, OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    // Clean up Three.js resources if needed
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Set up initial panorama or default image
    this.setPanorama('assets/pano.jpg');
  }

  setPanorama(imageUrl: string) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageUrl);
    const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // Clear existing scene
    this.scene.children.length = 0;

    this.scene.add(sphere);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileInput.nativeElement.value = ''; // Reset file input

      const formData = new FormData();
      formData.append('panorama', file);

      // Assuming an endpoint where the server handles the file upload
      this.http.post<any>('your-upload-api-endpoint', formData).subscribe(
        (response) => {
          console.log('Upload successful', response);
          // Handle the response to get the URL of the uploaded image
          const imageUrl = response.imageUrl; // Replace 'imageUrl' with the key holding the URL

          // Set the uploaded image as the new panorama
          this.setPanorama(imageUrl);
        },
        (error) => {
          console.error('Upload error', error);
        }
      );
    }
  }

  upload() {
    this.fileInput.nativeElement.click(); // Trigger file input click
  }

  animate() {
    // Add any animations or updates here
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.animate());
  }
}

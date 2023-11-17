## DISCLAIMER!
## I deleted the original project and followed the following:

### Integrating Three.js into an Angular project and deploying it to Vercel involves a series of steps. Below is a general guide to help you achieve this. Keep in mind that the specific details might vary based on your project requirements and updates to the tools.

## Step 1: Create an Angular Project
If you don't have an Angular project yet, you can create one using the Angular CLI:

  bash
  ng new your-threejs-project
  cd your-threejs-project

## Step 2: Install Three.js using npm:

  bash
  npm install three

## Step 3: Create a Three.js Component
Create a new component to handle Three.js functionality. For example:

  bash
  ng generate component threejs

## Step 4: Integrate Three.js in the Component
In the threejs.component.ts file, you can import and use Three.js. For example:

  import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
  import * as THREE from 'three';

@Component({
  selector: 'app-threejs',
  templateUrl: './threejs.component.html',
  styleUrls: ['./threejs.component.css']
})
export class ThreejsComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Your Three.js logic here
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Your animation/rendering logic here
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    };

    this.ngZone.runOutsideAngular(() => {
      animate();
    });
  }
}


## Step 5: Use the Three.js Component in Your App
Include the app-threejs selector in your main component or any other component where you want to use Three.js.

## Step 6: Deploy to Vercel
Assuming you have the Vercel CLI installed (npm install -g vercel), you can deploy your Angular project to Vercel using the following steps:

Build your Angular app:

  bash
  ng build --prod

Deploy to Vercel:

  bash
  vercel dist/your-threejs-project

Follow the prompts to complete the deployment process. Your app should now be accessible through the provided Vercel URL.

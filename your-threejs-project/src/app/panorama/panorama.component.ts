import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { PMREMGenerator } from 'three';

@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.css']
})
export class PanoramaComponent implements OnInit {
  @ViewChild('containerRef') containerRef!: ElementRef<HTMLDivElement>;

  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private lon = 0;
  private lat = 0;
  private isUserInteracting = false;
  private onPointerDownMouseX = 0;
  private onPointerDownMouseY = 0;
  private onPointerDownLon = 0;
  private onPointerDownLat = 0;
  private pointerId: number | null = null;
  private phi = 0;
  private theta = 0;

  constructor(private renderer2: Renderer2) {}

  ngOnInit() {
    this.init();
    this.animate();
  }

  init() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
    this.scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('assets/img/pano.jpg', (texture) => {
      const pmremGenerator = new PMREMGenerator(this.renderer);
      pmremGenerator.compileEquirectangularShader();

      const envMap = pmremGenerator.fromEquirectangular(texture).texture;

      texture.dispose();
      pmremGenerator.dispose();

      const material = new THREE.MeshBasicMaterial({ map: envMap });
      const mesh = new THREE.Mesh(geometry, material);

      this.scene.add(mesh);
    });

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.containerRef.nativeElement.appendChild(this.renderer.domElement);

    this.containerRef.nativeElement.style.touchAction = 'none';
    this.renderer2.listen(this.containerRef.nativeElement, 'pointerdown', (event: PointerEvent) => this.onPointerDown(event));
    this.renderer2.listen('document', 'pointermove', (event: PointerEvent) => this.onPointerMove(event));
    this.renderer2.listen('document', 'pointerup', () => this.onPointerUp());
    this.renderer2.listen('window', 'resize', () => this.onWindowResize());
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onPointerDown(event: PointerEvent) {
    if (event.isPrimary === false) return;

    this.isUserInteracting = true;

    this.onPointerDownMouseX = event.clientX;
    this.onPointerDownMouseY = event.clientY;

    this.onPointerDownLon = this.lon;
    this.onPointerDownLat = this.lat;

    this.pointerId = event.pointerId;
  }

  onPointerMove(event: PointerEvent) {
    if (event.pointerId !== this.pointerId || event.isPrimary === false) return;

    this.lon = (this.onPointerDownMouseX - event.clientX) * 0.1 + this.onPointerDownLon;
    this.lat = (event.clientY - this.onPointerDownMouseY) * 0.1 + this.onPointerDownLat;
  }

  onPointerUp() {
    this.isUserInteracting = false;
    this.pointerId = null;
  }

  onDocumentMouseWheel(event: WheelEvent) {
    const fov = this.camera.fov + event.deltaY * 0.05;

    this.camera.fov = THREE.MathUtils.clamp(fov, 10, 75);
    this.camera.updateProjectionMatrix();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.update();
  }

  update() {
    if (this.isUserInteracting === false) {
      this.lon += 0.1;
    }

    this.lat = Math.max(-85, Math.min(85, this.lat));
    this.phi = THREE.MathUtils.degToRad(90 - this.lat);
    this.theta = THREE.MathUtils.degToRad(this.lon);

    const x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
    const y = 500 * Math.cos(this.phi);
    const z = 500 * Math.sin(this.phi) * Math.sin(this.theta);

    this.camera.lookAt(x, y, z);

    this.renderer.render(this.scene, this.camera);
  }
}

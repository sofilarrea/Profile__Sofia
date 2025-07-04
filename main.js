const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

// Partículas
const starGeometry = new THREE.BufferGeometry();
const starCount = 1000;
const positions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 500;
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Mouse
const mouse = { x: 0, y: 0 };
document.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animación
function animate() {
  requestAnimationFrame(animate);

  // Efecto parallax de la cámara
  camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
  camera.position.y += (mouse.y * 10 - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  // Rotación de las partículas
  stars.rotation.y += 0.001;

  renderer.render(scene, camera);
}
animate();



// Commons.js
import { PerspectiveCamera, WebGLRenderer, Clock } from "three";
import Lenis from "lenis";

class Commons {
  static instance;

  constructor() {
    if (Commons.instance) return Commons.instance;

    this.lenis = null;
    this.camera = null;
    this.renderer = null;
    this.time = new Clock();
    this.elapsedTime = 0;
    this.distanceFromCamera = 1000;

    this.sizes = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        aspect: window.innerWidth / window.innerHeight,
      },
      pixelRatio: this.getPixelRatio(),
    };

    Commons.instance = this;
  }

  static getInstance() {
    if (!Commons.instance) {
      Commons.instance = new Commons();
    }
    return Commons.instance;
  }

  init() {
    this.createLenis();
    this.createCamera();
    this.createRenderer();
  }

  createLenis() {
    this.lenis = new Lenis({ autoRaf: true, duration: 2 });
  }

  createCamera() {
    this.camera = new PerspectiveCamera(
      70,
      this.sizes.screen.aspect,
      200,
      2000
    );
    this.camera.position.z = this.distanceFromCamera;
    this.camera.updateProjectionMatrix();
  }

  createRenderer() {
    this.renderer = new WebGLRenderer({ alpha: true });
    this.renderer.setSize(this.sizes.screen.width, this.sizes.screen.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
    document.body.appendChild(this.renderer.domElement);
  }

  getPixelRatio() {
    return Math.min(window.devicePixelRatio, 2);
  }

  onResize() {
    this.sizes.screen = {
      width: window.innerWidth,
      height: window.innerHeight,
      aspect: window.innerWidth / window.innerHeight,
    };
    this.sizes.pixelRatio = this.getPixelRatio();

    this.renderer.setSize(this.sizes.screen.width, this.sizes.screen.height);
    this.renderer.setPixelRatio(this.sizes.pixelRatio);
    this.onResizeCamera();
  }

  onResizeCamera() {
    this.camera.aspect = this.sizes.screen.aspect;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this.elapsedTime = this.time.getElapsedTime();
  }
}

export default Commons;

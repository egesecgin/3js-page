const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(28, 1000 / 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(300, 540);
document.getElementById("canvas-container").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 0.1);
const Texture = new THREE.TextureLoader().load("image.png");
const Material = new THREE.MeshBasicMaterial({ map: Texture });
const Card = new THREE.Mesh(geometry, Material);
Card.rotation.y = Math.PI;
scene.add(Card);

function animate() {
  requestAnimationFrame(animate);
  Card.rotation.x += 0.01;
  Card.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

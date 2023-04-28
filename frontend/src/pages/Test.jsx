import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Test() {
  const canvasRef = useRef(null);
  const [speed, setSpeed] = useState(0.09);
  const [activated] = useState(false);

  useEffect(() => {
    let camera;
    let scene;
    let renderer;
    const stars = [];
    let planeMesh;

    const colors = ["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#ffffff"];

    function handleWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < stars.length; i++) {
        stars[i].position.z += speed;
        if (stars[i].position.z >= 60) {
          stars[i].position.x = Math.random() * 100 - 50;
          stars[i].position.y = Math.random() * 100 - 50;
          stars[i].position.z = 5;
        }
      }
      if (activated) {
        setSpeed(0.27);
        planeMesh.material.opacity = 0.01;
      } else if (planeMesh.material.opacity < 1) {
        planeMesh.material.opacity += 0.01;
        setSpeed(0.09);
      }
      renderer.render(scene, camera);
    }

    function init() {
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 0.015, 72);
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        preserveDrawingBuffer: true,
        alpha: true,
      });
      renderer.sortObjects = false;
      renderer.autoClearColor = false;
      camera.position.z = 55;
      renderer.setClearColor("#000", 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      document.body.appendChild(renderer.domElement);

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 3000; i++) {
        const geometry = new THREE.SphereGeometry(0.12 * Math.random(), 10, 10);
        const material = new THREE.MeshBasicMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          envMap: null,
          combine: THREE.AddOperation,
        });
        const star = new THREE.Mesh(geometry, material);
        star.position.x = Math.random() * 100 - 50;
        star.position.y = Math.random() * 100 - 50;
        star.position.z = Math.random() * 50 - 25;
        scene.add(star);
        stars.push(star);
      }

      const planeGeometry = new THREE.PlaneGeometry(1000, 500, 1, 1);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 1,
      });
      planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      scene.add(planeMesh);

      window.addEventListener("resize", handleWindowResize);
      animate();
    }

    init();

    // cleanup
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [speed]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Test;

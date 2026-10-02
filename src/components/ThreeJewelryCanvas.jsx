import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeJewelryCanvas() {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let animationFrameId;
    let scene, camera, renderer;
    let gemMesh, bandMesh, wireMesh, particlesMesh;

    try {
      // 1. Scene setup
      scene = new THREE.Scene();

      // 2. Camera setup
      const width = currentMount.clientWidth || 400;
      const height = currentMount.clientHeight || 400;
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 7.5);

      // 3. Renderer setup
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      currentMount.appendChild(renderer.domElement);

      // 4. Lighting
      const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.4);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xfffaed, 2.8);
      mainLight.position.set(5, 8, 6);
      scene.add(mainLight);

      const goldRimLight = new THREE.DirectionalLight(0xd6b25e, 2.2);
      goldRimLight.position.set(-6, -4, -4);
      scene.add(goldRimLight);

      const highlightLight = new THREE.PointLight(0xebcf82, 3, 20);
      highlightLight.position.set(0, 3, 4);
      scene.add(highlightLight);

      // 5. Materials
      // Polished 18K Yellow Gold Material for bracelet/ring band
      const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xd6b25e,
        metalness: 0.92,
        roughness: 0.18,
        envMapIntensity: 1.5,
      });

      // Faceted Gemstone Material
      const gemMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xfffcf5,
        emissive: 0xebcf82,
        emissiveIntensity: 0.12,
        roughness: 0.05,
        transmission: 0.75,
        thickness: 1.2,
        ior: 1.8,
        reflectivity: 0.9,
        flatShading: true,
      });

      // Gold wireframe overlay on gem facets (echoing logo facet lines)
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xa9803a,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });

      // Group holding the whole jewelry piece
      const jewelryGroup = new THREE.Group();

      // 6. Geometries
      // Faceted Gemstone (Icosahedron with detail 1 for distinct geometric diamond facets)
      const gemGeometry = new THREE.IcosahedronGeometry(1.5, 1);
      // Scale slightly to make oval faceted shape like the logo
      gemGeometry.scale(1.0, 1.25, 1.0);
      gemMesh = new THREE.Mesh(gemGeometry, gemMaterial);
      wireMesh = new THREE.Mesh(gemGeometry, wireframeMaterial);
      jewelryGroup.add(gemMesh);
      jewelryGroup.add(wireMesh);

      // Golden Bracelet / Ring Band wrapped around the gem (matching the logo)
      const bandGeometry = new THREE.TorusGeometry(2.35, 0.14, 32, 100);
      bandMesh = new THREE.Mesh(bandGeometry, goldMaterial);
      // Tilt the band horizontally like the logo
      bandMesh.rotation.x = Math.PI / 2.35;
      jewelryGroup.add(bandMesh);

      // Second delicate concentric halo ring
      const innerBandGeometry = new THREE.TorusGeometry(1.85, 0.05, 24, 80);
      const innerBandMesh = new THREE.Mesh(innerBandGeometry, goldMaterial);
      innerBandMesh.rotation.x = Math.PI / 2.35;
      jewelryGroup.add(innerBandMesh);

      scene.add(jewelryGroup);

      // 7. Sparkle floating particles
      const particleCount = 45;
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 8;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 6;
      }
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xebcf82,
        size: 0.09,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particlesMesh);

      // 8. Mouse interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetRotationX = 0;
      let targetRotationY = 0;

      const handleMouseMove = (event) => {
        const rect = currentMount.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        mouseX = x;
        mouseY = y;
      };

      const handleTouchMove = (event) => {
        if (event.touches.length > 0) {
          const touch = event.touches[0];
          const rect = currentMount.getBoundingClientRect();
          const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
          const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
          mouseX = x * 0.7;
          mouseY = y * 0.7;
        }
      };

      currentMount.addEventListener('mousemove', handleMouseMove);
      currentMount.addEventListener('touchmove', handleTouchMove, { passive: true });

      // Resize listener
      const handleResize = () => {
        if (!currentMount) return;
        const newWidth = currentMount.clientWidth;
        const newHeight = currentMount.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      // 9. Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Continuous smooth luxury rotation
        jewelryGroup.rotation.y += 0.008;

        // Gentle floating bob
        jewelryGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

        // Interactive mouse tilt response with easing
        targetRotationX = mouseY * 0.45;
        targetRotationY = mouseX * 0.55;
        jewelryGroup.rotation.x += (targetRotationX - jewelryGroup.rotation.x) * 0.05;

        // Animate particles
        particlesMesh.rotation.y = elapsedTime * 0.04;
        particlesMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

        // Dynamic light shimmer
        highlightLight.position.x = Math.sin(elapsedTime * 2) * 2;
        highlightLight.position.y = Math.cos(elapsedTime * 1.8) * 2 + 1;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        currentMount.removeEventListener('mousemove', handleMouseMove);
        currentMount.removeEventListener('touchmove', handleTouchMove);
        if (renderer && renderer.domElement) {
          currentMount.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (e) {
      console.warn("WebGL not supported or error initializing 3D:", e);
      setWebGLError(true);
    }
  }, []);

  if (webGLError) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Saisha Jewelry Solitaire Gem & Gold Band"
          className="w-72 h-72 object-contain filter drop-shadow-2xl animate-float"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Three.js mount point */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Subtle luxury badge floating below 3D */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-brand-gold/40 shadow-sm text-xs font-medium text-brand-espresso flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
        <span className="font-sans text-[11px] tracking-wider uppercase text-brand-gold-dark font-semibold">
          Interactive 3D Jewel • Drag to Rotate
        </span>
      </div>
    </div>
  );
}

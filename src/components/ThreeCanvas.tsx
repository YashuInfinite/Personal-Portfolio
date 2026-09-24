import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  interactive?: boolean;
}

interface Shockwave {
  center: THREE.Vector3;
  radius: number;
  maxRadius: number;
  speed: number;
  strength: number;
  life: number;
}

interface SparkParticle {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  color: THREE.Color;
  life: number;
  maxLife: number;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      1000
    );
    camera.position.z = 4.9;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D world elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Color Palette matching previous design
    const colorOrange = new THREE.Color(0xf97316); // Signature Orange
    const colorAmber = new THREE.Color(0xf59e0b);  // Amber Gold
    const colorYellow = new THREE.Color(0xfde047); // Electric Yellow
    const colorPurple = new THREE.Color(0xc084fc); // Soft Cyber Purple
    const colorCyan = new THREE.Color(0x06b6d4);   // Cyber Cyan

    // 1. Interactive Geodesic Wireframe Globe (Dark Cyan / Teal)
    const globeGeo = new THREE.IcosahedronGeometry(1.85, 3);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x0891b2,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    mainGroup.add(globe);

    // 2. Multicolored Twinkling Data Points on & inside the Globe
    const count = 1350;
    const particleGeo = new THREE.BufferGeometry();
    const currentPositions = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const baseColors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.72 + (Math.random() - 0.5) * 0.45;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      currentPositions[i * 3] = x;
      currentPositions[i * 3 + 1] = y;
      currentPositions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;

      const rand = Math.random();
      let chosenColor: THREE.Color;
      if (rand < 0.42) {
        chosenColor = colorOrange.clone().lerp(colorAmber, Math.random() * 0.6);
      } else if (rand < 0.68) {
        chosenColor = colorAmber.clone().lerp(colorYellow, Math.random() * 0.8);
      } else if (rand < 0.85) {
        chosenColor = colorPurple.clone().lerp(colorCyan, Math.random() * 0.4);
      } else {
        chosenColor = colorCyan.clone();
      }

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      baseColors[i * 3] = chosenColor.r;
      baseColors[i * 3 + 1] = chosenColor.g;
      baseColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.046,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // 3. Two Iconic Glowing Orange Orbit Rings around the Globe
    const torusGeo1 = new THREE.TorusGeometry(2.55, 0.02, 8, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.78,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(torusGeo1, ringMat1);
    ring1.rotation.set(Math.PI * 0.38, Math.PI * 0.12, Math.PI * 0.08);
    mainGroup.add(ring1);

    // Inner subtle glow core for ring 1
    const ringCoreMat1 = new THREE.MeshBasicMaterial({
      color: 0xea580c,
      transparent: true,
      opacity: 0.45,
    });
    const ring1Core = new THREE.Mesh(torusGeo1, ringCoreMat1);
    ring1.add(ring1Core);

    const torusGeo2 = new THREE.TorusGeometry(2.58, 0.02, 8, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.75,
      wireframe: true,
    });
    const ring2 = new THREE.Mesh(torusGeo2, ringMat2);
    ring2.rotation.set(-Math.PI * 0.32, -Math.PI * 0.42, Math.PI * 0.18);
    mainGroup.add(ring2);

    // Inner subtle glow core for ring 2
    const ringCoreMat2 = new THREE.MeshBasicMaterial({
      color: 0xd97706,
      transparent: true,
      opacity: 0.45,
    });
    const ring2Core = new THREE.Mesh(torusGeo2, ringCoreMat2);
    ring2.add(ring2Core);

    // 4. Subtle Cosmic Ambient Starfield
    const starCount = 380;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 3.6 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);

      const sc = Math.random() > 0.5 ? colorOrange : (Math.random() > 0.5 ? colorAmber : colorCyan);
      starColors[i * 3] = sc.r;
      starColors[i * 3 + 1] = sc.g;
      starColors[i * 3 + 2] = sc.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.024,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 5. Interactive Point Light
    const pointerLight = new THREE.PointLight(0xf97316, 2.2, 8);
    pointerLight.position.set(0, 0, 3);
    scene.add(pointerLight);

    // 6. Click/Tap Burst Spark Particle System
    const maxSparks = 60;
    const sparks: SparkParticle[] = [];
    const sparksGeo = new THREE.BufferGeometry();
    const sparksPos = new Float32Array(maxSparks * 3);
    const sparksColors = new Float32Array(maxSparks * 3);
    for (let i = 0; i < maxSparks; i++) {
      sparksPos[i * 3] = 999;
      sparksPos[i * 3 + 1] = 999;
      sparksPos[i * 3 + 2] = 999;
      sparksColors[i * 3] = 1;
      sparksColors[i * 3 + 1] = 0.8;
      sparksColors[i * 3 + 2] = 0.4;
    }
    sparksGeo.setAttribute('position', new THREE.BufferAttribute(sparksPos, 3));
    sparksGeo.setAttribute('color', new THREE.BufferAttribute(sparksColors, 3));
    const sparksMat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparksPoints = new THREE.Points(sparksGeo, sparksMat);
    mainGroup.add(sparksPoints);

    // Interaction & Touch Physics State
    const pointerNDC = new THREE.Vector2(-999, -999);
    const raycaster = new THREE.Raycaster();
    const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const worldIntersection = new THREE.Vector3();
    const localPointer = new THREE.Vector3(999, 999, 999);
    let isPointerActive = false;

    // Drag inertia
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let angularVelX = 0;
    let angularVelY = 0;

    // Active Shockwaves (from clicks or taps)
    const shockwaves: Shockwave[] = [];

    const updatePointerCoords = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      pointerNDC.x = ((clientX - rect.left) / container.clientWidth) * 2 - 1;
      pointerNDC.y = -((clientY - rect.top) / container.clientHeight) * 2 + 1;
      isPointerActive = true;
    };

    const triggerShockwaveAndSparks = (clientX: number, clientY: number) => {
      updatePointerCoords(clientX, clientY);
      raycaster.setFromCamera(pointerNDC, camera);
      if (raycaster.ray.intersectPlane(planeZ, worldIntersection)) {
        const center = worldIntersection.clone();
        mainGroup.worldToLocal(center);

        // Add spherical shockwave
        shockwaves.push({
          center: center.clone(),
          radius: 0.1,
          maxRadius: 3.5,
          speed: 4.6,
          strength: 0.38,
          life: 1.0,
        });

        // Spawn burst sparks
        const spawnCount = 18;
        for (let s = 0; s < spawnCount; s++) {
          if (sparks.length >= maxSparks) {
            sparks.shift();
          }
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);
          const speed = 1.8 + Math.random() * 3.2;
          const vel = new THREE.Vector3(
            Math.sin(phi) * Math.cos(theta) * speed,
            Math.sin(phi) * Math.sin(theta) * speed,
            Math.cos(phi) * speed
          );
          const sparkCol = Math.random() > 0.4 ? colorYellow : (Math.random() > 0.5 ? colorOrange : colorCyan);
          sparks.push({
            pos: center.clone(),
            vel,
            color: sparkCol,
            life: 1.0,
            maxLife: 0.6 + Math.random() * 0.4,
          });
        }
      }
    };

    // Mouse Listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      updatePointerCoords(e.clientX, e.clientY);

      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        angularVelY += deltaX * 0.0035;
        angularVelX += deltaY * 0.0035;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!interactive) return;
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
      triggerShockwaveAndSparks(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseLeave = () => {
      isDragging = false;
      isPointerActive = false;
      localPointer.set(999, 999, 999);
      pointerNDC.set(-999, -999);
    };

    // Touch Listeners
    const handleTouchStart = (e: TouchEvent) => {
      if (!interactive || e.touches.length === 0) return;
      const touch = e.touches[0];
      isDragging = true;
      prevPointerX = touch.clientX;
      prevPointerY = touch.clientY;
      triggerShockwaveAndSparks(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!interactive || e.touches.length === 0) return;
      const touch = e.touches[0];
      updatePointerCoords(touch.clientX, touch.clientY);
      if (isDragging) {
        const deltaX = touch.clientX - prevPointerX;
        const deltaY = touch.clientY - prevPointerY;
        angularVelY += deltaX * 0.004;
        angularVelX += deltaY * 0.004;
        prevPointerX = touch.clientX;
        prevPointerY = touch.clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      isPointerActive = false;
      localPointer.set(999, 999, 999);
      pointerNDC.set(-999, -999);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Resize Handling
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = Math.max(container.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // 1. Calculate Local Pointer in mainGroup space
      if (isPointerActive) {
        raycaster.setFromCamera(pointerNDC, camera);
        if (raycaster.ray.intersectPlane(planeZ, worldIntersection)) {
          localPointer.copy(worldIntersection);
          mainGroup.worldToLocal(localPointer);

          pointerLight.position.lerp(
            new THREE.Vector3(worldIntersection.x, worldIntersection.y, worldIntersection.z + 1.2),
            0.1
          );
          pointerLight.intensity = THREE.MathUtils.lerp(pointerLight.intensity, 2.8, 0.1);
        }
      } else {
        pointerLight.intensity = THREE.MathUtils.lerp(pointerLight.intensity, 1.4, 0.05);
      }

      // 2. Parallax Camera Shift
      if (isPointerActive) {
        const targetCamX = pointerNDC.x * 0.35;
        const targetCamY = pointerNDC.y * 0.25;
        camera.position.x += (targetCamX - camera.position.x) * 0.04;
        camera.position.y += (targetCamY - camera.position.y) * 0.04;
      } else {
        camera.position.x += (0 - camera.position.x) * 0.04;
        camera.position.y += (0 - camera.position.y) * 0.04;
      }
      camera.lookAt(0, 0, 0);

      // 3. Gentle Continuous Rotation + Drag Inertia
      mainGroup.rotation.y += angularVelY + 0.0022;
      mainGroup.rotation.x += angularVelX + Math.sin(elapsedTime * 0.4) * 0.0005;
      angularVelX *= 0.92;
      angularVelY *= 0.92;

      // 4. Orbit Rings Slow Rotation
      ring1.rotation.z += 0.0018;
      ring2.rotation.z -= 0.0022;

      // 5. Starfield Drift
      starField.rotation.y = elapsedTime * 0.02;

      // 6. Update Shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += sw.speed * delta;
        sw.life = 1 - sw.radius / sw.maxRadius;
        if (sw.life <= 0) {
          shockwaves.splice(s, 1);
        }
      }

      // 7. Update Burst Sparks
      const sPosArr = sparksGeo.attributes.position.array as Float32Array;
      const sColArr = sparksGeo.attributes.color.array as Float32Array;
      for (let i = 0; i < maxSparks; i++) {
        if (i < sparks.length) {
          const sp = sparks[i];
          sp.pos.addScaledVector(sp.vel, delta);
          sp.vel.multiplyScalar(0.96);
          sp.life -= delta / sp.maxLife;

          if (sp.life > 0) {
            sPosArr[i * 3] = sp.pos.x;
            sPosArr[i * 3 + 1] = sp.pos.y;
            sPosArr[i * 3 + 2] = sp.pos.z;

            const alpha = Math.max(0, sp.life);
            sColArr[i * 3] = sp.color.r * alpha;
            sColArr[i * 3 + 1] = sp.color.g * alpha;
            sColArr[i * 3 + 2] = sp.color.b * alpha;
          } else {
            sparks.splice(i, 1);
            i--;
          }
        } else {
          sPosArr[i * 3] = 999;
          sPosArr[i * 3 + 1] = 999;
          sPosArr[i * 3 + 2] = 999;
        }
      }
      sparksGeo.attributes.position.needsUpdate = true;
      sparksGeo.attributes.color.needsUpdate = true;

      // 8. Update Particle Physics
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const colAttr = particleGeo.attributes.color as THREE.BufferAttribute;
      const positions = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      const interactionRadius = 1.35;
      const repulsionStrength = 0.12;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const curX = positions[i3];
        const curY = positions[i3 + 1];
        const curZ = positions[i3 + 2];

        const baseX = basePositions[i3];
        const baseY = basePositions[i3 + 1];
        const baseZ = basePositions[i3 + 2];

        let vx = velocities[i3];
        let vy = velocities[i3 + 1];
        let vz = velocities[i3 + 2];

        // Pointer Magnetic Swirl & Repulsion
        if (isPointerActive) {
          const dx = curX - localPointer.x;
          const dy = curY - localPointer.y;
          const dz = curZ - localPointer.z;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < interactionRadius * interactionRadius && distSq > 0.0001) {
            const dist = Math.sqrt(distSq);
            const factor = (1 - dist / interactionRadius) * repulsionStrength;
            vx += (dx / dist) * factor;
            vy += (dy / dist) * factor;
            vz += (dz / dist) * factor;

            vx += -dy * factor * 0.65;
            vy += dx * factor * 0.65;
          }
        }

        // Active Shockwaves Impact
        for (let s = 0; s < shockwaves.length; s++) {
          const sw = shockwaves[s];
          const dx = curX - sw.center.x;
          const dy = curY - sw.center.y;
          const dz = curZ - sw.center.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const diff = Math.abs(dist - sw.radius);

          if (diff < 0.45) {
            const impact = (1 - diff / 0.45) * sw.strength * sw.life;
            if (dist > 0.001) {
              vx += (dx / dist) * impact;
              vy += (dy / dist) * impact;
              vz += (dz / dist) * impact;
            }
            colArray[i3] = Math.min(1, baseColors[i3] + impact * 1.5);
            colArray[i3 + 1] = Math.min(1, baseColors[i3 + 1] + impact * 1.2);
            colArray[i3 + 2] = Math.min(1, baseColors[i3 + 2] + impact * 0.8);
          }
        }

        // Elastic Restoration Spring
        const springX = (baseX - curX) * 0.045;
        const springY = (baseY - curY) * 0.045;
        const springZ = (baseZ - curZ) * 0.045;

        vx = (vx + springX) * 0.86;
        vy = (vy + springY) * 0.86;
        vz = (vz + springZ) * 0.86;

        velocities[i3] = vx;
        velocities[i3 + 1] = vy;
        velocities[i3 + 2] = vz;

        positions[i3] = curX + vx;
        positions[i3 + 1] = curY + vy;
        positions[i3 + 2] = curZ + vz;

        colArray[i3] += (baseColors[i3] - colArray[i3]) * 0.05;
        colArray[i3 + 1] += (baseColors[i3 + 1] - colArray[i3 + 1]) * 0.05;
        colArray[i3 + 2] += (baseColors[i3 + 2] - colArray[i3 + 2]) * 0.05;
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      globeGeo.dispose();
      globeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      torusGeo1.dispose();
      ringMat1.dispose();
      ringCoreMat1.dispose();
      torusGeo2.dispose();
      ringMat2.dispose();
      ringCoreMat2.dispose();
      starGeo.dispose();
      starMat.dispose();
      sparksGeo.dispose();
      sparksMat.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[350px] relative cursor-grab active:cursor-grabbing select-none"
      title="Interactive 3D Three.js Galaxy - Touch, Drag or Tap to interact!"
    />
  );
};

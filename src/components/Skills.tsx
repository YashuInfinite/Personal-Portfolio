import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Code, Brain, Megaphone } from 'lucide-react';
import * as THREE from 'three';

// --- 3D Humanoid AI Robot Component ---
interface AIRobotCanvasProps {
  isSkillHovered: boolean;
}

const AIRobotCanvas: React.FC<AIRobotCanvasProps> = ({ isSkillHovered }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(isSkillHovered);

  // Sync ref with prop for Three.js animation loop without re-triggering useEffect
  useEffect(() => {
    isHoveredRef.current = isSkillHovered;
  }, [isSkillHovered]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const orangePointLight = new THREE.PointLight(0xf97316, 4, 10);
    orangePointLight.position.set(0, 0.5, 2);
    scene.add(orangePointLight);

    const cyanPointLight = new THREE.PointLight(0x6366f1, 2, 8);
    cyanPointLight.position.set(-2, -1, 2);
    scene.add(cyanPointLight);

    // Robot Root Group
    const robotGroup = new THREE.Group();
    scene.add(robotGroup);

    // Materials
    const whiteArmorMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.85,
      roughness: 0.15,
    });

    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.95,
      roughness: 0.1,
    });

    const visorMat = new THREE.MeshPhysicalMaterial({
      color: 0x020617,
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.2,
      thickness: 0.5,
    });

    const orangeEmissiveMat = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      emissive: 0xf97316,
      emissiveIntensity: 3,
      roughness: 0.2,
    });

    // 1. HEAD GROUP
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.9, 0);
    robotGroup.add(headGroup);

    // Helmet Base
    const headGeo = new THREE.SphereGeometry(0.5, 32, 32);
    headGeo.scale(1, 1.1, 0.95);
    const headMesh = new THREE.Mesh(headGeo, whiteArmorMat);
    headGroup.add(headMesh);

    // Visor Plate
    const visorGeo = new THREE.SphereGeometry(0.46, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45);
    visorGeo.scale(1.02, 0.65, 1.02);
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.position.set(0, 0.05, 0.05);
    visorMesh.rotation.x = Math.PI * 0.1;
    headGroup.add(visorMesh);

    // Glowing Eyes
    const eyeGeo = new THREE.SphereGeometry(0.06, 16, 16);
    eyeGeo.scale(1.8, 0.6, 0.8);

    const leftEye = new THREE.Mesh(eyeGeo, orangeEmissiveMat);
    leftEye.position.set(-0.18, 0.06, 0.45);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, orangeEmissiveMat);
    rightEye.position.set(0.18, 0.06, 0.45);
    headGroup.add(rightEye);

    // Earpiece Nodes
    const earGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16);
    earGeo.rotateZ(Math.PI / 2);
    const leftEar = new THREE.Mesh(earGeo, darkMetalMat);
    leftEar.position.set(-0.52, 0.05, 0);
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, darkMetalMat);
    rightEar.position.set(0.52, 0.05, 0);
    headGroup.add(rightEar);

    // Earpiece Light Rings
    const earRingGeo = new THREE.TorusGeometry(0.12, 0.015, 16, 32);
    earRingGeo.rotateY(Math.PI / 2);
    const leftEarRing = new THREE.Mesh(earRingGeo, orangeEmissiveMat);
    leftEarRing.position.set(-0.54, 0.05, 0);
    headGroup.add(leftEarRing);

    const rightEarRing = new THREE.Mesh(earRingGeo, orangeEmissiveMat);
    rightEarRing.position.set(0.54, 0.05, 0);
    headGroup.add(rightEarRing);

    // 2. NECK
    const neckGeo = new THREE.CylinderGeometry(0.2, 0.25, 0.25, 16);
    const neckMesh = new THREE.Mesh(neckGeo, darkMetalMat);
    neckMesh.position.set(0, 0.48, 0);
    robotGroup.add(neckMesh);

    // 3. TORSO / CHEST
    const chestGroup = new THREE.Group();
    chestGroup.position.set(0, -0.1, 0);
    robotGroup.add(chestGroup);

    // Upper Chest Plate
    const chestGeo = new THREE.BoxGeometry(1.2, 0.8, 0.7);
    const chestMesh = new THREE.Mesh(chestGeo, whiteArmorMat);
    chestMesh.position.set(0, 0.1, 0);
    chestGroup.add(chestMesh);

    // Inner Chest Core Housing
    const coreHousingGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.2, 32);
    coreHousingGeo.rotateX(Math.PI / 2);
    const coreHousing = new THREE.Mesh(coreHousingGeo, darkMetalMat);
    coreHousing.position.set(0, 0.15, 0.3);
    chestGroup.add(coreHousing);

    // Glowing Arc Core Reactor
    const arcCoreGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const arcCore = new THREE.Mesh(arcCoreGeo, orangeEmissiveMat);
    arcCore.position.set(0, 0.15, 0.32);
    chestGroup.add(arcCore);

    // Core Orbit Ring
    const coreRingGeo = new THREE.TorusGeometry(0.25, 0.015, 16, 32);
    const coreRing = new THREE.Mesh(coreRingGeo, whiteArmorMat);
    coreRing.position.set(0, 0.15, 0.35);
    chestGroup.add(coreRing);

    // Shoulder Armor
    const shoulderGeo = new THREE.SphereGeometry(0.32, 24, 24);
    shoulderGeo.scale(1.1, 0.9, 1);

    const leftShoulder = new THREE.Mesh(shoulderGeo, whiteArmorMat);
    leftShoulder.position.set(-0.75, 0.35, 0);
    chestGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeo, whiteArmorMat);
    rightShoulder.position.set(0.75, 0.35, 0);
    chestGroup.add(rightShoulder);

    // Floating Energy Rings / Halo
    const haloGeo = new THREE.TorusGeometry(1.5, 0.012, 16, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.4,
    });
    const haloRing1 = new THREE.Mesh(haloGeo, haloMat);
    haloRing1.rotation.x = Math.PI / 2.5;
    robotGroup.add(haloRing1);

    const haloRing2 = new THREE.Mesh(haloGeo, haloMat);
    haloRing2.rotation.x = -Math.PI / 3;
    haloRing2.rotation.y = Math.PI / 6;
    robotGroup.add(haloRing2);

    // 4. FLOATING ORANGE SPARK PARTICLES
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 4;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3;

      particleSpeeds[i * 3] = (Math.random() - 0.5) * 0.02;
      particleSpeeds[i * 3 + 1] = Math.random() * 0.03 + 0.01;
      particleSpeeds[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xf97316,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const sparkParticles = new THREE.Points(particleGeo, particleMat);
    robotGroup.add(sparkParticles);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      const isHovered = isHoveredRef.current;

      // Smooth mouse easing
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      // Robot Float & Breathing (Faster if skill card is hovered)
      const floatSpeed = isHovered ? 3.5 : 1.8;
      const floatAmplitude = isHovered ? 0.2 : 0.12;

      robotGroup.position.y = Math.sin(time * floatSpeed) * floatAmplitude;
      robotGroup.rotation.y = Math.sin(time * 0.8) * 0.08 + targetX * 0.45;
      robotGroup.rotation.x = Math.cos(time * 1.0) * 0.04 - targetY * 0.25;

      // Head Mouse Tracking
      headGroup.rotation.y = targetX * 0.6;
      headGroup.rotation.x = -targetY * 0.4;

      // Pulsing Core & Eyes Light Intensity (Stronger when skill hovered)
      const pulse = Math.sin(time * (isHovered ? 8 : 3)) * 0.5 + 0.5;
      const baseEmissive = isHovered ? 5 : 2.5;
      orangeEmissiveMat.emissiveIntensity = baseEmissive + pulse * (isHovered ? 4 : 1.5);
      orangePointLight.intensity = (isHovered ? 8 : 3) + pulse * 3;

      // Rotating Rings
      const ringSpeedMult = isHovered ? 3 : 1;
      haloRing1.rotation.z = time * 0.3 * ringSpeedMult;
      haloRing2.rotation.z = -time * 0.4 * ringSpeedMult;
      coreRing.rotation.z = time * 2.0 * ringSpeedMult;

      // Particle Spark Animation (Active spark burst on skill hover)
      particleMat.size = isHovered ? 0.085 : 0.045;
      particleMat.color.setHex(isHovered ? 0xffa500 : 0xf97316);

      const positions = particleGeo.attributes.position.array as Float32Array;
      const speedMult = isHovered ? 2.5 : 1.0;

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i * 3 + 1] * speedMult;
        positions[i * 3] += Math.sin(time * 5 + i) * 0.005 * speedMult;

        // Reset particles floating up
        if (positions[i * 3 + 1] > 2.5) {
          positions[i * 3 + 1] = -2.0;
          positions[i * 3] = (Math.random() - 0.5) * 3;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      sparkParticles.rotation.y = time * 0.2 * speedMult;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      headGeo.dispose();
      visorGeo.dispose();
      eyeGeo.dispose();
      earGeo.dispose();
      earRingGeo.dispose();
      neckGeo.dispose();
      chestGeo.dispose();
      coreHousingGeo.dispose();
      arcCoreGeo.dispose();
      coreRingGeo.dispose();
      shoulderGeo.dispose();
      haloGeo.dispose();
      particleGeo.dispose();
      whiteArmorMat.dispose();
      darkMetalMat.dispose();
      visorMat.dispose();
      orangeEmissiveMat.dispose();
      haloMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center">
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="AI Developer Assistant - Move cursor or hover skills to release sparks!"
      />
    </div>
  );
};

// --- Skill Definition Interface & Data ---
interface SkillItem {
  name: string;
  icon: React.FC<{ className?: string }>;
}

// Custom Sharp SVG Icons for official brand accuracy
const WordPressIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://www.svgrepo.com/show/475696/wordpress-color.svg"
    alt="WordPress"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const PhpIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://www.svgrepo.com/show/373969/php2.svg"
    alt="PHP"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const PythonIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#3776AB" d="M11.872 0c-5.066 0-4.75 2.203-4.75 2.203l.006 2.28h4.82v.684H5.16s-3.16.36-3.16 4.69c0 4.328 2.76 4.187 2.76 4.187h1.649v-2.32s-.09-2.76 2.722-2.76h4.697s2.632.045 2.632-2.585V2.483S16.938 0 11.872 0zm-2.54 1.488a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9z" />
    <path fill="#FFD43B" d="M12.128 24c5.066 0 4.75-2.203 4.75-2.203l-.006-2.28h-4.82v-.684h6.788s3.16-.36 3.16-4.69c0-4.328-2.76-4.187-2.76-4.187h-1.649v2.32s.09 2.76-2.722 2.76H10.18s-2.632-.045-2.632 2.585v4.062S7.062 24 12.128 24zm2.54-1.488a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z" />
  </svg>
);

const SeleniumIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://www.svgrepo.com/show/354321/selenium.svg"
    alt="Selenium"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const BurpSuiteIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://www.svgrepo.com/show/454430/burpsuite-security-software.svg"
    alt="Burp Suite"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const CanvaIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://static.vecteezy.com/system/resources/thumbnails/032/329/171/small_2x/canva-icon-logo-symbol-free-png.png"
    alt="Canva"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const DockerIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://www.svgrepo.com/show/331370/docker.svg"
    alt="Docker"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const GitIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#F05032">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.66 2.66c.642-.22 1.387-.078 1.902.437.712.713.712 1.868 0 2.58-.713.712-1.868.712-2.58 0-.528-.528-.668-1.283-.426-1.93l-2.484-2.484V15.53c.22.118.416.28.572.48.712.713.712 1.868 0 2.58-.713.712-1.868.712-2.58 0-.712-.712-.712-1.868 0-2.58.204-.204.444-.352.702-.438V9.112c-.258-.086-.498-.234-.702-.438-.52-.52-.662-1.263-.432-1.902L6.103 4.103.453 9.753c-.603.604-.603 1.582 0 2.188l10.48 10.48c.603.603 1.581.603 2.187 0l10.426-10.426c.603-.603.603-1.582 0-2.188" />
  </svg>
);

const KaliLinuxIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://iconlogovector.com/uploads/images/2025/06/lg-684b47b1684e8-Kali-Linux.webp"
    alt="Kali Linux"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const OverleafIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://www.svgrepo.com/show/349470/overleaf.svg"
    alt="Overleaf"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

const AndroidHackingIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ164ZgmJDLHLjGGLV2SzZgW-Wi4fzp92G4Bq3ptB4g&s=10"
    alt="Android Hacking"
    referrerPolicy="no-referrer"
    className={`${className} object-contain`}
  />
);

// Skills List
const EXACT_SKILLS: SkillItem[] = [
  { name: "WordPress", icon: WordPressIcon },
  { name: "PHP", icon: PhpIcon },
  { name: "Web Development", icon: Code },
  { name: "Python", icon: PythonIcon },
  { name: "Selenium", icon: SeleniumIcon },
  { name: "Burp Suite", icon: BurpSuiteIcon },
  { name: "Canva", icon: CanvaIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Git", icon: GitIcon },
  { name: "Kali Linux", icon: KaliLinuxIcon },
  { name: "Android Hacking", icon: AndroidHackingIcon },
  { name: "Machine Learning & Deep Learning", icon: Brain },
  { name: "Overleaf", icon: OverleafIcon },
  { name: "Social Media Marketing", icon: Megaphone },
];

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="pt-16 pb-8 relative bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Subtle Background Spark Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[380px] h-[380px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] backdrop-blur-md border border-white/10 text-orange-400 text-xs font-mono uppercase tracking-[0.2em] font-bold shadow-lg shadow-black/40">
            <Cpu className="w-3.5 h-3.5 text-orange-500" />
            <span>TECH STACK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tighter uppercase">
            SKILLS & <span className="text-gradient-orange">TOOLS</span>
          </h2>
        </div>

        {/* Two-Column Layout (Desktop 40% Left 3D Robot, 60% Right Skills Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (40%): Futuristic 3D Humanoid AI Robot Assistant */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <AIRobotCanvas isSkillHovered={hoveredSkill !== null} />
          </div>

          {/* Right Column (60%): Glassmorphism Skill Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
              {EXACT_SKILLS.map((skill, index) => {
                const IconComp = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative group bg-white/[0.05] hover:bg-gradient-to-b hover:from-white/[0.08] hover:to-orange-500/[0.06] backdrop-blur-xl border border-white/[0.08] hover:border-orange-500/50 rounded-[20px] p-5 flex flex-col items-center justify-center text-center space-y-3 hover:shadow-[0_12px_35px_rgba(249,115,22,0.22)] transition-all duration-300 overflow-hidden cursor-pointer before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-orange-500/40 before:to-transparent"
                  >
                    {/* Glass Light Reflection on Hover */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                    {/* Centered Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-orange-400 group-hover:border-orange-500/70 group-hover:bg-gradient-to-br group-hover:from-orange-500/20 group-hover:to-transparent group-hover:scale-110 transition-all duration-300 shrink-0 shadow-md p-2">
                      <IconComp className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
                    </div>

                    {/* Skill Name Below */}
                    <span className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-orange-300 transition-colors leading-tight font-sans">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

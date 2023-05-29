import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header/Header";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Cursor } from "../cursor/index";
import "react-creative-cursor/dist/styles.css";
import SmoothScroll from "./components/utils/SmoothScroll";
import { NextSeo } from "next-seo";
import * as THREE from "three";

import HomeAero from "./components/Home/HomeAero";
import Footer from "./components/Footer";
import Category from "./components/Home/Category";
import ConceptScrollNew from "./components/Home/ConceptScrollNew";
import FooterMobile from "./components/Mobile/FooterMobile";
import HomeHero from "./components/Mobile/HomeHero";
import HomeVideoSection from "./components/Mobile/HomeVideoSection";
import ConceptScrollMobile from "./components/Mobile/ConceptScrollMobile";
import ProjectsHome from "./components/Home/ProjectsHome";
import TopHomeAero from "./components/Home/TopHomeAero";
import Link from "next/link";
import Preloader from "./components/PreLoader";

export default function Home() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 5.5,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#hireus",
      {
        scale: 0,
        opacity: 0,
      },
      {
        delay: 6.3,
        duration: 1.3,
        scale: 1,
        opacity: 1,
      }
    );
    return () => tl.kill();
  }, []);

  // Home Header Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".home-page-header",
      {
        y: -50,
        opacity: 0,
      },
      {
        delay: 5.5,
        duration: 1.3,
        opacity: 1,
        y: 0,
      }
    );
    return () => tl.kill();
  }, []);

  // Page Transitions OLD
  // useEffect(() => {
  //   var tl = gsap.timeline();

  //   tl.to(
  //     ".transition li",
  //     {
  //       duration: 0.5,
  //       scaleY: 1,
  //       transformOrigin: "bottom left",
  //       stagger: 0.05,
  //     },
  //     "+=0.1"
  //   );

  //   tl.to(
  //     ".transition li",
  //     {
  //       duration: 0.5,
  //       scaleY: 0,
  //       transformOrigin: "top left",
  //       stagger: 0.15,
  //       delay: 0.1,
  //     },
  //     "+=0.5"
  //   );
  // });

  // useEffect(() => {
  //   const debounce = (callback, duration) => {
  //     var timer;
  //     return function (event) {
  //       clearTimeout(timer);
  //       timer = setTimeout(function () {
  //         callback(event);
  //       }, duration);
  //     };
  //   };

  //   const loadTexs = (imgs, callback) => {
  //     const texLoader = new THREE.TextureLoader();
  //     const length = Object.keys(imgs).length;
  //     const loadedTexs = {};
  //     let count = 0;

  //     texLoader.crossOrigin = "anonymous";

  //     for (var key in imgs) {
  //       const k = key;
  //       if (imgs.hasOwnProperty(k)) {
  //         texLoader.load(imgs[k], (tex) => {
  //           tex.repeat = THREE.RepeatWrapping;
  //           loadedTexs[k] = tex;
  //           count++;
  //           if (count >= length) callback(loadedTexs);
  //         });
  //       }
  //     }
  //   };

  //   class Fog {
  //     constructor() {
  //       this.uniforms = {
  //         time: {
  //           type: "f",
  //           value: 0,
  //         },
  //         tex: {
  //           type: "t",
  //           value: null,
  //         },
  //       };
  //       this.num = 200;
  //       this.obj = null;
  //     }
  //     createObj(tex) {
  //       // Define Geometries
  //       const geometry = new THREE.InstancedBufferGeometry();
  //       const baseGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);

  //       // Copy attributes of the base Geometry to the instancing Geometry
  //       geometry.setAttribute("position", baseGeometry.attributes.position);
  //       geometry.setAttribute("normal", baseGeometry.attributes.normal);
  //       geometry.setAttribute("uv", baseGeometry.attributes.uv);
  //       geometry.setIndex(baseGeometry.index);

  //       // Define attributes of the instancing geometry
  //       const instancePositions = new THREE.InstancedBufferAttribute(
  //         new Float32Array(this.num * 3),
  //         3,
  //         1
  //       );
  //       const delays = new THREE.InstancedBufferAttribute(
  //         new Float32Array(this.num),
  //         1,
  //         1
  //       );
  //       const rotates = new THREE.InstancedBufferAttribute(
  //         new Float32Array(this.num),
  //         1,
  //         1
  //       );
  //       for (var i = 0, ul = this.num; i < ul; i++) {
  //         instancePositions.setXYZ(
  //           i,
  //           (Math.random() * 2 - 1) * 850,
  //           0,
  //           (Math.random() * 2 - 1) * 300
  //         );
  //         delays.setXYZ(i, Math.random());
  //         rotates.setXYZ(i, Math.random() * 2 + 1);
  //       }
  //       geometry.setAttribute("instancePosition", instancePositions);
  //       geometry.setAttribute("delay", delays);
  //       geometry.setAttribute("rotate", rotates);

  //       // Define Material
  //       const material = new THREE.RawShaderMaterial({
  //         uniforms: this.uniforms,
  //         vertexShader: `
  //       attribute vec3 position;
  //       attribute vec2 uv;
  //       attribute vec3 instancePosition;
  //       attribute float delay;
  //       attribute float rotate;

  //       uniform mat4 projectionMatrix;
  //       uniform mat4 modelViewMatrix;
  //       uniform float time;

  //       varying vec3 vPosition;
  //       varying vec2 vUv;
  //       varying vec3 vColor;
  //       varying float vBlink;

  //       const float duration = 200.0;

  //       mat4 calcRotateMat4Z(float radian) {
  //         return mat4(
  //           cos(radian), -sin(radian), 0.0, 0.0,
  //           sin(radian), cos(radian), 0.0, 0.0,
  //           0.0, 0.0, 1.0, 0.0,
  //           0.0, 0.0, 0.0, 1.0
  //         );
  //       }
  //       vec3 convertHsvToRgb(vec3 c) {
  //         vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  //         vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  //         return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  //       }

  //       void main(void) {
  //         float now = mod(time + delay * duration, duration) / duration;

  //         mat4 rotateMat = calcRotateMat4Z(radians(rotate * 360.0) + time * 0.1);
  //         vec3 rotatePosition = (rotateMat * vec4(position, 1.0)).xyz;

  //         vec3 moveRise = vec3(
  //           (now * 2.0 - 1.0) * (2500.0 - (delay * 2.0 - 1.0) * 2000.0),
  //           (now * 2.0 - 1.0) * 2000.0,
  //           sin(radians(time * 50.0 + delay + length(position))) * 30.0
  //           );
  //         vec3 updatePosition = instancePosition + moveRise + rotatePosition;

  //         vec3 hsv = vec3(time * 0.1 + delay * 0.2 + length(instancePosition) * 100.0, 0.5 , 0.8);
  //         vec3 rgb = convertHsvToRgb(hsv);
  //         float blink = (sin(radians(now * 360.0 * 20.0)) + 1.0) * 0.88;

  //         vec4 mvPosition = modelViewMatrix * vec4(updatePosition, 1.0);

  //         vPosition = position;
  //         vUv = uv;
  //         vColor = rgb;
  //         vBlink = blink;

  //         gl_Position = projectionMatrix * mvPosition;
  //       }
  //     `,
  //         fragmentShader: `
  //       precision highp float;

  //       uniform sampler2D tex;

  //       varying vec3 vPosition;
  //       varying vec2 vUv;
  //       varying vec3 vColor;
  //       varying float vBlink;

  //       void main() {
  //         vec2 p = vUv * 2.0 - 1.0;

  //         vec4 texColor = texture2D(tex, vUv);
  //         vec3 color = (texColor.rgb - vBlink * length(p) * 0.8) * vColor;
  //         float opacity = texColor.a * 0.36;

  //         gl_FragColor = vec4(color, opacity);
  //       }
  //     `,
  //         transparent: true,
  //         depthWrite: false,
  //         blending: THREE.AdditiveBlending,
  //       });
  //       this.uniforms.tex.value = tex;

  //       // Create Object3D
  //       this.obj = new THREE.Mesh(geometry, material);
  //     }
  //     render(time) {
  //       this.uniforms.time.value += time;
  //     }
  //   }

  //   const resolution = new THREE.Vector2();
  //   const canvas = document.getElementById("canvas-webgl");
  //   const renderer = new THREE.WebGLRenderer({
  //     alpha: true,
  //     antialias: true,
  //     canvas: canvas,
  //   });
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera();
  //   const clock = new THREE.Clock();

  //   camera.far = 50000;
  //   camera.setFocalLength(24);

  //   const texsSrc = {
  //     fog: "https://ykob.github.io/sketch-threejs/img/sketch/fog/fog.png",
  //   };
  //   const fog = new Fog();

  //   const render = () => {
  //     const time = clock.getDelta();
  //     fog.render(time);
  //     renderer.render(scene, camera);
  //   };
  //   const renderLoop = () => {
  //     render();
  //     requestAnimationFrame(renderLoop);
  //   };
  //   const resizeCamera = () => {
  //     camera.aspect = resolution.x / resolution.y;
  //     camera.updateProjectionMatrix();
  //   };
  //   const resizeWindow = () => {
  //     resolution.set(window.innerWidth, window.innerHeight);
  //     canvas.width = resolution.x;
  //     canvas.height = resolution.y;
  //     resizeCamera();
  //     renderer.setSize(resolution.x, resolution.y);
  //   };
  //   const on = () => {
  //     window.addEventListener("resize", debounce(resizeWindow), 1000);
  //   };

  //   const init = () => {
  //     loadTexs(texsSrc, (loadedTexs) => {
  //       fog.createObj(loadedTexs.fog);

  //       scene.add(fog.obj);

  //       renderer.setClearColor(0x1a1a1a, 1.0);
  //       camera.position.set(0, 0, 1000);
  //       camera.lookAt(new THREE.Vector3());
  //       clock.start();

  //       on();
  //       resizeWindow();
  //       renderLoop();
  //     });
  //   };
  //   init();
  // }, []);

  return (
    <>
      <NextSeo
        title="Enigma Digital | UI/UX, Front-End Development & Marketing"
        description="Boost your brand with India's top UX agency, offering expert UI/UX Design, Front-End Development, and Organic Marketing solutions."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.weareenigma.com/",
          title: "Enigma Digital | UI/UX, Front-End Development & Marketing",
          description:
            "Boost your brand with India's top UX agency, offering expert UI/UX Design, Front-End Development, and Organic Marketing solutions.",
          images: [
            {
              url: "https://i.ibb.co/k0NMQw9/home.png",
              width: 400,
              height: 600,
              alt: "Enigma Image",
              type: "image/png",
            },
            { url: "https://i.ibb.co/k0NMQw9/home.png" },
          ],
          siteName: "weareenigma.com",
        }}
      />

      <Head>
        <title>Enigma Digital | UI/UX, Front-End Development & Marketing</title>
        <meta
          name="description"
          content="Boost your brand with India's top UX agency, offering expert UI/UX Design, Front-End Development, and Organic Marketing solutions."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      {/* <ul className="transition" style={{ zIndex: "255" }} id="loader">
        <li />
        <li />
        <li />
        <li />
      </ul> */}

      <Preloader />

      <SmoothScroll />

      <Cursor isGelly={true} />

      <section className="blob-section">
        <canvas className="webgl-canvas" id="canvas-webgl"></canvas>
        <div>
          <Header />
        </div>

        <div>
          <main className="main-section">
            <HomeHero />

            <div className="hireus-button" id="hireus">
              <a
                href="/hireus"
                data-cursor-text="Hire Us!"
                data-cursor-size="80px"
                data-cursor-color="#5D5AD6"
              >
                <Image
                  src="/assets/hireus/icon-hireus.png"
                  alt="Icon"
                  width={70}
                  height={70}
                />
              </a>
            </div>

            <div className="hero-main desktop">
              <div
                className="hero-section"
                data-cursor-size="10px"
                data-cursor-text=""
              >
                <div className="first-section">
                  <div
                    className="digital"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/1.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    <span className="line hacker">digital</span>
                  </div>
                  <p className="para-hero" id="anim">
                    Leveraging the power of{" "}
                    <span className="bold-600">
                      Emotion, Consumer Psychology, and Technology,
                    </span>{" "}
                    we create Digital Brand Experiences that propel your success
                    in the enigmatic realm of bits & bytes.
                  </p>
                </div>

                <div className="second-section">
                  <div
                    className="experience"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/2.webp"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    experience
                  </div>

                  <div className="reel-hero">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 6,
                      }}
                    >
                      <video
                        src="/assets/reels/hero.webm"
                        muted
                        autoPlay
                        loop
                        preload="auto"
                        className="hero-video"
                      ></video>
                    </motion.div>
                  </div>
                </div>

                <div className="third-section">
                  <div
                    className="design"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/4.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    design
                  </div>

                  <div
                    className="agency"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/3.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    agency
                  </div>
                </div>
              </div>
            </div>

            {/* ======================== Hero Footer ====================== */}

            <div className="hero-footer">
              <div className="scroll-img home-page-header">
                <Image
                  src="/assets/hero-footer/scroll.svg"
                  width={200}
                  height={200}
                  alt="Scroll"
                  className="svg-dark-mode"
                ></Image>
              </div>

              <div className="content-section home-page-header">
                <div className="f-sub-content">
                  <div className="f-content-text">
                    <span className="f-disabled">timezone</span>
                    <div className="f-heading">+5:30 GMT</div>
                  </div>
                </div>
                <div className="f-right">
                  <h3 className="f-disabled">location</h3>
                  <div className="f-heading">Noida - India</div>
                </div>
              </div>
            </div>
            {/* ======================== Hero Footer END ====================== */}
          </main>
        </div>
      </section>

      {/* ======================== Concept Scroll ====================== */}
      <div>
        <ConceptScrollNew />
      </div>
      <div>
        <ConceptScrollMobile />
      </div>
      {/* ======================== Concept Scroll END ====================== */}

      {/* ======================== Home Video Mobile ====================== */}
      <HomeVideoSection />
      {/* ======================== Home Video Mobile END  ================= */}

      <div className="space-large desktop"></div>
      <div className="space-mobile desktop"></div>
      <div className="space-mobile desktop"></div>

      {/* ======================== Home Aero ====================== */}
      <div
        data-cursor-color="#000"
        data-cursor-size="0px"
        // style={{ zIndex: -1 }}
        className="topHeightAero"
      >
        <TopHomeAero />
      </div>
      {/* ======================== Home Aero END ====================== */}
      <div className="space-mobile desktop"></div>

      <div className="space-large desktop"></div>

      {/* ======================== Projects Slide ====================== */}
      <div className="category">
        <Category />
      </div>
      {/* ======================== Projects Slide END ====================== */}

      <div className="ipad desktop"></div>
      <div className="ipad desktop"></div>
      <div className="space-large desktop"></div>

      {/* ======================== Projects Slide ====================== */}
      <div className="projects">
        <ProjectsHome />
      </div>

      {/* ======================== Projects Slide END ====================== */}

      <div className="space-mobile desktop"></div>
      <div className="space-mobile desktop"></div>

      {/* ======================== Home Aero ====================== */}
      <div data-cursor-color="#000" data-cursor-size="0px">
        <HomeAero />
      </div>
      {/* ======================== Home Aero END ====================== */}
      <div className="space-large desktop"></div>

      {/* ======================== Footer ====================== */}
      <div className="desktop-footer">
        <Footer />
      </div>

      <div className="mobile-footer">
        <FooterMobile />
      </div>
      {/* ======================== Footer END ====================== */}
    </>
  );
}

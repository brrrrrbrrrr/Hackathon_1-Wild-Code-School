/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import "./ParticleBackground.css";

function ParticleBackground() {
  const [activated, setActivated] = useState(false);

  function handleClick() {
    setActivated(!activated);
    console.warn(activated);
  }
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.warn(container);
  };

  return (
    <div>
      <input
        type="submit"
        value="Let's go"
        className="btn"
        onClick={handleClick}
      />
      {!activated ? (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              number: {
                density: {
                  enable: true,
                  area: 1080,
                },
                limit: 0,
                value: 400,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.05,
                  speed: 2,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.05,
                },
                value: 1,
              },
              shape: {
                type: "square",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5,
                },
                value: 2,
              },
              move: {
                enable: false,
                speed: 2,
                direction: "none",
                random: false,
                straight: true,
                outMode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
                trail: {
                  fillColor: "#118CD6",
                  frequency: 0.06,
                  offsetX: 0,
                  offsetY: 0,
                  count: 1,
                  strength: 1,
                  velocity: {
                    x: () => Math.random() - 0.5,
                    y: () => Math.random() - 0.5,
                  },
                },
              },
            },
          }}
        />
      ) : (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              number: {
                density: {
                  enable: true,
                  area: 1080,
                },
                limit: 0,
                value: 400,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.05,
                  speed: 2,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.05,
                },
                value: 1,
              },
              shape: {
                type: "square",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1.5,
                },
                value: 1,
              },
              move: {
                enable: true,
                speed: 20,
                direction: "outside",
                random: false,
                straight: true,
                outMode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
                trail: {
                  fillColor: "#118CD6",
                  frequency: 0.06,
                  offsetX: 0,
                  offsetY: 0,
                  count: 1,
                  strength: 1,
                  velocity: {
                    x: () => Math.random() - 0.5,
                    y: () => Math.random() - 0.5,
                  },
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default ParticleBackground;

import React, { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {}, []);

  if (!shouldRender) return null;

  const isMobile = window.innerWidth < 768;

  return (
    <Particles
      className={`${className || ""}`}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: isMobile ? 30 : 60,
        particles: {
          color: {
            value: "#e1232b",
          },
          links: {
            enable: false,
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: isMobile ? 2 : 4,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: isMobile ? 40 : 80,
          },
          opacity: {
            value: 0.3,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: false,
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

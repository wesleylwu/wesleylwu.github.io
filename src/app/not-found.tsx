"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function StarField() {
  const [stars, setStars] = useState<
    {
      id: number;
      x: number;
      y: number;
      r: number;
      delay: number;
      dur: number;
    }[]
  >([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 1.6 + 0.4,
        delay: Math.random() * 6,
        dur: Math.random() * 3 + 2,
      })),
    );
  }, []);

  if (stars.length === 0) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {stars.map((s) => (
        <circle
          key={s.id}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="white"
          style={{
            animation: `starTwinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            opacity: 0.7,
          }}
        />
      ))}
    </svg>
  );
}

const Landing = () => {
  const [fireflies, setFireflies] = useState<
    {
      id: number;
      left: string;
      top: string;
      width: number;
      height: number;
      dx: string;
      dy: string;
      dur: string;
      delay: string;
    }[]
  >([]);

  useEffect(() => {
    setFireflies(
      Array.from({ length: 10 }, (_, i) => {
        const size = 3 + Math.random() * 4;
        return {
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 80 + 10}%`,
          width: size,
          height: size,
          dx: `${(Math.random() - 0.5) * 80}px`,
          dy: `${(Math.random() - 0.5) * 60}px`,
          dur: `${6 + Math.random() * 8}s`,
          delay: `${Math.random() * 8}s`,
        };
      }),
    );
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-transparent text-white">
      <StarField />

      {fireflies.map((f) => (
        <div
          key={f.id}
          className="firefly"
          style={
            {
              left: f.left,
              top: f.top,
              width: f.width,
              height: f.height,
              "--dx": f.dx,
              "--dy": f.dy,
              "--dur": f.dur,
              "--delay": f.delay,
              zIndex: 2,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="z-10 flex flex-col items-center space-y-6">
        <p className="font-share text-lavender-primary text-5xl font-bold">
          Error 404
        </p>
        <Link
          href="/"
          className="font-noto bg-blue-secondary mb-50 w-30 cursor-pointer rounded-2xl border border-white/10 p-3 text-center text-xl font-bold transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Landing;

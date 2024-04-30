"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

const CURSOR_SIZE = 8 * 4; // size * 4 === pixels

const scaleTarget = 1.2;
const scaleSpeed = 0.05;
const scaleStrength = 0.15;
const scaleFriction = 0.01;
const springStrength = 0.003;
const springFriction = 0.1;
const springSpeed = 0.8;
export function StyledCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const { current: cursor } = ref;
    console.log(cursor);
    if (!cursor) return;

    let cursorX = 0;
    let cursorY = 0;
    let actualX = 0;
    let actualY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let scale = 1;
    let scaleVelocity = 0;
    let scaleSpring = 0;
    let isHovering = false;
    let requestAnimationFrameId: number;
    const handler = (e: MouseEvent) => {
      cursorY = e.pageY;
      cursorX = e.pageX;
    };
    document.addEventListener("mousemove", handler);
    const animateCursor = () => {
      if (![cursorX, cursorY].every((num) => num === 0)) {
        cursor.style.display = "block";
      }
      const dx = cursorX - CURSOR_SIZE / 2 - actualX - 1;
      const dy = cursorY - CURSOR_SIZE / 2 - actualY - 1;
      const forceX = dx * springStrength;
      const forceY = dy * springStrength;

      velocityX += (forceX - velocityX * springFriction) * springSpeed;
      velocityY += (forceY - velocityY * springFriction) * springSpeed;

      actualX += velocityX;
      actualY += velocityY;

      cursor.style.transform = `translate(${Math.round(
        actualX
      )}px, ${Math.round(actualY)}px) scale(${Math.round(scale * 100) / 100})`;

      if (isHovering) {
        const scaleDistance = scaleTarget - scale;
        scaleVelocity = scaleDistance * scaleSpeed;
        scaleSpring += scaleVelocity * scaleStrength;
      } else {
        const scaleDistance = 1 - scale;
        scaleVelocity = scaleDistance * scaleSpeed;
        scaleSpring += scaleVelocity * scaleStrength;
      }

      scale += scaleVelocity + scaleSpring;
      scaleVelocity *= scaleFriction;

      requestAnimationFrameId = window.requestAnimationFrame(animateCursor);
    };

    const resizeHandler = ({ type: eventType }: MouseEvent) => {
      if (["mousedown", "mouseover"].includes(eventType)) {
        isHovering = true;
      } else if (["mouseup", "mouseleave"].includes(eventType)) {
        isHovering = false;
      }
    };
    document.addEventListener("mousedown", resizeHandler);
    document.addEventListener("mouseup", resizeHandler);
    const elementsToScale = [
      ...document.querySelectorAll("[data-cursor-scale]"),
    ].filter((element) => element instanceof HTMLElement);
    elementsToScale.forEach((element) => {
      element.addEventListener("mouseover", resizeHandler);
      element.addEventListener("mouseleave", resizeHandler);
    });
    requestAnimationFrameId = window.requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener("mousemove", handler);

      document.removeEventListener("mousedown", resizeHandler);
      document.removeEventListener("mouseup", resizeHandler);
      elementsToScale.forEach((element) => {
        if (!(element instanceof HTMLElement)) return;
        element.removeEventListener("mouseover", resizeHandler);
        element.removeEventListener("mouseleave", resizeHandler);
      });
      window.cancelAnimationFrame(requestAnimationFrameId);
    };
  }, [ref]);
  return (
    <div
      ref={ref}
      className={`z-50 fixed hidden size-8 mix-blend-exclusion pointer-events-none ease-linear duration-100`}
    >
      {/* no dynamic classes :( */}
      <div className="absolute bg-white rounded-full mix-blend-exclusion size-full origin-center" />
    </div>
  );
}

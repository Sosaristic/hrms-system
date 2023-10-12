import React, { ReactNode } from "react";
type OverlayProp = {
  children: ReactNode;
};
export default function Overlay({ children }: OverlayProp) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-white/30 backdrop-invert backdrop-opacity-60">
      {children}
    </div>
  );
}

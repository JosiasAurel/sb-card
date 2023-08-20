import React from "react";

interface MiniLogoProps {
  visible: boolean,
  fillColor: string  
}

export default function MiniLogo({ visible, fillColor }: MiniLogoProps) {
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.17 39.9"><defs></defs><title>svg bb</title><path style={{ fill: fillColor}} d="M37.4,21.21a2.23,2.23,0,0,1,1.84.85l.18.24.52-.55-.13-.17a3,3,0,0,0-2.41-1.09,3.21,3.21,0,0,0-3.27,3.35A3.21,3.21,0,0,0,37.4,27.2a3,3,0,0,0,2.41-1.09l.13-.17-.52-.55-.18.24a2.23,2.23,0,0,1-1.84.85,2.48,2.48,0,0,1-2.53-2.64A2.47,2.47,0,0,1,37.4,21.21Z"/><path style={{ fill: fillColor }} d="M43.54,20.49a3.79,3.79,0,0,0-2.56,1l-.19.18.53.52.17-.17a3,3,0,0,1,2.12-.79,1.69,1.69,0,0,1,1.64,1.69v.43H43.17c-2.2,0-2.43,1.33-2.43,1.9,0,1.2.95,2,2.42,2a2.81,2.81,0,0,0,2.09-.8v.76H46V22.89A2.21,2.21,0,0,0,43.54,20.49Zm-.38,3.56h2.09v1.06a2.08,2.08,0,0,1-2.09,1.37c-1.07,0-1.69-.46-1.69-1.26S42,24.05,43.16,24.05Z"/><path style={{ fill: fillColor }} d="M48.88,21.39v-.87h-.73v6.64h.73V23.61c0-1.51.77-2.38,2.09-2.38h.33v-.74h-.25A2.72,2.72,0,0,0,48.88,21.39Z"/><path style={{ fill: fillColor }} d="M57.52,17.85v3.82A3.09,3.09,0,0,0,55,20.49a3.22,3.22,0,0,0-3.23,3.35A3.22,3.22,0,0,0,55,27.2,3.12,3.12,0,0,0,57.52,26v1.14h.74V17.85ZM55,26.48a2.49,2.49,0,0,1-2.49-2.64,2.5,2.5,0,1,1,5,0A2.49,2.49,0,0,1,55,26.48Z"/><path style={{ fill: fillColor}} d="M31.25,20.07a3.16,3.16,0,0,0,1.83-3c0-2.22-1.56-3.87-5.4-3.87H20.36v0h0V18h1.33V14.53h6.1c2.75,0,4,1,4,2.49s-1.18,2.39-4,2.39H14.36c-2.75,0-4-1-4-2.49s1.19-2.39,4-2.39H19V13.2h-4.6c-3.9,0-5.34,1.58-5.34,3.67s1.56,3.87,5.4,3.87H27.79c2.79,0,4,1,4,2.39s-1.22,2.48-4,2.48h-6.1v-3.3H20.36v4.57h0V27h7.32c3.84,0,5.4-1.65,5.4-3.87A3.18,3.18,0,0,0,31.25,20.07Z"/><path style={{ fill: fillColor}} d="M10.39,23.27H9.06c0,2.1,1.45,3.68,5.35,3.68H19V25.61H14.36C11.6,25.61,10.41,24.61,10.39,23.27Z"/></svg>
  );
}

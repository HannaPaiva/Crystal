import React from "react";
import Image from "next/image";

const LogoComponent = ({ white = false }) => {
  return (
    <Image
      src={
        white
          ? "/assets/images/logo-name-white.png"
          : "/assets/images/logo-name.png"
      }
      alt="Next.js LogoComponent"
      width={145}
      height={45}
    />
  );
};

export default LogoComponent;

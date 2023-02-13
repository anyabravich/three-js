import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import React, { Suspense } from "react";
import Chair from "./Chair";

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage
        environment={null}
        intensity={1}
        contactShadow={false}
        shadowBias={-0.0015}
      >
        <Chair />
      </Stage>
    </PresentationControls>
  );
};

export default Experience;

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/chair.gltf
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Chair = (props) => {
  const { nodes, materials } = useGLTF("./models/chair.gltf");

  const leatherTextureProps = useTexture({
    map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  leatherTextureProps.map.repeat.set(2, 2);
  leatherTextureProps.normalMap.repeat.set(2, 2);
  leatherTextureProps.roughnessMap.repeat.set(2, 2);
  leatherTextureProps.aoMap.repeat.set(2, 2);

  leatherTextureProps.map.wrapS =
    leatherTextureProps.map.wrapT =
    leatherTextureProps.normalMap.wrapS =
    leatherTextureProps.normalMap.wrapT =
    leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT =
    leatherTextureProps.aoMap.wrapS =
    leatherTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const fabricTextureProps = useTexture({
    map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  fabricTextureProps.map.repeat.set(2, 2);
  fabricTextureProps.normalMap.repeat.set(2, 2);
  fabricTextureProps.roughnessMap.repeat.set(2, 2);
  fabricTextureProps.aoMap.repeat.set(2, 2);

  fabricTextureProps.map.wrapS =
    fabricTextureProps.map.wrapT =
    fabricTextureProps.normalMap.wrapS =
    fabricTextureProps.normalMap.wrapT =
    fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT =
    fabricTextureProps.aoMap.wrapS =
    fabricTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial {...leatherTextureProps} />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.06, 0.04]}>
        <meshStandardMaterial {...fabricTextureProps} />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={false}
      />
    </group>
  );
};

useGLTF.preload("./models/chair.gltf");
export default Chair;

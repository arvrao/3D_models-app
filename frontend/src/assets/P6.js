/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/P6.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.5]} scale={[1.2, 1.4, 1.6]}>
        <mesh geometry={nodes.mesh_15_4.geometry} material={materials['Material.072']} />
        <mesh geometry={nodes.mesh_15_0.geometry} material={materials['Material.074']} />
        <mesh geometry={nodes.mesh_15_2.geometry} material={materials['Material.075']} />
        <mesh geometry={nodes.mesh_15_5.geometry} material={materials['Material.073']} />
        <mesh geometry={nodes.mesh_15_1.geometry} material={materials['Material.076']} />
        <mesh geometry={nodes.mesh_15_3.geometry} material={materials['Material.077']} />
      </group>
    </group>
  )
}

useGLTF.preload('/P6.gltf')

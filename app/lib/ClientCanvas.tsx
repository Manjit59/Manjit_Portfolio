"use client"

import { Canvas, type CanvasProps } from "@react-three/fiber"
import dynamic from "next/dynamic"

// Re-export Canvas via a dynamic wrapper so we can `ssr:false`
export default dynamic<CanvasProps>(
  // lazy import
  () => Promise.resolve(({ children, ...props }: CanvasProps) => <Canvas {...props}>{children}</Canvas>),
  { ssr: false },
)

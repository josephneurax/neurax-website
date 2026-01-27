import React from 'react'
import { InteractiveChatDemo } from './InteractiveChatDemo'
import { Hero3D } from './Hero3D'
import { Header } from './Header'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero3D />
      <InteractiveChatDemo />
    </div>
  )
}

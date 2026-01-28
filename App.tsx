import React from 'react'
import { InteractiveChatDemo } from './InteractiveChatDemo'
import { Hero3D } from './Hero3D'
import { Header } from './Header'

export default function App() {
  const handleOpenQuestionnaire = (service?: 'website' | 'vocal') => {
    console.log('Questionnaire ouvert pour:', service);
    // Logique future pour le questionnaire
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onOpenQuestionnaire={handleOpenQuestionnaire} />
      <Hero3D />
      <InteractiveChatDemo />
    </div>
  )
}

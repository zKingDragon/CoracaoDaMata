'use client'

import { useState, useEffect } from 'react'

export default function CreditsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const creators = [
    { name: 'Geovanna Capizani', class: '1JODI', role: 'Design dos cenários' },
    { name: 'Guilherme Gabriel dos Santos', class: '1JODI', role: 'Desenvolvimento da história' },
    { name: 'Guilherme Pereira', class: '1JODI', role: 'Não participou' },
    { name: 'Daniel Francisco', class: '2JODI', role: 'Desenvolvimento do Jogo' },
    { name: 'Diogo Matheus', class: '2JODI', role: 'Design do menu' },
    { name: 'Leonardo', class: '3JODI', role: 'Desenvolvimento da história' },
    { name: 'Antonio', class: '3JODI', role: 'Design dos personagens' },
    { name: 'Daniel Pereira', class: '3DS', role: 'Desenvolvimento do Site' },
    { name: 'Eduardo Pedro', class: '3DS', role: 'Não participou' }
  ]

  return (
    <section id="creditos" className="relative py-20 md:py-32 bg-[#2c1810] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#1f6032] via-transparent to-[#d14728]"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </div>

      {/* Pixel grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 4px,
          rgba(255,226,154,0.5) 4px,
          rgba(255,226,154,0.5) 8px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 4px,
          rgba(255,226,154,0.5) 4px,
          rgba(255,226,154,0.5) 8px
        )`
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-5xl text-[#ffe29a] mb-6 leading-relaxed drop-shadow-[0_4px_0_rgba(209,71,40,1)]">
            CRÉDITOS
          </h2>
          <div className="w-32 h-2 bg-[#d14728] mx-auto mb-6" style={{
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
          }} />
          <p className="font-['VT323'] text-xl md:text-2xl text-[#32936f] max-w-2xl mx-auto leading-relaxed">
            Conheça a equipe 3, que deu vida a este jogo em apenas 1 dia na Game Jam 2025!
          </p>
        </div>

        {/* Credits Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#3b2618] border-4 border-[#1f6032] p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="bg-[#2c1810] border-4 border-[#d14728] p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {creators.map((creator, index) => (
                  <div 
                    key={index}
                    className="bg-[#3b2618] border-4 border-[#1f6032] p-6 hover:border-[#d14728] transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Avatar/Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#1f6032] border-4 border-[#32936f] flex items-center justify-center">
                      <img 
                        src="/retro-8-bit-pixel-art-user-icon.jpg" 
                        alt="" 
                        className="w-12 h-12 pixelated opacity-80"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-[10px] md:text-xs mb-3 leading-relaxed text-center">
                      {creator.name}
                    </h3>

                    {/* Class Badge */}
                    <div className="bg-[#d14728] border-2 border-[#1f6032] px-3 py-2 mb-2">
                      <p className="font-['VT323'] text-[#ffe29a] text-lg text-center">
                        {creator.class}
                      </p>
                    </div>

                    {/* Role */}
                    <div className="bg-[#1f6032] border-2 border-[#32936f] px-3 py-1">
                      <p className="font-['VT323'] text-[#ffe29a] text-base text-center">
                        {creator.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Thanks */}
              <div className="mt-12 p-6 bg-[#1f6032] border-4 border-[#32936f] animate-fadeInUp" style={{ animationDelay: '1s' }}>
                <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-sm md:text-base mb-4 leading-relaxed text-center">
                  AGRADECIMENTOS ESPECIAIS
                </h3>
                <p className="font-['VT323'] text-[#ffe29a] text-lg md:text-xl text-center leading-relaxed">
                  Obrigado a todos que tornaram este projeto possível!<br/>
                  🌿 Preserve a natureza, preserve o futuro! 🌿
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#1f6032]" style={{
        clipPath: 'polygon(0 50%, 5% 0, 10% 50%, 15% 0, 20% 50%, 25% 0, 30% 50%, 35% 0, 40% 50%, 45% 0, 50% 50%, 55% 0, 60% 50%, 65% 0, 70% 50%, 75% 0, 80% 50%, 85% 0, 90% 50%, 95% 0, 100% 50%, 100% 100%, 0 100%)'
      }} />
    </section>
  )
}

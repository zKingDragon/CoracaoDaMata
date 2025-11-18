'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const videos = [
  { id: 1, title: 'Gameplay 1', thumbnail: '/retro-8-bit-jungle-game-gameplay-scene-1.jpg' },
  { id: 2, title: 'Gameplay 2', thumbnail: '/retro-8-bit-jungle-game-gameplay-scene-2.jpg' },
  { id: 3, title: 'Gameplay 3', thumbnail: '/retro-8-bit-jungle-game-gameplay-scene-3.jpg' },
  { id: 4, title: 'Gameplay 4', thumbnail: '/retro-8-bit-jungle-game-gameplay-scene-4.jpg' },
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <section className="bg-[#3b2618] py-12 border-t-4 border-b-4 border-[#1f6032]">
      <div className="container mx-auto px-4">
        <h2 className="font-['Press_Start_2P'] text-[#ffe29a] text-xl sm:text-2xl text-center mb-8 drop-shadow-[0_2px_0_rgba(209,71,40,1)]">
          VEJA O JOGO EM AÇÃO
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative bg-[#2c1810] border-8 border-[#1f6032] p-4" style={{
            boxShadow: '8px 8px 0 0 rgba(31,96,50,0.5)'
          }}>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {videos.map((video) => (
                  <div key={video.id} className="min-w-full">
                    <div className="aspect-video bg-[#1f6032] border-4 border-[#32936f] relative">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        style={{ imageRendering: 'pixelated' }}
                      />
                      {/* Pixel border effect */}
                      <div className="absolute inset-0 border-4 border-[#ffe29a] opacity-50 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] p-3 border-4 border-[#1f6032] shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:shadow-[2px_2px_0_0_rgba(31,96,50,1)] transition-all"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] p-3 border-4 border-[#1f6032] shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:shadow-[2px_2px_0_0_rgba(31,96,50,1)] transition-all"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-4 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 border-2 border-[#1f6032] transition-colors ${
                  index === currentIndex ? 'bg-[#d14728]' : 'bg-[#ffe29a]'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

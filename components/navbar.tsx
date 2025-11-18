import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="relative bg-[#3b2618] border-b-4 border-[#1f6032] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-['Press_Start_2P'] text-[#ffe29a] text-xs sm:text-sm">
            O CORAÇÃO DA MATA
          </div>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/#inicio"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[10px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#sobre"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[10px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/login"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[10px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[10px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Cadastro
            </Link>
          </div>
        </div>
      </div>
      {/* Retro pixel border effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.3) 2px,
            rgba(0,0,0,0.3) 4px
          )`
        }} />
      </div>
    </nav>
  )
}

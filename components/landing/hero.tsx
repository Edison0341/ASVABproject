"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { LoginModal } from "@/components/auth/login-modal"

export function Hero() {
  const router = useRouter()

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src={'/images/ASVABProject.png'}
                alt="ASVABProject Logo"
                width={150}
                height={40}
                className="cursor-pointer object-contain h-10 w-auto"
                onClick={() => router.push('/')}
                priority
                style={{ maxWidth: '150px' }}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  if (img.src.includes('/images/')) {
                    img.src = '/ASVABProject.png';
                  }
                }}
              />
            </div>

            {/* Login Modal Trigger */}
            <div className="relative z-50">
              <LoginModal />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Container - Add padding-top to prevent navbar overlap */}
      <main className="pt-16">
        {/* Hero Section with Background Image */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/military1.jpg"
              alt="Military Jets Formation"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-200/10 hover:ring-gray-200/20 bg-white/10">
                    <span className="text-gray-100">
                      Start preparing for your military career.{" "}
                      <a href="#features" className="font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Learn more <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    ASVAB Practice Tests
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-200">
                    Comprehensive practice tests for all ASVAB categories. Track your progress, 
                    get instant feedback, and improve your scores with AI-powered assistance.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button 
                      size="lg"
                      className="bg-[#000A1F] hover:bg-white hover:text-[#000A1F] text-white font-semibold rounded-lg transition-all duration-200 border-2 border-transparent hover:border-[#000A1F]"
                      onClick={() => router.push('/practice')}
                    >
                      Start Practice Test
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-[#000A1F] border-white hover:text-[#000A1F] hover:text-white"
                      onClick={() => {
                        const section = document.getElementById('categories-section');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      View Categories
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 

"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    year: "[2024]",
    image: "/images/screenshot.png",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "News Portals",
    year: "[2024]",
    image: "/images/mesrati.jpg",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Robotics Control Panel",
    year: "[2023]",
    image: "/images/screenshot.png",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "Live Communication Hub",
    year: "[2024]",
    image: "/images/mesrati.jpg",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 5,
    title: "Image Editing Tool",
    year: "[2023]",
    image: "/images/screenshot.png",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Certificate Generator",
    year: "[2024]",
    image: "/images/mesrati.jpg",
    color: "from-yellow-500/20 to-orange-500/20",
  },
]

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const scrollY = window.scrollY

      const progress = Math.max(0, scrollY - containerTop) / (containerHeight - window.innerHeight)
      const clampedProgress = Math.min(progress, 1)

      setScrollProgress(clampedProgress)

      const projectIndex = Math.min(Math.floor(clampedProgress * projects.length), projects.length - 1)
      setActiveProject(Math.max(0, projectIndex))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[500vh] w-full bg-gray-100 px-4 py-4">
      {/* Sticky Container */}
      <div className="sticky top-4 h-[calc(100vh-2rem)] flex rounded-3xl overflow-hidden bg-black">
        
        {/* Left Panel */}
        <div className="w-1/2 bg-black flex flex-col justify-center pl-12 pr-8">
          <div className="absolute top-12 left-12">
            <h2 className="text-white text-lg font-light tracking-wider opacity-60">My Works</h2>
          </div>

          <div className="space-y-1">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  index <= activeProject ? "opacity-100 translate-x-0" : "opacity-30 translate-x-4"
                }`}
              >
                <h3
                  className={`text-4xl md:text-4xl lg:text-5xl font-medium leading-tight transition-all duration-500 ${
                    index === activeProject ? "text-white" : "text-gray-600"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 relative overflow-hidden flex items-center justify-center p-18">
          <div
            className="relative w-full h-[80%] transition-transform duration-1000 ease-out"
            style={{
              transform: `translateY(-${scrollProgress * (projects.length - 1) * 110}%)`, // 110% for gap
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="absolute inset-x-0 w-full h-[85%] rounded-2xl overflow-hidden"
                style={{
                  transform: `translateY(${index * 110}%)`, // match gap
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl`} />

                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-8 flex space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 transition-all duration-500 ${
                  index <= activeProject ? "w-8 bg-white" : "w-4 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

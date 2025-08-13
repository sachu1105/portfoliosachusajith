"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description:
      "I build modern, responsive, and scalable websites that provide seamless user experiences. From concept to deployment, I ensure your site is fast, secure, and visually stunning.",
    features: ["Responsive design", "Cross-browser compatibility", "Clean code architecture"],
    image: "/images/mesrati.jpg",
  },
  {
    title: "UI/UX Designing",
    description:
      "Creating intuitive and visually engaging interfaces that balance beauty with functionality. My designs are user-first, ensuring every click and scroll feels effortless.",
    features: ["User research", "Wireframing", "High-fidelity designs"],
    image: "/images/mesrati.jpg",
  },
  {
    title: "Full Stack Development",
    description:
      "From front-end visuals to back-end logic, I handle complete application development with smooth integration and efficient performance across the stack.",
    features: ["Frontend & backend integration", "Database management", "API development"],
    image: "/images/mesrati.jpg",
  },
  {
    title: "Next.js Development",
    description:
      "Leveraging Next.js for blazing-fast, SEO-friendly, and scalable applications. I specialize in building SSR/SSG-powered sites with smooth navigation and optimized performance.",
    features: ["Server-side rendering (SSR)", "Static site generation (SSG)", "API routes"],
    image: "/images/mesrati.jpg",
  },
  {
    title: "React Development",
    description:
      "Building dynamic, component-driven interfaces using React. My focus is on reusable code, smooth animations, and state management that keeps apps responsive and maintainable.",
    features: ["Reusable components", "State management", "Performance tuning"],
    image: "/images/mesrati.jpg",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your site’s visibility with technical SEO, structured data, and content strategies to attract more organic traffic and higher search engine rankings.",
    features: ["On-page SEO", "Technical SEO", "Keyword optimization"],
    image: "/images/mesrati.jpg",
  },
  {
    title: "Performance Optimization",
    description:
      "Speed matters. I optimize your website’s loading time, reduce bottlenecks, and ensure smooth performance for better user experience and search rankings.",
    features: ["Code optimization", "Lazy loading", "Caching strategies"],
    image: "/images/mesrati.jpg",
  },
  {
    title: "Content Strategy",
    description:
      "Crafting a content roadmap that aligns with your brand’s goals, engages your audience, and drives measurable business growth.",
    features: ["Content planning", "Brand messaging", "Engagement analysis"],
    image: "/images/mesrati.jpg",
  },
];

export default function ServicesScroll() {
  return (
    <div className="relative w-full mt-28">
      {/* Header Section */}
      <div className="relative px-6 py-12">
        <div className="max-w-full mx-auto flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex items-center gap-4">
            <h1 className="text-6xl lg:text-8xl font-bold">My</h1>
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/images/mesrati.jpg"
                alt="Team"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold">Services</h1>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 max-w-md">
            <p className="text-xl font-semibold text-left lg:text-right">
              We push users along the funnel through performance driven content
              marketing
            </p>
            <button
             
              className="px-8 py-3 text-lg rounded-full bg-white dark:bg-gray-700 border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              Connect With Me
            </button>
          </div>
        </div>

        
      </div>

    
      <div className="relative dark:bg-gray-900">
        {services.map((service, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen border-t-2 border-gray-300 dark:border-gray-700"
            style={{
              zIndex: index, // lower index at bottom
              background: "#efeeec",
              marginTop: index === 0 ? "0" : "-10vh",
            }}
          >
            <div className="h-full flex flex-col justify-center px-8 dark:bg-black">
              <div className="max-w-full mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl lg:text-5xl font-medium leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg leading-relaxed font-bold max-w-lg pt-38">
                      {service.description}
                    </p>
                    <div className="space-y-3 flex gap-4 ">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>• {feature}</div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative"
                  >
                    <div className="relative h-64 lg:h-[400px] w-full rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

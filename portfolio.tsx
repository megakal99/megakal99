"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "Internal Data Catalog Web Application",
      client: "Insurance Company (Employee Project)",
      description:
        "Developed an internal data catalog web application based on the DAMA-DMBOK framework. The solution includes metadata management, business glossary, data lineage tracking, and data ownership management. Integrated an AI assistant using RAG architecture and Mixtral 8x7B LLM model to enable natural language-based access to catalog information.",
      skills: [
        "Data Governance",
        "Metadata Management",
        "Data Catalog Development",
        "RAG Architecture",
        "LLM Integration",
        "Python Development",
      ],
      tools: ["Python", "Streamlit", "LangChain", "Mixtral 8x7B", "PostgreSQL", "Docker"],
      results: [
        "Centralized metadata management improving data discoverability across teams.",
        "AI assistant enables natural language queries for catalog information, reducing search time significantly.",
        "Enhanced data ownership and accountability through clear lineage tracking.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4-eM5dswuZlfknS5OoYvjw1pH0x1tQkm.png",
    },
    {
      title: "B2B Master Data Management (MDM) Solution",
      client: "Insurance Company (Employee Project)",
      description:
        "Built a B2B Master Data Management (MDM) solution to centralize and standardize client reference data. The solution ensures data consistency, eliminates duplicates, and provides a single source of truth for client information across the organization.",
      skills: [
        "Master Data Management",
        "Data Standardization",
        "Data Quality",
        "Reference Data Management",
        "Python Development",
      ],
      tools: ["Python", "PostgreSQL", "Streamlit", "Docker"],
      results: [
        "Centralized client reference data creating a single source of truth.",
        "Improved data quality through standardization and deduplication processes.",
        "Enhanced data consistency across business units.",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project6%20(2)-lmbu2a9svgbvTfp8DDLWh9CiE2Ssfo.png",
    },
    {
      title: "Data Quality Monitoring & Reporting Application",
      client: "Insurance Company (Employee Project)",
      description:
        "Developed internal data governance web applications for data quality monitoring and reporting based on business rules. Defined RACI and RBAC governance models to improve data ownership and accountability.",
      skills: [
        "Data Quality Management",
        "Business Rules Definition",
        "RACI/RBAC Models",
        "Data Governance",
        "Dashboard Development",
      ],
      tools: ["Python", "Streamlit", "PostgreSQL", "Power BI"],
      results: [
        "Automated data quality monitoring reducing manual inspection efforts.",
        "Clear accountability through RACI and RBAC governance models.",
        "Real-time reporting dashboards for data quality metrics.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project5-tHOfzdbNx2XUg5uFX9CjiEbPAjt8rL.png",
    },
    {
      title: "Tool for Analyzing the Representativity of Insurance Claims Record Samples",
      client: "Finance Pro Advisory (Freelance)",
      description:
        "Developed a tool to assess the representativity of sample data of Sanlam's claims records. It automated statistical analysis using descriptive statistics, hypothesis testing, and inferential statistics, ensuring data quality and reliability for insurance claims processing.",
      skills: [
        "Statistical Analysis",
        "Data Quality Assessment",
        "Hypothesis Testing",
        "Inferential Statistics",
        "Python Development",
      ],
      tools: ["Streamlit", "Python", "Docker", "StatsModels", "Pingouin"],
      results: [
        "Automated statistical analysis, saving time and reducing costs.",
        "Provided reliable conclusions on sample representativity, improving data quality assurance.",
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project6%20(2)-lmbu2a9svgbvTfp8DDLWh9CiE2Ssfo.png",
    },
    {
      title: "AI Assistant for Private Data-Based Responses",
      client: "Freelance Project",
      description:
        "Developed an AI assistant that provides responses based on private data using Retrieval-Augmented Generation (RAG). The solution improves document-based query handling, enabling efficient access to organizational knowledge.",
      skills: [
        "RAG Architecture",
        "LLM Integration",
        "NLP",
        "Prompt Engineering",
        "Python Development",
      ],
      tools: ["Python", "Streamlit", "LangChain", "Mixtral 8x7B (HuggingFace)"],
      results: [
        "Reduced search time by providing efficient document-based responses.",
        "Achieved 93% accuracy during testing, based on 122 predefined questions and responses.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4-eM5dswuZlfknS5OoYvjw1pH0x1tQkm.png",
    },
    {
      title: "Data Integration & ETL Automation Tool",
      client: "MeetMurphy.io (Freelance)",
      description:
        "Developed a sophisticated data integration solution deployed as an API for seamless integration with the client's SaaS platform. The tool automates data collection and integration processes while ensuring data quality and compliance.",
      skills: [
        "Data Integration",
        "ETL Automation",
        "API Development",
        "Data Quality",
        "Scalability",
      ],
      tools: ["Selenium", "FastAPI", "Docker", "Python", "VPS"],
      results: [
        "Developed a scalable data integration solution ensuring data quality.",
        "Successfully integrated with the client's SaaS system for automated data workflows.",
        "Deployed using Docker for performance and scalability across environments.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project3-lYUyW1PFDZko6hbfOrdgBcUA2s7JKp.png",
    },
  ]

  const testimonials = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial1.jpg-hI6MsMUZd6DU28xAyZISm6uHBQ0i7w.png",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial2.jpg-vtRvDn0bNDGghRSrGTZhIQldoYhaIH.png",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial3.jpg-PHMvVkzeEdt61wcfC6dV4dq1JpSaNt.png",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonial4-zFIrUzIsACSUauu3lAoeXY0O1ioJvd.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-purple-200 text-gray-800">
      <Head>
        <title>Portfolio-KB</title>
        <meta name="description" content="Khalil Benlamaalam's Portfolio" />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-lxQs9HM1VcxWa8dWCEMMaOeMP5D8pz.png"
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-dTsPp1ZWAKrzOg74mSzgT2rmt6lpbY.png"
              alt="Logo"
              width={50}
              height={50}
              className="mr-4"
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white">
            <ul className="flex flex-col items-center py-4">
              <li className="py-2">
                <a href="#about" onClick={toggleMenu}>
                  About Me
                </a>
              </li>
              <li className="py-2">
                <a href="#skills" onClick={toggleMenu}>
                  Skills
                </a>
              </li>
              <li className="py-2">
                <a href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li className="py-2">
                <a href="#testimonials" onClick={toggleMenu}>
                  Testimonials
                </a>
              </li>
              <li className="py-2">
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 mb-8 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/myimage-12dBKEPEL7LyPvYM7llszkjDwpmdYr.png"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm Khalil Benlamaalam (Khal Ben), Data Governance & Quality Engineer specializing in AI-driven data solutions, Master Data Management (MDM), data stewardship, and automation.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              With experience in the finance and insurance domain, I focus on ensuring data is reliable, consistent, and compliant for business use. I have contributed to data governance initiatives, developed internal data catalog applications based on the DAMA-DMBOK framework, built MDM solutions, and integrated AI assistants using RAG architecture to enable natural language-based access to data.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I'm passionate about building trusted data foundations that enable better insights, efficiency, and compliance (CNDP/GDPR & PII). I'm always interested in connecting on data governance, AI, and automation-related projects or collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-blue-100 via-blue-300 to-purple-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">🛡️ Data Governance & Stewardship</h3>
              <p>
                Data Governance Frameworks (DAMA-DMBOK), Data Stewardship, Data Ownership, RACI & RBAC Models, Policy Definition, Data Standards
              </p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">✅ Data Quality Management</h3>
              <p>Data Quality Monitoring, Business Rules Definition, Data Profiling, Data Cleansing, Quality Reporting & Dashboards</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">🗂️ Master Data Management (MDM)</h3>
              <p>MDM Solutions, Data Centralization, Reference Data Standardization, Golden Record Management</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">📚 Metadata & Data Catalog</h3>
              <p>Metadata Management, Business Glossary, Data Lineage, Data Catalog Development, Data Dictionary</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">🔒 Compliance & Data Protection</h3>
              <p>CNDP (GDPR) Compliance, PII Data Protection, Pseudonymization, Data Privacy Mechanisms</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">🤖 AI-Driven Data Solutions</h3>
              <p>RAG Architecture, LLM Integration (Mixtral), AI Assistants for Data Access, NLP, Prompt Engineering</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">📊 Data Analysis & Visualization</h3>
              <p>Exploratory Data Analysis, Statistical Analysis, Dashboards & Reporting, Power BI, Plotly</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">⚙️ Automation & Development</h3>
              <p>Python Development, Web Application Development, API Development, ETL Processes, Automation Workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <button
                    onClick={() => setCurrentProject(project)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
            {currentProject.link ? (
              <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  width={800}
                  height={400}
                  className="mb-4 rounded-lg"
                />
              </a>
            ) : (
              <Image
                src={currentProject.image || "/placeholder.svg"}
                alt={currentProject.title}
                width={800}
                height={400}
                className="mb-4 rounded-lg"
              />
            )}
            <p className="mb-4">
              <strong>Client:</strong> {currentProject.client}
            </p>
            <p className="mb-4">{currentProject.description}</p>
            <div className="mb-4">
              <strong>Skills:</strong>
              <ul className="list-disc list-inside">
                {currentProject.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <strong>Tools:</strong>
              <ul className="list-disc list-inside">
                {currentProject.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Results:</strong>
              <ul className="list-disc list-inside">
                {currentProject.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setCurrentProject(null)}
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="relative w-full h-64 mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`Testimonial ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://github.com/megakal99"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Github className="w-8 h-8 text-gray-800" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/khalil-b-618590214/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Linkedin className="w-8 h-8 text-blue-600" />
              </div>
            </a>
            <a
              href="mailto:khalil.blm2000@gmail.com"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Mail className="w-8 h-8 text-red-500" />
              </div>
            </a>
            <a
              href="https://medium.com/@khalil.blm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Medium.png-Q4SoXgGVEGkQfBJskxm1y1pw9UL7Oa.jpeg"
                  alt="Medium"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
            <a
              href="https://pph.me/khalilBml"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pph-RKs1BS3M3aZUZuLFLBPWIiBjGUu9wY.png"
                  alt="PeoplePerHour"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

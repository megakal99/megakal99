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
      title: "FX Risk Assessment & Management Tool",
      client: "Lumon (UK-based company)",
      description:
        "A data-driven solution to assess and manage currency exchange rate risks. It provides exposure assessment, implements forward contract hedging strategies, and backtests them, incorporating real-time forex analysis, risk quantification (VaR, ES), and interactive visualizations for strategic decision-making.",
      skills: [
        "Risk Assessment & Management",
        "Financial Market Modeling (forex)",
        "Quantitative Finance",
        "Quantitative Analysis",
        "Python Development",
        "Data Visualization",
      ],
      tools: ["Pandas", "Streamlit", "Plotly", "Docker", "Python"],
      results: [
        "Risk Mitigation Visibility: Enables Lumon to understand exposure levels and reduce losses from currency fluctuations.",
        "Strategic Optimization: Provides insights into risk management strategies through backtesting, allowing for data-driven decision-making.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project1-lTiIFKN0rCNlk7Ag9rULIeDUP2sWtz.png",
    },
    {
      title: "Predictive Analysis Tool for MEV Strategy in DEX Transactions",
      client: "Digital Currencies Investor",
      description:
        "A tool to predict gas fees and block numbers for Ethereum transactions, especially for the MEV sandwich attack strategy. Uses machine learning and deep learning models like LSTM, Prophet, and others to optimize transaction placement and maximize profit in Decentralized Exchange (DEX) transactions.",
      skills: [
        "Data Collection & Processing",
        "Blockchain Data Analysis",
        "Machine Learning & Deep Learning",
        "Time Series Forecasting",
        "Model Deployment (API development)",
      ],
      tools: ["etherscan.io", "Python", "Keras", "Scikit-learn", "TensorFlow", "Polars", "FastAPI", "Numpy", "Darts", "Prophet", "Docker"],
      results: [
        "Predictions of GasBaseFee values achieve 95% accuracy (based on client's threshold and errors percentiles), with errors below 0.0061 Gwei.",
        "Predictions achieve 99% accuracy (based on client's threshold and errors percentiles) for front-running and back-running transactions, with margin errors of 14.71 Gwei and 12.44 Gwei.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project2-Cj1TyAbNkcwvjzvnjjjFXixyijI3vP.png",
      link: "https://github.com/megakal99/PredictiveAnalysis-Client-Project-",
    },
    {
      title: "Tool for Analyzing the Representativity of Insurance Claims Record Samples",
      client: "Finance Pro Advisory",
      description:
        "Tool for assessing the representativeness of samples from Sanlam's claims records using automated statistical analysis (descriptive statistics, hypothesis testing, and inferential statistics).",
      skills: [
        "Statistical Analysis",
        "Descriptive Statistics",
        "Hypothesis Testing",
        "Inferential Statistics",
        "Python Development",
      ],
      tools: ["Streamlit", "Python", "Docker", "StatsModels", "Pingouin"],
      results: [
        "Provides reliable conclusions on sample representativity, improving processing efficiency.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project6%20(2)-lmbu2a9svgbvTfp8DDLWh9CiE2Ssfo.png",
    },
    {
      title: "Facebook Scraper Tool (API)",
      client: "MeetMurphy.io",
      description:
        "A web scraping tool for Facebook Groups (public and private posts), deployed as an API for seamless integration into a SaaS platform for lead generation and competitor analysis.",
      skills: [
        "Web Scraping & Web Automation",
        "API Development",
        "Dynamic Content Handling",
        "LLM (Mixtral7*8b) integration",
        "Bot Detection Evasion",
        "Deployment",
        "Scalability",
      ],
      tools: ["Selenium", "HuggingFace (API)", "FastAPI", "Docker", "Python", "VPS", "Bash Commands"],
      results: [
        "Scalable scraper capable of extracting data while evading detection mechanisms.",
        "Integrated with the client's SaaS system for lead generation and competitor analysis.",
        "Deployed using Docker for scalability.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project3-lYUyW1PFDZko6hbfOrdgBcUA2s7JKp.png",
    },
    {
      title: "Chatbot for Private Data-Based Responses",
      client: "Freelance Project",
      description:
        "A chatbot (assistant) for providing responses based on private financial trade data using Retrieval-Augmented Generation (RAG), improving query handling and search time.",
      skills: [
        "Text Data Processing",
        "NLP",
        "GenAI (LLM) Integration",
        "RAG",
        "Prompt Engineering",
        "Python Development",
      ],
      tools: ["Python", "Streamlit", "LangChain", "HuggingFace (API)"],
      results: [
        "Reduced search time by providing efficient responses.",
        "Achieved 93% accuracy during testing with 122 predefined questions and answers.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4-eM5dswuZlfknS5OoYvjw1pH0x1tQkm.png",
    },
    {
      title: "Power BI Dashboards for Sales Performance & Survey Analysis",
      client: "Freelance Project",
      description:
        "Built Power BI dashboards to analyze sales performance and mental health survey results among IT employees.",
      skills: ["Data Preparation & Cleaning", "Dashboard Design", "Interactive Visualization"],
      tools: ["Power BI (DAX, PowerQuery)"],
      results: [
        "Sales Performance Dashboard optimized sales strategies.",
        "Survey analysis dashboard improved employee well-being insights.",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project5-tHOfzdbNx2XUg5uFX9CjiEbPAjt8rL.png",
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
              I'm Khalil Benlamaalam (Khal Ben), Data Governance & Quality Engineer with expertise in AI-driven data solutions, MDM, data stewardship, and automation.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              With over one year of experience as a freelancer, I have supported businesses with data-driven strategies including statistical analysis, predictive modeling, NLP, data visualization, ETL, and GenAI integration (LLMs/SLMs).
            </p>
            <p className="text-lg leading-relaxed mt-4">
              I'm eager to leverage my expertise to deliver valuable insights, improve decision-making, and optimize business operations.
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
              <h3 className="text-xl font-bold mb-4">Data Governance & Stewardship</h3>
              <p>
                Data Catalog Building, MDM (Master Data Management), Data Lineage, Data Contracts, Data Quality Audit & Reporting, PII Data Handling (GDPR/CNDP Compliance), AI Data Solutions for Governance
              </p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Data Analysis & Visualization</h3>
              <p>Exploratory Data Analysis, Statistical Analysis, Dashboards & Reporting, Power BI, Plotly</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">AI & LLM Integration</h3>
              <p>NLP, Conversational AI, RAG Architecture, Prompt Engineering, LLM/SLM Agents Development</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Data Scraping & Automation</h3>
              <p>Web Scraping, API Integration, ETL Processes, Automation Workflows, Data Integration</p>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Automation Scripts</h3>
              <p>Python Scripting, Task Scheduling, Process Automation</p>
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

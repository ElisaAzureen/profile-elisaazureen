'use client';

import { Mail, Phone, MapPin, Calendar, Download, Briefcase, GraduationCap, Code2, Brain, User, FolderGit2 } from 'lucide-react';
import { SiGithub, SiLinkerd } from '@icons-pack/react-simple-icons';
import { useRef } from 'react';

export default function Home() {
  // Create refs for each section
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);

  // Smooth scroll function - FIXED TYPE
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-1/3 bg-linear-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 p-8 text-white">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-6xl">👩‍💻</span>
                </div>
                <h1 className="text-2xl font-bold mb-2">Elisa Azureen</h1>
                <p className="text-blue-100 mb-4 text-center">AI Developer & Full Stack Engineer</p>
                
                <div className="w-full space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} />
                    <span>elisa.azureen@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} />
                    <span>+60 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} />
                    <span>Malaysia</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap size={16} />
                    <span>BSc CS (Hons.) Netcentric</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} />
                    <span>CGPA: 3.64</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a href="#" className="hover:bg-white/20 p-2 rounded-full transition-colors">
                    <SiGithub size={20} />
                  </a>
                  <a href="https://linkedin.com/in/elisa-azureen" target="_blank" rel="noopener noreferrer" className="hover:bg-white/20 p-2 rounded-full transition-colors">
                    <SiLinkerd size={20} />
                  </a>
                  <a href="#" className="hover:bg-white/20 p-2 rounded-full transition-colors">
                    <Mail size={20} />
                  </a>
                </div>

                <button className="mt-6 w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-white py-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download CV
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-2/3 p-8">
              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
                >
                  <User size={16} />
                  About
                </button>
                <button
                  onClick={() => scrollToSection(experienceRef)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
                >
                  <Briefcase size={16} />
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection(skillsRef)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
                >
                  <Code2 size={16} />
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection(projectsRef)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
                >
                  <FolderGit2 size={16} />
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection(educationRef)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
                >
                  <GraduationCap size={16} />
                  Education
                </button>
              </div>

              {/* Rest of your content remains exactly the same... */}
              {/* About Me Section */}
              <section ref={aboutRef} className="mb-12 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <User size={24} />
                  About Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Computer Science (Hons.) graduate in Netcentric Computing with experience in AI applications, 
                  NLP systems, and backend development. Skilled in Python, Flask, Laravel, and SQL, with expertise 
                  in model deployment, voice/text integration, and database management. Strong problem-solving and 
                  analytical skills, motivated to develop practical AI and software solutions.
                </p>
              </section>

              {/* Work Experience Section */}
              <section ref={experienceRef} className="mb-12 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Briefcase size={24} />
                  Work Experience
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-200 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Junior AI Developer & Full Stack Developer</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Aurora Cloud Works • Dec 2025 - Present</p>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                      <li>Built a predictive analysis application that predicts employees future records</li>
                      <li>Developing AI-powered solutions for cloud-based systems</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-200 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Robotics Trainer</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Nextgen Maker • Dec 2025 - May 2026</p>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                      <li>Training students in robotics and AI fundamentals</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-200 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI/ML Intern</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Aurora Cloud Works • Sep 2025 - Dec 2025</p>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                      <li>Built a multimodal AI chatbot that supports text and voice interactions</li>
                      <li>Developed and integrated 5 AI models covering 30 conversational intents</li>
                      <li>Implemented session-based memory for context retention and designed dialogue flows</li>
                      <li>Managed structured data using SQL Server (SSMS) with stored procedures</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-200 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Development Intern</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">UiTM Pasir Gudang • Aug 2020 - Sep 2020</p>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                      <li>Assisted in developing and maintaining internal web applications using PHP and MySQL</li>
                      <li>Collaborated with staff to deliver functional software solutions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section ref={skillsRef} className="mb-12 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code2 size={24} />
                  Technical Skills
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'PHP', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm shadow-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Frameworks & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Flask', 'Laravel', '.NET', 'SSMS', 'MySQL', 'SQLite', 'Next.js', 'React'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm shadow-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">AI/ML</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'LightGBM', 'PyTorch', 'TensorFlow', 'DistilBERT', 'Hugging Face', 'Whisper', 'gTTS'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm shadow-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section ref={projectsRef} className="mb-12 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Brain size={24} />
                  Featured Projects
                </h2>
                <div className="grid gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HRMS Progressive Web Application</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">PWA with OCR technology for HR management system</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Two-Way AI Chatbot with Voice and Text Integration</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Multimodal chatbot with DistilBERT, Flask, Whisper STT, gTTS TTS, SQL Server, integrated with .NET Framework frontend</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['DistilBERT', 'Hugging Face', 'Flask', 'SSMS', 'Whisper', 'gTTS', '.NET Framework'].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Centralized Intelligent Pet Adoption System</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Pet adoption platform with content-based recommendation, geolocation, AI chatbot, and Stripe payment integration</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Laravel', 'MySQL', 'Google Maps API', 'Flask', 'DistilBERT'].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Student Sleep Tracking System using IoT</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">IoT system monitoring student alertness through heart rate tracking with Arduino and C</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Arduino', 'C', 'IoT', 'Heart Rate Sensor'].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section ref={educationRef} className="mb-8 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap size={24} />
                  Education
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-200 rounded-r-lg p-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BSc Computer Science (Hons.) – Netcentric Computing</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">Universiti Teknologi MARA, Kampus Jasin • 2021 – 2025</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold">CGPA: 3.64</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-200 rounded-r-lg p-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Diploma in Computer Science</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">Universiti Teknologi MARA, Kampus Segamat • 2017 – 2020</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold">CGPA: 3.27</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
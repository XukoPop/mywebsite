import React, { useState } from 'react';
import { 
  Globe, Home, User, Phone, Clock, Music, Shield, Layout, 
  Mail, Instagram, Github, Star, ChevronDown, 
  ChevronUp, Code, Terminal, Brain, CheckCircle2, 
  ChartLineUp, Rocket, ChevronRight,
  // New imports for Services page
  Bot, MessageSquare, ClipboardList, CheckCircle, 
  HeartHandshake, Check
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageChanging, setIsPageChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  const pageOrder = ['home', 'portfolio', 'contact', 'timeline'];

  const handlePageChange = (newPage) => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = pageOrder.indexOf(newPage);
    setSlideDirection(newIndex > currentIndex ? 'left' : 'right');
    
    setIsPageChanging(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsPageChanging(false);
    }, 300);
  };

  const NavigationBar = () => (
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 flex items-center justify-center border-b border-blue-900">
      <div className="container max-w-6xl mx-auto flex items-center space-x-20">
        <span className="text-blue-400 font-bold text-xl hover:text-blue-300 transition-colors duration-300">Xuko</span>
        <div className="flex space-x-4">
          {[
            { name: 'Home', icon: <Home size={18} /> },
            { name: 'Portfolio', icon: <Layout size={18} /> },
            { name: 'Services', icon: <Code size={18} /> }, 
            { name: 'Contact', icon: <Phone size={18} /> },
            { name: 'Timeline', icon: <Clock size={18} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handlePageChange(item.name.toLowerCase())}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transform hover:scale-105 transition-all duration-300
                ${currentPage === item.name.toLowerCase() 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="max-w-4xl mx-auto p-8 fade-slide-in">
    <h1 className="text-4xl font-bold mb-6 text-blue-400 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent" style={{ lineHeight: '1.2' }}>
      Welcome to My Website
    </h1>

      
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
          hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Welcome. I'm Xuko, an 18-year-old developer with a strong interest in coding and technology. 
            I've been coding for five years now, working with multiple languages and always looking to build something new. 
            I'm passionate about creating projects, from websites to custom programs, and I really enjoy making Discord bots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
            hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Professional Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              In the past, I worked as a digital seller, creating custom commission programs for clients. 
              I've also explored cheat development, which gave me unique skills and experience in coding.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
            hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Beyond Coding</h2>
            <p className="text-gray-300 leading-relaxed">
              Outside of tech, I used to ride dirt bikes my favorites were a Yamaha TTR 125 and a YZ 250F. 
              These days, I'm focused on my coding skills and building even more projects.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900 shadow-xl 
          hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Current Focus</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Python', link: 'https://www.python.org/' },
              { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
              { name: 'Discord.js', link: 'https://discord.js.org/' },
              { name: 'Web Development', link: 'https://developer.mozilla.org/en-US/docs/Learn' },
              { name: 'Bot Development', link: 'https://discord.com/developers/docs' },
              { name: 'Custom Solutions', link: 'https://github.com' },
            ].map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-800 
                  hover:border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105
                  cursor-pointer"
              >
                {skill.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TimelinePage = () => {
    const [expandedYear, setExpandedYear] = useState(null);
  
    const timelineData = [
      {
        year: '2019',
        title: 'Started Programming Journey',
        skills: ['Python', 'Web Scraping', 'API Development', 'Discord.py'],
        description: 'Began my programming journey with Python, focusing on automation and bot development.',
        projects: [
          { 
            name: 'Discord Bot',
            description: 'Created my first Discord bot using Python',
            icon: <Code className="w-4 h-4" />
          },
          { 
            name: 'Web Scraping Tools',
            description: 'Developed various web scraping tools for data collection',
            icon: <Terminal className="w-4 h-4" />
          },
          { 
            name: 'API Projects',
            description: 'Built projects integrating with various APIs',
            icon: <Code className="w-4 h-4" />
          }
        ],
        achievements: ['Started Programming Journey', 'Built First Discord Bot', 'Learned API Integration']
      },
      {
        year: '2020',
        title: 'Web Development Focus',
        skills: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
        description: 'Expanded into web development, creating multiple personal websites.',
        projects: [
          { 
            name: 'Xuko.xyz Versions',
            description: 'Created three different versions of personal website',
            icon: <Globe className="w-4 h-4" />
          },
          { 
            name: 'Xz0v.xyz Versions',
            description: 'Developed two distinct versions of this domain',
            icon: <Globe className="w-4 h-4" />
          }
        ],
        achievements: [
          'Created Multiple Personal Websites',
          'Mastered Frontend Development',
          'Improved Web Design Skills'
        ]
      },
      {
        year: '2021',
        title: 'Learning & Development',
        skills: ['Advanced JavaScript', 'Backend Development', 'Database Management'],
        description: 'Focused on learning and enhancing development skills.',
        projects: [],
        achievements: [
          'Deepened Programming Knowledge',
          'Studied Advanced Technologies',
          'Built Strong Technical Foundation'
        ]
      },
      {
        year: '2022-24',
        title: 'Professional Development',
        skills: ['Full Stack Development', 'Discord.js', 'Data Analysis', 'Custom Solutions'],
        description: 'Started taking on client projects and commissions.',
        projects: [
          { 
            name: 'Custom Programs',
            description: 'Developed commissioned programs for clients',
            icon: <Code className="w-4 h-4" />
          },
          { 
            name: 'Discord Bots',
            description: 'Created custom Discord bots for communities',
            icon: <Terminal className="w-4 h-4" />
          },
          { 
            name: 'Client Websites',
            description: 'Built websites for various clients',
            icon: <Globe className="w-4 h-4" />
          },
          { 
            name: 'Data Analysis',
            description: 'Created tools for data processing and analysis',
            icon: <Code className="w-4 h-4" />
          }
        ],
        achievements: [
          'Completed Multiple Client Projects',
          'Built Professional Portfolio',
          'Mastered Full-Stack Development',
          'Expanded Technical Expertise'
        ]
      }
    ];
  
    return (
      <div className="max-w-4xl mx-auto p-8 fade-slide-in">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">My Coding Timeline</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Explore my development journey from my first Python script to professional client projects.
        </p>
        
        <div className="space-y-6">
          {timelineData.map((item) => (
            <div key={item.year} 
              className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-blue-900 
                hover:border-blue-600 transition-all duration-300">
              <button
                onClick={() => setExpandedYear(expandedYear === item.year ? null : item.year)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full w-4 h-4" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{item.year}</h3>
                      <p className="text-lg text-gray-300">{item.title}</p>
                    </div>
                  </div>
                  {expandedYear === item.year ? 
                    <ChevronUp className="text-blue-400" /> : 
                    <ChevronDown className="text-blue-400" />
                  }
                </div>
              </button>
              
              {expandedYear === item.year && (
                <div className="px-6 pb-6 space-y-6">
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-blue-400 font-medium">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} 
                          className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-800 
                            hover:border-blue-500 transition-all duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
  
                  {item.projects.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-blue-400 font-medium">Key Projects:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.projects.map((project) => (
                          <div
                            key={project.name}
                            className="bg-gray-800/50 rounded-lg p-4 border border-blue-900/50 
                              hover:border-blue-500/50 transition-all duration-300"
                          >
                            <div className="flex items-center space-x-2 mb-2">
                              {project.icon}
                              <span className="text-blue-400 font-medium">{project.name}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
  
                  <div className="space-y-3">
                    <h4 className="text-blue-400 font-medium">Achievements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PortfolioPage = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const handleProjectClick = (projectId) => {
      if (isAnimating) return;
      setIsAnimating(true);
      
      if (activeProject === projectId) {
        setActiveProject(null);
        setTimeout(() => setIsAnimating(false), 400);
      } else {
        setActiveProject(projectId);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };
  
    const projects = [
      {
        id: 'xukopop',
        title: 'Xukopop Discord Bot',
        shortDesc: 'A feature-rich Discord bot with 100+ commands including music, admin, and general features.',
        icon: <Music className="text-blue-400" size={24} />,
        features: [
          { icon: <Shield className="text-blue-400" size={16} />, text: 'Admin Commands' },
          { icon: <Music className="text-blue-400" size={16} />, text: 'Music Player' },
          { icon: <Code className="text-blue-400" size={16} />, text: 'Custom Features' }
        ],
        stats: [
          { label: 'Commands', value: '100+' },
          { label: 'Features', value: '25+' },
          { label: 'Users', value: '5000+' }
        ],
        tech: ['Discord.py', 'Js', 'SQL', 'YouTube API', 'Spotify API'],
        features_detailed: [
          'Advanced music player with queue management',
          'Server management and moderation tools',
          'Custom welcome messages and auto-roles',
          'Server statistics and analytics',
          'User leveling and experience system',
          'Custom command creation system',
          'Role management and permissions',
          'Server backup and restoration',
          'Playlist management and saving',
          'Auto-moderation features'
        ],
        caseStudy: {
          challenge: 'Discord servers needed a comprehensive bot that combines music, moderation, and community features while being reliable and easy to use.',
          solution: 'Developed a multi-functional Discord bot using Discord.js with a focus on stability and user experience. Implemented various APIs for music playback and created an intuitive command system.',
          outcome: 'Created a popular bot serving multiple servers with high uptime and positive user feedback. Regular feature updates based on community requests.'
        },
        links: [
          { 
            label: 'Visit Website',
            url: 'https://xuko.xyz/',
            icon: <Globe size={18} />
          }
        ],
        image: '/profile.png',
        highlights: [
          {
            title: 'Music Features',
            items: [
              'YouTube, Spotify, and SoundCloud support',
              'Queue management and playlist saving',
              'Volume control and audio filters',
              'Lyrics display and track information',
              'DJ role system and permissions'
            ]
          },
          {
            title: 'Moderation Tools',
            items: [
              'Advanced warning system',
              'Temporary and permanent bans',
              'Message purging and filtering',
              'Anti-spam protection',
              'Raid protection features'
            ]
          },
          {
            title: 'Community Features',
            items: [
              'Custom welcome messages',
              'Role management system',
              'Server statistics tracking',
              'User activity monitoring',
              'Custom commands creation'
            ]
          },
          {
            title: 'Technical Specs',
            items: [
              '99.9% uptime guarantee',
              'Fast response times',
              'Secure data handling',
              'Regular backups',
              'Constant monitoring'
            ]
          }
        ]
      },
      {
        id: 'videodownloader',
        title: 'Simple Video Downloader (defunct)',
        shortDesc: 'A personal web-based video downloader for easily saving videos from various websites.',
        icon: <Terminal className="text-blue-400" size={24} />,
        features: [
          { icon: <Globe className="text-blue-400" size={16} />, text: 'URL Input' },
          { icon: <Code className="text-blue-400" size={16} />, text: 'Quality Selection' }
        ],
        stats: [
          { label: 'Supported Sites', value: '50+' },
          { label: 'Formats', value: '2' },
          { label: 'Downloads', value: '10+' }
        ],
        tech: ['Python', 'Flask', 'yt-dlp', 'HTML/CSS'],
        features_detailed: [
          'Simple URL input field for video links',
          'Basic quality selection (High/Low)',
          'MP4 and MP3 format options',
          'Progress indicator during download',
          'Clean and minimal interface',
          'Local storage of downloads'
        ],
        caseStudy: {
          challenge: 'Needed a straightforward way to download videos without using sketchy websites or complex tools.',
          solution: 'Created a simple web interface with yt-dlp backend for reliable video downloading.',
          outcome: 'Built a personal tool that makes downloading videos quick and hassle-free.'
        }
      },
      {
        id: 'studymate',
        title: 'StudyMate Flashcards',
        shortDesc: 'Python-based flashcard and quiz application for efficient studying.',
        icon: <Code className="text-green-400" size={24} />,
        features: [
          { icon: <Terminal className="text-green-400" size={16} />, text: 'Multiple Quiz Modes' },
          { icon: <Code className="text-green-400" size={16} />, text: 'Progress Tracking' }
        ],
        stats: [
          { label: 'Flashcards', value: '40+' },
          { label: 'Success Rate', value: '95%' },
          { label: 'Study Hours', value: '40+' }
        ],
        tech: ['Python', 'Tkinter', 'SQLite'],
        caseStudy: {
          challenge: 'Needed an efficient way to study',
          solution: 'Developed a Python application combining flashcards with quiz functionality.',
          outcome: 'Successfully passed the test and created a reusable study tool.'
        }
      },
      {
        id: 'upcoming',
        title: 'More Projects Coming Soon',
        shortDesc: 'Stay tuned for more exciting projects in development!',
        icon: <Star className="text-purple-400" size={24} />,
        features: [],
        inDevelopment: true
      }
    ];
  
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold text-blue-400">My Projects</h2>
          <div className="flex items-center space-x-2 text-gray-400">
            <Code size={20} />
            <span>{projects.length - 1} Projects</span>
          </div>
        </div>
  
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="space-y-4 animate-fade-in-up" 
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div 
                onClick={() => !project.inDevelopment && handleProjectClick(project.id)}
                className={`bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl p-6 border relative
                  ${project.inDevelopment ? 'border-blue-900' : activeProject === project.id ? 'border-blue-400' : 'border-blue-900 hover:border-blue-600'}
                  transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
                  ${!project.inDevelopment && 'cursor-pointer'}
                  ${isAnimating ? 'pointer-events-none' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`transform transition-all duration-500 ${activeProject === project.id ? 'scale-110' : ''}`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-400 transition-colors duration-300">{project.title}</h3>
                  </div>
                  {!project.inDevelopment && (
                    <Code 
                      className={`text-blue-400 transform transition-all duration-500 ease-in-out
                        ${activeProject === project.id ? 'rotate-90 scale-110' : 'hover:scale-110'}`}
                    />
                  )}
                </div>
  
                <p className="text-gray-300 mb-4">{project.shortDesc}</p>
  
                {project.features && project.features.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center text-gray-300 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="transform transition-all duration-300 hover:scale-110">
                          {feature.icon}
                        </div>
                        <span className="ml-1">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                )}
  
                {project.links && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, idx) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 
                          text-white rounded-md hover:from-blue-700 hover:to-blue-900 
                          transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {link.icon}
                        <span className="ml-2">{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
  
                {project.image && (
                  <img 
                    src={process.env.PUBLIC_URL + project.image}
                    alt={project.title} 
                    className="absolute bottom-4 right-4 w-16 h-16 rounded-full border-2 border-blue-500 
                      transform hover:scale-110 transition-all duration-300 object-cover"
                  />
                )}
              </div>
  
              <div
                className={`transition-all duration-500 transform origin-top
                  ${activeProject === project.id ? 'scale-100 opacity-100' : 'scale-95 opacity-0 hidden'}
                `}
              >
                {activeProject === project.id && !project.inDevelopment && (
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl p-6 border border-blue-900
                    transition-all duration-500 animate-fade-in">
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.stats.map((stat, idx) => (
                          <div 
                            key={stat.label} 
                            className="bg-gray-800/50 rounded-lg p-4 text-center transform transition-all duration-500 hover:scale-105
                              animate-fade-in-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <div className="text-xl font-bold text-blue-400">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
  
                    {project.tech && (
                      <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-lg font-medium text-blue-400 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span 
                              key={tech} 
                              className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-900
                                transform transition-all duration-300 hover:scale-105 hover:border-blue-400
                                animate-fade-in-up"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
  
                    {project.features_detailed && (
                      <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <h4 className="text-lg font-medium text-blue-400 mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.features_detailed.map((feature, idx) => (
                            <div 
                              key={feature} 
                              className="flex items-center space-x-2 text-gray-300 transform transition-all duration-300
                                hover:translate-x-2 animate-fade-in-up"
                              style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                              <Code className="text-green-400 flex-shrink-0" size={16} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
  
                    {project.caseStudy && (
                      <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h4 className="text-lg font-medium text-blue-400">Case Study</h4>
                        <div className="space-y-3">
                          <div className="transform transition-all duration-300 hover:translate-x-2">
                            <h5 className="text-blue-300 font-medium mb-1">Challenge</h5>
                            <p className="text-gray-300">{project.caseStudy.challenge}</p>
                          </div>
                          <div className="transform transition-all duration-300 hover:translate-x-2">
                            <h5 className="text-blue-300 font-medium mb-1">Solution</h5>
                            <p className="text-gray-300">{project.caseStudy.solution}</p>
                          </div>
                          <div className="transform transition-all duration-300 hover:translate-x-2">
                            <h5 className="text-blue-300 font-medium mb-1">Outcome</h5>
                            <p className="text-gray-300">{project.caseStudy.outcome}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="max-w-4xl mx-auto p-8 fade-slide-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
      <div className="flex flex-wrap gap-3">
        {[
          { name: 'Discord', icon: <User size={18} />, link: 'https://discordapp.com/users/259068087972790273', color: 'hover:border-blue-500' },
          { name: 'Website', icon: <Globe size={18} />, link: '#', color: 'hover:border-cyan-500' },
          { name: 'Bot Website', icon: <Globe size={18} />, link: 'https://xuko.xyz/', color: 'hover:border-blue-400' },
          { name: 'Email', icon: <Mail size={18} />, link: 'mailto:sxmemoe@gmail.com', color: 'hover:border-red-500' },
          { name: 'Instagram', icon: <Instagram size={18} />, link: 'https://www.instagram.com/_.xz0v/', color: 'hover:border-purple-500' },
          { name: 'GitHub', icon: <Github size={18} />, link: 'https://github.com/XukoPop', color: 'hover:border-gray-400' },
        ].map((platform) => (
          <a
            key={platform.name}
            href={platform.link}
            className={`bg-gray-900 px-4 py-2 rounded-md border border-gray-700 
              ${platform.color} hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
              flex items-center space-x-2 text-gray-300 hover:text-white`}
          >
            {platform.icon}
            <span className="text-sm">{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );

  const pages = {
    home: <HomePage />,
    portfolio: <PortfolioPage />,
    services: <ServicesPage />,  // Add this line
    contact: <ContactPage />,
    timeline: <TimelinePage />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavigationBar />
      <main>
        <div className={`
          transition-all duration-300 transform
          ${isPageChanging 
            ? slideDirection === 'left'
              ? '-translate-x-full opacity-0'
              : 'translate-x-full opacity-0'
            : 'translate-x-0 opacity-100'
          }
        `}>
          {pages[currentPage]}
        </div>
      </main>
    </div>
  );
};


const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const services = [
    {
      id: 'discord-bots',
      title: 'Discord Bot Development',
      icon: <Bot className="text-blue-400" size={24} />,
      description: 'Custom Discord bots tailored to your servers needs with advanced features and functionality.',
      features: [
        'Custom commands and functionality',
        'Music and entertainment features',
        'Moderation and administration tools',
        'Server analytics and statistics',
        'Automated welcome messages',
        'Role management systems'
      ],
      plans: [
        {
          name: 'Basic Bot',
          price: '$20',
          features: [
            'Up to 20 custom commands',
            'Basic moderation features',
            'Welcome messages',
            'Role management',
            '2 week of support',
            'Basic documentation'
          ],
          highlight: false
        },
        {
          name: 'Advanced Bot',
          price: '$50',
          features: [
            'Up to 50 custom commands',
            'Advanced moderation tools',
            'Music player functionality',
            'Custom welcome system',
            'Auto-moderation features',
            'Analytics dashboard',
            '4 weeks of support',
            'Detailed documentation'
          ],
          highlight: true
        },
        {
          name: 'Premium Bot',
          price: 'Custom',
          features: [
            'Unlimited custom commands',
            'Full feature customization',
            'Advanced music system',
            'Custom dashboard',
            'Database integration',
            'Priority support',
            'Complete documentation'
          ],
          highlight: false
        }
      ]
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: <Globe className="text-green-400" size={24} />,
      description: 'Modern, responsive websites built with the latest technologies and best practices.',
      features: [
        'Responsive design for all devices',
        'Modern UI/UX implementation',
        'Performance optimization',
        'SEO-friendly structure',
        'Custom functionality',
        'Content management systems'
      ],
      plans: [
        {
          name: 'Landing Page',
          price: '$20',
          features: [
            'Single page design',
            'Mobile responsive',
            'Basic SEO setup',
            'Contact form',
            '3 content sections',
            '1 revision'
          ],
          highlight: false
        },
        {
          name: 'Business Site',
          price: '$150',
          features: [
            'Up to 5 pages',
            'Responsive design',
            'Advanced SEO',
            'Contact forms',
            'Social media integration',
            'Analytics setup',
            '3 revisions'
          ],
          highlight: true
        },
        {
          name: 'Custom Project',
          price: 'Custom',
          features: [
            'Custom functionality',
            'Database integration',
            'Admin dashboard',
            'API development',
            'Custom features',
            'Unlimited revisions'
          ],
          highlight: false
        }
      ]
    },
    {
      id: 'custom-commission',
      title: 'Custom Commissions',
      icon: <Star className="text-yellow-400" size={24} />,
      description: 'Have a unique project in mind? I\'m open to custom commissions and special requests. Let\'s discuss your ideas and make them reality.',
      features: [
        'Personalized solutions',
        'Flexible requirements',
        'Custom pricing',
        'Project feasibility assessment',
        'Detailed consultation',
        'Tailored development'
      ],
      plans: [
        {
          name: 'Project Assessment',
          price: 'Free',
          features: [
            'Initial consultation',
            'Project feasibility check',
            'Basic requirements gathering',
            'Time estimation',
            'Cost estimation',
            'Technology recommendations'
          ],
          highlight: false
        },
        {
          name: 'Custom Development',
          price: 'Custom',
          features: [
            'Detailed project planning',
            'Flexible development process',
            'Regular progress updates',
            'Custom feature implementation',
            'Testing and refinement',
            'Documentation provided',
            'Post-project support'
          ],
          highlight: true
        },
        {
          name: 'Maintenance',
          price: 'Varies',
          features: [
            'Ongoing support',
            'Regular updates',
            'Performance monitoring',
            'Bug fixes',
            'Feature additions',
            'Technical assistance'
          ],
          highlight: false
        }
      ]
    }
  ];

  const workProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discuss your needs, requirements, and project scope to ensure perfect alignment.',
      icon: <MessageSquare className="text-blue-400" size={24} />
    },
    {
      step: 2,
      title: 'Proposal & Planning',
      description: 'Detailed project proposal including timeline, features, and pricing options.',
      icon: <ClipboardList className="text-green-400" size={24} />
    },
    {
      step: 3,
      title: 'Development',
      description: 'Regular updates and progress reports as your project comes to life.',
      icon: <Code className="text-purple-400" size={24} />
    },
    {
      step: 4,
      title: 'Testing & Refinement',
      description: 'Thorough testing and refinements to ensure everything works perfectly.',
      icon: <CheckCircle className="text-yellow-400" size={24} />
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Smooth deployment and handover with complete documentation.',
      icon: <Rocket className="text-red-400" size={24} />
    },
    {
      step: 6,
      title: 'Support',
      description: 'Ongoing support and maintenance to keep everything running smoothly.',
      icon: <HeartHandshake className="text-pink-400" size={24} />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Services & Pricing</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Professional development services tailored to your needs. From Discord bots to web applications, 
          I deliver high-quality solutions with a focus on performance and user experience.
        </p>
      </div>

      {/* Services Section */}
      <div className="space-y-8 mb-16">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className={`bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-xl p-6 border
                cursor-pointer transition-all duration-500 transform hover:-translate-y-1
                ${activeService === service.id ? 'border-blue-400' : 'border-blue-900 hover:border-blue-600'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {service.icon}
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{service.title}</h3>
                    <p className="text-gray-300 mt-1">{service.description}</p>
                  </div>
                </div>
                <ChevronDown 
                  className={`text-blue-400 transform transition-transform duration-300
                    ${activeService === service.id ? 'rotate-180' : ''}`}
                />
              </div>

              {/* Features Preview */}
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
                {service.features.length > 3 && (
                  <span className="text-gray-400 text-sm flex items-center">
                    +{service.features.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Expanded Service Details */}
            <div
              className={`transition-all duration-500 transform origin-top
                ${activeService === service.id ? 'scale-100 opacity-100 mt-4' : 'scale-95 opacity-0 hidden'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border
                      transform transition-all duration-300 hover:-translate-y-2
                      ${plan.highlight ? 'border-blue-400 scale-105' : 'border-blue-900'}`}
                  >
                    <h4 className="text-lg font-semibold text-blue-400">{plan.name}</h4>
                    <p className="text-gray-400 mt-2">{plan.price}</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center space-x-2">
                          <Check className="text-blue-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                    className={`mt-6 px-4 py-2 rounded-lg font-semibold text-blue-400 border
                      transition-all duration-300 ${selectedPlan === plan.name ? 'border-blue-400 bg-blue-400/10' : 'border-blue-900 hover:border-blue-400 hover:bg-blue-400/10'}`}
                    onClick={() => window.location.href = 'mailto:sxmemoe@gmail.com?subject=Plan%20Inquiry&body=I%20am%20interested%20in%20the%20'+ encodeURIComponent(plan.name) +' plan.'}
                  >
                    {selectedPlan === plan.name ? 'Selected' : 'Choose Plan'}
                  </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Work Process Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">My Work Process</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A clear and structured approach to ensure successful project delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workProcess.map((process, processIndex) => (
          <div
            key={process.step}
            className="animate-fade-in-up"
            style={{ animationDelay: `${processIndex * 0.1}s` }}
          >
            <div className="flex flex-col items-center space-y-2">
              {process.icon}
              <h4 className="text-lg font-semibold text-blue-400">{process.title}</h4>
              <p className="text-gray-300 text-center">{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
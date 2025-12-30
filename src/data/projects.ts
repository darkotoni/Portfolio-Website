export const projects = [
  {
    id: 1,
    title: "Naval Doctrine Compliance System (i4NS LENS)",
    description: "Scoped and designed RAG-powered system to analyze naval mission logs against doctrine policies, surfacing compliance gaps and actionable recommendations for U.S. Navy operations.",
    longDescription: "As Product Owner for this Department of Defense innovation project, I led product discovery through 40+ customer interviews with naval officers to scope and design an intelligent system that analyzes mission logs against naval doctrine. Applied Lean Startup and Agile methodologies to build an MVP that operates in offline, air-gapped environments for secure naval deployment.",
    image: "/images/projects/naval-doctrine.png",
    technologies: ["Python", "FastAPI", "LangGraph", "React", "FAISS", "Docker", "Ollama"],
    features: [
      "40+ customer discovery interviews with naval stakeholders",
      "Product requirements definition for air-gapped deployment",
      "RAG pipeline architecture with local LLM integration",
      "Mission log upload and automated compliance analysis",
      "Side-by-side doctrine vs. performance comparison dashboard",
      "Offline-capable design for secure naval vessel deployment"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/21phuctran/i4NS_LENS",
    category: "National Security",
    status: "Completed",
    teamSize: "Cross-functional team",
    highlights: [
      "Conducted 40+ customer interviews to validate product assumptions",
      "Designed for offline deployment in air-gapped naval environments",
      "Led product roadmap from discovery to MVP delivery",
      "Applied Lean Startup principles with weekly sprint cycles",
      "Built RAG-powered system for automated doctrine compliance analysis",
      "Collaborated on FastAPI + React architecture implementation"
    ]
  },
  {
    id: 2,
    title: "Powell's Bowells - Restaurant Card Selector",
    description: "Led cross-functional team of 11 developers through full software development lifecycle using Agile methodologies to solve decision fatigue in restaurant selection.",
    longDescription: "As Product Owner for this CSE 110 capstone project, I led an 11-person cross-functional team through complete product development from ideation to deployment. Applied Agile/Scrum methodologies with sprint planning, daily standups, and retrospectives to deliver a user-centered solution for restaurant decision fatigue.",
    image: "/images/projects/restaurantselector.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Agile", "Figma", "Miro"],
    features: [
      "Product roadmap and feature prioritization",
      "Cross-functional team leadership and sprint planning",
      "User research and iterative design process",
      "CI/CD pipeline and development standards (JSDoc, ADRs)",
      "Stakeholder communication and project delivery"
    ],
    liveUrl: "https://darkotoni.github.io/Restaurant-Card-Selector-app/",
    githubUrl: "https://github.com/darkotoni/Restaurant-Card-Selector-app",
    category: "Product Management",
    status: "Completed",
    teamSize: "11 developers",
    highlights: [
      "Led cross-functional team through complete product lifecycle",
      "Established development standards and CI/CD pipeline",
      "Applied Agile methodologies with sprint planning and standups",
      "Created wireframes and prototypes using Miro and Figma",
      "Successfully delivered product on time and within scope"
    ]
  },
  {
    id: 3,
    title: "Spotify Mini Overlay - UX Product Solution",
    description: "Identified user pain point with Spotify's interface limitations and developed a desktop solution that balances functionality with minimal screen real estate.",
    longDescription: "Conducted user research to identify the gap between Spotify's too-small mini player and space-consuming full application. Applied product thinking to design and develop a customizable desktop overlay that provides the optimal middle ground, demonstrating user-centered design principles and technical execution.",
    image: "/images/projects/minispotifyoverlay.png",
    technologies: ["JavaScript", "Electron", "Spotify API", "User Research", "UX Design"],
    features: [
      "User research and problem identification",
      "Product requirement definition and scope",
      "Cross-platform desktop application architecture",
      "API integration and authentication flow design",
      "User interface optimization for minimal footprint"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/darkotoni/SpotifyMiniOverlay",
    category: "Product Development",
    status: "Completed",
    teamSize: "Solo project",
    highlights: [
      "Identified and solved real user pain point through research",
      "Designed optimal user experience balancing features and simplicity",
      "Implemented secure API integration with privacy-first approach",
      "Created scalable cross-platform solution architecture"
    ]
  },
  {
    id: 4,
    title: "F1 Quantitative Trading Strategy",
    description: "Led quantitative analysis for UCSD investment competition, applying ARIMA and GARCH models to F1 sponsor performance data for data-driven investment recommendations.",
    longDescription: "As Quantitative Analyst at UCSD's Sustainable Investment Group, I led the quantitative section for a stock pitch competition. Applied advanced statistical models including ARIMA, GARCH, and Rolling Sharpe to analyze correlations between Formula 1 team performance and sponsor company stock performance, delivering data-driven investment recommendations to stakeholders.",
    image: "/images/projects/mclaren_google_partnership_analysis.png",
    technologies: ["Python", "ARIMA", "GARCH", "Pandas", "Yahoo Finance API", "Statistical Modeling"],
    features: [
      "Quantitative model development and backtesting",
      "Cross-domain data integration (sports + financial markets)",
      "Statistical modeling with ARIMA and GARCH frameworks",
      "Investment recommendation framework and presentation",
      "Performance metrics and risk assessment analysis"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/darkotoni/F1-Quant-project",
    category: "Quantitative Analysis",
    status: "Completed",
    teamSize: "Led quantitative section",
    highlights: [
      "Led quantitative analysis for competitive investment pitch",
      "Applied advanced statistical models (ARIMA, GARCH, Rolling Sharpe)",
      "Developed comprehensive data pipeline using Yahoo Finance API",
      "Delivered data-driven investment recommendations to stakeholders",
      "Demonstrated cross-domain analytical thinking (sports + finance)"
    ]
  },
  {
    id: 5,
    title: "Text-to-Voice MP3 Converter",
    description: "A Python utility that converts text input into speech and downloads it as an MP3 file for easy audio content creation.",
    longDescription: "A practical Python application that demonstrates text-to-speech technology by converting user input text into speech and automatically downloading it as an MP3 file.",
    image: "/images/projects/text-to-voice-placeholder.svg",
    technologies: ["Python", "Text-to-Speech", "Audio Processing"],
    features: [
      "Text input to speech conversion",
      "Automatic MP3 file generation and download",
      "Simple command-line interface",
      "Customizable voice settings"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/darkotoni/Text-to-Voice-download-mp3",
    category: "Utility Tool",
    status: "Completed",
    teamSize: "Solo project",
    highlights: [
      "Practical application of text-to-speech technology",
      "Simple and efficient user interface",
      "Demonstrates Python audio processing capabilities",
      "Useful tool for content creators"
    ]
  }
]

export const projectCategories = [
  "All",
  "National Security",
  "Product Management",
  "Product Development",
  "Quantitative Analysis",
  "Utility Tool"
]
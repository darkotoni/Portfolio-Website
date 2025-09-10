export const projects = [
  {
    id: 1,
    title: "Powell's Bowells - Restaurant Card Selector",
    description: "A collaborative web application that helps users make dining decisions by creating restaurant card decks and providing random recommendations.",
    longDescription: "Decision fatigue when choosing restaurants? This collaborative web app lets users create restaurant card decks and get random recommendations, making dining decisions effortless. Developed as part of CSE 110 with an 11-person team.",
    image: "/images/projects/restaurant-selector.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    features: [
      "Create and manage custom restaurant decks",
      "Smart random restaurant recommendation engine",
      "Clean, intuitive user interface",
      "Responsive web design"
    ],
    liveUrl: "https://darkotoni.github.io/Restaurant-Card-Selector-app/",
    githubUrl: "https://github.com/darkotoni/Restaurant-Card-Selector-app",
    category: "Web Development",
    status: "Completed",
    teamSize: "11 developers",
    highlights: [
      "Led collaborative development with 11-person team",
      "Implemented modular code architecture with testing suite",
      "Created comprehensive project documentation",
      "Designed user-centered experience with Figma prototypes"
    ]
  },
  {
    id: 2,
    title: "Spotify Mini Overlay",
    description: "A desktop overlay application that provides the perfect middle ground between Spotify's tiny mini player and full application.",
    longDescription: "Spotify's native mini player is too small, but the full app takes up too much screen space. This desktop overlay provides the perfect middle ground with an expandable interface and full playback controls.",
    image: "/images/projects/spotify-overlay.png",
    technologies: ["JavaScript", "HTML", "Electron", "Spotify API"],
    features: [
      "Always-on-top overlay that works with any application",
      "Expandable/collapsible interface design",
      "Full playback controls with volume management",
      "Real-time track progress and album art display",
      "Secure OAuth2 Spotify account authentication"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/darkotoni/SpotifyMiniOverlay",
    category: "Desktop Application",
    status: "Completed",
    teamSize: "Solo project",
    highlights: [
      "Built cross-platform desktop application",
      "Implemented secure OAuth2 Spotify API integration",
      "Created privacy-focused architecture (no credential storage)",
      "Solved real UX problem with elegant, minimal design"
    ]
  },
  {
    id: 3,
    title: "F1 Quantitative Analysis",
    description: "A Python-based data analysis project exploring correlations between Formula 1 team performance and sponsor company stock performance.",
    longDescription: "Analyzing the correlation between Formula 1 team performance and sponsor company stock performance to identify investment opportunities and market trends using advanced statistical methods and data visualization.",
    image: "/images/projects/f1-analysis.png",
    technologies: ["Python", "Pandas", "Matplotlib", "NumPy", "Data Analysis"],
    features: [
      "Comprehensive CSV datasets for F1 teams and stock prices",
      "Performance correlation analysis across multiple seasons",
      "Team-specific analysis modules (Ferrari, McLaren, Red Bull, Oracle)",
      "Automated visualization generation",
      "Statistical correlation models"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/darkotoni/F1-Quant-project",
    category: "Data Science",
    status: "Completed",
    teamSize: "Solo project",
    highlights: [
      "Integrated multi-domain data sources (sports + financial)",
      "Developed modular analysis framework for different teams",
      "Created advanced statistical correlation models",
      "Generated actionable insights from complex datasets"
    ]
  },
  {
    id: 4,
    title: "Text-to-Voice MP3 Converter",
    description: "A Python utility that converts text input into speech and downloads it as an MP3 file for easy audio content creation.",
    longDescription: "A practical Python application that demonstrates text-to-speech technology by converting user input text into speech and automatically downloading it as an MP3 file.",
    image: "/images/projects/text-to-voice.png",
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
  "Web Development",
  "Desktop Application", 
  "Data Science",
  "Utility Tool"
]
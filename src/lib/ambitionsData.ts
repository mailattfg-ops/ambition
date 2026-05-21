export interface AttireVariation {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  badge: string;
}

export interface CareerRole {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  gradientColors: {
    from: string;
    to: string;
  };
  attireVariations: AttireVariation[];
}

export interface Category {
  id: string;
  title: string;
  titleSingleLine: string;
  image: string;
  gradient: string;
  borderColor: string;
  activeBorderColor: string;
  roleIds: string[]; // references to career roles
}

export const CAREER_ROLES: Record<string, CareerRole> = {
  engineer: {
    id: "engineer",
    title: "Engineer",
    subtitle: "High performance coach",
    imageSrc: "/assets/images/new/engineer.jpg",
    gradientColors: {
      from: "rgba(69, 139, 188, 0)",
      to: "#458BBC"
    },
    attireVariations: [
      {
        id: "eng_civil",
        name: "Civil Construction",
        description: "Equipped with safety vest, white hardhat, and high-fidelity blueprints for large-scale infrastructure.",
        imageSrc: "/assets/images/new/engineer.jpg",
        badge: "Field Work"
      },
      {
        id: "eng_hitech",
        name: "Hi-Tech Cleanroom",
        description: "Specialized cleanroom suit for micro-fabrication, silicon wafer testing, and semiconductor engineering.",
        imageSrc: "/assets/images/new/engineer.jpg",
        badge: "Nano Lab"
      },
      {
        id: "eng_aerospace",
        name: "Aerospace Propulsion",
        description: "Flight-deck operations uniform with noise-canceling headsets, model turbines, and control rigs.",
        imageSrc: "/assets/images/new/engineer.jpg",
        badge: "Aviation"
      },
      {
        id: "eng_robotics",
        name: "Robotics AI Specialist",
        description: "Futuristic casual wear with custom VR developer headset, digital smart watch, and robotic limb controller.",
        imageSrc: "/assets/images/new/engineer.jpg",
        badge: "Futuristic"
      }
    ]
  },
  astronaut: {
    id: "astronaut",
    title: "Astronaut",
    subtitle: "High performance coach",
    imageSrc: "/assets/images/new/astronaut.jpg",
    gradientColors: {
      from: "rgba(18, 24, 38, 0)",
      to: "#121826"
    },
    attireVariations: [
      {
        id: "ast_launch",
        name: "NASA Launch Suit",
        description: "Iconic international pumpkin-orange launch and entry suit with life support connections and mission badges.",
        imageSrc: "/assets/images/new/astronaut.jpg",
        badge: "Launch Kit"
      },
      {
        id: "ast_eva",
        name: "Deep Space EVA",
        description: "Heavy white Extravehicular Activity spacesuit featuring gold-coated solar visor and life support backpack.",
        imageSrc: "/assets/images/new/astronaut.jpg",
        badge: "Spacewalk"
      },
      {
        id: "ast_spacex",
        name: "Sleek Starfighter",
        description: "Ultra-modern black-and-white custom fitted pressure suit designed for futuristic capsule travel.",
        imageSrc: "/assets/images/new/astronaut.jpg",
        badge: "Modern Flight"
      },
      {
        id: "ast_commander",
        name: "Mission Commander",
        description: "Deep navy duty flight jacket overlayed with orbital flight badges, communication gear, and patches.",
        imageSrc: "/assets/images/new/astronaut.jpg",
        badge: "Command"
      }
    ]
  },
  archeologist: {
    id: "archeologist",
    title: "Archeologist",
    subtitle: "High performance coach",
    imageSrc: "/assets/images/new/archeologist.jpg",
    gradientColors: {
      from: "rgba(93, 89, 79, 0)",
      to: "#5D594F"
    },
    attireVariations: [
      {
        id: "arc_safari",
        name: "Desert Field Safari",
        description: "Breathable sand-khaki field shirt, cargo utility gear, and standard wide-brimmed explorer hat.",
        imageSrc: "/assets/images/new/archeologist.jpg",
        badge: "Expedition"
      },
      {
        id: "arc_tomb",
        name: "Ancient Tomb Explorer",
        description: "Weathered leather explorer jacket, vintage satchel utility belts, and high-beam exploration headlamp.",
        imageSrc: "/assets/images/new/archeologist.jpg",
        badge: "Deep Caves"
      },
      {
        id: "arc_curator",
        name: "Museum Curator",
        description: "Sophisticated tweed blazer with elbow patches, reading spectacles, and precision magnifying loupe.",
        imageSrc: "/assets/images/new/archeologist.jpg",
        badge: "Academic"
      },
      {
        id: "arc_digital",
        name: "Digital Archival Tech",
        description: "Minimalist technical turtleneck holding active 3D laser scanners and archaeological mapping tablet.",
        imageSrc: "/assets/images/new/archeologist.jpg",
        badge: "3D Scanning"
      }
    ]
  },
  lawyer: {
    id: "lawyer",
    title: "Lawyer",
    subtitle: "High performance coach",
    imageSrc: "/assets/images/new/lawyer.jpg",
    gradientColors: {
      from: "rgba(45, 50, 56, 0)",
      to: "#2D3238"
    },
    attireVariations: [
      {
        id: "law_court",
        name: "Supreme Court Gown",
        description: "Formal, premium pleated advocate robe styled with legal white collar bands and tailored waistcoat.",
        imageSrc: "/assets/images/new/lawyer.jpg",
        badge: "Litigation"
      },
      {
        id: "law_corp",
        name: "Corporate Counsel Suit",
        description: "Sharp double-breasted navy blue business suit paired with a silk tie and custom leather document folder.",
        imageSrc: "/assets/images/new/lawyer.jpg",
        badge: "Corporate"
      },
      {
        id: "law_prep",
        name: "Harvard Law Prep",
        description: "Ivy league styled knit sweater vest with crimson highlights, button-down collar, and vintage briefcase.",
        imageSrc: "/assets/images/new/lawyer.jpg",
        badge: "Ivy Academy"
      },
      {
        id: "law_modern",
        name: "Modern Juris Counsel",
        description: "Sleek, high-collared minimalist black tunic adorned with a symbolic silver scales-of-justice pin.",
        imageSrc: "/assets/images/new/lawyer.jpg",
        badge: "Advocacy"
      }
    ]
  },
  cricketer: {
    id: "cricketer",
    title: "Cricketer",
    subtitle: "High performance coach",
    imageSrc: "/assets/images/new/cricketer.jpg",
    gradientColors: {
      from: "rgba(160, 106, 55, 0)",
      to: "#A06A37"
    },
    attireVariations: [
      {
        id: "cri_whites",
        name: "Test Match Whites",
        description: "Traditional cream white cricket flannel kit complete with premium white pads and leather cricket ball.",
        imageSrc: "/assets/images/new/cricketer.jpg",
        badge: "Test Match"
      },
      {
        id: "cri_t20",
        name: "IPL T20 Colors",
        description: "Vibrant custom-designed team jersey in athletic cuts, dynamic protective gloves, and a white match ball.",
        imageSrc: "/assets/images/new/cricketer.jpg",
        badge: "T20 Colors"
      },
      {
        id: "cri_nets",
        name: "Training & Net Practice",
        description: "Breathable dry-fit lightweight training tee, moisture-wicking joggers, and classic batting gloves.",
        imageSrc: "/assets/images/new/cricketer.jpg",
        badge: "Training"
      },
      {
        id: "cri_blazer",
        name: "Captain's Blazer",
        description: "Elegant, tailored deep navy team blazer embroidered with a golden crest, worn over cricket flannels.",
        imageSrc: "/assets/images/new/cricketer.jpg",
        badge: "Honours"
      }
    ]
  }
};

export const CATEGORIES: Category[] = [
  {
    id: "science_medical",
    title: "Science &\nMedical",
    titleSingleLine: "Science & Medical",
    image: "/assets/images/new/science_and_medical.png",
    gradient: "from-[#FFF2F5] to-[#FFEAEF]",
    borderColor: "border-[#FFB8C6]",
    activeBorderColor: "border-[#FF3E6C]",
    roleIds: ["engineer", "astronaut", "archeologist", "lawyer", "cricketer"]
  },
  {
    id: "engineering_technology",
    title: "Engineering\n& Technology",
    titleSingleLine: "Engineering & Technology",
    image: "/assets/images/new/engineering_and_technology.png",
    gradient: "from-[#EAF4FF] to-[#D5E9FF]",
    borderColor: "border-[#B2D6FF]",
    activeBorderColor: "border-[#0070F3]",
    roleIds: ["engineer", "astronaut"]
  },
  {
    id: "education_research",
    title: "Education &\nResearch",
    titleSingleLine: "Education & Research",
    image: "/assets/images/new/education_and_research.png",
    gradient: "from-[#FFF7F0] to-[#FFEADA]",
    borderColor: "border-[#FFD2B2]",
    activeBorderColor: "border-[#F5A623]",
    roleIds: ["archeologist", "lawyer"]
  },
  {
    id: "government_public",
    title: "Government\n& Public Service",
    titleSingleLine: "Government & Public Service",
    image: "/assets/images/new/government_and_public_service.png",
    gradient: "from-[#FCFBE7] to-[#ECFBE7]",
    borderColor: "border-[#D6EFA0]",
    activeBorderColor: "border-[#70C000]",
    roleIds: ["lawyer"]
  },
  {
    id: "business_finance",
    title: "Business &\nFinance",
    titleSingleLine: "Business & Finance",
    image: "/assets/images/new/business_and_finance.png",
    gradient: "from-[#E9FAF1] to-[#D4F7E4]",
    borderColor: "border-[#A8ECD2]",
    activeBorderColor: "border-[#00C853]",
    roleIds: ["lawyer", "engineer"]
  },
  {
    id: "aviation_transport",
    title: "Aviation &\nTransport",
    titleSingleLine: "Aviation & Transport",
    image: "/assets/images/new/aviation_and_transport.png",
    gradient: "from-[#FFFDF0] to-[#FFF9D4]",
    borderColor: "border-[#FFE57F]",
    activeBorderColor: "border-[#FFAB00]",
    roleIds: ["astronaut", "engineer"]
  },
  {
    id: "sports_fitness",
    title: "Sports &\nFitness",
    titleSingleLine: "Sports & Fitness",
    image: "/assets/images/new/sports_and_fitness.png",
    gradient: "from-[#F0F6FC] to-[#E0EEFC]",
    borderColor: "border-[#B3D4FC]",
    activeBorderColor: "border-[#0062FF]",
    roleIds: ["cricketer"]
  },
  {
    id: "creative_media",
    title: "Creative &\nMedia",
    titleSingleLine: "Creative & Media",
    image: "/assets/images/new/creative_and_media.png",
    gradient: "from-[#F3F1FD] to-[#E6E0FD]",
    borderColor: "border-[#D1C4E9]",
    activeBorderColor: "border-[#673AB7]",
    roleIds: ["archeologist", "engineer"]
  },
  {
    id: "agriculture_environment",
    title: "Agriculture &\nEnvironment",
    titleSingleLine: "Agriculture & Environment",
    image: "/assets/images/new/agriculture_environment.png",
    gradient: "from-[#EBF7F2] to-[#DBF2E9]",
    borderColor: "border-[#B2DFDB]",
    activeBorderColor: "border-[#009688]",
    roleIds: ["archeologist"]
  },
  {
    id: "skilled_technical",
    title: "Skilled &\nTechnical Careers",
    titleSingleLine: "Skilled & Technical Careers",
    image: "/assets/images/new/skilled_technical_careers.png",
    gradient: "from-[#EBF6FC] to-[#DBEEFC]",
    borderColor: "border-[#B2EBF2]",
    activeBorderColor: "border-[#00BCD4]",
    roleIds: ["engineer"]
  },
  {
    id: "digital_modern",
    title: "Digital &\nModern Careers",
    titleSingleLine: "Digital & Modern Careers",
    image: "/assets/images/new/digital_modern_careers.png",
    gradient: "from-[#FFF5EE] to-[#FFE7D9]",
    borderColor: "border-[#FFCC80]",
    activeBorderColor: "border-[#FF9800]",
    roleIds: ["engineer", "lawyer"]
  },
  {
    id: "space_advanced",
    title: "Space &\nAdvanced Dreams",
    titleSingleLine: "Space & Advanced Dreams",
    image: "/assets/images/new/space_advanced_dreams.png",
    gradient: "from-[#FFF0F5] to-[#FFE1EC]",
    borderColor: "border-[#F8BBD0]",
    activeBorderColor: "border-[#E91E63]",
    roleIds: ["astronaut"]
  }
];

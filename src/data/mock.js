// Mock data for KEE-Tech Elevators

export const companyInfo = {
  name: "KEE-Tech Elevators",
  tagline: "Elevating Excellence Since 2015",
  description: "Premium elevator solutions for residential, commercial, and industrial spaces. We combine cutting-edge technology with exceptional craftsmanship.",
  founded: 2015,
  projectsCompleted: 500,
  happyClients: 350,
  yearsExperience: 10,
  teamMembers: 75
};

export const services = [
  {
    id: 1,
    title: "Elevator Installation",
    description: "Complete elevator installation services for new constructions. From planning to final testing, we handle every aspect with precision.",
    icon: "Building2",
    features: ["Custom Design", "Safety Compliance", "Modern Technology", "Warranty Included"]
  },
  {
    id: 2,
    title: "Maintenance & Repairs",
    description: "24/7 maintenance and emergency repair services to keep your elevators running smoothly and safely.",
    icon: "Wrench",
    features: ["24/7 Support", "Preventive Care", "Quick Response", "Certified Technicians"]
  },
  {
    id: 3,
    title: "Modernization",
    description: "Upgrade your existing elevators with the latest technology, improving efficiency, safety, and aesthetics.",
    icon: "RefreshCw",
    features: ["Energy Efficient", "Smart Controls", "Updated Design", "Code Compliance"]
  },
  {
    id: 4,
    title: "Consultation",
    description: "Expert consultation services for architects, builders, and property managers planning elevator systems.",
    icon: "MessageSquare",
    features: ["Site Analysis", "Cost Estimation", "Design Planning", "Regulatory Guidance"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Bidla Sons Tower",
    category: "Commercial",
    location: "DCM, Ajmer Road",
    elevators: 3,
    image: "/project-bidla-sons.png",
    description: "Modern commercial building with premium elevator installations"
  },
  {
    id: 2,
    title: "Mahanagar Times",
    category: "Commercial",
    location: "Lalkothi, Jaipur",
    elevators: 1,
    image: "/project-mahanagar-times.png",
    description: "Premium elevator installation for media house building"
  },
  {
    id: 3,
    title: "Manak Motors",
    category: "Commercial",
    location: "Transport Nagar, Jaipur",
    elevators: 1,
    image: "/project-manak-motors.png",
    description: "Modern elevator installation for automotive showroom"
  },
  {
    id: 4,
    title: "Kedia Panchwati",
    category: "Residential",
    location: "Gajsinghpura, Jaipur",
    elevators: 1,
    image: "/project-kedia-panchwati.png",
    description: "Residential complex with modern elevator installation"
  },
  {
    id: 5,
    title: "Vedanta Hospital",
    category: "Healthcare",
    location: "Tagore Nagar, Ajmer Road",
    elevators: 1,
    image: "/project-vedanta-hospital.jpg",
    description: "Premium elevator installation for healthcare facility"
  },
  {
    id: 6,
    title: "Chhabra's Restaurant",
    category: "Hospitality",
    location: "Nirman Nagar",
    elevators: 1,
    image: "/project-chhabras.png",
    description: "Premium restaurant with modern elevator installation"
  },
  {
    id: 7,
    title: "Bari: The Fusion",
    category: "Hospitality",
    location: "Gopalbari, Ajmer Road",
    elevators: 1,
    image: "/project-bari-fusion.jpg",
    description: "Boutique hospitality venue with premium elevator installation"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Property Manager",
    company: "Skyline Properties",
    content: "KEE-Tech Elevators transformed our building's vertical transportation. Their attention to detail and professional service exceeded our expectations.",
    rating: 5,
    avatar: "SM"
  },
  {
    id: 2,
    name: "James Chen",
    role: "Facilities Director",
    company: "Metro Healthcare",
    content: "The team's expertise in hospital elevator systems is unmatched. They understood our unique requirements and delivered flawlessly.",
    rating: 5,
    avatar: "JC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Architect",
    company: "Modern Design Studio",
    content: "Working with KEE-Tech Elevators on custom elevator designs has been a pleasure. They bring creative solutions to every project.",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Building Owner",
    company: "Thompson Realty",
    content: "Their maintenance program has kept our elevators running perfectly for years. Responsive, reliable, and professional.",
    rating: 5,
    avatar: "MT"
  }
];

export const serviceRequests = [
  {
    id: "SR-001",
    type: "Maintenance",
    status: "In Progress",
    date: "2025-08-10",
    description: "Annual maintenance checkup",
    building: "Tower A"
  },
  {
    id: "SR-002",
    type: "Repair",
    status: "Completed",
    date: "2025-08-05",
    description: "Door sensor replacement",
    building: "Main Office"
  },
  {
    id: "SR-003",
    type: "Inspection",
    status: "Scheduled",
    date: "2025-08-15",
    description: "Safety compliance inspection",
    building: "Tower B"
  }
];

export const chatMessages = [
  {
    id: 1,
    sender: "bot",
    message: "Hello! Welcome to KEE-Tech Elevators. How can I assist you today?",
    timestamp: new Date()
  }
];

export const faqData = [
  {
    question: "How often should elevators be serviced?",
    answer: "We recommend monthly maintenance checks for commercial elevators and quarterly checks for residential units to ensure optimal performance and safety."
  },
  {
    question: "What is the typical installation timeline?",
    answer: "Installation timelines vary based on project complexity. A standard residential elevator takes 4-6 weeks, while commercial installations can take 8-16 weeks."
  },
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes, we provide 24/7 emergency repair services. Our technicians are on call around the clock to address any urgent elevator issues."
  },
  {
    question: "What warranty do you offer?",
    answer: "We provide a comprehensive 1-year warranty on new installations and a 1-year warranty on repairs and replacement parts."
  }
];

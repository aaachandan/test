import { Service, PortfolioItem, Testimonial, TeamMember, BlogPost, Client, Industry, CareerPosition } from "./types";

export const services: Service[] = [
  { id: 1, title: "Business Website", description: "Professional corporate websites that establish credibility and drive conversions.", icon: "HiOutlineOfficeBuilding", features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Contact Forms", "Google Maps"], slug: "business-website" },
  { id: 2, title: "Restaurant Website", description: "Digital dining experiences with online menus, ordering, and reservation systems.", icon: "HiOutlineMenu", features: ["Online Menu", "WhatsApp Ordering", "Table Booking", "Gallery", "Location Map"], slug: "restaurant-website" },
  { id: 3, title: "Salon Website", description: "Stylish booking platforms with service catalogs, pricing & appointment systems.", icon: "HiOutlineScissors", features: ["Service Catalog", "Online Booking", "Price Calculator", "Staff Gallery", "Testimonials"], slug: "salon-website" },
  { id: 4, title: "NGO Website", description: "Impactful platforms for donations, volunteer management, and mission storytelling.", icon: "HiOutlineHeart", features: ["Donation System", "Volunteer Signup", "Storytelling", "Event Calendar", "Impact Reports"], slug: "ngo-website" },
  { id: 5, title: "Healthcare Website", description: "Trust-building medical portals with appointment booking & patient management.", icon: "HiOutlineMedicalCross", features: ["Appointment Booking", "Doctor Profiles", "Patient Portal", "Health Blogs", "Emergency Info"], slug: "healthcare-website" },
  { id: 6, title: "Portfolio Website", description: "Stunning personal brand showcases for creatives, professionals & agencies.", icon: "HiOutlinePhotograph", features: ["Project Gallery", "Client Showcase", "Testimonials", "Contact Form", "Resume/CV"], slug: "portfolio-website" },
  { id: 7, title: "E-Commerce Website", description: "Full-featured online stores with secure payments, inventory & order management.", icon: "HiOutlineShoppingCart", features: ["Product Catalog", "Payment Gateway", "Cart System", "Order Tracking", "Inventory Management"], slug: "ecommerce-website" },
  { id: 8, title: "Landing Page", description: "High-converting campaign pages designed to capture leads and drive action.", icon: "HiOutlineArrowTrendingUp", features: ["Lead Capture", "A/B Testing", "Analytics", "Fast Loading", "CTA Optimization"], slug: "landing-page" },
  { id: 9, title: "Graphic Design", description: "Logo design, social media creatives, brochures, banners & brand collateral.", icon: "HiOutlineColorSwatch", features: ["Logo Design", "Social Media Graphics", "Brochures", "Business Cards", "Brand Collateral"], slug: "graphic-design" },
  { id: 10, title: "Logo Design", description: "Unique brand identities with custom typography, color systems & mark creation.", icon: "HiOutlineCube", features: ["Brand Identity", "Typography", "Color System", "Vector Files", "Brand Guidelines"], slug: "logo-design" },
  { id: 11, title: "Domain & Hosting", description: "Reliable hosting solutions, domain registration & SSL certificate setup.", icon: "HiOutlineGlobe", features: ["Domain Registration", "SSL Setup", "Email Hosting", "Backup", "99.9% Uptime"], slug: "domain-hosting" },
  { id: 12, title: "Website Maintenance", description: "Ongoing updates, security patches, backups & performance monitoring.", icon: "HiOutlineWrench", features: ["Regular Updates", "Security Patches", "Daily Backups", "Performance Monitoring", "24/7 Support"], slug: "website-maintenance" },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Pizza Girls", category: "Restaurant", image: "/images/pizza-girls.png", description: "A vibrant restaurant website with online menu, WhatsApp ordering and gallery.", client: "Pizza Girls", link: "https://pizzagirls.netlify.app/" },
  { id: 2, title: "MCOM Sandwich Cafe", category: "Restaurant", image: "/images/mcom-sandwich.png", description: "Modern cafe website with interactive menu, online ordering and location map.", client: "MCOM Sandwich Cafe", link: "https://mcomsandwich.netlify.app/" },
  { id: 3, title: "Reunion Cafe", category: "Restaurant", image: "/images/reunion-cafe.png", description: "Elegant cafe website with ambiance gallery, menu and reservation system.", client: "Reunion Cafe", link: "https://reunioncafe.netlify.app/" },
  { id: 4, title: "Kailash Caterers", category: "Restaurant", image: "/images/kailash-caterers.png", description: "Professional catering service website with menu catalog and inquiry form.", client: "Kailash Caterers", link: "https://kailashcaterers.netlify.app/" },
  { id: 5, title: "Deep Beauty Salon", category: "Salon", image: "/images/deep-beauty.png", description: "Luxurious salon website with service catalog, booking system and price calculator.", client: "Deep Beauty Salon", link: "https://deepbeautysalon.netlify.app/" },
  { id: 6, title: "Maddy Unisex Salon", category: "Salon", image: "/images/maddy-salon.png", description: "Stylish unisex salon website with online booking and service showcase.", client: "Maddy Unisex Salon", link: "https://maddysalon.netlify.app/" },
  { id: 7, title: "GK Dental Clinic", category: "Healthcare", image: "/images/gk-dental.png", description: "Trust-building dental clinic website with appointment booking and doctor profiles.", client: "GK Dental Clinic", link: "https://gkdental.netlify.app/" },
  { id: 8, title: "RajPro Infra", category: "Business", image: "/images/rajpro.png", description: "Professional infrastructure company website showcasing projects and services.", client: "RajPro Infra", link: "https://rajpro.netlify.app/" },
  { id: 9, title: "Raipur NGO", category: "NGO", image: "/images/raipur-ngo.png", description: "Impactful NGO website with donation system and volunteer management.", client: "Raipur NGO", link: "https://raipurngo.netlify.app/" },
  { id: 10, title: "Ray Power", category: "Business", image: "/images/ray-power.png", description: "Corporate website for power solutions company with service showcase.", client: "Ray Power", link: "https://raypower.netlify.app/" },
  { id: 11, title: "V2 Finance", category: "Business", image: "/images/v2finance.png", description: "Financial advisory website with loan calculator and client portal.", client: "V2 Finance — Vikas Vaishnav", link: "https://v2finance.netlify.app/" },
  { id: 12, title: "Ray Studio", category: "Creative", image: "/images/ray-studio.png", description: "Photography portfolio with stunning gallery and client booking system.", client: "Ray Studio", link: "https://raystudio.netlify.app/" },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Sahu Girls", designation: "Owner", company: "Pizza Girls", content: "Ray Web Services built our restaurant website and it completely transformed our online orders. The menu system and WhatsApp ordering feature brought us so many new customers. Highly recommended!", image: "/images/client-logo.png", rating: 5 },
  { id: 2, name: "Mukul Sen", designation: "Owner", company: "Maddy Unisex Salon", content: "The salon website they created for us is absolutely stunning. Our clients love the online booking system and the interactive price calculator. Our business has grown significantly since the launch.", image: "/images/client-logo.png", rating: 5 },
  { id: 3, name: "Mohit Sinha", designation: "Director", company: "Raipur NGO", content: "Professional, creative, and delivered on time. Ray Web Services understood our NGO's mission perfectly and created a website that truly reflects our work. The donation system works seamlessly.", image: "/images/client-logo.png", rating: 5 },
  { id: 4, name: "Dr. Shruti Sinha", designation: "Founder", company: "GK Dental Clinic", content: "Our dental clinic website has brought us so many new patients. The appointment booking feature is super convenient and the SEO work has us ranking on the first page of Google. Fantastic team!", image: "/images/client-logo.png", rating: 5 },
  { id: 5, name: "Madhuri", designation: "Owner", company: "MCOM Sandwich Cafe", content: "The website for our sandwich cafe looks premium and works perfectly. Customers love the online menu and ordering directly through WhatsApp. Sales have increased by 40% since launch.", image: "/images/client-logo.png", rating: 5 },
  { id: 6, name: "Manoj Sagarvanshi", designation: "Director", company: "RajPro Infra", content: "Ray Web Services handled our complete branding and website redesign. The new site looks 10x better and loads incredibly fast. Our clients constantly compliment us on the professional look.", image: "/images/client-logo.png", rating: 5 },
  { id: 7, name: "Deepali Sahu", designation: "Owner", company: "Deep Beauty Salon", content: "As a beauty salon owner, I needed a website that reflects luxury. Ray Web Services delivered beyond expectations. The gallery, pricing, and academy sections are beautifully designed.", image: "/images/client-logo.png", rating: 5 },
  { id: 8, name: "Chandan", designation: "Founder", company: "Ray Studio", content: "They created a stunning photography portfolio website for our studio. The gallery layouts and client booking system are exactly what we needed. Truly professional work at an affordable price.", image: "/images/client-logo.png", rating: 5 },
];

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Chandan Ray", role: "Founder & Lead Developer", image: "/images/team-1.jpg", bio: "Visionary developer with expertise in web design, development and digital strategy.", socials: { linkedin: "#", twitter: "#" } },
  { id: 2, name: "Priya Sahu", role: "UI/UX Designer", image: "/images/team-2.jpg", bio: "Creative designer passionate about crafting beautiful user experiences.", socials: { linkedin: "#", instagram: "#" } },
  { id: 3, name: "Rohit Verma", role: "Full Stack Developer", image: "/images/team-3.jpg", bio: "Full-stack developer specializing in React, Next.js and modern web technologies.", socials: { linkedin: "#", twitter: "#" } },
  { id: 4, name: "Anita Sharma", role: "Graphic Designer", image: "/images/team-4.jpg", bio: "Award-winning designer creating stunning brand identities and visuals.", socials: { linkedin: "#", instagram: "#" } },
];

export const blogPosts: BlogPost[] = [
  { id: 1, title: "Why Every Restaurant Needs a Website in 2026", slug: "restaurant-website-importance", excerpt: "Discover how a professional website can transform your restaurant business with online ordering and digital presence.", content: "In today's digital age, having a website is no longer optional for restaurants...", image: "/images/blog-1.jpg", category: "Web Design", author: "Chandan Ray", date: "2026-01-15", tags: ["restaurant", "web design", "business"] },
  { id: 2, title: "The Complete Guide to Building a Salon Website", slug: "salon-website-guide", excerpt: "Learn how to create a stunning salon website that attracts clients and boosts bookings.", content: "A well-designed salon website is your most powerful marketing tool...", image: "/images/blog-2.jpg", category: "Web Development", author: "Rohit Verma", date: "2025-12-20", tags: ["salon", "web development", "booking"] },
  { id: 3, title: "Why Your Business Needs SEO in 2026", slug: "seo-importance-2026", excerpt: "Understanding SEO and why it's crucial for your business to be found online.", content: "Search Engine Optimization (SEO) is the backbone of digital visibility...", image: "/images/blog-3.jpg", category: "SEO", author: "Chandan Ray", date: "2025-11-10", tags: ["seo", "digital marketing", "business"] },
];

export const clients: Client[] = [
  { id: 1, name: "Pizza Girls", logo: "/images/clients/pizza-girls.png", industry: "Restaurant" },
  { id: 2, name: "MCOM Sandwich Cafe", logo: "/images/clients/mcom-sandwich.png", industry: "Restaurant" },
  { id: 3, name: "Deep Beauty Salon", logo: "/images/clients/deep-beauty.png", industry: "Salon" },
  { id: 4, name: "GK Dental Clinic", logo: "/images/clients/gk-dental.png", industry: "Healthcare" },
  { id: 5, name: "RajPro Infra", logo: "/images/clients/rajpro.png", industry: "Business" },
  { id: 6, name: "Raipur NGO", logo: "/images/clients/raipur-ngo.png", industry: "NGO" },
  { id: 7, name: "Ray Studio", logo: "/images/clients/ray-studio.png", industry: "Creative" },
  { id: 8, name: "Kailash Caterers", logo: "/images/clients/kailash-caterers.png", industry: "Restaurant" },
];

export const industries: Industry[] = [
  { id: 1, name: "Restaurant", icon: "HiOutlineMenu" },
  { id: 2, name: "Salon & Spa", icon: "HiOutlineScissors" },
  { id: 3, name: "Healthcare", icon: "HiOutlineHeart" },
  { id: 4, name: "NGO", icon: "HiOutlineGlobe" },
  { id: 5, name: "E-Commerce", icon: "HiOutlineShoppingCart" },
  { id: 6, name: "Education", icon: "HiOutlineAcademicCap" },
  { id: 7, name: "Real Estate", icon: "HiOutlineOfficeBuilding" },
  { id: 8, name: "Creative", icon: "HiOutlinePhotograph" },
];

export const careerPositions: CareerPosition[] = [
  { id: 1, title: "Frontend Developer", type: "Full-Time", location: "Raipur", description: "We're looking for a skilled frontend developer to build amazing web experiences.", requirements: ["2+ years experience", "React expertise", "Tailwind CSS", "Responsive design"] },
  { id: 2, title: "Graphic Designer", type: "Full-Time", location: "Raipur", description: "Join our creative team to design stunning visuals for diverse clients.", requirements: ["1+ years experience", "Adobe Creative Suite", "Figma proficiency", "Strong portfolio"] },
  { id: 3, title: "Digital Marketing Executive", type: "Part-Time", location: "Remote", description: "Help businesses grow their online presence with strategic marketing.", requirements: ["SEO/SEM knowledge", "Social media expertise", "Analytics skills", "Content writing"] },
];

export const stats = {
  projects: 100,
  clients: 50,
  industries: 12,
  satisfaction: 99,
};

export const pricingPlans = [
  { id: 1, name: "Starter Website", price: "9,999", description: "Perfect For Small Businesses", popular: false, features: ["Up to 5 Pages", "Mobile Responsive", "WhatsApp Integration", "Contact Form", "Google Map", "Social Media Integration", "Basic SEO", "SSL Setup", "1 Month Support"] },
  { id: 2, name: "Professional Website", price: "15,999", description: "Perfect For Growing Businesses", popular: true, features: ["Up to 10 Pages", "Premium UI/UX", "Advanced Animations", "WhatsApp Integration", "Inquiry Forms", "Gallery", "Blog Setup", "Speed Optimization", "Advanced SEO", "Google Business Integration", "3 Months Support"] },
  { id: 3, name: "Premium Business", price: "25,999", description: "Perfect For Brands & Organizations", popular: false, features: ["Unlimited Pages", "Fully Custom Design", "Premium Animations", "Dynamic Sections", "Portfolio System", "Advanced Forms", "Premium SEO Setup", "Performance Optimization", "Priority Support", "6 Months Support"] },
];

export const processSteps = [
  { id: 1, step: "01", title: "Requirement Discussion", description: "Understanding your vision & goals" },
  { id: 2, step: "02", title: "Research & Planning", description: "Strategy, sitemap & wireframes" },
  { id: 3, step: "03", title: "UI/UX Design", description: "Pixel-perfect interface design" },
  { id: 4, step: "04", title: "Development", description: "Clean code, responsive build" },
  { id: 5, step: "05", title: "Testing", description: "Cross-device quality assurance" },
  { id: 6, step: "06", title: "Launch & Support", description: "Deployment & ongoing care" },
];

export const faqs = [
  { q: "How much does a website cost?", a: "Our website packages start from ₹9,999 for a basic 5-page website and go up to ₹25,999+ for premium multi-page business websites with advanced features. The exact cost depends on your requirements, number of pages, and features needed." },
  { q: "How long does it take to build a website?", a: "A standard website typically takes 7-14 days from start to launch. Complex projects with advanced features, custom designs, or e-commerce functionality may take 2-4 weeks." },
  { q: "Do you provide hosting and domain services?", a: "Yes, we offer reliable hosting solutions and domain registration services. We help you choose the right hosting plan based on your website's needs." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we build is 100% mobile-responsive and follows a mobile-first design approach. Your website will look and function perfectly on all devices." },
  { q: "Do you provide SEO services?", a: "Yes, all our website packages include basic SEO optimization. Our advanced packages include comprehensive SEO setup including meta tags, schema markup, and speed optimization." },
  { q: "What kind of support do you offer after launch?", a: "We provide dedicated post-launch support ranging from 1-6 months depending on your package. This includes technical assistance, content updates, bug fixes, and performance monitoring." },
];

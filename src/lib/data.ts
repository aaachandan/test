import { Service, PortfolioItem, Testimonial, TeamMember, BlogPost, Client, Industry, CareerPosition } from "./types";

export const services: Service[] = [
  { id: 1, title: "Website Design", description: "Beautiful, responsive websites that captivate your audience and drive conversions.", icon: "HiOutlineDesktopComputer", features: ["UI/UX Design", "Responsive Layouts", "Wireframing", "Prototyping", "Landing Pages"], slug: "website-design" },
  { id: 2, title: "Web Development", description: "Robust, scalable web applications built with cutting-edge technologies.", icon: "HiOutlineCode", features: ["Frontend Dev", "Backend Dev", "CMS Integration", "E-commerce", "API Dev"], slug: "web-development" },
  { id: 3, title: "SEO", description: "Dominate search rankings with data-driven SEO strategies that deliver results.", icon: "HiOutlineChartBar", features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Analytics"], slug: "seo" },
  { id: 4, title: "Digital Marketing", description: "End-to-end digital marketing campaigns that maximize your ROI.", icon: "HiOutlineLightningBolt", features: ["Strategy", "Campaign Management", "PPC", "Content Marketing", "Analytics"], slug: "digital-marketing" },
  { id: 5, title: "Social Media Marketing", description: "Build brand loyalty and engagement across all social platforms.", icon: "HiOutlineShare", features: ["Content Creation", "Community Management", "Influencer Marketing", "Paid Social", "Analytics"], slug: "social-media-marketing" },
  { id: 6, title: "Branding", description: "Comprehensive branding solutions that make your brand unforgettable.", icon: "HiOutlineCube", features: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Identity"], slug: "branding" },
  { id: 7, title: "Graphic Design", description: "Stunning visual designs that communicate your brand's story effectively.", icon: "HiOutlineColorSwatch", features: ["Visual Identity", "Print Design", "Digital Graphics", "Illustration"], slug: "graphic-design" },
  { id: 8, title: "Google Ads", description: "Targeted Google Ads campaigns that drive quality traffic and conversions.", icon: "HiOutlineSearch", features: ["Keyword Strategy", "Ad Copy", "Campaign Optimization", "Remarketing"], slug: "google-ads" },
  { id: 9, title: "WhatsApp API", description: "Integrate WhatsApp Business API for automated customer communication.", icon: "HiOutlineChat", features: ["Chatbot Setup", "Automated Responses", "Broadcast", "Analytics"], slug: "whatsapp-api" },
  { id: 10, title: "Email Marketing", description: "Personalized email campaigns that nurture leads and drive sales.", icon: "HiOutlineMail", features: ["Campaign Design", "List Management", "Automation", "Analytics"], slug: "email-marketing" },
  { id: 11, title: "Software Development", description: "Custom software solutions tailored to your business needs.", icon: "HiOutlineTerminal", features: ["Custom Dev", "Cloud Solutions", "Database Design", "Integration"], slug: "software-development" },
  { id: 12, title: "Mobile App Development", description: "Feature-rich mobile apps for iOS and Android platforms.", icon: "HiOutlineDeviceMobile", features: ["iOS Dev", "Android Dev", "Cross-Platform", "App Design", "ASO"], slug: "mobile-app-development" },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Vasudev Hospital", category: "Healthcare", image: "/images/portfolio-1.jpg", description: "Complete digital transformation for a multi-specialty hospital.", client: "Vasudev Hospital" },
  { id: 2, title: "RBC Logistics", category: "Logistics", image: "/images/portfolio-2.jpg", description: "Custom logistics management platform with real-time tracking.", client: "RBC Logistics" },
  { id: 3, title: "Ganpati Enterprises", category: "E-commerce", image: "/images/portfolio-3.jpg", description: "Full-featured e-commerce website with payment integration.", client: "Ganpati Enterprises" },
  { id: 4, title: "Sanjeevani Hospital", category: "Healthcare", image: "/images/portfolio-4.jpg", description: "Patient management system with online appointment booking.", client: "Sanjeevani Hospital" },
  { id: 5, title: "Moneybugs Financial", category: "Finance", image: "/images/portfolio-5.jpg", description: "Financial advisory platform with client portal.", client: "Moneybugs Financial" },
  { id: 6, title: "SIS Group of Schools", category: "Education", image: "/images/portfolio-6.jpg", description: "School management system with parent-teacher communication.", client: "SIS Group of Schools" },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Dr. Lalit Shah", designation: "Director", company: "Jagjivan Urology Center", content: "Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.", image: "/images/client-logo.png", rating: 5 },
  { id: 2, name: "Dr. Nagendra Yadav", designation: "Director", company: "Lalmati MultiSpeciality Hospital", content: "Support & service is on time that's make us satisfied and we are using the complete IT support & service by the team.", image: "/images/client-logo.png", rating: 5 },
  { id: 3, name: "Dr. Romesh Sharma", designation: "Director", company: "Lifecare Hospital", content: "What impressed us most was their ability to provide strategic insights throughout the development process. They didn't just build a website; they helped us understand how to leverage it for maximum impact.", image: "/images/client-logo.png", rating: 5 },
  { id: 4, name: "Daisy Gill", designation: "Principal", company: "SIS Group of Schools", content: "We are very surprised to have a wonderful website according to our need for preschool. This company is the best IT company in Chhattisgarh.", image: "/images/client-logo.png", rating: 5 },
  { id: 5, name: "Dr. Avinash Bais", designation: "Founder", company: "Aviz Ayurveda", content: "The working on the website and graphic design is unique and also working with the software is very easy to use.", image: "/images/client-logo.png", rating: 5 },
  { id: 6, name: "Dr. Mukesh Kesharwani", designation: "Director", company: "Jagannath MultiSpeciality Hospital", content: "The Team took the time to understand our business and delivered a website that aligns perfectly with our brand identity.", image: "/images/client-logo.png", rating: 5 },
];

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Rajesh Nishar", role: "Founder & CEO", image: "/images/team-1.jpg", bio: "Visionary leader with 15+ years of experience in digital transformation.", socials: { linkedin: "#", twitter: "#" } },
  { id: 2, name: "Priya Sharma", role: "Head of Marketing", image: "/images/team-2.jpg", bio: "Digital marketing strategist with expertise in brand building.", socials: { linkedin: "#", twitter: "#" } },
  { id: 3, name: "Amit Verma", role: "Lead Developer", image: "/images/team-3.jpg", bio: "Full-stack developer passionate about building scalable web solutions.", socials: { linkedin: "#", twitter: "#" } },
  { id: 4, name: "Sneha Patel", role: "UI/UX Designer", image: "/images/team-4.jpg", bio: "Creative designer focused on user-centric design.", socials: { linkedin: "#", instagram: "#" } },
  { id: 5, name: "Vikram Singh", role: "SEO Specialist", image: "/images/team-5.jpg", bio: "Data-driven SEO expert helping businesses rank higher.", socials: { linkedin: "#", twitter: "#" } },
  { id: 6, name: "Ananya Gupta", role: "Social Media Manager", image: "/images/team-6.jpg", bio: "Social media strategist creating engaging content.", socials: { linkedin: "#", instagram: "#" } },
  { id: 7, name: "Rahul Kumar", role: "Software Developer", image: "/images/team-7.jpg", bio: "Backend specialist with expertise in cloud architecture.", socials: { linkedin: "#", twitter: "#" } },
  { id: 8, name: "Kavita Reddy", role: "Graphic Designer", image: "/images/team-8.jpg", bio: "Award-winning designer creating stunning visuals for brands.", socials: { linkedin: "#", instagram: "#" } },
  { id: 9, name: "Deepak Joshi", role: "Mobile App Developer", image: "/images/team-9.jpg", bio: "Cross-platform app developer with 20+ apps launched.", socials: { linkedin: "#", twitter: "#" } },
  { id: 10, name: "Neha Mishra", role: "Content Writer", image: "/images/team-10.jpg", bio: "Content strategist crafting compelling stories.", socials: { linkedin: "#", instagram: "#" } },
  { id: 11, name: "Arun Tiwari", role: "Business Analyst", image: "/images/team-11.jpg", bio: "Strategic analyst bridging business with technical solutions.", socials: { linkedin: "#", twitter: "#" } },
  { id: 12, name: "Meera Deshmukh", role: "HR Manager", image: "/images/team-12.jpg", bio: "People-focused HR professional building great workplace culture.", socials: { linkedin: "#" } },
];

export const blogPosts: BlogPost[] = [
  { id: 1, title: "What is Digital Marketing & why is it needed?", slug: "digital-marketing-guide", excerpt: "Learn how digital marketing can transform your business and why it's essential in today's digital age.", content: "Digital marketing encompasses all marketing efforts that use an electronic device or the internet...", image: "/images/blog-1.jpg", category: "Digital Marketing", author: "Rajesh Nishar", date: "2025-12-15", tags: ["digital marketing", "seo", "social media"] },
  { id: 2, title: "Why do we need an E-commerce Website?", slug: "ecommerce-website-importance", excerpt: "Discover why having an e-commerce website is crucial for businesses in today's competitive market.", content: "In today's digital age, having an e-commerce website is essential for businesses of all sizes...", image: "/images/blog-2.jpg", category: "Web Development", author: "Amit Verma", date: "2025-11-20", tags: ["ecommerce", "web development"] },
  { id: 3, title: "ERP Software for Healthcare in Chhattisgarh", slug: "erp-healthcare-chhattisgarh", excerpt: "How ERP software is revolutionizing healthcare management in Chhattisgarh.", content: "In Chhattisgarh, the healthcare sector is experiencing significant growth...", image: "/images/blog-3.jpg", category: "Software", author: "Rahul Kumar", date: "2025-10-10", tags: ["erp", "healthcare", "software"] },
  { id: 4, title: "The Power of Social Media Marketing for Local Businesses", slug: "social-media-local-business", excerpt: "How local businesses can leverage social media to build brand awareness.", content: "Social media has become an indispensable tool for local businesses...", image: "/images/blog-4.jpg", category: "Social Media", author: "Ananya Gupta", date: "2025-09-05", tags: ["social media", "marketing"] },
  { id: 5, title: "SEO Trends to Watch in 2026", slug: "seo-trends-2026", excerpt: "Stay ahead of the competition with these emerging SEO trends.", content: "The world of SEO is constantly evolving...", image: "/images/blog-5.jpg", category: "SEO", author: "Vikram Singh", date: "2025-08-20", tags: ["seo", "trends"] },
  { id: 6, title: "Mobile App Development: Native vs Cross-Platform", slug: "native-vs-cross-platform", excerpt: "A comprehensive comparison of native and cross-platform mobile app development.", content: "Choosing between native and cross-platform mobile app development...", image: "/images/blog-6.jpg", category: "Mobile", author: "Deepak Joshi", date: "2025-07-15", tags: ["mobile app", "development"] },
];

export const clients: Client[] = [
  { id: 1, name: "Vasudev Hospital", logo: "/images/clients/vasudev-logo.png", industry: "Healthcare" },
  { id: 2, name: "RBC Logistics", logo: "/images/clients/rbcl-logo.png", industry: "Logistics" },
  { id: 3, name: "Ganpati Enterprises", logo: "/images/clients/ganpati-logo.png", industry: "Manufacturing" },
  { id: 4, name: "Gawri Industries", logo: "/images/clients/gawri-logo.png", industry: "Manufacturing" },
  { id: 5, name: "MDMC Hospital", logo: "/images/clients/mdmc-logo.png", industry: "Healthcare" },
  { id: 6, name: "Sanjeevani Hospital", logo: "/images/clients/sanjeevani-logo.png", industry: "Healthcare" },
  { id: 7, name: "Moneybugs Financial", logo: "/images/clients/moneybugs-logo.jpg", industry: "Finance" },
  { id: 8, name: "SIS Group of Schools", logo: "/images/clients/sis-logo.png", industry: "Education" },
];

export const industries: Industry[] = [
  { id: 1, name: "Health & Medical", icon: "HiOutlineHeart" },
  { id: 2, name: "Banking", icon: "HiOutlineCurrencyRupee" },
  { id: 3, name: "Automobile", icon: "HiOutlineTruck" },
  { id: 4, name: "Hotel Industry", icon: "HiOutlineHome" },
  { id: 5, name: "School & College", icon: "HiOutlineAcademicCap" },
  { id: 6, name: "E-Commerce", icon: "HiOutlineShoppingCart" },
  { id: 7, name: "Logistics", icon: "HiOutlinePackage" },
  { id: 8, name: "Capital Markets", icon: "HiOutlineTrendingUp" },
];

export const careerPositions: CareerPosition[] = [
  { id: 1, title: "Senior Web Developer", type: "Full-Time", location: "Raipur", description: "Looking for an experienced web developer to build amazing web applications.", requirements: ["3+ years experience", "React/Next.js", "Node.js", "Database design"] },
  { id: 2, title: "Digital Marketing Executive", type: "Full-Time", location: "Raipur", description: "Seeking a creative digital marketing professional to manage marketing campaigns.", requirements: ["2+ years experience", "SEO/SEM", "Social media", "Analytics"] },
  { id: 3, title: "UI/UX Designer", type: "Full-Time", location: "Raipur", description: "Join our design team to create beautiful and intuitive user experiences.", requirements: ["2+ years", "Figma", "User research", "Portfolio"] },
  { id: 4, title: "Mobile App Developer", type: "Full-Time", location: "Raipur", description: "Build cross-platform mobile applications.", requirements: ["2+ years", "Flutter/RN", "API integration"] },
  { id: 5, title: "Content Writer", type: "Part-Time", location: "Remote", description: "Create engaging content for websites, blogs and social media.", requirements: ["Writing skills", "SEO knowledge", "Research"] },
  { id: 6, title: "Graphic Design Intern", type: "Internship", location: "Raipur", description: "Learn and grow as a graphic designer on real client projects.", requirements: ["Design fundamentals", "Adobe Creative Suite"] },
];

export const stats = { years: 8, projects: 500, clients: 350, teamMembers: 12 };

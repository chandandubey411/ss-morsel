// src/components/common/AIChatbot.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaChevronDown } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
// Note: In production, use environment variable VITE_GEMINI_API_KEY
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_API_KEY_HERE';
const genAI = new GoogleGenerativeAI(API_KEY);

const initialMessages = [
  {
    role: 'ai',
    text: "Hello! 👋 I'm the SS Morsel AI Assistant. I can help you with office dismantling, bare shelling, reinstatement, IT asset disposal, scrap purchasing, and all our services. How can I assist you today?",
  },
];

// ── SS MORSEL LOCAL KNOWLEDGE BASE ──
const localKB = [
  {
    keys: ['about', 'who are you', 'company', 'ss morsel', 'what is this', 'background', 'detail', 'info', 'profile', 'work', 'history'],
    answer: `🏢 **SS Morsel India Pvt. Ltd.** is India's leading office dismantling, bare-shelling, and scrap purchasing company.

* **Founded:** 2015
* **Experience:** 18+ years of hands-on industry experience
* **Director:** Mr. Sonu Kumar
* **Head Office:** 1st Floor, Old Bhagat Singh Complex, near Furniture Market, DLF City, Sikanderpur, DLF Phase 3, Sector 24, Gurugram, Haryana 122002
* **Certifications:** ISO 9001:2015 Quality Management Certified, MSTC Government Licensed for e-waste management

We are trusted by 200+ multinational corporations for professional office set-up removal, reinstatement, IT asset disposal, and scrap management, ensuring smooth handing over of premises. 🤝`,
  },
  {
    keys: ['leader', 'founder', 'director', 'ceo', 'sonu', 'kumar', 'who runs', 'owner', 'boss', 'management', 'head'],
    answer: `👤 SS Morsel India is led by **Mr. Sonu Kumar**, our visionary **Director & Founder**.

Mr. Sonu Kumar is the visionary founder and director of SS Morsel India Pvt. Ltd. With over **18 years of hands-on experience** in the office dismantling and bare-shelling industry, he has established the company as one of India's most trusted names in commercial space transformation.

Under his leadership, SS Morsel India has successfully completed **500+ projects** for Fortune 500 companies, multinational corporations, and leading Indian enterprises. His commitment to safety, quality, and environmental responsibility has earned the company **ISO 9001:2015 certification** and **MSTC government licensing**. 🏆`,
  },
  {
    keys: ['service', 'what do you do', 'what you do', 'facilities', 'features', 'help', 'offering', 'provide'],
    answer: `🛠️ **SS Morsel India** offers comprehensive commercial space & asset management services:

1. **Office Furniture Dismantling** — Professional dismantling of workstations, cabinets, conference tables & modular systems
2. **Office Reinstatement** — Restoring leased premises to original condition as per landlord requirements
3. **Bare Shelling** — Complete stripping of commercial spaces to raw concrete shell condition
4. **IT Asset Disposal (ITAD)** — Certified data destruction and compliant IT asset disposition
5. **Scrap Purchasing** — Best market rates for metal, electrical, and office equipment scrap
6. **E-Waste Management** — MSTC licensed, government-compliant e-waste disposal

Which service can I describe in more detail for you? ♻️`,
  },
  {
    keys: ['dismantling', 'dismantle', 'furniture', 'workstation', 'desk', 'chair', 'partition', 'office removal'],
    answer: `🪑 **Office Furniture Dismantling Services:**

Our expert team handles complete office furniture dismantling with care and precision:
* Modular Workstation Dismantling
* Conference Table & Executive Furniture Removal
* Filing Cabinet & Storage Unit Clearance
* Partition Wall Dismantling
* Full Office Set-Up Removal

We ensure no damage to property and smooth handing over of premises as per client instructions. A majority of our business comes through client references — a testament to our quality. 💼`,
  },
  {
    keys: ['reinstatement', 'restore', 'original condition', 'landlord', 'lease', 'fit-out removal', 'handover'],
    answer: `🔧 **Office Reinstatement Services:**

We provide comprehensive office reinstatement ensuring your leased space is restored to its original condition as per landlord requirements:
* Full Fit-Out Removal
* False Ceiling Removal
* Raised Floor Dismantling
* Wall Patching & Painting
* MEP (Mechanical, Electrical & Plumbing) Restoration
* Final Deep Cleaning

Our team ensures a seamless transition and complete compliance with landlord specifications. 🏢`,
  },
  {
    keys: ['bare shell', 'bare shelling', 'shelling', 'strip', 'commercial space', 'raw concrete', 'shell condition'],
    answer: `🏗️ **Bare Shelling Services:**

We completely strip commercial premises to the raw concrete shell:
* False Ceiling Demolition
* Raised Access Floor Removal
* Internal Partition Removal
* Electrical Fixture & HVAC Dismantling
* Plumbing Disconnection
* All internal fit-outs removed

We return the space to its original shell and core condition, systematically and safely. 🔨`,
  },
  {
    keys: ['it asset', 'itad', 'data destruction', 'laptop', 'computer', 'server', 'network', 'hardware', 'electronic disposal', 'asset disposal'],
    answer: `💻 **IT Asset Disposal (ITAD) Services:**

We provide certified ITAD services with full documentation:
* **Certified Data Destruction** — Military-grade data wiping or physical destruction
* **Asset Tracking & Documentation** — Full chain-of-custody records
* **Server & Network Decommissioning**
* **Laptop & Desktop Disposal**
* **Certificate of Destruction** issued for compliance
* **R2/RIOS Compliant** processes

Critical for corporate compliance, data security, and ESG reporting. 🔒`,
  },
  {
    keys: ['scrap', 'metal', 'sell', 'buy', 'iron', 'copper', 'aluminum', 'brass', 'electrical scrap', 'computer scrap', 'furniture scrap'],
    answer: `♻️ **Scrap Purchasing Services:**

We purchase all categories of scrap at competitive market rates:
* **Metal Scrap** — Copper, iron, aluminum, brass, stainless steel
* **Electrical Scrap** — Old equipment and fixtures
* **Furniture Scrap** — Metal frames and components from office furniture
* **Computer Hardware Scrap** — Old IT equipment
* **Market Rate Valuation** — Fair, transparent pricing
* **Same Day Payment** — Instant settlement

Get the best value for your scrap with proper documentation! 💰`,
  },
  {
    keys: ['e-waste', 'electronic waste', 'ewaste', 'mstc', 'government license', 'environment', 'recycling certificate'],
    answer: `🌱 **E-Waste Management Services:**

As a MSTC government licensed e-waste management company:
* **MSTC Licensed Disposal** — Fully authorized and compliant
* **Government Compliant Process** — All prescribed norms followed
* **E-Waste Certificates** issued for your records
* **Bulk E-Waste Collection** — For offices and corporates
* **Data-Safe Destruction** — Before disposal
* **Environmental Compliance** — Responsible recycling

Eco-friendly disposal with full legal compliance. 📋`,
  },
  {
    keys: ['contact', 'phone', 'mobile', 'email', 'support', 'address', 'office', 'headquarters', 'mail', 'write', 'location', 'map', 'reach'],
    answer: `📞 **Contact SS Morsel India:**

We're here to help!
* **Phone/WhatsApp:** +91 96506 28955
* **Email:** info@ssmorsel.com
* **Head Office:** 1st Floor, Old Bhagat Singh Complex, near Furniture Market, DLF City, Sikanderpur, DLF Phase 3, Sector 24, Gurugram, Haryana 122002
* **Working Hours:** Mon - Sat: 9:00 AM - 7:00 PM

For quick assistance, you can also click the **WhatsApp** button on the bottom-right of this page to chat directly with our team! 💬`,
  },
  {
    keys: ['quote', 'price', 'cost', 'fee', 'charge', 'rate', 'payment', 'how much', 'money', 'estimate', 'budget'],
    answer: `💰 **Pricing & Quotation:**

Our pricing is transparent and project-specific:
* **Free Site Inspection** — We assess the project before quoting
* **Custom Quotation** — Tailored to project scope and area size (sq ft)
* **No Hidden Charges** — Transparent cost breakdowns
* **Competitive Rates** — Best value in the market
* **Response Time** — Within 2 hours on business days

To get a quote, contact us at **+91 96506 28955** or fill out the form on our Contact page. We'll get back to you with a detailed proposal! 📊`,
  },
  {
    keys: ['project', 'portfolio', 'completed', 'experience', 'dlf', 'corporate', 'client', 'multinational', 'success'],
    answer: `🏆 **Our Project Portfolio & Track Record:**

* **500+ Projects** successfully completed
* **200+ Corporate Clients** — MNCs, Fortune 500 companies, Indian enterprises
* **DLF Workspace Projects** — DLF Cyber City, Cyber Hub, DLF SEZ, Gurugram
* **18+ Years** of industry experience
* **ISO 9001:2015 Certified** for Quality Management

A majority of our business comes through client references — reflecting our commitment to timely execution, high-quality standards, and safety. 🤝`,
  },
  {
    keys: ['certification', 'iso', 'mstc', 'license', 'compliance', 'standard', 'quality', 'certified'],
    answer: `🏅 **Certifications & Compliances:**

SS Morsel India holds the following certifications:
* **ISO 9001:2015** — Quality Management System Certification (achieved 2022)
* **MSTC Government License** — Authorized for e-waste and scrap management (since 2018)
* **Safety Compliance** — Rigorous HSE protocols and PPE compliance on all sites
* **Environmental Responsibility** — Eco-friendly disposal practices

These certifications ensure every project is executed to the highest standards of quality, safety, and regulatory compliance. ✅`,
  },
  {
    keys: ['process', 'step', 'how it works', 'flow', 'work', 'method', 'procedure', 'approach'],
    answer: `🔄 **Our 10-Step Project Process:**

1. **Scope Understanding** — Detailed site assessment
2. **Quotation Submission** — Comprehensive cost breakdown
3. **Costing Discussion** — Transparent negotiation
4. **Formal Approval** — Client sign-off on scope
5. **PO/Contract Signing** — Formal agreement + escalation matrix
6. **Execution Blueprint** — Work plan sign-off & mobilization
7. **Work Commencement** — Daily status updates (visuals & text)
8. **Physical Inspection & NOC** — On-site inspection & builder NOC
9. **Job Completion Certificate** — Client sign-off
10. **Final Handshaking** — Invoice, payment & project closure ✅`,
  },
  {
    keys: ['industry', 'sector', 'who do you serve', 'client type', 'banking', 'it company', 'manufacturing', 'real estate'],
    answer: `🏙️ **Industries We Serve:**

SS Morsel India caters to diverse sectors:
* 🏙️ **Multinational Corporations** — Precision and confidentiality
* 💻 **IT & Technology Companies** — Specialized IT asset disposal
* 🏦 **Banking Institutions** — Secure, compliant dismantling
* 📊 **Financial Services** — Data-safe office clearance
* 🏭 **Manufacturing Companies** — Industrial dismantling & scrap management
* 🏢 **Commercial Real Estate** — Bare shelling & reinstatement for developers

Trusted across all major commercial sectors in India! 🤝`,
  },
  {
    keys: ['milestone', 'history', 'journey', 'timeline', 'founded', '2015', 'growth'],
    answer: `📅 **Our Journey & Milestones:**

* **2015** — SS Morsel India Pvt. Ltd. established in Gurugram by Director Sonu Kumar, specializing in office furniture dismantling
* **2018** — Obtained MSTC Government License for authorized e-waste and scrap management
* **2020** — Successfully executed major projects in Gurgaon's DLF infrastructure (DLF Cyber City, Cyber Hub, DLF SEZ)
* **2022** — Achieved ISO 9001:2015 Quality Management System certification
* **2024** — Successfully completed 500+ office dismantling, bare shelling, and scrap projects across India 🚀`,
  },
];

// ── SS MORSEL LOCAL RESPONDER ──
const getLocalResponse = (userMessage) => {
  const lowerMsg = userMessage.toLowerCase().trim();

  // 1. GREETINGS
  if (
    lowerMsg === 'hi' ||
    lowerMsg === 'hello' ||
    lowerMsg === 'hey' ||
    lowerMsg === 'help' ||
    lowerMsg === 'greetings'
  ) {
    return `Hello! 👋 Welcome to **SS Morsel India Pvt. Ltd.**
    
I am your AI Assistant. How can I help you today? You can ask me about:
* 👤 Our Director (Mr. Sonu Kumar)
* 🛠️ Our Work & Services
* 🏢 Our Head Office Location
* 📞 How to Contact Us
* 💰 Getting a Free Quote`;
  }

  // 2. DIRECTOR / FOUNDER
  if (
    lowerMsg.includes('director') || 
    lowerMsg.includes('founder') || 
    lowerMsg.includes('ceo') || 
    lowerMsg.includes('sonu') || 
    lowerMsg.includes('owner') || 
    lowerMsg.includes('boss') ||
    lowerMsg.includes('who runs') ||
    lowerMsg.includes('who is in charge')
  ) {
    return `👤 **Mr. Sonu Kumar** is the Director & Founder of SS Morsel India Pvt. Ltd.

With over **18 years of hands-on experience** in the office dismantling and bare-shelling industry, he has established the company as one of India's most trusted names in commercial space transformation. Under his leadership, the company has completed **500+ projects** for MNCs and Fortune 500 companies. Mr. Sonu Kumar is committed to high safety standards, quality, and eco-friendly practices. 🏆`;
  }

  // 3. OFFICE / LOCATION / ADDRESS
  if (
    lowerMsg.includes('office') || 
    lowerMsg.includes('address') || 
    lowerMsg.includes('location') || 
    lowerMsg.includes('headquarters') || 
    lowerMsg.includes('where is') ||
    lowerMsg.includes('where are you') ||
    lowerMsg.includes('situated') ||
    lowerMsg.includes('located')
  ) {
    return `🏢 **SS Morsel India Head Office Address:**

1st Floor, Old Bhagat Singh Complex, 
near Furniture Market, DLF City, 
Sikanderpur, DLF Phase 3, Sector 24, 
Gurugram, Haryana - 122002, India.

📍 Feel free to visit us or contact us at **+91 96506 28955** to schedule a meeting or a free site inspection!`;
  }

  // 4. CONTACT / PHONE / WHATSAPP / EMAIL
  if (
    lowerMsg.includes('contact') || 
    lowerMsg.includes('phone') || 
    lowerMsg.includes('mobile') || 
    lowerMsg.includes('number') || 
    lowerMsg.includes('email') || 
    lowerMsg.includes('mail') || 
    lowerMsg.includes('whatsapp') ||
    lowerMsg.includes('call you') ||
    lowerMsg.includes('reach you')
  ) {
    return `📞 **Contact SS Morsel India:**

* **Phone/WhatsApp:** +91 96506 28955
* **Email:** info@ssmorsel.com
* **Head Office:** 1st Floor, Old Bhagat Singh Complex, near Furniture Market, DLF City, Sikanderpur, DLF Phase 3, Sector 24, Gurugram, Haryana 122002
* **Working Hours:** Mon - Sat: 9:00 AM - 7:00 PM

💬 You can also click the **WhatsApp** icon on the bottom-right of this page to chat directly with our team!`;
  }

  // 5. WORK / SERVICES
  if (
    lowerMsg.includes('work') || 
    lowerMsg.includes('service') || 
    lowerMsg.includes('what do you do') || 
    lowerMsg.includes('what you do') || 
    lowerMsg.includes('offer') || 
    lowerMsg.includes('provide') || 
    lowerMsg.includes('business') ||
    lowerMsg.includes('job') ||
    lowerMsg.includes('tasks')
  ) {
    return `🛠️ **SS Morsel India Pvt. Ltd.** specializes in commercial space transition and asset management. Our core services are:

1. **Office Furniture Dismantling** — Dismantling workstations, partitions, conference tables, and executive desks.
2. **Office Reinstatement** — Restoring leased office spaces to their original condition for landlord handover.
3. **Bare Shelling** — Stripping commercial fit-outs down to the raw concrete shell.
4. **IT Asset Disposal (ITAD)** — Certified data destruction and compliant IT asset decommissioning.
5. **Scrap Purchasing** — Offering competitive rates for office metal, electrical, and furniture scrap.
6. **E-Waste Management** — MSTC government licensed, environment-compliant e-waste disposal.

Let us know if you want details or a quote for any of these services!`;
  }

  // 6. SPECIFIC SERVICES DETAILED INFO
  if (lowerMsg.includes('dismantle') || lowerMsg.includes('dismantling') || lowerMsg.includes('furniture')) {
    return `🪑 **Office Furniture Dismantling Services:**

Our expert team handles complete office furniture dismantling with care and precision:
* Modular Workstation & Partition Dismantling
* Conference Table & Executive Furniture Removal
* Filing Cabinet & Storage Unit Clearance
* Full Office Set-Up Removal

We ensure no damage to property and smooth handing over of premises. A majority of our business comes through corporate references!`;
  }

  if (lowerMsg.includes('reinstatement') || lowerMsg.includes('restore') || lowerMsg.includes('original condition')) {
    return `🔧 **Office Reinstatement Services:**

We restore leased office spaces to their original condition as required by landlords:
* Full Fit-Out & False Ceiling Removal
* Raised Floor Dismantling
* Wall Patching & Painting
* MEP (Mechanical, Electrical, Plumbing) Restoration
* Final Deep Cleaning & Debris Removal

Ensuring a seamless, hassle-free transition and landlord compliance.`;
  }

  if (lowerMsg.includes('bare shell') || lowerMsg.includes('bare shelling') || lowerMsg.includes('shelling')) {
    return `🏗️ **Bare Shelling Services:**

We strip commercial spaces down to the raw concrete structure:
* Demolition of false ceilings & raised flooring
* Removal of all internal partitions & fit-outs
* Safe dismantling of electrical, HVAC, and plumbing fixtures
* Returning the space to its original shell condition systematically.`;
  }

  if (
    lowerMsg.includes('it asset') || 
    lowerMsg.includes('itad') || 
    lowerMsg.includes('computer') || 
    lowerMsg.includes('laptop') || 
    lowerMsg.includes('server') || 
    lowerMsg.includes('data destruction')
  ) {
    return `💻 **IT Asset Disposal (ITAD) Services:**

We offer secure, certified IT asset disposal:
* **Certified Data Destruction** — Military-grade wiping or physical destruction of drives with a Certificate of Destruction.
* **Network & Server Decommissioning** — Safe removal of racks, cables, and servers.
* **Laptop & Desktop Disposal** — Compliant disposal of old computer assets.
* Full chain-of-custody tracking.`;
  }

  if (lowerMsg.includes('scrap') || lowerMsg.includes('metal') || lowerMsg.includes('buy scrap') || lowerMsg.includes('sell scrap')) {
    return `♻️ **Scrap Purchasing Services:**

We buy all types of commercial and office scrap at top market rates:
* **Metal Scrap:** Copper, iron, aluminum, brass, stainless steel.
* **Electrical Scrap:** Old wiring, switchboards, UPS systems, batteries.
* **Furniture Scrap:** Metal structures, frames, partitions, storage lockers.
* Same-day valuation and instant payment with proper documentation.`;
  }

  if (lowerMsg.includes('e-waste') || lowerMsg.includes('electronic waste') || lowerMsg.includes('ewaste') || lowerMsg.includes('mstc')) {
    return `🌱 **E-Waste Management Services:**

We are a **MSTC licensed** e-waste handler:
* Government-compliant, safe electronic disposal.
* Collection and recycling of bulk office electronics.
* E-waste disposal certificates issued for compliance and ESG reporting.`;
  }

  // 7. CERTIFICATIONS / ISO / MSTC
  if (
    lowerMsg.includes('certificat') || 
    lowerMsg.includes('iso') || 
    lowerMsg.includes('mstc') || 
    lowerMsg.includes('license') || 
    lowerMsg.includes('licensed')
  ) {
    return `🏅 **SS Morsel India Certifications & Compliance:**

* **ISO 9001:2015 Quality Management System Certified** (since 2022) — guaranteeing high-quality standards in project execution.
* **MSTC Government Licensed** — authorized for government and corporate e-waste and scrap management.
* Fully compliant with safety (HSE) protocols and environmental norms.`;
  }

  // 8. QUOTE / PRICING
  if (
    lowerMsg.includes('quote') || 
    lowerMsg.includes('price') || 
    lowerMsg.includes('cost') || 
    lowerMsg.includes('rate') || 
    lowerMsg.includes('charge') || 
    lowerMsg.includes('estimate') || 
    lowerMsg.includes('how much')
  ) {
    return `💰 **Pricing & Quotation:**

We offer highly competitive and transparent rates tailored to your project:
1. **Free Site Inspection** — We visit your space to assess the scope.
2. **Transparent Quotation** — A detailed cost breakdown within 2 hours of inspection.
3. **No Hidden Costs** — What we quote is what you pay.

Contact us at **+91 96506 28955** or send a mail to **info@ssmorsel.com** to book a free site visit!`;
  }

  // 9. PROJECTS / PORTFOLIO
  if (
    lowerMsg.includes('project') || 
    lowerMsg.includes('client') || 
    lowerMsg.includes('portfolio') || 
    lowerMsg.includes('experience') || 
    lowerMsg.includes('track record') || 
    lowerMsg.includes('dlf')
  ) {
    return `🏆 **Our Portfolio & Experience:**

* **500+ Projects Completed** across India since 2015.
* **200+ Corporate Clients** including leading multinational brands.
* Major project executions in **DLF Cyber City, DLF Cyber Hub, and DLF SEZ** in Gurugram.
* Led by Sonu Kumar with **18+ years of industry experience**.`;
  }

  // 10. SCORING BACKUP
  let bestMatch = null;
  let highestScore = 0;

  for (const item of localKB) {
    let score = 0;
    for (const key of item.keys) {
      if (lowerMsg.includes(key)) {
        score += key.split(' ').length;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return bestMatch.answer;
  }

  return `I'm not completely sure about that. 🏢 However, I can help you with our **Services**, **Office Location**, **Contact Details**, or about our **Director Mr. Sonu Kumar**.

Please ask me a related question, or reach out to us directly on WhatsApp at **+91 96506 28955** for immediate assistance! 😊`;
};

const AIChatbot = ({ activeChat, setActiveChat }) => {
  const isOpen = activeChat === 'ai';
  const setIsOpen = (open) => setActiveChat(open ? 'ai' : null);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Simple markdown-like renderer for bot messages
  const renderText = (text) => {
    return text
      .split('\n')
      .map((line, i) => {
        // Bold text **text**
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <span key={i}>
            {parts.map((part, j) =>
              j % 2 === 1 ? <strong key={j}>{part}</strong> : part
            )}
            {i < text.split('\n').length - 1 && <br />}
          </span>
        );
      });
  };

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      if (API_KEY === 'YOUR_API_KEY_HERE' || !API_KEY || API_KEY.startsWith('YOUR_')) {
        // Local fallback knowledge base
        setTimeout(() => {
          const responseText = getLocalResponse(userMessage);
          setMessages((prev) => [...prev, { role: 'ai', text: responseText }]);
          setIsTyping(false);
        }, 800);
        return;
      }

      // Gemini API call
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = `
        You are the SS Morsel India AI Assistant. Your tone should be helpful, professional, and business-focused.

        Here are the certified facts about SS Morsel India from the website. ONLY use these facts to answer the user:
        - Company Name: SS Morsel India Pvt. Ltd. (Founded: 2015)
        - Director & Founder: Mr. Sonu Kumar — 18+ years of experience in office dismantling and bare-shelling
        - Contact: Phone/WhatsApp at +91 96506 28955, Email at info@ssmorsel.com
        - Head Office: 1st Floor, Old Bhagat Singh Complex, near Furniture Market, DLF City, Sikanderpur, DLF Phase 3, Sector 24, Gurugram, Haryana 122002
        - Working Hours: Mon - Sat: 9:00 AM - 7:00 PM
        - Core Services:
          1. Office Furniture Dismantling (workstations, cabinets, modular systems)
          2. Office Reinstatement (restoring leased premises to original condition)
          3. Bare Shelling (complete stripping of commercial spaces to raw concrete shell)
          4. IT Asset Disposal/ITAD (certified data destruction, R2/RIOS compliant)
          5. Scrap Purchasing (metal, electrical, furniture, hardware — best market rates, same day payment)
          6. E-Waste Management (MSTC licensed, government compliant)
        - Certifications: ISO 9001:2015 certified (2022), MSTC Government Licensed (2018)
        - Scale: 500+ projects completed, 200+ corporate clients including MNCs and Fortune 500 companies
        - Key Projects: DLF Cyber City, Cyber Hub, DLF SEZ in Gurugram
        - Industries Served: MNCs, IT & Tech, Banking, Financial Services, Manufacturing, Commercial Real Estate

        If the user asks something completely unrelated to our company or services, politely decline and steer them back.
        Keep answers concise (max 2-3 paragraphs). Use emojis occasionally for readability.

        User Question: ${userMessage}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: 'ai', text }]);
    } catch (error) {
      console.error('Chat error:', error);
      // Fallback to local KB instead of showing error message
      const responseText = getLocalResponse(userMessage);
      setMessages((prev) => [...prev, { role: 'ai', text: responseText }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickPrompt = (prompt) => {
    setInput(prompt);
    setTimeout(() => document.getElementById('ss-chat-send-btn')?.click(), 100);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        id="ai-assistant"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 left-4 sm:left-auto sm:right-24 sm:bottom-5 w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center z-[199] ${
          isOpen || activeChat === 'whatsapp' ? 'hidden' : ''
        }`}
        style={{
          background: 'linear-gradient(135deg, #0B3D91 0%, #1E824C 100%)',
          boxShadow: '0 8px 30px rgba(11,61,145,0.4), 0 4px 12px rgba(0,0,0,0.15)',
        }}
        aria-label="Open SS Morsel AI Assistant"
      >
        <FaRobot className="text-white text-lg sm:text-2xl" />
        {/* Pulse effect */}
        <span
          className="absolute w-full h-full rounded-full border-2 border-blue-400 animate-ping opacity-75"
          style={{ borderColor: '#0B3D91' }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-5 sm:bottom-5 sm:w-[400px] bg-white border border-blue-100 rounded-3xl shadow-2xl overflow-hidden z-50 flex flex-col"
            style={{
              height: 'min(520px, 82vh)',
              boxShadow: '0 25px 80px rgba(11,61,145,0.2), 0 8px 24px rgba(0,0,0,0.12)',
            }}
          >
            {/* Chat Header */}
            <div
              className="p-4 border-b flex items-center justify-between flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #081C3A 0%, #0B3D91 100%)' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                    <FaRobot className="text-white text-xl" />
                  </div>
                  <div
                    className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
                    style={{ background: '#1E824C', borderColor: '#0B3D91' }}
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm font-poppins">SS Morsel AI</h3>
                  <p className="text-blue-200 text-xs font-medium">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <FaChevronDown className="text-sm" />
              </button>
            </div>

            {/* Chat Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{
                background:
                  "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230B3D91' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'ai' && (
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1"
                      style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}
                    >
                      <FaRobot className="text-white text-xs" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl p-3.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'text-white rounded-br-sm font-medium'
                        : 'text-gray-800 rounded-bl-sm border'
                    }`}
                    style={
                      msg.role === 'user'
                        ? {
                            background: 'linear-gradient(135deg, #0B3D91, #1E824C)',
                            boxShadow: '0 2px 8px rgba(11,61,145,0.25)',
                          }
                        : {
                            background: 'rgba(248,250,252,0.95)',
                            borderColor: 'rgba(11,61,145,0.1)',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                          }
                    }
                  >
                    {renderText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start items-center gap-2"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #081C3A, #0B3D91)' }}
                  >
                    <FaRobot className="text-white text-xs" />
                  </div>
                  <div
                    className="rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center border"
                    style={{
                      background: 'rgba(248,250,252,0.95)',
                      borderColor: 'rgba(11,61,145,0.1)',
                    }}
                  >
                    {[0, 1, 2].map((j) => (
                      <motion.div
                        key={j}
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#0B3D91' }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length < 3 && !isTyping && (
              <div
                className="px-4 py-2.5 flex gap-2 overflow-x-auto flex-shrink-0 border-t"
                style={{ borderColor: 'rgba(11,61,145,0.1)', background: 'rgba(248,250,252,0.98)' }}
              >
                {['Our Services', 'Get a Quote', 'ITAD Info'].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleQuickPrompt(prompt)}
                    className="whitespace-nowrap text-xs px-3.5 py-1.5 rounded-full font-medium transition-all hover:shadow-sm"
                    style={{
                      background: 'rgba(11,61,145,0.07)',
                      border: '1px solid rgba(11,61,145,0.15)',
                      color: '#0B3D91',
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div
              className="p-4 border-t flex-shrink-0"
              style={{ borderColor: 'rgba(11,61,145,0.1)', background: '#f8fafc' }}
            >
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about SS Morsel..."
                  className="flex-1 bg-white border rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none transition-all placeholder-gray-400 shadow-sm"
                  style={{
                    borderColor: 'rgba(11,61,145,0.2)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0B3D91')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(11,61,145,0.2)')}
                />
                <button
                  id="ss-chat-send-btn"
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #0B3D91, #1E824C)',
                    boxShadow: '0 4px 12px rgba(11,61,145,0.3)',
                  }}
                >
                  <FaPaperPlane className="text-sm" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

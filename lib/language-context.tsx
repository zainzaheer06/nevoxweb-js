"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang === "en" || savedLang === "ar") {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    overview: "Overview",
    outbound: "Outbound",
    inbound: "Inbound",
    industry: "Industry",
    integrations: "Integrations",
    contact: "Contact",
    bookDemo: "Book Demo",
    english: "English",
    arabic: "العربية",

    // Hero
    heroTag: "NEVOX AI - World's First Arabic AI Voice Agent",
    heroTitle1: "Automate Your Calls With",
    heroTitle2: "Saudi Arabia AI Voice",
    heroDesc:
      "Nevox AI helps Saudi businesses automate inbound and outbound calls using a human-like Arabic voice agent trained specifically on Saudi dialects.",
    callMeNow: "Call Me Now",
    enterPhone: "Enter your number (0501234567)",

    // Features
    featuresTag: "FEATURES",
    featuresTitle: "Redefining the future of AI Call solutions",
    featuresDesc:
      "Nevox AI is a Saudi-Arabic AI voice agent that automates customer calls with natural speech, instant responses, and smart call handling.",
    feature1Title: "Native Saudi-Arabic Speech",
    feature1Desc: "High-quality Saudi dialect voice models for natural and trusted communication.",
    feature2Title: "Real-Time AI Conversation",
    feature2Desc: "Responds instantly to customer questions with human-like tone and clarity.",
    feature3Title: "CRM & System Integrations",
    feature3Desc: "Connect Nevox AI with you: CRM, ERP, WhatsApp, Websites, Custom APIs",

    // Agent Cards
    agentsTitle: "AI Agents for Every Business Need",
    agentsDesc: "Pre-built AI agents ready to handle calls in Arabic, tailored for Saudi businesses",
    customerSupport: "Customer Support Agent",
    leadQualification: "Lead Qualification Agent",
    appointmentBooking: "Appointment Booking Agent",
    restaurantOrder: "Restaurant Order Agent",
    realEstate: "Real Estate Agent",
    orderTracking: "Order Tracking Agent",
    medicalReceptionist: "Medical Receptionist Agent",
    paymentCollection: "Payment Collection Agent",
    upsellingAgent: "Upselling Agent",
    salesDevelopment: "Sales Development Agent",

    // Use Cases
    useCasesTag: "USE CASES",
    useCasesTitle: "Transform Your Business Operations",
    useCasesDesc: "See how Nevox AI helps businesses across Saudi Arabia",
    useCase1: "Reduce call handling time by 70%",
    useCase2: "Handle 1000+ calls simultaneously",
    useCase3: "Increase customer satisfaction by 45%",
    useCase4: "Save up to 60% on support costs",

    // How It Works
    howItWorksTag: "HOW IT WORKS",
    howItWorksTitle: "Get Started in 3 Simple Steps",
    step1Title: "Choose Your Agent",
    step1Desc: "Select from our pre-built AI agents or customize one for your specific needs.",
    step2Title: "Configure & Train",
    step2Desc: "Customize responses, integrate with your systems, and train with your business data.",
    step3Title: "Go Live",
    step3Desc: "Activate your AI agent and start automating calls immediately.",

    // Integrations
    integrationsTag: "INTEGRATIONS",
    integrationsTitle: "Seamless Integrations",
    integrationsDesc:
      "Nevox AI seamlessly integrates with leading tools and platforms, ensuring a smooth and efficient workflow.",

    // Management
    managementTag: "MANAGEMENT",
    manageCallsTitle: "Manage Calls Without Complexity",
    manageCallsDesc: "Complete voice AI infrastructure with real-time insights to grow your business efficiently.",
    callAutomation: "Call Automation",
    callAutomationDesc:
      "Handle unlimited concurrent calls automatically. Scale from 10 to 1,000 calls without adding staff.",
    seamlessIntegrations: "Seamless Integrations",
    seamlessIntegrationsDesc: "Connect with your CRM, scheduling tools, and business systems in one click",
    performanceAnalytics: "Performance Analytics",
    performanceAnalyticsDesc:
      "Track call outcomes, customer sentiment, and conversion rates in one centralized dashboard.",
    realTimeMonitoring: "Real-Time Monitoring",
    realTimeMonitoringDesc:
      "Monitor call volume, response times, and customer satisfaction. Make data-driven improvements instantly.",

    // FAQ
    faqTag: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How accurate is the Arabic voice recognition?",
    faq1A:
      "Our AI is specifically trained on Saudi dialects with 95%+ accuracy. It understands regional variations and cultural context.",
    faq2Q: "Can I customize the AI agent's responses?",
    faq2A:
      "Yes! You have full control over responses, tone, and personality. You can update them anytime through our dashboard.",
    faq3Q: "How long does it take to set up?",
    faq3A: "Most businesses are up and running within 24 hours. Our pre-built agents can be deployed immediately.",
    faq4Q: "What happens if the AI can't handle a call?",
    faq4A:
      "The AI seamlessly transfers complex calls to human agents with full context, ensuring smooth customer experience.",
    faq5Q: "Is my data secure?",
    faq5A:
      "Absolutely. We use enterprise-grade encryption and comply with international data protection standards including GDPR.",

    // CTA
    ctaTitle: "Ready to Transform Your Business?",
    ctaDesc: "Join hundreds of Saudi businesses automating their calls with Nevox AI",
    getStarted: "Get Started Today",

    // Footer
    footerDesc: "Automate your business calls with AI-powered voice agents trained for Saudi Arabia.",
    products: "Products",
    company: "Company",
    aboutUs: "About Us",
    careers: "Careers",
    blog: "Blog",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved.",
  },
  ar: {
    // Navbar
    overview: "نظرة عامة",
    outbound: "المكالمات الصادرة",
    inbound: "المكالمات الواردة",
    industry: "القطاعات",
    integrations: "التكاملات",
    contact: "اتصل بنا",
    bookDemo: "احجز عرضاً تجريبياً",
    english: "English",
    arabic: "العربية",

    // Hero
    heroTag: "نيفوكس AI - أول وكيل صوتي عربي بالذكاء الاصطناعي",
    heroTitle1: "أتمتة مكالماتك مع",
    heroTitle2: "الصوت الذكي السعودي",
    heroDesc:
      "تساعد نيفوكس AI الشركات السعودية على أتمتة المكالمات الواردة والصادرة باستخدام وكيل صوتي عربي بشري مدرب خصيصاً على اللهجات السعودية.",
    callMeNow: "اتصل بي الآن",
    enterPhone: "ادخل رقمك (0501234567)",

    // Features
    featuresTag: "المميزات",
    featuresTitle: "إعادة تعريف مستقبل حلول المكالمات بالذكاء الاصطناعي",
    featuresDesc:
      "نيفوكس AI هو وكيل صوتي عربي سعودي يعمل بالذكاء الاصطناعي يقوم بأتمتة مكالمات العملاء بكلام طبيعي واستجابات فورية ومعالجة ذكية للمكالمات.",
    feature1Title: "كلام عربي سعودي أصلي",
    feature1Desc: "نماذج صوتية عالية الجودة للهجة السعودية للتواصل الطبيعي والموثوق.",
    feature2Title: "محادثة ذكية في الوقت الفعلي",
    feature2Desc: "يستجيب فوراً لأسئلة العملاء بنبرة ووضوح بشري.",
    feature3Title: "تكاملات CRM والأنظمة",
    feature3Desc: "اربط نيفوكس AI مع: CRM، ERP، واتساب، المواقع، APIs مخصصة",

    // Agent Cards
    agentsTitle: "وكلاء ذكيون لكل احتياجات عملك",
    agentsDesc: "وكلاء ذكيون جاهزون للتعامل مع المكالمات بالعربية، مصممون للشركات السعودية",
    customerSupport: "وكيل دعم العملاء",
    leadQualification: "وكيل تأهيل العملاء المحتملين",
    appointmentBooking: "وكيل حجز المواعيد",
    restaurantOrder: "وكيل طلبات المطاعم",
    realEstate: "وكيل عقاري",
    orderTracking: "وكيل تتبع الطلبات",
    medicalReceptionist: "وكيل استقبال طبي",
    paymentCollection: "وكيل تحصيل المدفوعات",
    upsellingAgent: "وكيل البيع الإضافي",
    salesDevelopment: "وكيل تطوير المبيعات",

    // Use Cases
    useCasesTag: "حالات الاستخدام",
    useCasesTitle: "حوّل عمليات عملك",
    useCasesDesc: "شاهد كيف تساعد نيفوكس AI الشركات في جميع أنحاء المملكة",
    useCase1: "تقليل وقت معالجة المكالمات بنسبة 70%",
    useCase2: "معالجة أكثر من 1000 مكالمة في وقت واحد",
    useCase3: "زيادة رضا العملاء بنسبة 45%",
    useCase4: "توفير يصل إلى 60% من تكاليف الدعم",

    // How It Works
    howItWorksTag: "كيف يعمل",
    howItWorksTitle: "ابدأ في 3 خطوات بسيطة",
    step1Title: "اختر وكيلك",
    step1Desc: "اختر من وكلائنا الذكيين الجاهزين أو خصص واحداً لاحتياجاتك المحددة.",
    step2Title: "تكوين وتدريب",
    step2Desc: "خصص الردود، وتكامل مع أنظمتك، ودرب باستخدام بيانات عملك.",
    step3Title: "انطلق مباشرة",
    step3Desc: "قم بتفعيل وكيلك الذكي وابدأ أتمتة المكالمات فوراً.",

    // Integrations
    integrationsTag: "التكاملات",
    integrationsTitle: "تكاملات سلسة",
    integrationsDesc: "يتكامل نيفوكس AI بسلاسة مع الأدوات والمنصات الرائدة، مما يضمن سير عمل سلس وفعال.",

    // Management
    managementTag: "الإدارة",
    manageCallsTitle: "إدارة المكالمات بدون تعقيد",
    manageCallsDesc: "بنية تحتية كاملة للصوت الذكي مع رؤى في الوقت الفعلي لتنمية عملك بكفاءة.",
    callAutomation: "أتمتة المكالمات",
    callAutomationDesc:
      "تعامل مع عدد غير محدود من المكالمات المتزامنة تلقائياً. توسع من 10 إلى 1000 مكالمة دون إضافة موظفين.",
    seamlessIntegrations: "تكاملات سلسة",
    seamlessIntegrationsDesc: "اتصل بـ CRM وأدوات الجدولة وأنظمة الأعمال الخاصة بك بنقرة واحدة",
    performanceAnalytics: "تحليلات الأداء",
    performanceAnalyticsDesc: "تتبع نتائج المكالمات ومشاعر العملاء ومعدلات التحويل في لوحة تحكم مركزية واحدة.",
    realTimeMonitoring: "المراقبة في الوقت الفعلي",
    realTimeMonitoringDesc:
      "راقب حجم المكالمات وأوقات الاستجابة ورضا العملاء. قم بإجراء تحسينات قائمة على البيانات فوراً.",

    // FAQ
    faqTag: "الأسئلة الشائعة",
    faqTitle: "الأسئلة المتكررة",
    faq1Q: "ما مدى دقة التعرف على الصوت العربي؟",
    faq1A:
      "تم تدريب الذكاء الاصطناعي خصيصاً على اللهجات السعودية بدقة تزيد عن 95%. يفهم الاختلافات الإقليمية والسياق الثقافي.",
    faq2Q: "هل يمكنني تخصيص ردود الوكيل الذكي؟",
    faq2A: "نعم! لديك السيطرة الكاملة على الردود والنبرة والشخصية. يمكنك تحديثها في أي وقت من خلال لوحة التحكم.",
    faq3Q: "كم من الوقت يستغرق الإعداد؟",
    faq3A: "معظم الشركات تكون جاهزة للعمل في غضون 24 ساعة. يمكن نشر وكلائنا الجاهزين فوراً.",
    faq4Q: "ماذا يحدث إذا لم يتمكن الذكاء الاصطناعي من التعامل مع المكالمة؟",
    faq4A:
      "ينقل الذكاء الاصطناعي المكالمات المعقدة بسلاسة إلى وكلاء بشريين مع السياق الكامل، مما يضمن تجربة عملاء سلسة.",
    faq5Q: "هل بياناتي آمنة؟",
    faq5A: "بالتأكيد. نستخدم تشفيراً من المستوى المؤسسي ونلتزم بمعايير حماية البيانات الدولية بما في ذلك GDPR.",

    // CTA
    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaDesc: "انضم إلى مئات الشركات السعودية التي تقوم بأتمتة مكالماتها مع نيفوكس AI",
    getStarted: "ابدأ اليوم",

    // Footer
    footerDesc: "أتمتة مكالمات عملك مع وكلاء صوتيين مدعومين بالذكاء الاصطناعي مدربين للمملكة العربية السعودية.",
    products: "المنتجات",
    company: "الشركة",
    aboutUs: "من نحن",
    careers: "الوظائف",
    blog: "المدونة",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    allRightsReserved: "جميع الحقوق محفوظة.",
  },
}

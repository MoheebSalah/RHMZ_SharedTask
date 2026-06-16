export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  links: FooterLink[];
}

export const PARTNERS_HEADING = {
  line1: "Trusted by ambitious",
  line2: "companies worldwide",
} as const;

export const PARTNER_LOGOS = [
  { name: "OpenAI", src: "/partners/openai.png" },
  { name: "Apple", src: "/partners/apple.png" },
  { name: "Facebook", src: "/partners/facebook.png" },
  { name: "Slack", src: "/partners/slack.png" },
  { name: "Clay", src: "/partners/clay.png" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Contact Us", href: "#contact" },
  { label: "About Us", href: "#about" },
] as const;

export const FEATURE_ONE = {
  eyebrow: "Why Choose Us",
  title: "Everything You Need to Build a Stronger Business",
  description:
    "From strategic planning to operational optimization, we provide the expertise and guidance needed to help your business grow with confidence.",
} as const;

/** Grid order matches Figma frame: left tall → top middle → top right → bottom wide */
export const FEATURE_ONE_IMAGES = [
  {
    src: "/features/feature-4.png",
    alt: "Team members reviewing analytics on a tablet",
  },
  {
    src: "/features/feature-2.png",
    alt: "Professional working on a laptop in a modern chair",
  },
  {
    src: "/features/feature-1.png",
    alt: "Colleagues collaborating at a height-adjustable desk",
  },
  {
    src: "/features/feature-3.png",
    alt: "Team members working together on a lounge sofa",
  },
] as const;

export const FEATURE_TWO = {
  eyebrow: "Our Impact",
  title: "Helping Businesses Achieve Measurable Results",
  description:
    "Our consulting solutions have helped companies improve performance, increase efficiency, and accelerate growth.",
} as const;

export const FEATURE_TWO_CARDS = [
  {
    icon: "/icons/impact/hand-click.png",
    iconAlt: "Retention icon",
    stat: "95%",
    label: "Retention",
    description: "Clients continue working with us year after year.",
    height: "var(--impact-card-short-height)",
    background: "var(--color-impact-short)",
  },
  {
    icon: "/icons/impact/shield-dollar.png",
    iconAlt: "Revenue icon",
    stat: "12M+",
    label: "Revenue",
    description: "Generated through strategies implemented.",
    height: "var(--impact-card-mid-height)",
    background: "var(--color-impact-mid)",
  },
  {
    icon: "/icons/impact/lightbulb-dollar.png",
    iconAlt: "Businesses icon",
    stat: "250+",
    label: "Businesses",
    description: "Successfully supported across various industries.",
    height: "var(--impact-card-tall-height)",
    background: "var(--color-impact-tall)",
  },
] as const;

export const FEATURE_THREE = {
  eyebrow: "Frequently Asked Questions",
  title: "Answers to Common Questions",
  description:
    "Everything you need to know before working with our consulting team.",
} as const;

export const FAQ_ITEMS = [
  {
    id: "business-types",
    question: "What types of businesses do you work with?",
    answer:
      "We partner with startups, small businesses, and established companies across a wide range of industries.",
  },
  {
    id: "consulting-process",
    question: "How does the consulting process work?",
    answer:
      "We begin with a discovery session to understand your challenges, followed by a customized strategy and ongoing support during implementation.",
  },
  {
    id: "remote-services",
    question: "Do you offer remote consulting services?",
    answer:
      "Yes. We offer fully remote, hybrid, and on-site consulting depending on your team's needs.",
  },
  {
    id: "project-duration",
    question: "How long does a consulting project usually take?",
    answer:
      "Project timelines vary based on scope, but most engagements range from a few weeks to several months.",
  },
  {
    id: "internal-operations",
    question: "Can you help improve internal operations?",
    answer:
      "Absolutely. We help streamline workflows, reduce inefficiencies, and build stronger internal processes.",
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "Reach out through our contact form or schedule a consultation to discuss your goals with our team.",
  },
] as const;

export const FEATURE_FOUR = {
  eyebrow: "Core Services",
  title: "Expert Guidance Across Every Stage of Growth",
  description:
    "Our services are designed to help businesses make smarter decisions and achieve sustainable success.",
} as const;

export type ServicePanelId = "left" | "center" | "right";

export const SERVICES_PANELS = [
    {
        id: "left" as const,
        image: "src\\assets\\core_services\\1d84cbe92d36f9c2b891f5dcae949da239506822.png",
        icon: "src\\assets\\core_services\\icon-left.png",
        imageAlt: "Two hands reaching toward each other",
        title: "Operational Excellence",
        description:
            "Optimize workflows, reduce inefficiencies, and improve overall performance.",
    },
    {
        id: "center" as const,
        image: "src\\assets\\core_services\\9267857847b5572d6414e17f452b7e0f33fe66f1.png",
        icon: "src\\assets\\core_services\\icon-center.png",
        imageAlt: "Business professional looking through a telescope",
        title: "Growth & Expansion",
        description:
            "Identify opportunities, enter new markets, and scale with confidence.",
    },
    {
        id: "right" as const,
        image: "src\\assets\\core_services\\a08c26c29fc7fa4f10444c0a841489d5effde09b.png",
        icon: "src\\assets\\core_services\\icon-right.png",
        imageAlt: "Bridge spanning a gap in the clouds",
        title: "Strategic Planning",
        description:
            "Develop long-term business strategies aligned with your vision and objectives.",
    },
] as const;
export const INSIGHTS_SECTION = {
  eyebrow: "Latest Insights",
  title: "Business Trends, Strategies & Expert Advice",
  description:
    "Stay informed with practical insights and proven approaches from experienced consultants.",
  ctaLabel: "Explore more blogs",
  ctaHref: "#blogs",
} as const;

export const INSIGHTS_BLOG_POSTS = [
  {
    image: "src\\assets\\insights\\blog-1.png",
    imageAlt: "Illustration of an airplane taking off from an airport runway",
    title: "5 Signs Your Business Needs a Strategic Review",
    description:
      "Learn how to identify common growth barriers before they impact performance.",
    href: "#",
  },
  {
    image: "src\\assets\\insights\\blog-2.png",
    imageAlt: "Business professional looking through a telescope from a blue platform",
    title: "How Process Optimization Increases Profitability",
    description:
      "Discover practical ways to improve efficiency and reduce operational costs.",
    href: "#",
  },
  {
    image: "src\\assets\\insights\\blog-3.png",
    imageAlt: "Silhouette walking toward a bright doorway on a blue background",
    title: "Building a Scalable Business for Long-Term Success",
    description:
      "Key strategies every growing company should implement early.",
    href: "#",
  },
] as const;

export type TestimonialId = "left" | "center" | "right";

export const TESTIMONIALS = [
  {
    id: "left" as const,
    image: "/testimonials/person-left.png",
    imageAlt: "Michael Turner",
    quote:
      "The team quickly identified growth opportunities we had overlooked and helped us build a clear roadmap for expansion.",
    name: "Michael Turner",
    company: "NorthPeak Ventures",
  },
  {
    id: "center" as const,
    image: "/testimonials/person-center.png",
    imageAlt: "Sarah Mitchell",
    quote:
      "Their strategic insights helped us streamline operations and significantly improve efficiency within just a few months.",
    name: "Sarah Mitchell",
    company: "BrightEdge Solutions",
  },
  {
    id: "right" as const,
    image: "/testimonials/person-right.png",
    imageAlt: "Jordan Rodriguez",
    quote:
      "Professional, knowledgeable, and results-driven. Their guidance played a major role in our business transformation.",
    name: "Jordan Rodriguez",
    company: "Elevate Partners",
  },
] as const;

export const CTA_SECTION = {
  eyebrow: "Ready to Grow?",
  title: "Take the Next Step Toward Business Success",
  description:
    "Partner with experienced consultants who can help you solve challenges, seize opportunities, and achieve your goals faster.",
  buttonLabel: "Schedule a Free Consultation",
  unionImage: "/cta/union.png",
  unionImageAlt: "",
} as const;

export const FOOTER_HERO = {
  title: "Helping Businesses Make Better Decisions Every Day",
  buttonLabel: "Start Your Journey",
  summary:
    "Expert consulting services focused on growth, efficiency, and long-term success.",
  tagline: "Your partner in business growth.",
  backgroundImage: "/footer/background.png",
} as const;

export const FOOTER_COLUMNS: FooterColumnData[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Insights", href: "#insights" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Insights", href: "#insights" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
];

export const FOOTER_COPYRIGHT = "@2026 all rights reserved";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Instagram", href: "#", icon: "instagram" as const },
  { label: "X", href: "#", icon: "x" as const },
];

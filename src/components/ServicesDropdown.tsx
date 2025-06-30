import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Database,
  MessageCircle,
  Workflow,
  Code,
  Lightbulb,
  BarChart,
  LineChart,
  PieChart,
  Bot,
  ShoppingCart,
  Users,
  Cog,
  CheckCircle,
  Zap,
  BookOpen,
  Layers,
  Cpu,
  GitBranch,
  Server,
  Smartphone,
  Monitor,
  Laptop,
  Cloud,
  Rocket,
  UserPlus,
  Globe,
  Shield,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Define service categories with their icons and subcategories
export const services = [
  {
    title: "AI Automation",
    icon: Brain,
    href: "/services/ai-automation",
    subcategories: [
      {
        name: "Predictive Analytics",
        href: "/services/ai-automation/predictive-analytics",
        icon: BarChart,
        description: "Forecasting trends and identifying opportunities with AI",
      },
      {
        name: "Machine Learning Solutions",
        href: "/services/ai-automation/machine-learning",
        icon: Cpu,
        description: "Custom ML models for complex business problems",
      },
      {
        name: "AI Integration",
        href: "/services/ai-automation/ai-integration",
        icon: GitBranch,
        description: "Seamless AI integration with existing systems",
      },
    ],
  },
  {
    title: "Software Development",
    icon: Code,
    href: "/services/software-development",
    subcategories: [
      {
        name: "Mobile App Development",
        href: "/services/software-development/mobile-apps",
        icon: Smartphone,
        description: "Native and cross-platform mobile applications",
      },
      {
        name: "Web App Development",
        href: "/services/software-development/web-apps",
        icon: Monitor,
        description: "Modern web applications and progressive web apps",
      },
      {
        name: "Desktop Application Development",
        href: "/services/software-development/desktop-apps",
        icon: Laptop,
        description: "Cross-platform desktop applications",
      },
      {
        name: "SAAS Development",
        href: "/services/software-development/saas",
        icon: Cloud,
        description: "Scalable software-as-a-service platforms",
      },
      {
        name: "MVP Building in 20 Days",
        href: "/services/software-development/mvp",
        icon: Rocket,
        description: "Rapid prototype development for market validation",
      },
    ],
  },
  {
    title: "Talent Acquisition / Staffing",
    icon: UserPlus,
    href: "/services/talent-acquisition",
    subcategories: [
      {
        name: "React/Next.js Developers",
        href: "/services/talent-acquisition/react-developers",
        icon: Globe,
        description: "Expert React and Next.js developers for modern web apps",
      },
      {
        name: "Python/Django Developers",
        href: "/services/talent-acquisition/python-developers",
        icon: Shield,
        description: "Skilled Python developers for backend and AI solutions",
      },
      {
        name: "Node.js/Express Developers",
        href: "/services/talent-acquisition/nodejs-developers",
        icon: Zap,
        description: "Experienced Node.js developers for scalable APIs",
      },
      {
        name: "Mobile (React Native/Flutter)",
        href: "/services/talent-acquisition/mobile-developers",
        icon: Smartphone,
        description: "Cross-platform mobile developers for iOS and Android",
      },
      {
        name: "DevOps & Cloud Engineers",
        href: "/services/talent-acquisition/devops-engineers",
        icon: Cloud,
        description: "DevOps specialists for AWS, Azure, and GCP",
      },
    ],
  },
  {
    title: "Data Analysis",
    icon: Database,
    href: "/services/data-analysis",
    subcategories: [
      {
        name: "Business Intelligence",
        href: "/services/data-analysis/business-intelligence",
        icon: LineChart,
        description: "Transforming raw data into actionable insights",
      },
      {
        name: "Data Visualization",
        href: "/services/data-analysis/data-visualization",
        icon: PieChart,
        description: "Interactive dashboards and visual reporting",
      },
      {
        name: "Big Data Processing",
        href: "/services/data-analysis/big-data",
        icon: Server,
        description: "Handling and analyzing large-scale datasets",
      },
    ],
  },
  {
    title: "Chatbot Development",
    icon: MessageCircle,
    href: "/services/chatbot-development",
    subcategories: [
      {
        name: "Customer Support Bots",
        href: "/services/chatbot-development/customer-support",
        icon: Bot,
        description: "24/7 automated customer service solutions",
      },
      {
        name: "E-commerce Assistants",
        href: "/services/chatbot-development/ecommerce",
        icon: ShoppingCart,
        description: "Shopping assistants that boost conversion",
      },
      {
        name: "Lead Generation Bots",
        href: "/services/chatbot-development/lead-generation",
        icon: Users,
        description: "Intelligent bots that qualify and nurture leads",
      },
    ],
  },
  {
    title: "Workflow Automations",
    icon: Workflow,
    href: "/services/workflow-automations",
    subcategories: [
      {
        name: "Process Optimization",
        href: "/services/workflow-automations/process-optimization",
        icon: Cog,
        description: "Streamlining and enhancing business processes",
      },
      {
        name: "Task Automation",
        href: "/services/workflow-automations/task-automation",
        icon: CheckCircle,
        description: "Eliminating repetitive tasks with intelligent automation",
      },
      {
        name: "Integration Services",
        href: "/services/workflow-automations/integration",
        icon: Zap,
        description: "Connecting your business tools and systems seamlessly",
      },
    ],
  },
  {
    title: "LLM Development",
    icon: BookOpen,
    href: "/services/llm-development",
    subcategories: [
      {
        name: "Custom LLM Training",
        href: "/services/llm-development/custom-training",
        icon: BookOpen,
        description:
          "Training language models for specific domains and use cases",
      },
      {
        name: "Language Understanding",
        href: "/services/llm-development/language-understanding",
        icon: Layers,
        description: "Advanced NLP solutions for complex language tasks",
      },
      {
        name: "Content Generation",
        href: "/services/llm-development/content-generation",
        icon: Code,
        description:
          "AI-powered content creation for marketing and communication",
      },
    ],
  },
  {
    title: "AI Consulting",
    icon: Lightbulb,
    href: "/services/ai-consulting",
    subcategories: [
      {
        name: "AI Strategy Development",
        href: "/services/ai-consulting/strategy",
        icon: Brain,
        description: "Crafting comprehensive AI roadmaps for businesses",
      },
      {
        name: "Technology Assessment",
        href: "/services/ai-consulting/assessment",
        icon: Cog,
        description: "Evaluating and recommending optimal AI technologies",
      },
      {
        name: "Implementation Planning",
        href: "/services/ai-consulting/implementation",
        icon: CheckCircle,
        description: "Planning and executing successful AI implementations",
      },
    ],
  },
];

export function ServicesDropdown() {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    services[0].title
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`text-base font-normal bg-transparent transition-colors ${isScrolled
              ? 'text-[#135bfb] hover:text-blue-700 data-[state=open]:text-blue-700'
              : 'text-white hover:text-white/80 data-[state=open]:text-white'
              }`}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white w-[900px] p-0 shadow-lg border border-gray-200 rounded-lg">
            <div className="flex">
              {/* Left sidebar with categories */}
              <div className="w-[250px] bg-gray-50 py-3 rounded-l-lg">
                {services.map((service) => (
                  <div key={service.href}>
                    <button
                      onMouseEnter={() => setActiveCategory(service.title)}
                      className={`w-full text-left flex items-center gap-2 px-5 py-3 transition-colors hover:bg-gray-100 ${activeCategory === service.title
                        ? "text-[#135bfb] bg-gray-100 font-medium"
                        : "text-gray-800 hover:text-[#135bfb]"
                        }`}
                    >
                      <service.icon className="h-5 w-5 shrink-0" />
                      <span className="font-medium">{service.title}</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Right content with subcategories and illustrations */}
              <div className="flex-1 p-6">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className={`${activeCategory === service.title ? "block" : "hidden"
                      }`}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-[#135bfb] mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Explore our {service.title.toLowerCase()} services
                      </p>
                    </div>

                    {/* Two-row layout with horizontal scroll */}
                    <div className="space-y-4">
                      {/* First row */}
                      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {service.subcategories.slice(0, Math.ceil(service.subcategories.length / 2)).map((subcategory) => (
                          <Link
                            key={subcategory.href}
                            to={subcategory.href}
                            className="group block flex-shrink-0 w-48"
                          >
                            <div className="bg-gradient-to-br from-[#135bfb] to-[#2786ff] rounded-lg p-4 mb-3 flex items-center justify-center h-20 transition-transform group-hover:scale-[1.02] shadow-md">
                              <subcategory.icon className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="font-medium text-gray-900 group-hover:text-[#135bfb] transition-colors text-sm">
                              {subcategory.name}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {subcategory.description}
                            </p>
                          </Link>
                        ))}
                      </div>

                      {/* Second row */}
                      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {service.subcategories.slice(Math.ceil(service.subcategories.length / 2)).map((subcategory) => (
                          <Link
                            key={subcategory.href}
                            to={subcategory.href}
                            className="group block flex-shrink-0 w-48"
                          >
                            <div className="bg-gradient-to-br from-[#135bfb] to-[#2786ff] rounded-lg p-4 mb-3 flex items-center justify-center h-20 transition-transform group-hover:scale-[1.02] shadow-md">
                              <subcategory.icon className="h-8 w-8 text-white" />
                            </div>
                            <h4 className="font-medium text-gray-900 group-hover:text-[#135bfb] transition-colors text-sm">
                              {subcategory.name}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {subcategory.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Link
                        to={service.href}
                        className="text-[#135bfb] hover:text-blue-700 text-sm flex items-center transition-colors"
                      >
                        View all {service.title} services
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ServicesDropdown;

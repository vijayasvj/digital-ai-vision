import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Globe, Code, Zap, Shield, Users, Database, Layers } from 'lucide-react';

const ReactDevelopers = () => {
    const faqs = [
        {
            question: "What experience levels do your React/Next.js developers have?",
            answer: "Our React/Next.js developers range from mid-level to senior positions with 3-8+ years of experience. They have expertise in modern React patterns, Next.js 13+ with App Router, TypeScript, state management (Redux, Zustand), and full-stack development. We carefully match developers to your project requirements and team dynamics."
        },
        {
            question: "How do you ensure code quality and best practices?",
            answer: "Our developers follow React and Next.js best practices including component composition, hooks optimization, server-side rendering, and performance optimization. They use TypeScript for type safety, implement proper testing with Jest and React Testing Library, and follow clean code principles with regular code reviews."
        },
        {
            question: "Can your developers work with our existing team and codebase?",
            answer: "Absolutely! Our developers are experienced in integrating with existing teams and codebases. They can quickly understand your current architecture, follow your coding standards, and contribute effectively to ongoing projects. We provide detailed onboarding and ensure smooth collaboration with your existing development team."
        },
        {
            question: "What about ongoing support and maintenance?",
            answer: "We provide flexible engagement models including full-time, part-time, and project-based arrangements. Our developers can handle ongoing maintenance, feature development, bug fixes, and performance optimization. We also offer knowledge transfer and documentation to ensure your team can maintain the codebase long-term."
        }
    ];

    const skills = [
        {
            name: "React 18+ & Hooks",
            description: "Modern React patterns, custom hooks, and functional components",
            icon: Code
        },
        {
            name: "Next.js 13+ & App Router",
            description: "Server-side rendering, static generation, and routing optimization",
            icon: Zap
        },
        {
            name: "TypeScript",
            description: "Type-safe development with interfaces and advanced types",
            icon: Shield
        },
        {
            name: "State Management",
            description: "Redux Toolkit, Zustand, Context API, and React Query",
            icon: Database
        },
        {
            name: "Testing & Quality",
            description: "Jest, React Testing Library, and E2E testing with Playwright",
            icon: Layers
        }
    ];

    return (
        <SubcategoryTemplate
            title="React/Next.js Developers"
            parentService="Talent Acquisition / Staffing"
            parentServicePath="/services/talent-acquisition"
            description="Expert React and Next.js developers who build modern, scalable web applications with exceptional user experiences and optimal performance."
            imageUrl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Expert React 18+ development with modern patterns and hooks",
                "Next.js 13+ with App Router and server-side rendering",
                "TypeScript implementation for type-safe development",
                "State management with Redux, Zustand, and React Query",
                "Performance optimization and SEO best practices",
                "Testing and quality assurance with modern tools"
            ]}
            benefits={[
                "Accelerate development with experienced React specialists",
                "Build scalable, maintainable applications with modern architecture",
                "Improve user experience with optimized performance and SEO",
                "Reduce technical debt with clean, well-tested code",
                "Scale your team quickly with flexible engagement models",
                "Access to cutting-edge React and Next.js expertise"
            ]}
            useCases={[
                "E-commerce platforms with dynamic product catalogs and cart management",
                "Content management systems with rich text editing and media handling",
                "Real-time dashboards with data visualization and analytics",
                "Progressive Web Apps with offline capabilities and push notifications",
                "Social networking platforms with real-time messaging and feeds",
                "Enterprise applications with complex forms and workflow management"
            ]}
        >
            {/* Additional content specific to React/Next.js Developers */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Core Skills & Expertise</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                                    <skill.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <p className="text-gray-600">{skill.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </SubcategoryTemplate>
    );
};

export default ReactDevelopers; 
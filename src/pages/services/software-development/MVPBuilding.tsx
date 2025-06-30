import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Rocket, Code, Zap, Shield, Users, Globe, Clock, Target } from 'lucide-react';

const MVPBuilding = () => {
    const faqs = [
        {
            question: "What exactly is included in the 20-day MVP development?",
            answer: "Our 20-day MVP includes core features, user authentication, basic UI/UX design, essential functionality, and deployment to a staging environment. We focus on the most critical features that validate your business idea, with a working prototype that you can test with real users and gather feedback."
        },
        {
            question: "Can we add more features after the initial 20-day MVP?",
            answer: "Absolutely! After the initial MVP launch, we can continue development to add more features, improve the user experience, and scale the application. We provide flexible engagement models for ongoing development, whether it's feature additions, performance optimization, or full-scale application development."
        },
        {
            question: "How do you ensure quality in such a rapid development timeline?",
            answer: "We use proven rapid development methodologies, pre-built components, and experienced developers who specialize in fast-paced delivery. We maintain quality through code reviews, automated testing, and best practices while focusing on essential features that provide immediate value to users."
        },
        {
            question: "What happens if we need changes during the 20-day development?",
            answer: "We build flexibility into our process with regular check-ins and milestone reviews. Minor adjustments can be accommodated within the timeline, while major changes may require timeline adjustments. We maintain clear communication throughout to ensure the final MVP meets your expectations."
        }
    ];

    const process = [
        {
            name: "Day 1-3: Planning & Design",
            description: "Requirements gathering, user stories, and UI/UX wireframes",
            icon: Target
        },
        {
            name: "Day 4-10: Core Development",
            description: "Building essential features and user authentication",
            icon: Code
        },
        {
            name: "Day 11-15: Integration & Testing",
            description: "API integration, database setup, and functionality testing",
            icon: Zap
        },
        {
            name: "Day 16-18: UI/UX Refinement",
            description: "Polishing user interface and user experience",
            icon: Shield
        },
        {
            name: "Day 19-20: Deployment & Launch",
            description: "Final testing, deployment, and launch preparation",
            icon: Rocket
        }
    ];

    return (
        <SubcategoryTemplate
            title="MVP Building in 20 Days"
            parentService="Software Development"
            parentServicePath="/services/software-development"
            description="Transform your business idea into a working prototype in just 20 days. Our rapid MVP development process helps you validate concepts, attract investors, and gather user feedback quickly."
            imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Rapid 20-day development cycle with proven methodology",
                "Core features focused on business validation",
                "User authentication and basic security implementation",
                "Responsive design for mobile and desktop compatibility",
                "Deployment to staging environment with hosting setup",
                "Comprehensive documentation and handover process"
            ]}
            benefits={[
                "Validate your business idea quickly with real user feedback",
                "Attract investors and stakeholders with a working prototype",
                "Reduce development costs by focusing on essential features",
                "Accelerate time-to-market and competitive advantage",
                "Gather valuable insights for future development decisions",
                "Build momentum and excitement around your product vision"
            ]}
            useCases={[
                "Startup founders needing to validate business concepts",
                "Entrepreneurs seeking investor funding with working prototypes",
                "Businesses testing new product ideas in the market",
                "Companies needing quick proof-of-concept development",
                "Innovation teams prototyping new features or services",
                "Product managers validating feature requirements with users"
            ]}
        >
            {/* Additional content specific to MVP Building */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our 20-Day Development Process</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {process.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.name}</h3>
                                <p className="text-gray-600">{step.description}</p>
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

export default MVPBuilding; 
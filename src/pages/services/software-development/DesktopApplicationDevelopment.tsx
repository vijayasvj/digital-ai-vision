import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Laptop, Code, Zap, Shield, Users, Globe, Database } from 'lucide-react';

const DesktopApplicationDevelopment = () => {
    const faqs = [
        {
            question: "What platforms do you support for desktop applications?",
            answer: "We develop desktop applications for Windows, macOS, and Linux using cross-platform frameworks like Electron, Qt, and .NET MAUI. This ensures your application works seamlessly across all major operating systems while maintaining native performance and user experience."
        },
        {
            question: "How do you handle desktop app distribution and updates?",
            answer: "We implement automated update systems using Electron Updater or similar tools, ensuring users always have the latest version. We also handle code signing for Windows and macOS, and can distribute through Microsoft Store, Mac App Store, or direct downloads with proper security certificates."
        },
        {
            question: "Can desktop apps work offline and sync when online?",
            answer: "Yes, we build desktop applications with offline-first capabilities using local databases and file systems. When internet connectivity is restored, the app automatically syncs data with cloud services, ensuring no data loss and seamless user experience across devices."
        },
        {
            question: "How do you ensure desktop app security?",
            answer: "We implement multiple security layers including code obfuscation, secure local storage encryption, network communication security, and regular security updates. We also follow platform-specific security guidelines and implement proper authentication and authorization mechanisms."
        }
    ];

    const technologies = [
        {
            name: "Electron",
            description: "Cross-platform desktop apps using web technologies (HTML, CSS, JavaScript)",
            icon: Code
        },
        {
            name: "Qt Framework",
            description: "Native C++ development for high-performance desktop applications",
            icon: Zap
        },
        {
            name: ".NET MAUI",
            description: "Microsoft's framework for cross-platform desktop and mobile development",
            icon: Shield
        },
        {
            name: "Tauri",
            description: "Modern framework for building secure, fast desktop applications",
            icon: Laptop
        },
        {
            name: "Native Development",
            description: "Platform-specific development for optimal performance and integration",
            icon: Globe
        }
    ];

    return (
        <SubcategoryTemplate
            title="Desktop Application Development"
            parentService="Software Development"
            parentServicePath="/services/software-development"
            description="We create powerful, user-friendly desktop applications that provide robust functionality, offline capabilities, and seamless integration with your existing workflows."
            imageUrl="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Cross-platform development for Windows, macOS, and Linux",
                "Offline-first architecture with cloud synchronization",
                "Native system integration and file handling",
                "High-performance applications with optimized resource usage",
                "Automated update systems and distribution management",
                "Secure local data storage and encryption"
            ]}
            benefits={[
                "Provide powerful tools that work without internet connectivity",
                "Reduce licensing costs compared to cloud-based solutions",
                "Improve productivity with faster, more responsive interfaces",
                "Ensure data security with local storage and encryption",
                "Integrate seamlessly with existing desktop workflows",
                "Scale from individual users to enterprise deployments"
            ]}
            useCases={[
                "Professional design and creative software tools",
                "Enterprise resource planning (ERP) and business management systems",
                "Data analysis and scientific computing applications",
                "Media production and editing software",
                "Financial modeling and trading applications",
                "Educational software with interactive learning features"
            ]}
        >
            {/* Additional content specific to Desktop Application Development */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Technology Stack</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                                    <tech.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                                <p className="text-gray-600">{tech.description}</p>
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

export default DesktopApplicationDevelopment; 
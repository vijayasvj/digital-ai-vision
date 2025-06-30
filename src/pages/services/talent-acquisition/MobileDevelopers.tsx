import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Smartphone, Code, Zap, Shield, Users, Globe, Database } from 'lucide-react';

const MobileDevelopers = () => {
    const faqs = [
        {
            question: "What mobile development frameworks do your developers specialize in?",
            answer: "Our mobile developers are experts in React Native, Flutter, and native iOS/Android development. They have extensive experience with React Native CLI and Expo, Flutter with Dart, Swift for iOS, and Kotlin for Android. They can build cross-platform apps that maintain native performance while reducing development time and cost."
        },
        {
            question: "How do you ensure app performance and user experience?",
            answer: "We focus on performance optimization through efficient state management, lazy loading, image optimization, and proper memory management. We implement smooth animations, responsive design, and ensure apps work seamlessly across different screen sizes and device capabilities. Regular performance testing and optimization are part of our development process."
        },
        {
            question: "Do you handle app store publishing and deployment?",
            answer: "Yes! Our mobile developers handle the entire app store process including app store optimization (ASO), creating compelling app store listings, preparing required assets, and managing submissions to both Apple App Store and Google Play Store. We also handle code signing, certificates, and ensure compliance with app store guidelines."
        },
        {
            question: "What about ongoing maintenance and updates?",
            answer: "We provide comprehensive mobile app maintenance including bug fixes, performance updates, new feature development, and compatibility updates for new OS versions. We also handle push notification management, analytics integration, and user feedback implementation to keep your app current and engaging."
        }
    ];

    const skills = [
        {
            name: "React Native",
            description: "Cross-platform development with native performance and code reusability",
            icon: Code
        },
        {
            name: "Flutter",
            description: "Google's UI toolkit for building natively compiled applications",
            icon: Zap
        },
        {
            name: "Native iOS (Swift)",
            description: "Platform-specific development for optimal iOS performance",
            icon: Shield
        },
        {
            name: "Native Android (Kotlin)",
            description: "Platform-specific development for optimal Android performance",
            icon: Smartphone
        },
        {
            name: "App Store Publishing",
            description: "ASO, app store listings, and deployment management",
            icon: Globe
        }
    ];

    return (
        <SubcategoryTemplate
            title="Mobile (React Native/Flutter)"
            parentService="Talent Acquisition / Staffing"
            parentServicePath="/services/talent-acquisition"
            description="Expert mobile developers specializing in React Native and Flutter who create high-performance, cross-platform mobile applications with native-like user experiences."
            imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Cross-platform development with React Native and Flutter",
                "Native iOS and Android development with Swift and Kotlin",
                "Performance optimization and memory management",
                "App store optimization and publishing support",
                "Push notifications and real-time features",
                "Offline capabilities and data synchronization"
            ]}
            benefits={[
                "Reduce development time and cost with cross-platform solutions",
                "Reach users on both iOS and Android with a single codebase",
                "Maintain native performance while sharing code",
                "Ensure consistent user experience across platforms",
                "Scale your mobile presence quickly and efficiently",
                "Access to both cross-platform and native development expertise"
            ]}
            useCases={[
                "E-commerce mobile apps with secure payment processing",
                "Social networking platforms with real-time messaging",
                "Health and fitness tracking applications with wearable integration",
                "Educational platforms with interactive learning features",
                "On-demand service apps with location-based services",
                "Enterprise productivity tools with offline synchronization"
            ]}
        >
            {/* Additional content specific to Mobile Developers */}
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

export default MobileDevelopers; 
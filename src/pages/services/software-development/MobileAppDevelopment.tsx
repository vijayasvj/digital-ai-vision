import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Smartphone, Code, Zap, Shield, Users, Globe } from 'lucide-react';

const MobileAppDevelopment = () => {
    const faqs = [
        {
            question: "How long does it take to develop a mobile app?",
            answer: "Development time varies based on complexity. A simple app takes 6-8 weeks, while complex applications can take 4-6 months. We follow agile methodologies and provide regular updates throughout the development process. Our MVP approach allows you to launch with core features and iterate based on user feedback."
        },
        {
            question: "Do you develop for both iOS and Android?",
            answer: "Yes, we develop for both platforms. We use cross-platform frameworks like React Native and Flutter to build apps that work seamlessly on both iOS and Android, reducing development time and cost while maintaining native performance. We also offer native development when platform-specific features are required."
        },
        {
            question: "What about app store optimization and publishing?",
            answer: "We handle the entire process from development to publishing. This includes app store optimization (ASO), creating compelling app store listings, preparing required assets, and managing the submission process for both Apple App Store and Google Play Store. We also provide guidance on app store guidelines and best practices."
        },
        {
            question: "How do you ensure app security and data protection?",
            answer: "Security is built into every layer of our mobile app development process. We implement secure coding practices, use encryption for data transmission and storage, follow OWASP mobile security guidelines, and conduct regular security audits. We also ensure compliance with GDPR, CCPA, and other relevant data protection regulations."
        }
    ];

    const technologies = [
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
            icon: Smartphone
        },
        {
            name: "Native Android (Kotlin)",
            description: "Platform-specific development for optimal Android performance",
            icon: Shield
        },
        {
            name: "Progressive Web Apps",
            description: "Web-based apps that provide native-like experience",
            icon: Globe
        }
    ];

    return (
        <SubcategoryTemplate
            title="Mobile App Development"
            parentService="Software Development"
            parentServicePath="/services/software-development"
            description="We create innovative, user-friendly mobile applications that drive engagement and deliver exceptional user experiences across iOS and Android platforms."
            imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Cross-platform development with React Native and Flutter",
                "Native iOS and Android development for optimal performance",
                "User-centered design with intuitive interfaces",
                "Real-time data synchronization and offline capabilities",
                "Push notifications and in-app messaging systems",
                "App store optimization and publishing support"
            ]}
            benefits={[
                "Reach users on both iOS and Android platforms efficiently",
                "Reduce development time and cost with cross-platform solutions",
                "Enhance user engagement with intuitive, responsive interfaces",
                "Scale your app as your business grows with cloud integration",
                "Improve customer retention with personalized experiences",
                "Generate new revenue streams through mobile commerce"
            ]}
            useCases={[
                "E-commerce mobile apps with secure payment processing",
                "Social networking platforms with real-time communication",
                "Enterprise productivity tools with offline synchronization",
                "Health and fitness tracking applications with wearable integration",
                "Educational platforms with interactive learning features",
                "On-demand service apps with location-based services"
            ]}
        >
            {/* Additional content specific to Mobile App Development */}
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

export default MobileAppDevelopment; 
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Monitor, Code, Zap, Shield, Users, Globe, Database } from 'lucide-react';

const WebAppDevelopment = () => {
    const faqs = [
        {
            question: "What technologies do you use for web app development?",
            answer: "We use modern, scalable technologies including React, Next.js, Vue.js, Node.js, Python (Django/Flask), and cloud platforms like AWS, Azure, and Google Cloud. Our tech stack is chosen based on your specific requirements, ensuring optimal performance, security, and scalability for your web application."
        },
        {
            question: "How do you ensure web app security?",
            answer: "Security is paramount in our development process. We implement HTTPS, secure authentication, input validation, SQL injection prevention, XSS protection, and regular security audits. We follow OWASP guidelines and ensure compliance with data protection regulations like GDPR and CCPA."
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer: "Yes, we offer comprehensive maintenance and support services including regular updates, security patches, performance monitoring, bug fixes, and feature enhancements. We provide different support tiers to meet your specific needs and ensure your web app remains secure and up-to-date."
        },
        {
            question: "How do you handle scalability and performance optimization?",
            answer: "We build scalable architectures from the ground up using microservices, load balancing, caching strategies, and CDN integration. We implement performance monitoring, database optimization, and code optimization techniques to ensure your web app can handle growing user traffic efficiently."
        }
    ];

    const technologies = [
        {
            name: "React & Next.js",
            description: "Modern frontend development with server-side rendering and optimal performance",
            icon: Code
        },
        {
            name: "Node.js & Express",
            description: "Scalable backend development with JavaScript/TypeScript",
            icon: Zap
        },
        {
            name: "Python (Django/Flask)",
            description: "Robust backend development with rapid prototyping capabilities",
            icon: Shield
        },
        {
            name: "Database Solutions",
            description: "PostgreSQL, MongoDB, and Redis for data management and caching",
            icon: Database
        },
        {
            name: "Cloud Platforms",
            description: "AWS, Azure, and Google Cloud for scalable hosting and services",
            icon: Globe
        }
    ];

    return (
        <SubcategoryTemplate
            title="Web App Development"
            parentService="Software Development"
            parentServicePath="/services/software-development"
            description="We build modern, scalable web applications that deliver exceptional user experiences and drive business growth through innovative technology solutions."
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Modern frontend frameworks (React, Vue.js, Angular)",
                "Scalable backend development with Node.js and Python",
                "Progressive Web App (PWA) capabilities",
                "Real-time features with WebSocket integration",
                "Responsive design for all devices and screen sizes",
                "Cloud-native architecture with microservices"
            ]}
            benefits={[
                "Reach users across all devices with responsive web applications",
                "Reduce development costs with modern, efficient frameworks",
                "Improve user engagement with fast, intuitive interfaces",
                "Scale your application as your business grows",
                "Enhance SEO and discoverability with modern web standards",
                "Enable offline functionality with Progressive Web Apps"
            ]}
            useCases={[
                "E-commerce platforms with secure payment processing",
                "Customer relationship management (CRM) systems",
                "Content management systems with multi-user collaboration",
                "Real-time collaboration tools and project management platforms",
                "Data visualization dashboards and analytics platforms",
                "Social networking platforms with real-time messaging"
            ]}
        >
            {/* Additional content specific to Web App Development */}
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

export default WebAppDevelopment; 
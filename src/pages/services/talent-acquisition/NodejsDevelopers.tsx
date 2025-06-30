import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Zap, Code, Database, Users, Globe, Shield, Server } from 'lucide-react';

const NodejsDevelopers = () => {
    const faqs = [
        {
            question: "What Node.js frameworks and technologies do your developers use?",
            answer: "Our Node.js developers are experts in Express.js, NestJS, Fastify, and other modern Node.js frameworks. They specialize in TypeScript, GraphQL, REST APIs, real-time applications with Socket.io, and microservices architecture. They also have experience with MongoDB, PostgreSQL, Redis, and cloud platforms like AWS, Azure, and Google Cloud."
        },
        {
            question: "How do you handle scalability and performance in Node.js applications?",
            answer: "Our developers implement clustering, load balancing, caching strategies, and database optimization to ensure high performance. They use PM2 for process management, implement proper error handling, and design applications with horizontal scaling in mind. Performance monitoring and profiling tools help identify and resolve bottlenecks."
        },
        {
            question: "Can your Node.js developers work with frontend technologies as well?",
            answer: "Yes! Our Node.js developers are full-stack specialists who can work with React, Vue.js, and other frontend frameworks. This full-stack capability allows them to build complete applications, handle API design, and ensure seamless integration between frontend and backend components."
        },
        {
            question: "What about security and best practices?",
            answer: "Security is paramount in our Node.js development. We implement authentication with JWT, OAuth, and session management, use helmet.js for security headers, validate inputs with libraries like Joi, and follow OWASP guidelines. Regular security audits and dependency updates ensure applications remain secure."
        }
    ];

    const skills = [
        {
            name: "Express.js & NestJS",
            description: "RESTful APIs, middleware development, and enterprise-grade applications",
            icon: Code
        },
        {
            name: "TypeScript",
            description: "Type-safe development with interfaces, generics, and advanced patterns",
            icon: Shield
        },
        {
            name: "Real-time Applications",
            description: "Socket.io, WebSockets, and real-time data synchronization",
            icon: Zap
        },
        {
            name: "Database Integration",
            description: "MongoDB, PostgreSQL, Redis with ORMs and query optimization",
            icon: Database
        },
        {
            name: "Microservices",
            description: "Distributed systems, service communication, and containerization",
            icon: Server
        }
    ];

    return (
        <SubcategoryTemplate
            title="Node.js/Express Developers"
            parentService="Talent Acquisition / Staffing"
            parentServicePath="/services/talent-acquisition"
            description="Experienced Node.js developers who build scalable, high-performance backend systems and APIs that power modern web applications and real-time services."
            imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Expert Express.js and NestJS development with TypeScript",
                "Real-time applications with Socket.io and WebSockets",
                "RESTful APIs and GraphQL implementation",
                "Microservices architecture and containerization",
                "Database integration with MongoDB, PostgreSQL, and Redis",
                "Cloud deployment and DevOps with Docker/Kubernetes"
            ]}
            benefits={[
                "Build fast, scalable backend systems with Node.js expertise",
                "Develop real-time applications with WebSocket technology",
                "Create robust APIs that integrate seamlessly with frontend",
                "Implement microservices for better scalability and maintenance",
                "Ensure high performance with optimized database queries",
                "Access to full-stack JavaScript/TypeScript development"
            ]}
            useCases={[
                "Real-time chat applications and collaboration platforms",
                "E-commerce APIs with payment processing and inventory management",
                "Social media platforms with real-time notifications and feeds",
                "IoT applications with real-time data processing and analytics",
                "Gaming platforms with real-time multiplayer functionality",
                "Financial applications with real-time trading and analytics"
            ]}
        >
            {/* Additional content specific to Node.js/Express Developers */}
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

export default NodejsDevelopers; 
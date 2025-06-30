import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Cloud, Code, Zap, Shield, Users, Globe, Database, BarChart } from 'lucide-react';

const SAASDevelopment = () => {
    const faqs = [
        {
            question: "How do you handle SaaS scalability and multi-tenancy?",
            answer: "We build SaaS applications with multi-tenant architecture using database-per-tenant or shared database approaches. We implement auto-scaling, load balancing, and microservices architecture to handle growing user bases. Our cloud-native approach ensures your SaaS can scale from startup to enterprise levels seamlessly."
        },
        {
            question: "What about subscription management and billing integration?",
            answer: "We integrate with popular payment gateways like Stripe, PayPal, and Square, and implement subscription management systems with features like trial periods, usage-based billing, and automated invoicing. We also provide analytics dashboards for revenue tracking and customer insights."
        },
        {
            question: "How do you ensure SaaS security and data isolation?",
            answer: "Security is built into every layer with tenant isolation, encrypted data transmission, secure authentication (OAuth, SAML), role-based access control, and regular security audits. We implement data backup, disaster recovery, and ensure compliance with industry standards like SOC 2, GDPR, and HIPAA."
        },
        {
            question: "What ongoing support do you provide for SaaS applications?",
            answer: "We provide comprehensive SaaS support including 24/7 monitoring, automated backups, performance optimization, security updates, feature enhancements, and customer support integration. We also offer white-label solutions and API development for third-party integrations."
        }
    ];

    const features = [
        {
            name: "Multi-Tenant Architecture",
            description: "Secure data isolation and resource sharing across multiple customers",
            icon: Shield
        },
        {
            name: "Subscription Management",
            description: "Flexible billing with usage tracking and automated invoicing",
            icon: BarChart
        },
        {
            name: "API-First Design",
            description: "RESTful APIs and webhook integrations for seamless connectivity",
            icon: Code
        },
        {
            name: "Real-time Analytics",
            description: "Comprehensive dashboards for usage metrics and business insights",
            icon: Database
        },
        {
            name: "Auto-scaling Infrastructure",
            description: "Cloud-native architecture that scales automatically with demand",
            icon: Cloud
        }
    ];

    return (
        <SubcategoryTemplate
            title="SAAS Development"
            parentService="Software Development"
            parentServicePath="/services/software-development"
            description="We build scalable, secure Software-as-a-Service platforms that generate recurring revenue and provide exceptional value to your customers through cloud-based solutions."
            imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Multi-tenant architecture with secure data isolation",
                "Subscription management and billing integration",
                "API-first design for seamless integrations",
                "Real-time analytics and usage tracking",
                "Auto-scaling cloud infrastructure",
                "White-label and customization capabilities"
            ]}
            benefits={[
                "Generate predictable recurring revenue streams",
                "Scale your business without proportional cost increases",
                "Provide value to customers through accessible cloud solutions",
                "Reduce customer acquisition costs with self-service onboarding",
                "Enable rapid feature deployment and updates",
                "Create competitive advantages through continuous innovation"
            ]}
            useCases={[
                "Business process automation and workflow management platforms",
                "Customer relationship management (CRM) and sales automation",
                "Project management and team collaboration tools",
                "E-commerce platforms with subscription-based services",
                "Data analytics and business intelligence platforms",
                "Industry-specific SaaS solutions for specialized markets"
            ]}
        >
            {/* Additional content specific to SAAS Development */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Core SaaS Features</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                                <p className="text-gray-600">{feature.description}</p>
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

export default SAASDevelopment; 
import { Bot } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const ArivuBot = () => {
    return (
        <ServicePageTemplate
            title="ArivuBot - AI-Powered Chatbot Platform"
            subtitle="Build Intelligent Chatbots for Companies and E-commerce"
            description="ArivuBot is a comprehensive chatbot building platform that enables businesses to create intelligent, AI-powered conversational agents. Our no-code platform makes it easy to build, train, and deploy chatbots for customer support, e-commerce, and lead generation."
            icon={Bot}
            imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1400"
            howItWorksImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400"
            keyFeaturesImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400"
            howItWorks="ArivuBot uses advanced natural language processing and machine learning to understand user intent and provide relevant responses. Our platform allows you to train chatbots on your specific industry data, integrate with your existing systems, and deploy across multiple channels including websites, mobile apps, and social media platforms."
            benefits={[
                { text: "No-Code Development: Build sophisticated chatbots without any programming knowledge using our drag-and-drop interface." },
                { text: "AI Training: Train your chatbot on industry-specific data to provide accurate and contextual responses." },
                { text: "Multi-Channel Deployment: Deploy chatbots across websites, mobile apps, WhatsApp, Facebook Messenger, and more." },
                { text: "E-commerce Integration: Seamlessly integrate with major e-commerce platforms for automated customer support and sales." },
                { text: "Analytics & Insights: Track chatbot performance, user interactions, and business impact with detailed analytics." }
            ]}
            caseStudies={[
                {
                    title: "E-commerce Customer Support",
                    description: "Implemented ArivuBot for a major e-commerce platform, handling product inquiries and order tracking.",
                    results: "Reduced customer support tickets by 70% and improved response time to under 30 seconds."
                },
                {
                    title: "Lead Generation Automation",
                    description: "Created intelligent lead qualification chatbots for B2B companies to pre-qualify prospects.",
                    results: "Increased qualified leads by 45% and reduced sales team workload by 60%."
                },
                {
                    title: "24/7 Customer Service",
                    description: "Deployed ArivuBot for a retail chain to provide round-the-clock customer assistance.",
                    results: "Improved customer satisfaction scores by 35% and reduced operational costs by 40%."
                }
            ]}
            faqItems={[
                {
                    question: "How long does it take to build and deploy a chatbot?",
                    answer: "With ArivuBot's no-code platform, you can build a basic chatbot in as little as 30 minutes. For more complex implementations with custom training and integrations, the process typically takes 1-2 weeks. Our team provides support throughout the development and deployment process."
                },
                {
                    question: "Can ArivuBot integrate with my existing business systems?",
                    answer: "Yes, ArivuBot offers extensive integration capabilities with CRM systems, e-commerce platforms, payment gateways, and other business tools. We provide APIs and webhooks for custom integrations, and our team can help you connect the chatbot with your existing infrastructure."
                },
                {
                    question: "How does the AI training work?",
                    answer: "ArivuBot uses machine learning algorithms that learn from your business data, customer interactions, and industry-specific information. You can upload training data, define conversation flows, and the system continuously improves its responses based on user interactions and feedback."
                },
                {
                    question: "What kind of analytics and reporting do you provide?",
                    answer: "ArivuBot provides comprehensive analytics including conversation metrics, user engagement, conversion rates, and business impact. You can track chatbot performance, identify improvement opportunities, and measure ROI. We also offer custom reporting and dashboard creation for specific business needs."
                }
            ]}
        />
    );
};

export default ArivuBot; 
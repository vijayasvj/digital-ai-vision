import { Train } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const RBMS = () => {
    return (
        <ServicePageTemplate
            title="RBMS - Railway Booking Management System"
            subtitle="Comprehensive Railway Management Solution for Southern Railways"
            description="RBMS is a state-of-the-art railway booking management system designed specifically for Southern Railways. Our platform streamlines ticket booking, reservation management, and passenger services while providing real-time tracking and comprehensive reporting capabilities."
            icon={Train}
            imageUrl="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1400"
            howItWorksImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=1400"
            keyFeaturesImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400"
            howItWorks="RBMS operates through a centralized booking engine that connects all railway stations and ticket counters. The system processes bookings in real-time, manages seat allocation, handles payment processing, and provides instant confirmation. Our AI-powered algorithms optimize seat distribution and reduce booking conflicts while ensuring maximum passenger satisfaction."
            benefits={[
                { text: "Streamlined Operations: Automate ticket booking, reservation management, and passenger services across all stations." },
                { text: "Real-time Tracking: Provide live train status, platform information, and delay updates to passengers." },
                { text: "Enhanced Security: Implement secure payment processing and fraud detection systems." },
                { text: "Data Analytics: Generate comprehensive reports on passenger flow, revenue, and operational efficiency." },
                { text: "Mobile Integration: Offer mobile apps for passengers to book tickets and track trains on the go." }
            ]}
            caseStudies={[
                {
                    title: "Southern Railways Implementation",
                    description: "Successfully deployed RBMS across 500+ stations in Southern Railways, handling over 2 million daily transactions.",
                    results: "Reduced booking time by 60% and increased passenger satisfaction by 85%."
                },
                {
                    title: "Revenue Optimization",
                    description: "Implemented dynamic pricing and seat optimization algorithms to maximize revenue per train.",
                    results: "Increased revenue by 25% while maintaining passenger satisfaction levels."
                },
                {
                    title: "Operational Efficiency",
                    description: "Automated routine tasks and provided real-time monitoring dashboards for railway staff.",
                    results: "Reduced operational costs by 30% and improved staff productivity by 40%."
                }
            ]}
            faqItems={[
                {
                    question: "How does RBMS handle peak booking periods?",
                    answer: "RBMS is built with scalable architecture that can handle millions of concurrent users. During peak periods, our load balancing system automatically distributes traffic across multiple servers, ensuring smooth operation. We also implement queue management systems to handle high-volume bookings efficiently."
                },
                {
                    question: "What security measures are in place for payment processing?",
                    answer: "RBMS implements bank-grade security protocols including SSL encryption, PCI DSS compliance, and fraud detection algorithms. We use secure payment gateways and implement multi-factor authentication for sensitive operations. Regular security audits ensure the system remains protected against emerging threats."
                },
                {
                    question: "Can RBMS integrate with existing railway systems?",
                    answer: "Yes, RBMS is designed with open APIs that can integrate with existing railway management systems, accounting software, and third-party services. We provide comprehensive integration support and can customize the system to work with your current infrastructure."
                },
                {
                    question: "What kind of support and maintenance do you provide?",
                    answer: "We provide 24/7 technical support, regular system updates, and proactive monitoring. Our team handles system maintenance, performance optimization, and feature updates. We also offer training programs for railway staff to ensure smooth adoption of the system."
                }
            ]}
        />
    );
};

export default RBMS; 
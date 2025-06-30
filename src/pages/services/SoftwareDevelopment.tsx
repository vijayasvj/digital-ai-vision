import { Code } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const SoftwareDevelopment = () => {
    return (
        <ServicePageTemplate
            title="Software Development"
            subtitle="Building Innovative Solutions for the Digital Age"
            description="We create custom software solutions that drive business growth, improve efficiency, and deliver exceptional user experiences. From mobile apps to enterprise systems, our development team brings your ideas to life with cutting-edge technology and proven methodologies."
            icon={Code}
            imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1400"
            howItWorksImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1400"
            keyFeaturesImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400"
            howItWorks="Our software development process follows agile methodologies, starting with comprehensive requirements analysis and user research. We then design intuitive interfaces, develop robust backend systems, and implement thorough testing protocols. Throughout the process, we maintain clear communication and provide regular updates to ensure your vision is realized exactly as intended."
            benefits={[
                { text: "Custom Solutions: Tailored software that perfectly fits your business needs and workflows." },
                { text: "Scalable Architecture: Built to grow with your business, handling increased users and data." },
                { text: "Modern Technology: Using the latest frameworks and tools for optimal performance and security." },
                { text: "User-Centered Design: Intuitive interfaces that enhance user experience and adoption rates." },
                { text: "Ongoing Support: Continuous maintenance, updates, and feature enhancements to keep your software current." }
            ]}
            caseStudies={[
                {
                    title: "E-commerce Platform Transformation",
                    description: "Developed a comprehensive e-commerce platform with advanced inventory management, multi-payment gateway integration, and AI-powered product recommendations.",
                    results: "Increased online sales by 240% and reduced cart abandonment by 35%."
                },
                {
                    title: "Healthcare Management System",
                    description: "Built a patient management system with appointment scheduling, electronic health records, and telemedicine capabilities for a growing healthcare network.",
                    results: "Improved patient satisfaction by 45% and reduced administrative overhead by 60%."
                },
                {
                    title: "Financial Analytics Dashboard",
                    description: "Created a real-time financial analytics platform with automated reporting, predictive modeling, and interactive visualizations for investment firms.",
                    results: "Reduced reporting time by 80% and improved decision-making accuracy by 65%."
                }
            ]}
            faqItems={[
                {
                    question: "What is your software development methodology?",
                    answer: "We follow Agile and Scrum methodologies with regular sprints, daily stand-ups, and continuous integration. This approach ensures transparency, allows for flexibility in requirements, and delivers working software incrementally. We also incorporate DevOps practices for faster deployment and better quality assurance."
                },
                {
                    question: "How do you ensure software quality and security?",
                    answer: "Quality is built into every stage of our development process. We conduct code reviews, implement automated testing (unit, integration, and end-to-end), perform security audits, and follow industry best practices. We also use static code analysis tools and maintain comprehensive documentation throughout the development lifecycle."
                },
                {
                    question: "What technologies and frameworks do you use?",
                    answer: "We use modern, proven technologies including React, Vue.js, Angular for frontend; Node.js, Python, Java for backend; PostgreSQL, MongoDB for databases; and AWS, Azure, Google Cloud for infrastructure. Our technology choices are based on project requirements, scalability needs, and your team's expertise."
                },
                {
                    question: "How long does software development typically take?",
                    answer: "Development timelines vary based on complexity and scope. Simple applications can take 4-8 weeks, while complex enterprise systems may take 6-12 months. We provide detailed project timelines during the planning phase and use agile methodologies to deliver working software incrementally, allowing you to see progress and provide feedback throughout the process."
                }
            ]}
        />
    );
};

export default SoftwareDevelopment; 
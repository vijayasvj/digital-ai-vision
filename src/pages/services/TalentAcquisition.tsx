import { UserPlus } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const TalentAcquisition = () => {
    return (
        <ServicePageTemplate
            title="Talent Acquisition / Staffing"
            subtitle="Connecting You with Expert Developers and Engineers"
            description="We provide access to skilled developers and engineers who can accelerate your projects and bring your technical vision to life. Our talent pool includes specialists in React, Python, Node.js, mobile development, and DevOps who are ready to integrate seamlessly with your team."
            icon={UserPlus}
            imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400"
            howItWorksImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400"
            keyFeaturesImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1400"
            howItWorks="Our talent acquisition process begins with understanding your specific technical requirements and team dynamics. We then match you with pre-vetted developers who have the exact skills and experience you need. Our developers integrate seamlessly with your existing team, follow your coding standards, and contribute immediately to your projects."
            benefits={[
                { text: "Pre-vetted Talent: All developers are thoroughly screened for technical skills and cultural fit." },
                { text: "Flexible Engagement: Choose from full-time, part-time, or project-based arrangements." },
                { text: "Immediate Impact: Developers are ready to contribute from day one with minimal onboarding." },
                { text: "Cost Effective: Access top talent without the overhead of traditional hiring processes." },
                { text: "Scalable Solutions: Scale your team up or down based on project requirements." }
            ]}
            caseStudies={[
                {
                    title: "E-commerce Platform Development",
                    description: "Provided a team of React and Node.js developers to build a comprehensive e-commerce platform with real-time inventory management and payment processing.",
                    results: "Delivered the platform 40% faster than estimated timeline with 99.9% uptime."
                },
                {
                    title: "AI-Powered Analytics Dashboard",
                    description: "Assembled a team of Python developers and data scientists to create an AI-powered analytics platform for a financial services company.",
                    results: "Improved data processing speed by 300% and reduced manual analysis time by 80%."
                },
                {
                    title: "Mobile App Development",
                    description: "Provided React Native developers to build a cross-platform mobile app for a healthcare startup with real-time patient monitoring features.",
                    results: "Launched on both iOS and Android simultaneously, achieving 50,000+ downloads in first month."
                }
            ]}
            faqItems={[
                {
                    question: "How do you ensure the quality of your developers?",
                    answer: "We have a rigorous screening process that includes technical assessments, coding challenges, portfolio reviews, and reference checks. All developers have proven experience in their respective technologies and are tested on real-world scenarios. We also provide ongoing performance monitoring and feedback."
                },
                {
                    question: "What if a developer doesn't work out?",
                    answer: "We offer a satisfaction guarantee and will replace any developer who doesn't meet your expectations at no additional cost. We work closely with you to ensure the right fit and provide support throughout the engagement to address any concerns quickly."
                },
                {
                    question: "How quickly can you provide developers?",
                    answer: "We can typically provide developers within 1-2 weeks of your requirements. For urgent needs, we can expedite the process and have developers available within a few days. Our talent pool is constantly updated with qualified candidates ready for immediate placement."
                },
                {
                    question: "Do you provide ongoing support and management?",
                    answer: "Yes, we provide dedicated account management and ongoing support throughout the engagement. We handle administrative tasks, performance reviews, and ensure smooth communication between you and the developers. We're always available to address any concerns or questions."
                }
            ]}
        />
    );
};

export default TalentAcquisition; 
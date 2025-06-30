import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Code, Zap, Database, Users, Globe, Brain } from 'lucide-react';

const PythonDevelopers = () => {
    const faqs = [
        {
            question: "What Python frameworks and technologies do your developers specialize in?",
            answer: "Our Python developers are experts in Django, Flask, FastAPI, and other modern Python frameworks. They have deep knowledge of Django REST Framework, Celery for background tasks, PostgreSQL/MySQL databases, Redis caching, and cloud deployment on AWS, Azure, and Google Cloud. They also specialize in AI/ML integration with libraries like TensorFlow and PyTorch."
        },
        {
            question: "How do you ensure code quality and maintainability in Python projects?",
            answer: "Our developers follow Python best practices including PEP 8 style guidelines, type hints, comprehensive testing with pytest, and documentation with Sphinx. They implement clean architecture patterns, use dependency injection, and maintain high test coverage. Code reviews and pair programming ensure consistent quality across all projects."
        },
        {
            question: "Can your Python developers handle both backend and AI/ML development?",
            answer: "Yes! Our Python developers are full-stack specialists who can build robust backend APIs, integrate AI/ML models, and develop data processing pipelines. They have experience with scikit-learn, pandas, NumPy, and can implement custom machine learning solutions. This makes them ideal for projects requiring both traditional backend development and AI capabilities."
        },
        {
            question: "What about database design and optimization?",
            answer: "Our Python developers are database experts who design efficient schemas, optimize queries, and implement proper indexing strategies. They work with PostgreSQL, MySQL, MongoDB, and Redis, ensuring optimal performance and scalability. They also implement database migrations, backup strategies, and monitoring solutions."
        }
    ];

    const skills = [
        {
            name: "Django & DRF",
            description: "Full-stack web development with Django and REST API development",
            icon: Code
        },
        {
            name: "FastAPI & Flask",
            description: "High-performance APIs and microservices development",
            icon: Zap
        },
        {
            name: "AI/ML Integration",
            description: "Machine learning models, data processing, and AI automation",
            icon: Brain
        },
        {
            name: "Database Design",
            description: "PostgreSQL, MySQL, MongoDB with optimization and scaling",
            icon: Database
        },
        {
            name: "Cloud Deployment",
            description: "AWS, Azure, Docker, Kubernetes, and CI/CD pipelines",
            icon: Globe
        }
    ];

    return (
        <SubcategoryTemplate
            title="Python/Django Developers"
            parentService="Talent Acquisition / Staffing"
            parentServicePath="/services/talent-acquisition"
            description="Skilled Python developers specializing in Django, AI/ML integration, and scalable backend solutions that power modern web applications and data-driven systems."
            imageUrl="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Expert Django and Django REST Framework development",
                "FastAPI and Flask for high-performance APIs",
                "AI/ML integration with TensorFlow, PyTorch, and scikit-learn",
                "Database design and optimization with PostgreSQL/MySQL",
                "Cloud deployment and DevOps with Docker/Kubernetes",
                "Comprehensive testing and documentation practices"
            ]}
            benefits={[
                "Build robust, scalable backend systems with Python expertise",
                "Integrate AI/ML capabilities into your applications seamlessly",
                "Develop high-performance APIs with modern Python frameworks",
                "Ensure code quality with comprehensive testing and documentation",
                "Scale your applications with cloud-native deployment strategies",
                "Access to full-stack Python development capabilities"
            ]}
            useCases={[
                "E-commerce platforms with inventory management and payment processing",
                "Data analytics platforms with real-time processing and visualization",
                "AI-powered applications with machine learning model integration",
                "Content management systems with advanced publishing workflows",
                "Financial applications with secure transaction processing",
                "Healthcare systems with patient data management and analytics"
            ]}
        >
            {/* Additional content specific to Python/Django Developers */}
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

export default PythonDevelopers; 
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Cloud, Code, Zap, Shield, Users, Globe, Server, Database } from 'lucide-react';

const DevOpsEngineers = () => {
    const faqs = [
        {
            question: "What cloud platforms and DevOps tools do your engineers specialize in?",
            answer: "Our DevOps engineers are experts in AWS, Azure, and Google Cloud Platform. They specialize in Docker, Kubernetes, Terraform, Ansible, Jenkins, GitLab CI/CD, and monitoring tools like Prometheus, Grafana, and ELK stack. They can design and implement complete infrastructure-as-code solutions and automated deployment pipelines."
        },
        {
            question: "How do you ensure infrastructure security and compliance?",
            answer: "We implement security best practices including IAM policies, network security groups, encryption at rest and in transit, and regular security audits. We follow compliance frameworks like SOC 2, GDPR, and HIPAA, implement automated security scanning, and maintain detailed audit trails. Our engineers are certified in cloud security and compliance."
        },
        {
            question: "Can your DevOps engineers handle both infrastructure and application deployment?",
            answer: "Absolutely! Our DevOps engineers are full-stack infrastructure specialists who can design cloud architecture, implement CI/CD pipelines, manage container orchestration, and handle application deployment. They work closely with development teams to ensure smooth deployments and can optimize applications for cloud environments."
        },
        {
            question: "What about monitoring, logging, and incident response?",
            answer: "We implement comprehensive monitoring and alerting systems using tools like CloudWatch, Azure Monitor, and custom dashboards. We set up centralized logging with ELK stack or similar solutions, implement automated incident response, and provide 24/7 monitoring support. Our engineers can quickly diagnose and resolve infrastructure issues."
        }
    ];

    const skills = [
        {
            name: "Cloud Platforms",
            description: "AWS, Azure, GCP with infrastructure design and optimization",
            icon: Cloud
        },
        {
            name: "Containerization",
            description: "Docker, Kubernetes, and container orchestration",
            icon: Code
        },
        {
            name: "CI/CD Pipelines",
            description: "Jenkins, GitLab CI, GitHub Actions, and automated deployment",
            icon: Zap
        },
        {
            name: "Infrastructure as Code",
            description: "Terraform, Ansible, and automated infrastructure management",
            icon: Server
        },
        {
            name: "Monitoring & Security",
            description: "Prometheus, Grafana, security scanning, and compliance",
            icon: Shield
        }
    ];

    return (
        <SubcategoryTemplate
            title="DevOps & Cloud Engineers"
            parentService="Talent Acquisition / Staffing"
            parentServicePath="/services/talent-acquisition"
            description="Expert DevOps and cloud engineers who design, implement, and maintain scalable infrastructure solutions that power modern applications with high availability and security."
            imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1400"
            keyFeatures={[
                "Multi-cloud expertise with AWS, Azure, and Google Cloud Platform",
                "Container orchestration with Docker and Kubernetes",
                "CI/CD pipeline implementation and automation",
                "Infrastructure as Code with Terraform and Ansible",
                "Monitoring, logging, and security implementation",
                "High availability and disaster recovery solutions"
            ]}
            benefits={[
                "Reduce infrastructure costs with cloud optimization strategies",
                "Improve deployment speed and reliability with automation",
                "Ensure high availability and scalability for your applications",
                "Enhance security and compliance with best practices",
                "Minimize downtime with proactive monitoring and alerting",
                "Scale your infrastructure efficiently as your business grows"
            ]}
            useCases={[
                "Microservices architecture with container orchestration",
                "High-traffic web applications with auto-scaling",
                "Data processing pipelines with cloud-native services",
                "Multi-region deployments with global load balancing",
                "Compliance-focused applications with security controls",
                "Startup infrastructure with cost optimization"
            ]}
        >
            {/* Additional content specific to DevOps & Cloud Engineers */}
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

export default DevOpsEngineers; 
import { Receipt } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const Billzapp = () => {
    return (
        <ServicePageTemplate
            title="Billzapp - FMCG Billing & Inventory Management"
            subtitle="Complete Billing and Stock Management Solution for FMCG Suppliers"
            description="Billzapp is a comprehensive billing and inventory management system designed specifically for FMCG suppliers. Our platform helps businesses track stock across multiple sub-stores, automate billing processes, and gain valuable insights into sales performance and inventory optimization."
            icon={Receipt}
            imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1400"
            howItWorksImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1400"
            keyFeaturesImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400"
            howItWorks="Billzapp operates through a centralized inventory management system that connects all your sub-stores and distribution centers. The system tracks stock levels in real-time, automates reorder processes, generates invoices automatically, and provides comprehensive reporting on sales, inventory, and business performance across all locations."
            benefits={[
                { text: "Real-time Inventory Tracking: Monitor stock levels across all sub-stores and distribution centers in real-time." },
                { text: "Automated Billing: Generate invoices automatically, handle multiple payment methods, and streamline the billing process." },
                { text: "Multi-store Management: Manage multiple locations from a single dashboard with centralized control and reporting." },
                { text: "Sales Analytics: Gain insights into sales patterns, product performance, and customer behavior across all stores." },
                { text: "Stock Optimization: Prevent stockouts and overstocking with intelligent inventory forecasting and reorder management." }
            ]}
            caseStudies={[
                {
                    title: "Multi-store FMCG Chain",
                    description: "Implemented Billzapp for a chain of 50+ FMCG stores, centralizing inventory and billing management.",
                    results: "Reduced stockouts by 80% and improved inventory turnover by 35%."
                },
                {
                    title: "Automated Billing System",
                    description: "Automated the entire billing process for a major FMCG distributor with multiple sub-stores.",
                    results: "Reduced billing errors by 95% and improved cash flow by 40%."
                },
                {
                    title: "Inventory Optimization",
                    description: "Implemented intelligent forecasting and reorder systems for optimal stock management.",
                    results: "Reduced carrying costs by 25% and increased profit margins by 15%."
                }
            ]}
            faqItems={[
                {
                    question: "How does Billzapp handle multiple store locations?",
                    answer: "Billzapp provides a centralized dashboard that allows you to manage all your stores from one location. Each store has its own inventory tracking, but you can view consolidated reports, transfer stock between locations, and set up automated reorder processes for each store based on their specific needs."
                },
                {
                    question: "Can Billzapp integrate with existing accounting software?",
                    answer: "Yes, Billzapp offers seamless integration with popular accounting software like Tally, QuickBooks, and SAP. We provide APIs and export functionality to sync data with your existing systems, ensuring smooth workflow integration and eliminating the need for manual data entry."
                },
                {
                    question: "How does the inventory forecasting work?",
                    answer: "Billzapp uses machine learning algorithms to analyze historical sales data, seasonal patterns, and market trends to predict future demand. The system automatically generates reorder recommendations, helps prevent stockouts, and optimizes inventory levels to reduce carrying costs while maintaining service levels."
                },
                {
                    question: "What kind of reporting and analytics do you provide?",
                    answer: "Billzapp provides comprehensive reporting including sales analytics, inventory reports, profit margins, customer insights, and store performance comparisons. You can generate custom reports, set up automated alerts for low stock or unusual sales patterns, and access real-time dashboards for quick decision-making."
                }
            ]}
        />
    );
};

export default Billzapp; 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import LoadingScreen from "./components/LoadingScreen";
import { DataProvider } from "./context/DataContext";

import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Service Pages
import AIAutomation from "./pages/services/AIAutomation";
import DataAnalysis from "./pages/services/DataAnalysis";
import ChatbotDevelopment from "./pages/services/ChatbotDevelopment";
import WorkflowAutomations from "./pages/services/WorkflowAutomations";
import LLMDevelopment from "./pages/services/LLMDevelopment";
import AIConsulting from "./pages/services/AIConsulting";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import TalentAcquisition from "./pages/services/TalentAcquisition";

// Product Pages
import RBMS from "./pages/products/RBMS";
import ArivuBot from "./pages/products/ArivuBot";
import Billzapp from "./pages/products/Billzapp";

// AI Automation Subcategories
import PredictiveAnalytics from "./pages/services/ai-automation/PredictiveAnalytics";
import MachineLearning from "./pages/services/ai-automation/MachineLearning";
import AIIntegration from "./pages/services/ai-automation/AIIntegration";

// Data Analysis Subcategories
import BusinessIntelligence from "./pages/services/data-analysis/BusinessIntelligence";
import DataVisualization from "./pages/services/data-analysis/DataVisualization";
import BigData from "./pages/services/data-analysis/BigData";

// Chatbot Development Subcategories
import CustomerSupport from "./pages/services/chatbot-development/CustomerSupport";
import Ecommerce from "./pages/services/chatbot-development/Ecommerce";
import LeadGeneration from "./pages/services/chatbot-development/LeadGeneration";

// Workflow Automations Subcategories
import ProcessOptimization from "./pages/services/workflow-automations/ProcessOptimization";
import TaskAutomation from "./pages/services/workflow-automations/TaskAutomation";
import Integration from "./pages/services/workflow-automations/Integration";

// LLM Development Subcategories
import CustomTraining from "./pages/services/llm-development/CustomTraining";
import LanguageUnderstanding from "./pages/services/llm-development/LanguageUnderstanding";
import ContentGeneration from "./pages/services/llm-development/ContentGeneration";

// AI Consulting Subcategories
import Strategy from "./pages/services/ai-consulting/Strategy";
import Assessment from "./pages/services/ai-consulting/Assessment";
import Implementation from "./pages/services/ai-consulting/Implementation";

// Software Development Subcategories
import MobileAppDevelopment from "./pages/services/software-development/MobileAppDevelopment";
import WebAppDevelopment from "./pages/services/software-development/WebAppDevelopment";
import DesktopApplicationDevelopment from "./pages/services/software-development/DesktopApplicationDevelopment";
import SAASDevelopment from "./pages/services/software-development/SAASDevelopment";
import MVPBuilding from "./pages/services/software-development/MVPBuilding";

// Talent Acquisition Subcategories
import ReactDevelopers from "./pages/services/talent-acquisition/ReactDevelopers";
import PythonDevelopers from "./pages/services/talent-acquisition/PythonDevelopers";
import NodejsDevelopers from "./pages/services/talent-acquisition/NodejsDevelopers";
import MobileDevelopers from "./pages/services/talent-acquisition/MobileDevelopers";
import DevOpsEngineers from "./pages/services/talent-acquisition/DevOpsEngineers";

import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import WorkPage from "./pages/WorkPage";
import PlanPage from "./pages/PlanPage";
import TeamPage from "./pages/TeamPage";

const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {isLoading ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          ) : (
            <DataProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />

                  {/* Service Pages */}
                  <Route path="/services/ai-automation" element={<AIAutomation />} />
                  <Route path="/services/data-analysis" element={<DataAnalysis />} />
                  <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
                  <Route path="/services/workflow-automations" element={<WorkflowAutomations />} />
                  <Route path="/services/llm-development" element={<LLMDevelopment />} />
                  <Route path="/services/ai-consulting" element={<AIConsulting />} />
                  <Route path="/services/software-development" element={<SoftwareDevelopment />} />
                  <Route path="/services/talent-acquisition" element={<TalentAcquisition />} />

                  {/* Product Pages */}
                  <Route path="/products/rbms" element={<RBMS />} />
                  <Route path="/products/arivubot" element={<ArivuBot />} />
                  <Route path="/products/billzapp" element={<Billzapp />} />

                  {/* AI Automation Subcategories */}
                  <Route path="/services/ai-automation/predictive-analytics" element={<PredictiveAnalytics />} />
                  <Route path="/services/ai-automation/machine-learning" element={<MachineLearning />} />
                  <Route path="/services/ai-automation/ai-integration" element={<AIIntegration />} />

                  {/* Data Analysis Subcategories */}
                  <Route path="/services/data-analysis/business-intelligence" element={<BusinessIntelligence />} />
                  <Route path="/services/data-analysis/data-visualization" element={<DataVisualization />} />
                  <Route path="/services/data-analysis/big-data" element={<BigData />} />

                  {/* Chatbot Development Subcategories */}
                  <Route path="/services/chatbot-development/customer-support" element={<CustomerSupport />} />
                  <Route path="/services/chatbot-development/ecommerce" element={<Ecommerce />} />
                  <Route path="/services/chatbot-development/lead-generation" element={<LeadGeneration />} />

                  {/* Workflow Automations Subcategories */}
                  <Route path="/services/workflow-automations/process-optimization" element={<ProcessOptimization />} />
                  <Route path="/services/workflow-automations/task-automation" element={<TaskAutomation />} />
                  <Route path="/services/workflow-automations/integration" element={<Integration />} />

                  {/* LLM Development Subcategories */}
                  <Route path="/services/llm-development/custom-training" element={<CustomTraining />} />
                  <Route path="/services/llm-development/language-understanding" element={<LanguageUnderstanding />} />
                  <Route path="/services/llm-development/content-generation" element={<ContentGeneration />} />

                  {/* AI Consulting Subcategories */}
                  <Route path="/services/ai-consulting/strategy" element={<Strategy />} />
                  <Route path="/services/ai-consulting/assessment" element={<Assessment />} />
                  <Route path="/services/ai-consulting/implementation" element={<Implementation />} />

                  {/* Software Development Subcategories */}
                  <Route path="/services/software-development/mobile-apps" element={<MobileAppDevelopment />} />
                  <Route path="/services/software-development/web-apps" element={<WebAppDevelopment />} />
                  <Route path="/services/software-development/desktop-apps" element={<DesktopApplicationDevelopment />} />
                  <Route path="/services/software-development/saas" element={<SAASDevelopment />} />
                  <Route path="/services/software-development/mvp" element={<MVPBuilding />} />

                  {/* Talent Acquisition Subcategories */}
                  <Route path="/services/talent-acquisition/react-developers" element={<ReactDevelopers />} />
                  <Route path="/services/talent-acquisition/python-developers" element={<PythonDevelopers />} />
                  <Route path="/services/talent-acquisition/nodejs-developers" element={<NodejsDevelopers />} />
                  <Route path="/services/talent-acquisition/mobile-developers" element={<MobileDevelopers />} />
                  <Route path="/services/talent-acquisition/devops-engineers" element={<DevOpsEngineers />} />

                  <Route path="/service" element={<ServicePage />} />
                  <Route path="/product" element={<ProductPage />} />
                  <Route path="/work" element={<WorkPage />} />
                  <Route path="/plan" element={<PlanPage />} />
                  <Route path="/team" element={<TeamPage />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </DataProvider>
          )}
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;

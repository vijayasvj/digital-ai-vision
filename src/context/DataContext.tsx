import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DataContextType {
    videoData: any;
    servicesData: any;
    testimonialsData: any;
    ctaData: any;
    footerData: any;
    isLoading: boolean;
    error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [videoData, setVideoData] = useState(null);
    const [servicesData, setServicesData] = useState(null);
    const [testimonialsData, setTestimonialsData] = useState(null);
    const [ctaData, setCtaData] = useState(null);
    const [footerData, setFooterData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadAllData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Load all data in parallel
                const [
                    videoResponse,
                    servicesResponse,
                    testimonialsResponse,
                    ctaResponse,
                    footerResponse
                ] = await Promise.all([
                    fetch('/content/landingpage/VideoSection.json'),
                    fetch('/content/landingpage/ServiceSection.json'),
                    fetch('/content/landingpage/TestimonialSection.json'),
                    fetch('/content/landingpage/CtaSection.json'),
                    fetch('/content/landingpage/Footer.json')
                ]);

                // Check if all responses are ok
                const responses = [videoResponse, servicesResponse, testimonialsResponse, ctaResponse, footerResponse];
                const failedResponses = responses.filter(response => !response.ok);

                if (failedResponses.length > 0) {
                    throw new Error(`Failed to load ${failedResponses.length} data files`);
                }

                // Parse all JSON responses
                const [videoJson, servicesJson, testimonialsJson, ctaJson, footerJson] = await Promise.all([
                    videoResponse.json(),
                    servicesResponse.json(),
                    testimonialsResponse.json(),
                    ctaResponse.json(),
                    footerResponse.json()
                ]);

                // Set all data
                setVideoData(videoJson);
                setServicesData(servicesJson);
                setTestimonialsData(testimonialsJson);
                setCtaData(ctaJson);
                setFooterData(footerJson);

            } catch (err) {
                console.error('Error loading data:', err);
                setError(err instanceof Error ? err.message : 'Failed to load data');

                // Set fallback data
                setCtaData({
                    heading: "Let's Build the Future Together!",
                    subheading: "Ready to transform your business with cutting-edge AI solutions?",
                    buttonText: "Schedule a Consultation",
                    buttonLink: "/contact"
                });
            } finally {
                setIsLoading(false);
            }
        };

        loadAllData();
    }, []);

    const value: DataContextType = {
        videoData,
        servicesData,
        testimonialsData,
        ctaData,
        footerData,
        isLoading,
        error
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}; 
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
    onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [loadingText, setLoadingText] = useState('Initializing...');

    useEffect(() => {
        const loadingSteps = [
            { progress: 20, text: 'Loading assets...' },
            { progress: 40, text: 'Preparing components...' },
            { progress: 60, text: 'Setting up routes...' },
            { progress: 80, text: 'Almost ready...' },
            { progress: 100, text: 'Welcome to ADRIG!' }
        ];

        let currentStep = 0;

        const interval = setInterval(() => {
            if (currentStep < loadingSteps.length) {
                const step = loadingSteps[currentStep];
                setProgress(step.progress);
                setLoadingText(step.text);
                currentStep++;
            } else {
                clearInterval(interval);
                // Hide loading screen after completion
                setTimeout(() => {
                    setIsVisible(false);
                    onComplete?.();
                }, 500);
            }
        }, 400);

        return () => clearInterval(interval);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
            <div className="text-center">
                {/* Logo */}
                <div className="mb-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <span className="text-3xl font-bold text-blue-600">A</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">ADRIG</h1>
                    <p className="text-blue-100 text-lg">AI Technologies</p>
                </div>

                {/* Loading animation */}
                <div className="w-64 mx-auto mb-6">
                    <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 bg-white rounded-full animate-bounce"
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: '1s'
                                }}
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-4">
                        <div
                            className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Loading text */}
                    <p className="text-white text-sm mb-2">
                        {loadingText}
                    </p>

                    {/* Progress percentage */}
                    <p className="text-blue-100 text-xs opacity-80">
                        {Math.round(progress)}%
                    </p>
                </div>

                {/* Tagline */}
                <p className="text-blue-100 text-sm opacity-80">
                    Driving growth with AI
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen; 
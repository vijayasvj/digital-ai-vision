import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const loadingSequence = async () => {
            // Very quick, professional loading sequence
            const steps = [25, 50, 75, 100];

            for (let i = 0; i < steps.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 150));
                setProgress(steps[i]);
            }

            // Brief pause at 100%
            await new Promise(resolve => setTimeout(resolve, 100));

            setShowLoader(false);
            onLoadingComplete();
        };

        loadingSequence();
    }, [onLoadingComplete]);

    if (!showLoader) return null;

    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="text-center max-w-sm mx-auto px-6">
                {/* Professional Logo */}
                <div className="mb-6">
                    <img
                        src="/favicon.png"
                        alt="ADRIG"
                        className="w-12 h-12 mx-auto mb-3"
                    />
                </div>

                {/* Company Name */}
                <div className="mb-6">
                    <h1 className="text-xl font-semibold text-gray-900 mb-1">ADRIG</h1>
                    <p className="text-xs text-gray-500">AI Technologies</p>
                </div>

                {/* Professional Loading Bar */}
                <div className="w-full bg-gray-200 rounded-full h-0.5 mb-3">
                    <div
                        className="bg-blue-600 h-0.5 rounded-full transition-all duration-200 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Progress Text */}
                <p className="text-xs text-gray-400">
                    {progress < 50 && "Loading..."}
                    {progress >= 50 && progress < 100 && "Preparing..."}
                    {progress >= 100 && "Ready"}
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen; 
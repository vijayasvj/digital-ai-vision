import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [animationStage, setAnimationStage] = useState(0);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const animationSequence = async () => {
            // Stage 0: Initial "ADRIG" display
            await new Promise(resolve => setTimeout(resolve, 1200));
            setAnimationStage(1);

            // Stage 1: Expand to "A      DRI      G"
            await new Promise(resolve => setTimeout(resolve, 1800));
            setAnimationStage(2);

            // Stage 2: Transform to "AI DRIVING GROWTH"
            await new Promise(resolve => setTimeout(resolve, 2200));
            setAnimationStage(3);

            // Stage 3: Hold final state
            await new Promise(resolve => setTimeout(resolve, 1800));

            // Complete loading
            setShowLoader(false);
            onLoadingComplete();
        };

        animationSequence();
    }, [onLoadingComplete]);

    if (!showLoader) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center z-50">
            <div className="text-center">
                {/* Logo */}
                <div className="mb-12">
                    <img
                        src="/favicon.png"
                        alt="ADRIG Logo"
                        className="w-28 h-28 mx-auto mb-6 animate-pulse"
                    />
                </div>

                {/* Animated Text Container */}
                <div className="h-32 flex items-center justify-center mb-8">
                    <div className="text-white font-bold text-5xl md:text-7xl tracking-wider">
                        {animationStage === 0 && (
                            <div className="animate-fadeIn">
                                ADRIG
                            </div>
                        )}

                        {animationStage === 1 && (
                            <div className="flex justify-center items-center space-x-12 animate-expand">
                                <span className="animate-slideInLeft">A</span>
                                <span className="animate-slideInCenter">DRI</span>
                                <span className="animate-slideInRight">G</span>
                            </div>
                        )}

                        {animationStage === 2 && (
                            <div className="animate-transform">
                                <div className="animate-fadeOut mb-4">A      DRI      G</div>
                                <div className="animate-fadeIn">AI DRIVING GROWTH</div>
                            </div>
                        )}

                        {animationStage === 3 && (
                            <div className="animate-fadeIn">
                                AI DRIVING GROWTH
                            </div>
                        )}
                    </div>
                </div>

                {/* Loading Bar */}
                <div className="mt-12 w-80 mx-auto">
                    <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-white h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
                            style={{
                                width: `${(animationStage / 3) * 100}%`,
                                transition: 'width 1.2s ease-out'
                            }}
                        />
                    </div>
                </div>

                {/* Subtitle */}
                <div className="mt-6 text-white/80 text-xl animate-pulse">
                    Loading amazing experiences...
                </div>

                {/* Progress indicator */}
                <div className="mt-4 text-white/60 text-sm">
                    {animationStage === 0 && "Initializing..."}
                    {animationStage === 1 && "Expanding..."}
                    {animationStage === 2 && "Transforming..."}
                    {animationStage === 3 && "Almost ready..."}
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen; 
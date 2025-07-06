import React from 'react';

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-[9998] bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
                {/* Spinner */}
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

                {/* Loading text */}
                <p className="text-gray-600 font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default PageLoader; 
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useData } from "@/context/DataContext";

type LandingContent = {
  title: string;
  subtitle: string;
  videotitle: string;
  time: string;
  firstcardtitle: string;
  firstcardsubtitle: string;
  secondcardtitle: string;
  secondcardsubtitle: string;
  thirdcardtitle: string;
  thirdcardsubtitle: string;
};

const VideoSection = () => {
  const { videoData, isLoading } = useData();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || isLoading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
          observer.unobserve(videoElement);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isLoading]);

  if (isLoading || !videoData) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </section>
    );
  }

  const content: LandingContent = videoData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div ref={videoRef} className="relative">
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
              {isPlaying ? (
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-2">{content.videotitle}</div>
                  <div className="text-gray-400">{content.time}</div>
                </div>
              ) : (
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsPlaying(true)}
                >
                  <Play className="mr-2 h-6 w-6" />
                  Watch Video
                </Button>
              )}
            </div>
          </div>

          {/* Content Cards */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{content.firstcardtitle}</h3>
              <p className="text-gray-600">{content.firstcardsubtitle}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{content.secondcardtitle}</h3>
              <p className="text-gray-600">{content.secondcardsubtitle}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{content.thirdcardtitle}</h3>
              <p className="text-gray-600">{content.thirdcardsubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

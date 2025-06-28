import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type LandingContent = {
  title: string;
  subtitle: string; 
  videotitle: string;
  time:string;
  firstcardtitle:string;
  firstcardsubtitle:string;
  secondcardtitle:string;
  secondcardsubtitle:string;
  thirdcardtitle:string;
  thirdcardsubtitle:string;
};

const VideoSection = () => {
  const [content, setContent] = useState<LandingContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/content/landingpage/VideoSection.json")
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load landing page content:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || loading) return;

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
  }, [loading]);

  if (loading || !content) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Loading...</p>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div ref={videoRef} className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="relative">
              <img 
                src="https://img.youtube.com/vi/Qk2CTUIH1as/maxresdefault.jpg" 
                alt="Company Introduction Video Thumbnail" 
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                {/* Video will play on scroll */}
              </div>
            </div>
          ) : (
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Qk2CTUIH1as?autoplay=1&mute=1" 
                title="Digital AI Vision Introduction" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

import { useState, useEffect, useRef } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  fetchpriority?: "high" | "low" | "auto";
}

export default function LazyVideo({ src, poster, fetchpriority, className, ...props }: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      {isInView ? (
        <video
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          // @ts-ignore - fetchpriority is a new attribute
          fetchpriority={fetchpriority}
          {...props}
        />
      ) : (
        <div 
          className="w-full h-full bg-black/5" 
          style={{ 
            backgroundImage: poster ? `url(${poster})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} 
          // @ts-ignore
          fetchpriority={fetchpriority}
        />
      )}
    </div>
  );
}

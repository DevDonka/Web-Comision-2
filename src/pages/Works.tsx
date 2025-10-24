import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Code } from "lucide-react";

const LazyYoutubeEmbed = ({ embedUrl, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const videoId = embedUrl.split("/embed/")[1];
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 

  if (isLoaded) {
    return (
      <iframe
        className="w-full h-full absolute top-0 left-0"
        src={`${embedUrl}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <div 
      className="relative w-full h-full cursor-pointer flex items-center justify-center bg-muted" 
      onClick={() => setIsLoaded(true)} 
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={`Miniatura del video: ${title}`}
        className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75"
        loading="lazy"
      />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Play 
          className="w-16 h-16 text-white bg-red-600/90 rounded-2xl p-3 transform transition-transform duration-300 group-hover:scale-110" 
          fill="currentColor"
        />
      </div>
    </div>
  );
};


export default function Works() {
  const projects = [
    {
      title: "Movement System V1",
      description: "Advanced Movement System V1",
      tags: ["Movements", "Systems"],
      videoUrl: "https://www.youtube.com/embed/Z84mrDWezrc",
      detailUrl: "https://youtu.be/mj6xh7bRNqI",
    },
    {
      title: "Car Chassis Showcase",
      tags: ["Chassis", "Car", "Roblox Studio"],
      videoUrl: "https://www.youtube.com/embed/-FwrZjBgIO8",
      detailUrl: "https://youtu.be/NzJQG9jMZMM",
    },
    {
      title: "Car Inventory Vip Comission",
      tags: ["Car", "VIP", "Roblox Studio"],
      videoUrl: "https://www.youtube.com/embed/NzJQG9jMZMM",
    },
    {
      title: "Gun System Project V1",
      tags: ["Gun", "System", "Roblox Studio"],
      videoUrl: "https://www.youtube.com/embed/mj6xh7bRNqI",
      detailUrl: "https://youtu.be/Z84mrDWezrc",
    },
  ];

  const handleView = (videoUrl) => {
    const standardUrl = videoUrl.replace("/embed/", "/watch?v=");
    window.open(standardUrl, '_blank');
  };

  const handleDetails = (detailUrl, title) => {
    if (detailUrl) {
      window.open(detailUrl, '_blank');
    } else {
      alert(`Detalles del proyecto: ${title}`);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-primary">Works</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work in Roblox development, from complete games to custom systems.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-muted relative group">
                  <LazyYoutubeEmbed
                    embedUrl={project.videoUrl}
                    title={project.title}
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="gradient" 
                      size="sm"
                      onClick={() => handleView(project.videoUrl)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a custom project?
          </p>
          <Button variant="gradient" size="lg"> 
            <a href="https://discord.gg/pgH289tzJM" target="_blank" rel="noopener noreferrer">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
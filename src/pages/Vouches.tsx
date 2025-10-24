import React, { useState } from "react";
import { X } from "lucide-react";

export default function Vouches() {
  const [selectedImage, setSelectedImage] = useState(null);

  const vouches = [
    // para añadir vouch tienes q poner la imagen en src/assets y luego añadir un objeto aqui con su id y url
    {
      id: 1,
      imageUrl: "src/assets/vouch1.png",
    },
    {
      id: 2,
      imageUrl: "/src/assets/vouch2.png",
    },
    {
      id: 3,
      imageUrl: "/src/assets/vouch3.png",
    },
    {
      id: 4,
      imageUrl: "/src/assets/vouch4.png",
    },
    {
      id: 5,
      imageUrl: "/src/assets/vouch5.png",
    },
    {
      id: 6,
      imageUrl: "/src/assets/vouch6.png",
    },
    {
      id: 7,
      imageUrl: "/src/assets/vouch7.png",
    },
    {
      id: 8,
      imageUrl: "/src/assets/vouch8.png",
    },
    {
      id: 9,
      imageUrl: "/src/assets/vouch9.png",
    },
    {
      id: 10,
      imageUrl: "/src/assets/vouch10.png",
    },
    {
      id: 11,
      imageUrl: "/src/assets/vouch11.png",
    },
    {
      id: 12,
      imageUrl: "/src/assets/vouch12.png",
    },
    {
      id: 13,
      imageUrl: "/src/assets/vouch13.png",
    },
    {
      id: 14,
      imageUrl: "/src/assets/vouch14.png",
    },
    {
      id: 15,
      imageUrl: "/src/assets/vouch15.png",
    },
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const ImageModal = ({ imageUrl, onClose }) => {
    if (!imageUrl) return null;

    return (
      <div 
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 cursor-pointer"
        onClick={onClose}
      >
        <div 
          className="relative max-w-4xl max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={imageUrl}
            alt="Client Vouch zoomed in"
            className="rounded-lg shadow-2xl max-w-full max-h-[90vh] object-contain"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Client <span className="text-primary">Vouches</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real feedback from satisfied clients who have experienced the quality of our Roblox development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vouches.map((vouch) => (
              <div
                key={vouch.id}
                onClick={() => openModal(vouch.imageUrl)} 
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] group cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={vouch.imageUrl}
                    alt={`Vouch ${vouch.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6 text-lg">
              Join our list of satisfied clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/pgH289tzJM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary text-foreground font-semibold px-8 py-3 hover:opacity-90 transition-all shadow-lg hover:shadow-[0_0_40px_rgba(14,165,233,0.3)]"
              >
                Contact on Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <ImageModal imageUrl={selectedImage} onClose={closeModal} />
    </>
  );
}

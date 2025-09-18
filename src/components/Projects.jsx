import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ChromaGrid from './ChromaGrid'; // make sure you have ChromaGrid.jsx file in same folder

const items = [
  {
    image: "https://images.seeklogo.com/logo-png/40/1/reddit-logo-png_seeklogo-409489.png",
    title: "Reddit Product Sentiment Analysis",
    subtitle: "product analysis using nlp and webscraping",
    handle: "@zef-yeh",
    borderColor: "rgba(158, 0, 0, 1)ff",
    gradient: "linear-gradient(145deg, #f10000ff, #000)",
    url: "https://github.com/zef-yeh/reddit-sentiment-analysis"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },

  
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center h-screen w-full pt-24 text-center"
    >
      <h1 className="text-4xl font-semibold mb-8">Projects</h1>

      <div style={{ height: '600px', position: 'relative', width: '100%', }}>
        <ChromaGrid
          items={items}
          radius={200}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          
        />
      </div>
    </section>
  );
}

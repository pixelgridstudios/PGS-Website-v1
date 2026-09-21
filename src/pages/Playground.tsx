import React from 'react';
import { motion } from 'framer-motion';

export const Playground: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-5 max-w-[1200px] mx-auto text-brand-foreground">
      
      <div className="mb-12">
        <h1 className="text-4xl tracking-tight mb-2" style={{ fontVariationSettings: "'wght' 700" }}>Gradient Playground</h1>
        <p className="text-brand-subtle text-lg">Examples of different animated gradient techniques.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Example 1: CSS Panning Background */}
        <div className="bg-brand-muted border border-brand-border rounded-2xl p-6">
          <h2 className="text-xl mb-4" style={{ fontVariationSettings: "'wght' 600" }}>1. Tailwind CSS Panning</h2>
          <p className="text-sm text-brand-subtle mb-6">
            Oversized background slowly pans back and forth. Extremely performant. Best for backgrounds or large cards.
          </p>
          
          <div 
            className="w-full h-48 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-x shadow-inner flex items-center justify-center"
            style={{ backgroundSize: '200% 200%' }}
          >
            <span className="text-white font-medium bg-black/20 px-4 py-2 rounded-lg backdrop-blur-md">Pure CSS</span>
          </div>
        </div>

        {/* Example 2: Text Gradient Pan */}
        <div className="bg-brand-muted border border-brand-border rounded-2xl p-6">
          <h2 className="text-xl mb-4" style={{ fontVariationSettings: "'wght' 600" }}>2. Animated Text Gradient</h2>
          <p className="text-sm text-brand-subtle mb-6">
            Applies the same CSS panning effect, but clipped to the text itself. Great for headers or active states.
          </p>
          
          <div className="w-full h-48 rounded-xl bg-brand-bg flex items-center justify-center border border-brand-border">
            <h3 
              className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-x"
              style={{ fontVariationSettings: "'wght' 800", backgroundSize: '200% 200%' }}
            >
              Pixel Grid
            </h3>
          </div>
        </div>

        {/* Example 3: Framer Motion Interpolation */}
        <div className="bg-brand-muted border border-brand-border rounded-2xl p-6">
          <h2 className="text-xl mb-4" style={{ fontVariationSettings: "'wght' 600" }}>3. Framer Motion Interpolation</h2>
          <p className="text-sm text-brand-subtle mb-6">
            Colors dynamically shift in real-time. Best for gradients that need to react to scroll, mouse hover, or React state.
          </p>
          
          <motion.div 
            className="w-full h-48 rounded-xl shadow-inner flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #FF0080, #7928CA, #FF0080)",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity
            }}
          >
            <span className="text-white font-medium bg-black/20 px-4 py-2 rounded-lg backdrop-blur-md">Framer Motion</span>
          </motion.div>
        </div>

        {/* Example 4: Faux Mesh Gradient (Radial Blur) */}
        <div className="bg-brand-muted border border-brand-border rounded-2xl p-6">
          <h2 className="text-xl mb-4" style={{ fontVariationSettings: "'wght' 600" }}>4. Pure CSS "Mesh" Gradient</h2>
          <p className="text-sm text-brand-subtle mb-6">
            Creates an organic liquid feel using blurred overlapping blobs. Good lightweight alternative to heavy WebGL canvas.
          </p>
          
          <div className="w-full h-48 rounded-xl overflow-hidden relative bg-neutral-900 border border-brand-border">
            {/* Base */}
            <div className="absolute inset-0 bg-indigo-900" />
            
            {/* Blob 1 */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-[40px] animate-gradient-x opacity-70" />
            
            {/* Blob 2 */}
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-500 rounded-full mix-blend-screen filter blur-[50px] animate-gradient-x opacity-70" style={{ animationDelay: '2s' }} />
            
            {/* Blob 3 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[60px] animate-gradient-x opacity-60" style={{ animationDelay: '4s' }} />

            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <span className="text-white font-medium bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">CSS Blobs</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

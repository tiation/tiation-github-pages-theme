import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const HeroComponent = () => {
  return (
    <section className="tiation-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="tiation-badge mb-8">
            <span className="w-2 h-2 bg-cyan-neon rounded-full mr-2 animate-pulse"></span>
            Trusted by 10M+ users worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Your
            <span className="tiation-neon tiation-glow"> Digital Life</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience ultimate online freedom with military-grade encryption, 
            lightning-fast speeds, and zero-logs privacy protection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="tiation-button-primary px-8 py-4 rounded-lg text-lg group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="tiation-button-outline px-8 py-4 rounded-lg text-lg">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="tiation-stat mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="tiation-stat mb-2">75+</div>
              <div className="text-gray-600">Global Servers</div>
            </div>
            <div className="text-center">
              <div className="tiation-stat mb-2">0</div>
              <div className="text-gray-600">Logs Policy</div>
            </div>
          </div>
        </div>

        {/* Floating Globe Animation */}
        <div className="relative mt-16 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-neon/20 to-cyan-500/20 rounded-full flex items-center justify-center tiation-float">
              <Globe className="w-16 h-16 text-cyan-neon animate-pulse" />
            </div>
            <div className="absolute inset-0 w-32 h-32 bg-cyan-neon/10 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;


import React from 'react';
import Header from '@/components/Header';
import PreviewSection from '@/components/PreviewSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 md:pr-8 animate-fade-in">
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground text-sm mb-2">
                Shopify App for Escentual.com
              </div>
              <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                Enhance your <span className="text-primary">sorting experience</span> with Sortify
              </h1>
              <p className="text-lg text-muted-foreground">
                A premium solution to improve product sorting and filtering across all pages on Escentual.com.
                Provide your customers with intuitive, smooth, and visually appealing sorting options.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 rounded-full bg-primary text-white hover-lift transition-premium-fast">
                  Get Started
                </button>
                <button className="px-6 py-3 rounded-full bg-secondary text-foreground hover-lift transition-premium-fast">
                  View Documentation
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary opacity-75 blur"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img 
                  src="https://images.escentual.com/pages/home/2024/may/home-content-desktop.jpg" 
                  alt="Escentual Website Preview"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass p-4 rounded-lg border border-border/50 shadow-lg animate-float">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Sort by</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Popular</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <div className="px-2 py-1 rounded-full bg-primary text-white text-xs">Featured</div>
                      <div className="px-2 py-1 rounded-full bg-secondary text-xs">Price: Low to High</div>
                      <div className="px-2 py-1 rounded-full bg-secondary text-xs">Price: High to Low</div>
                      <div className="px-2 py-1 rounded-full bg-secondary text-xs">Newest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Powerful Sorting Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your e-commerce experience with these intuitive sorting and filtering capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Sorting Algorithm",
                description: "Intelligent product sorting based on multiple factors including popularity, relevance, and user history.",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Custom Filter Options",
                description: "Allow customers to combine multiple filters and sort options for a truly personalized shopping experience.",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                )
              },
              {
                title: "Seamless Integration",
                description: "Integrates smoothly with your existing Shopify theme with minimal configuration required.",
                icon: (
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col p-6 rounded-xl border border-border bg-card transition-premium hover:shadow-md hover-lift">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Preview Demo Section */}
        <PreviewSection />
        
        {/* CTA Section */}
        <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/50"></div>
            <div className="relative z-10 p-8 md:p-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">Ready to enhance your sorting experience?</h2>
                <p className="text-white/80 text-lg mb-8">
                  Install Sortify today and provide your customers with an intuitive and visually appealing way to find products on Escentual.com.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-full bg-white text-primary hover-lift transition-premium-fast">
                    Install Now
                  </button>
                  <button className="px-6 py-3 rounded-full bg-white/20 text-white border border-white/30 hover-lift transition-premium-fast">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-primary flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">S</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight">Sortify</h3>
              </div>
              <p className="text-muted-foreground max-w-md">
                A premium Shopify app to enhance the sorting and filtering experience on Escentual.com.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Release Notes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sortify. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

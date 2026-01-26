import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Clock, Home, ArrowLeft } from 'lucide-react';

const ComingSoonPage = ({ title = 'Coming Soon', description = 'We are working hard to bring you something amazing. Check back soon!' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Clock className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            {description}
          </p>
          
          <p className="text-muted-foreground mb-12">
            We're putting the finishing touches on this page. Thank you for your patience!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-primary bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="rounded-xl px-8 py-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoonPage;


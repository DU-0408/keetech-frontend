import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, ArrowRight, Building2, FileText, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';
import SEO, { seoData } from '../components/SEO';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    buildingType: '',
    serviceType: '',
    floors: '',
    elevatorCount: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Backend API endpoint
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/quote';

    try {
      const response = await axios.post(`${API_URL}/api/quote`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Quote request submitted successfully!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          buildingType: '',
          serviceType: '',
          floors: '',
          elevatorCount: '',
          timeline: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Failed to submit quote request:', error);
      setIsSubmitting(false);
      const errorMessage = error.response?.data?.detail || error.message || 'Failed to submit quote request. Please try again or contact us directly.';
      toast.error(errorMessage);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <SEO {...seoData.quote} />
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 animate-fade-in stagger-1">Quote Request Received!</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in stagger-2">
              Thank you for your interest in KEE-Tech Elevators. Our team will review your 
              request and get back to you within 24 hours.
            </p>
            <div className="bg-secondary/50 rounded-2xl p-6 mb-8 animate-fade-in stagger-3">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ul className="space-y-3 text-left">
                {[
                  'Our team reviews your requirements',
                  'We prepare a customized quote',
                  'A consultant will contact you to discuss details',
                  'Site visit scheduled if needed'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button onClick={() => setIsSubmitted(false)} className="btn-primary bg-primary hover:bg-primary/90 rounded-xl">
              Submit Another Request
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO {...seoData.quote} />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Free Quote
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your <span className="gradient-text">Free Quote</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and our team will provide a customized 
              quote within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">1</span>
                        </div>
                        Contact Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            required
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">2</span>
                        </div>
                        Project Details
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Building Type *</Label>
                          <Select onValueChange={(v) => handleSelectChange('buildingType', v)} required>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="residential">Residential</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="hospitality">Hospitality</SelectItem>
                              <SelectItem value="industrial">Industrial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Service Type *</Label>
                          <Select onValueChange={(v) => handleSelectChange('serviceType', v)} required>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="installation">New Installation</SelectItem>
                              <SelectItem value="modernization">Modernization</SelectItem>
                              <SelectItem value="maintenance">Maintenance Contract</SelectItem>
                              <SelectItem value="repair">Repair Service</SelectItem>
                              <SelectItem value="consultation">Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="floors">Number of Floors</Label>
                          <Input
                            id="floors"
                            name="floors"
                            type="number"
                            value={formData.floors}
                            onChange={handleChange}
                            placeholder="e.g., 10"
                            className="rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="elevatorCount">Number of Elevators</Label>
                          <Input
                            id="elevatorCount"
                            name="elevatorCount"
                            type="number"
                            value={formData.elevatorCount}
                            onChange={handleChange}
                            placeholder="e.g., 2"
                            className="rounded-xl"
                          />
                        </div>
                        <div className="sm:col-span-2 space-y-2">
                          <Label>Preferred Timeline</Label>
                          <Select onValueChange={(v) => handleSelectChange('timeline', v)}>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                              <SelectItem value="1-3months">1-3 Months</SelectItem>
                              <SelectItem value="3-6months">3-6 Months</SelectItem>
                              <SelectItem value="6-12months">6-12 Months</SelectItem>
                              <SelectItem value="planning">Just Planning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">3</span>
                        </div>
                        Additional Information
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="message">Project Description</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your project requirements..."
                          rows={4}
                          className="rounded-xl"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Licensed & Insured',
                    '10+ Years Experience',
                    '500+ Projects Completed',
                    '24/7 Emergency Support',
                    'Competitive Pricing',
                    'Custom Solutions'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <FileText className="w-10 h-10 mb-4 opacity-80" />
                  <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Not sure what you need? Our experts are here to help guide you.
                  </p>
                  <p className="font-semibold">Call: +91 98874 00555</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default QuotePage;

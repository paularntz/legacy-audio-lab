"use client";

import { useState } from 'react';
import { Card } from 'components/card';

export function QuoteForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const myForm = event.target;
        const formData = new FormData(myForm);

        try {
            const response = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                setSubmitStatus('success');
                myForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card title="Request a Quote">
            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-600 bg-opacity-20 border border-green-400 rounded-lg text-green-100">
                    <h3 className="font-semibold mb-2">Thank you for your quote request!</h3>
                    <p>We've received your submission and will respond within 4 hours during business hours.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-600 bg-opacity-20 border border-red-400 rounded-lg text-red-100">
                    <h3 className="font-semibold mb-2">Submission Error</h3>
                    <p>There was an issue submitting your form. Please try again or contact us directly at hello@legacyaudiolab.com</p>
                </div>
            )}

            <form 
                className="space-y-6"
                name="quote-request"
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="quote-request" />
                <div style={{ display: 'none' }}>
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-blue-200 mb-2">
                            First Name *
                        </label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            required
                            className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-blue-200 mb-2">
                            Last Name *
                        </label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            required
                            className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Smith"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                        Email Address *
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-2">
                        Phone Number
                    </label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="(555) 123-4567"
                    />
                </div>

                <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-blue-200 mb-2">
                        Project Type *
                    </label>
                    <select 
                        id="projectType" 
                        name="projectType"
                        required
                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select a project type</option>
                        <option value="adat">ADAT Tapes</option>
                        <option value="reel-to-reel">Reel-to-Reel</option>
                        <option value="vinyl">Vinyl Records</option>
                        <option value="cassette">Cassette Tapes</option>
                        <option value="dat">DAT Tapes</option>
                        <option value="rare">Rare/Vintage Formats</option>
                        <option value="multiple">Multiple Formats</option>
                        <option value="restoration">Audio Restoration</option>
                        <option value="consultation">Consultation</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-blue-200 mb-2">
                        Approximate Quantity
                    </label>
                    <input 
                        type="number" 
                        id="quantity" 
                        name="quantity"
                        min="1"
                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="How many items?"
                    />
                </div>

                <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-blue-200 mb-2">
                        Timeline
                    </label>
                    <select 
                        id="timeline" 
                        name="timeline"
                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">When do you need this completed?</option>
                        <option value="rush">Rush (48 hours)</option>
                        <option value="1-week">Within 1 week</option>
                        <option value="2-weeks">Within 2 weeks</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="flexible">Timeline flexible</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                        Project Details
                    </label>
                    <textarea 
                        id="message" 
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Please describe your project, media condition, and any special requirements..."
                    ></textarea>
                </div>

                <div className="flex items-start">
                    <input 
                        type="checkbox" 
                        id="newsletter" 
                        name="newsletter"
                        className="mt-1 mr-3"
                    />
                    <label htmlFor="newsletter" className="text-sm text-blue-200">
                        I'd like to receive updates about new services and audio preservation tips
                    </label>
                </div>

                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                    {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </button>
            </form>
        </Card>
    );
}
'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import { FloatingIconsHero } from '@/components/marketing/ui/floating-icons-hero-section';
import { connectAppsIcons } from '@/components/marketing/ui/connect-apps-icons';

const STEPS = [
  { number: 1, label: 'Contact' },
  { number: 2, label: 'Company' },
  { number: 3, label: 'Schedule' },
];

export function ContactForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    role: '',
    teamSize: '',
    preferredDate: '',
    specificRequests: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.workEmail.trim()) newErrors.workEmail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) newErrors.workEmail = 'Invalid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.role) newErrors.role = 'Please select a role';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goNext = () => {
    const ok = step === 1 ? validateStep1() : validateStep2();
    if (ok) {
      setErrors({});
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    setIsLoading(true);
    setSubmitError(false);
    try {
      const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      // Apps Script's doPost(e) reads e.parameter, which only populates from a
      // form-encoded body — not a JSON string. URLSearchParams sets
      // Content-Type: application/x-www-form-urlencoded automatically, which
      // also keeps this a CORS "simple request" (no preflight, which Apps
      // Script deployments generally don't handle well).
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.workEmail,
          phone: formData.phoneNumber,
          company: formData.companyName,
          role: formData.role,
          team_size: formData.teamSize,
          message: formData.specificRequests,
          preferred_date: formData.preferredDate,
          preferred_time: '',
        }),
      });
      // no-cors gives an opaque response (status/body unreadable by design),
      // so a resolved fetch — no thrown network error — is the success signal.
      setSubmitted(true);
      setFormData({ firstName: '', lastName: '', workEmail: '', phoneNumber: '', companyName: '', role: '', teamSize: '', preferredDate: '', specificRequests: '' });
      setStep(1);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase = 'w-full px-3.5 py-2.5 rounded-xl border transition-colors duration-150 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-0 bg-white';
  const inputOk = 'border-neutral-200 hover:border-neutral-300 focus:border-[#0D47A1]';
  const inputErr = 'border-red-400 bg-red-50';
  const label = 'block text-sm text-neutral-700 mb-1.5';

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: connected-apps visual, title sitting in the clear center
            band among the icons instead of as a separate heading above */}
        <div className="hidden lg:block">
          <FloatingIconsHero
            title="Connect With Your Apps"
            icons={connectAppsIcons}
            className="rounded-3xl bg-white"
          />
        </div>

        {/* Right: form */}
        <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-b from-[#1a1a1a] to-[#0D47A1] bg-clip-text text-transparent mb-2">Book your walkthrough</h2>
          <p className="text-sm text-neutral-500">We&apos;ll reach out within one business day.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-8">
          {STEPS.map((s, idx) => (
            <div key={s.number} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-colors ${
                    s.number < step
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : s.number === step
                      ? 'border-neutral-900 text-neutral-900'
                      : 'border-neutral-200 text-neutral-300'
                  }`}
                >
                  {s.number < step ? <Check className="w-4 h-4" /> : s.number}
                </div>
                <span className={`text-sm font-medium hidden sm:inline ${s.number <= step ? 'text-neutral-900' : 'text-neutral-300'}`}>
                  {s.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className={`w-8 sm:w-12 h-px mx-2 ${s.number < step ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
              )}
            </div>
          ))}
        </div>

        {submitted && (
          <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200">
            <h3 className="text-sm font-semibold text-green-900 mb-0.5">We&apos;ve got it.</h3>
            <p className="text-sm text-green-700">Someone from our team will reach out within one business day.</p>
          </div>
        )}

        {submitError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
            <h3 className="text-sm font-semibold text-red-900 mb-0.5">Something went wrong.</h3>
            <p className="text-sm text-red-700">Please try again, or reach us directly at +91 76764 51991 or contact@zerotone.com.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className={label}>First name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="John" value={formData.firstName} onChange={handleChange} className={`${inputBase} ${errors.firstName ? inputErr : inputOk}`} />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className={label}>Last name</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Smith" value={formData.lastName} onChange={handleChange} className={`${inputBase} ${errors.lastName ? inputErr : inputOk}`} />
                  {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="workEmail" className={label}>Work email</label>
                <input id="workEmail" name="workEmail" type="email" placeholder="john@yourcompany.com" value={formData.workEmail} onChange={handleChange} className={`${inputBase} ${errors.workEmail ? inputErr : inputOk}`} />
                {errors.workEmail && <p className="mt-1 text-xs text-red-600">{errors.workEmail}</p>}
              </div>

              <div>
                <label htmlFor="phoneNumber" className={label}>Phone number</label>
                <input id="phoneNumber" name="phoneNumber" type="tel" placeholder="+1 (555) 000 0000" value={formData.phoneNumber} onChange={handleChange} className={`${inputBase} ${inputOk}`} />
              </div>

              <button type="button" onClick={goNext} className="w-full bg-neutral-900 text-white font-semibold text-sm py-2.5 px-6 rounded-xl hover:bg-neutral-800 transition-colors duration-150 flex items-center justify-center gap-2">
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label htmlFor="companyName" className={label}>Company name</label>
                <input id="companyName" name="companyName" type="text" placeholder="Acme General Contracting" value={formData.companyName} onChange={handleChange} className={`${inputBase} ${errors.companyName ? inputErr : inputOk}`} />
                {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="role" className={label}>Your role</label>
                  <select id="role" name="role" value={formData.role} onChange={handleChange} className={`${inputBase} ${errors.role ? inputErr : inputOk} text-neutral-700`}>
                    <option value="">Select role</option>
                    <option value="construction-manager">Construction Manager</option>
                    <option value="finance-manager">Finance Manager</option>
                    <option value="operations-manager">Operations Manager</option>
                    <option value="cfo">CFO</option>
                    <option value="owner">Owner</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
                </div>
                <div>
                  <label htmlFor="teamSize" className={label}>Team size</label>
                  <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleChange} className={`${inputBase} ${inputOk} text-neutral-700`}>
                    <option value="">Select size</option>
                    <option value="1-10">1-10 people</option>
                    <option value="11-50">11-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={goBack} className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors duration-150">
                  Back
                </button>
                <button type="button" onClick={goNext} className="flex-1 bg-neutral-900 text-white font-semibold text-sm py-2.5 px-6 rounded-xl hover:bg-neutral-800 transition-colors duration-150 flex items-center justify-center gap-2">
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label htmlFor="preferredDate" className={label}>Preferred date</label>
                <div className="relative">
                  <input id="preferredDate" name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} className={`${inputBase} ${errors.preferredDate ? inputErr : inputOk}`} />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
                {errors.preferredDate && <p className="mt-1 text-xs text-red-600">{errors.preferredDate}</p>}
                <p className="mt-1.5 text-xs text-neutral-500">Slots open starting Mon, Aug 31.</p>
              </div>

              <div>
                <label htmlFor="specificRequests" className={label}>Anything specific you want to see? (optional)</label>
                <textarea id="specificRequests" name="specificRequests" placeholder="e.g. RFI workflow, budget tracking, PO approvals..." value={formData.specificRequests} onChange={handleChange} rows={3} className={`${inputBase} ${inputOk} resize-none`} />
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={goBack} className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors duration-150">
                  Back
                </button>
                <button type="submit" disabled={isLoading} className="flex-1 bg-[#0D47A1] text-white font-semibold text-sm py-2.5 px-6 rounded-xl hover:bg-[#0D47A1]/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-150 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <span>Book My Walkthrough</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          <div className="text-center space-y-1.5 pt-1">
            <p className="text-xs text-neutral-500">No spam. We&apos;ll only reach out about your demo request.</p>
            <div className="text-xs text-neutral-500 space-y-1">
              <p>Or reach us directly</p>
              <div className="flex flex-col sm:flex-row sm:justify-center gap-1 sm:gap-4">
                <a href="tel:+917676451991" className="text-[#0D47A1] font-medium hover:underline">+91 76764 51991</a>
                <a href="mailto:contact@zerotone.com" className="text-[#0D47A1] font-medium hover:underline">contact@zerotone.com</a>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
}

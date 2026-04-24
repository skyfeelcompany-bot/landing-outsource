import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import { Suspense } from "react";
import { cacheLife } from "next/cache";
import ServicesStrip from "@/components/landing/ServicesStrip";
import LegalServices from "@/components/landing/LegalServices";
import AccountingServices from "@/components/landing/AccountingServices";
import WhyUs from "@/components/landing/WhyUs";
import Stats from "@/components/landing/Stats";
import Team from "@/components/landing/Team";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import Quiz from "@/components/landing/Quiz";
import ContactForm from "@/components/landing/ContactForm";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";
import BackToTop from "@/components/landing/BackToTop";
import FloatingContact from "@/components/landing/FloatingContact";

export default async function LandingPage() {
  'use cache';
  cacheLife('max');
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesStrip />
        <LegalServices />
        <AccountingServices />
        <WhyUs />
        <Stats />
        <Team />
        <HowItWorks />
        <FAQ />
        <Quiz />
        <ContactForm />
        <CTABanner />
        {/* Suspense is required for any future dynamic request-time components like user sessions, per SKILL.md */}
        <Suspense fallback={null}>
          <div id="dynamic-zone" />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <FloatingContact />
    </>
  );
}

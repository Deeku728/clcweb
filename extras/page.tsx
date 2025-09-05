"use client";
import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence,motion } from "framer-motion";
import {
  Cpu,
  Bot,
  Workflow,
  Rocket,
  ShieldCheck,
  Cloud,
  LineChart,
  Server,
  LucideIcon,
  Building2,
  Users2,
  DollarSign,
  Mail,
  Phone,
  CalendarClock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// ------------------------------------------------------
// Career Lab Consulting — Home Page (Next.js App Router)
// Company: Career Lab Consulting (IT Consulting & Services + AI & Agentic AI)
// ------------------------------------------------------

// Minimal dark-mode toggle without extra providers
function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("clc-theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark = stored ? stored === "dark" : prefersDark;
    if (startDark) root.classList.add("dark");
    setIsDark(startDark);
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    root.classList.toggle("dark", next);
    localStorage.setItem("clc-theme", next ? "dark" : "light");
    setIsDark(next);
  };
  return { isDark, toggle };
}

import { FaCogs, FaLightbulb, FaIndustry, FaBookOpen, FaServer, FaBriefcase, FaEnvelope } from "react-icons/fa";

const navItems = [
  { href: "#services", label: "Services", icon: <FaCogs /> },
  { href: "#solutions", label: "Solutions", icon: <FaLightbulb /> },
  { href: "#industries", label: "Industries", icon: <FaIndustry /> },
  { href: "#case-studies", label: "Case Studies", icon: <FaBookOpen /> },
  { href: "#resources", label: "Resources", icon: <FaServer /> },
  { href: "#careers", label: "Careers", icon: <FaBriefcase /> },
  { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
];

function Navbar() {
  return (
    <nav className="flex justify-center gap-4 p-6 bg-gray-900 shadow-lg">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="
            group flex items-center gap-2 px-5 py-3 rounded-xl
            bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500
            text-white font-semibold tracking-wide uppercase
            shadow-md shadow-purple-900/40
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-xl hover:shadow-pink-500/60
          "
        >
          {/* Icon */}
          <span className="text-lg relative z-10">{item.icon}</span>
          
          {/* Label */}
          <span className="relative z-10">{item.label}</span>
          
          {/* Animated background glow */}
          <span className="
            absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500
            opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-xl rounded-xl
          "></span>
        </a>
      ))}
    </nav>
  );
}

// export default Navbar;



const logos = ["Azure", "AWS", "GCP", "OpenAI", "LangChain", "HuggingFace", "Snowflake", "Databricks"];

const agenticFlowData = [
  { step: "Ingest", value: 40 },
  { step: "Reason", value: 65 },
  { step: "Plan", value: 80 },
  { step: "Act", value: 90 },
  { step: "Learn", value: 100 },
];

const testimonials = [
  {
    name: "A. Sharma",
    title: "CTO, FinEdge Bank",
    quote:
      "Career Lab Consulting modernized our data stack and deployed agentic AI copilots that cut ops time by 42% in three months.",
    initials: "AS",
  },
  {
    name: "M. Iyer",
    title: "VP Engineering, HealthNova",
    quote:
      "From architecture to MLOps, the team shipped reliable, secured AI services that pass stringent compliance checks.",
    initials: "MI",
  },
  {
    name: "J. Patel",
    title: "Head of Digital, RetailHub",
    quote:
      "Their AI-led personalization lifted our conversion by 18% and AOV by 11%—with transparent reporting.",
    initials: "JP",
  },
];

const caseStudies = [
  { company: "FinEdge Bank", headline: "Agentic AI for Customer Ops", kpis: ["-42% TTR", "+28% CSAT", "99.95% uptime"], tag: "Banking" },
  { company: "HealthNova", headline: "Clinical NLP & RAG", kpis: ["-21% admin time", "+2.1h saved/clinician/week"], tag: "Healthcare" },
  { company: "RetailHub", headline: "Real-time Recommendations", kpis: ["+18% conversion", "+11% AOV"], tag: "Retail" },
];

const faq = [
  { q: "What is Agentic AI?", a: "Agentic AI uses autonomous, tool-using agents that can reason, plan, act, and learn to complete multi-step business tasks securely." },
  { q: "Do you integrate with on-prem systems?", a: "Yes. We work across cloud, hybrid, and on-prem. Connectors cover databases, queues, ERPs, CRMs, and custom APIs." },
  { q: "How do you handle data privacy?", a: "We follow least-privilege principles, encrypted data paths, audit logs, SOC2-ready processes, and region-bound deployments." },
];

const resources = [
  { title: "Buyer’s Guide: Selecting an AI Copilot", tag: "Guide" },
  { title: "Blueprint: Secure RAG for Regulated Data", tag: "Blueprint" },
  { title: "Playbook: Agentic AI for Support", tag: "Playbook" },
];


function AnimatedBackground() {
  const gradients = [
      // Plasma Surge
      "bg-gradient-to-tr from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80",

      // Neon Inferno
      "bg-gradient-to-tr from-[#ff0080]/70 via-[#7928ca]/70 to-[#2afadf]/70",

      // Electric Midnight
      "bg-gradient-to-tr from-[#0f2027]/90 via-[#203a43]/90 to-[#2c5364]/90",

      // Hypernova
      "bg-gradient-to-tr from-[#ff6a00]/70 via-[#ee0979]/70 to-[#ff6a00]/70",

      // Synthwave Grid
      "bg-gradient-to-tr from-[#1f005c]/80 via-[#5b0060]/80 to-[#870160]/80",

      // AI Matrix
      "bg-gradient-to-tr from-[#0f0]/50 via-[#0d7377]/70 to-[#14ffec]/60",

      // Dark Aurora
      "bg-gradient-to-tr from-[#021b79]/80 via-[#0575e6]/80 to-[#021b79]/80",

      // Cyber Dragon
      "bg-gradient-to-tr from-[#ff512f]/80 via-[#dd2476]/80 to-[#ff512f]/80",

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gradients.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className={`absolute inset-0 ${gradients[index]}`}
        />
      </AnimatePresence>

      {/* Company logo as background (faint) */}
      <Image
        src="/logo.png"
        alt="Career Lab Consulting Background Logo"
        fill
        priority
        className="object-contain opacity-10"
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-2xl" />
    </div>
  );
}
function LogoCloud() {
  return (
    <div className="mx-auto max-w-6xl py-12">
      <p className="text-center text-sm text-muted-foreground mb-6">Trusted tech our teams ship every day</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {logos.map((l) => (
          <Card key={l} className="border-dashed">
            <CardContent className="py-6 flex items-center justify-center">
              <span className="font-semibold tracking-wide text-muted-foreground">{l}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold tracking-tight">{value}</div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function SectionHeading({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      {kicker && <Badge variant="outline" className="mb-3">{kicker}</Badge>}
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc, points }: { icon: LucideIcon; title: string; desc: string; points: string[] }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full p-2"><Icon className="h-5 w-5" /></Badge>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="text-sm space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function ROIBlock() {
  const [agents, setAgents] = useState(3);
  const [avgHandleMin, setAvgHandleMin] = useState(12);
  const [volumePerDay, setVolumePerDay] = useState(800);
  const [costPerHour, setCostPerHour] = useState(7.5);

  const savings = useMemo(() => {
    const hoursSaved = (agents * volumePerDay * avgHandleMin) / 60 * 0.35; // 35% automation lift
    const monthly = hoursSaved * costPerHour * 22; // 22 working days
    const annual = monthly * 12;
    return { monthly: Math.round(monthly).toLocaleString(), annual: Math.round(annual).toLocaleString() };
  }, [agents, avgHandleMin, volumePerDay, costPerHour]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>ROI Estimator</CardTitle>
        <p className="text-sm text-muted-foreground">Quickly estimate savings from agentic AI automation.</p>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-sm"># of human agents today</label>
          <Input type="number" value={agents} onChange={(e) => setAgents(parseInt(e.target.value || "0"))} />
          <label className="text-sm">Avg handle time (minutes)</label>
          <Input type="number" value={avgHandleMin} onChange={(e) => setAvgHandleMin(parseInt(e.target.value || "0"))} />
          <label className="text-sm">Tickets/Tasks per day</label>
          <Input type="number" value={volumePerDay} onChange={(e) => setVolumePerDay(parseInt(e.target.value || "0"))} />
          <label className="text-sm">Loaded hourly cost (USD)</label>
          <Input type="number" value={costPerHour} onChange={(e) => setCostPerHour(parseFloat(e.target.value || "0"))} />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <KPI value={`$${savings.monthly}`} label="Estimated monthly savings" />
          <KPI value={`$${savings.annual}`} label="Estimated annual savings" />
        </div>
      </CardContent>
    </Card>
  );
}

function Hero() {
  const slideshowImages = [
    "/a1.png",
    "/a2.png",
    "/a3.png",
    "/a4.png",
    "/a5.png",
    "/a6.png",
    "/a7.png",
    "/a8.png",
    "/a9.png",
    "/a10.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000); // change every 5s
    return () => clearInterval(id);
  }, []);

    return (
   <div className="relative overflow-hidden">
  {/* Background layers */}
  <div className="absolute inset-0 z-[-10]">
    {/* Base background */}
    <div className="absolute inset-0 bg-background" />

    {/* Abstract image with softer opacity */}
    <Image
      src="/dlogo.png"
      alt="Abstract background"
      fill
      priority
      className="object-contain opacity-10 absolute right-0 max-w-[2400px] max-h-[1000px]"
    />

    {/* Radial gradient layer with blend mode */}
    <motion.div
      className="absolute inset-0"
      animate={{ backgroundPosition: ["-10% 50%", "110% 50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundSize: "200% 100%",
        backgroundImage:
          "radial-gradient(ellipse at 50% 50%, rgba(var(--primary-rgb), 0.05), transparent)",
        mixBlendMode: "screen",
      }}
    />

      {/* Floating glowing blobs */}
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-primary/10 top-[20%] left-[20%] blur-3xl"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ mixBlendMode: "screen" }}
      />

      <motion.div
        className="absolute h-96 w-96 rounded-full bg-secondary/5 bottom-[15%] right-[15%] blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ mixBlendMode: "screen" }}
      />
    </div>


      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="flex items-center justify-between gap-4">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl font-semibold leading-tight tracking-tight text-brown bg-transparent shadow-none"
          >
            Build, Ship & Scale
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Enterprise IT & <span className="text-primary">Agentic AI</span>
            </span>
          </motion.h1>

            <p className="mt-4 text-muted-foreground md:text-lg">
              Career Lab Consulting designs secure, production-grade platforms,
              services, and AI agents that deliver measurable impact in
              weeks—not quarters.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-orange-800 hover:from-primary/90 hover:to-orange-600 transition-colors duration-300 "
                asChild
              >
                <a href="#contact">
                  <Rocket className="h-4 w-4" /> Book a Demo
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 hover:bg-muted/50 transition-colors"
                asChild
              >
                <a href="#services">
                  <Sparkles className="h-4 w-4" /> Explore Services
                </a>
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <KPI value="250+" label="Projects shipped" />
              <KPI value="99.95%" label="SLA uptime" />
              <KPI value="24/7" label="Global support" />
            </div>
          </div>

         {/* Right content (Slideshow) */}
{/* Right content (Slideshow) */}
<motion.div
  key={slideshowImages[index]} // force re-render on change
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -50 }}
  transition={{ duration: 0.8 }}
  className="hidden md:flex w-full max-w-2xl justify-end items-center absolute right-0 top-1/2 -translate-y-1/2"
>
  {/* Fixed container for consistent sizing */}
  <div className="relative w-[450px] h-[800px]">
    <Image
      src={slideshowImages[index]}
      alt={`Slide ${index + 1}`}
      fill
      className="rounded-2xl shadow-xl object-cover"
    />
  </div>
</motion.div>




        </div>
      </div>
    </div>
  );
}
    
  

function AgenticShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5" /> Agentic AI, Explained</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Our agents reason over your data, plan tasks, call tools and APIs, and learn from outcomes—all with governance and guardrails.
          </p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={agenticFlowData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="agGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="currentColor" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="currentColor" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="step" />
                <YAxis hide />
                <RechartsTooltip />
                <Area type="monotone" dataKey="value" stroke="currentColor" fillOpacity={1} fill="url(#agGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {[
              { icon: Workflow, text: "Reason & plan multi-step work" },
              { icon: Server, text: "Call tools, APIs & databases" },
              { icon: ShieldCheck, text: "Human-in-the-loop & guardrails" },
              { icon: LineChart, text: "Continuous learning & evals" },
            ].map(({ icon: I, text }) => (
              <div key={text} className="flex items-center gap-2"><I className="h-4 w-4" /><span>{text}</span></div>
            ))}
          </div>
        </CardContent>
      </Card>
      <ROIBlock />
    </div>
  );
}

function TestimonialRail() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="flex transition-all duration-500" style={{ transform: `translateX(-${index * (100 / testimonials.length)}%)`, width: `${testimonials.length * 100}%` }}>
        {testimonials.map((t) => (
          <div key={t.name} className="flex-shrink-0 w-full md:w-1/3 px-2">
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Avatar><AvatarFallback>{t.initials}</AvatarFallback></Avatar>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">“{t.quote}”</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const { isDark, toggle } = useDarkMode();

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks! Our team will reach out.");
  };

  return (
    <>
      <Head>
        <title>Career Lab Consulting — IT Consulting, IT Services & Agentic AI</title>
        <meta name="description" content="Career Lab Consulting builds secure IT platforms, AI services and agentic AI solutions that deliver measurable business outcomes." />
        <meta property="og:title" content="Career Lab Consulting — IT & Agentic AI" />
        <meta property="og:description" content="Enterprise IT consulting, managed services, AI featured services and agentic AI solutions." />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Career Lab Consulting",
              url: "https://www.careerlabconsulting.com",
              sameAs: [
                "https://www.linkedin.com/company/career-lab-consulting"
              ],
              slogan: "Build, Ship & Scale Enterprise IT & Agentic AI",
              brand: "Career Lab Consulting",
              areaServed: "Global",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "sales@careerlabconsulting.com",
                telephone: "+91-00000-00000"
              }
            })
          }}
        />
      </Head>

      <AnimatedBackground />

      {/* Top bar */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/ilogo.png"
              alt="Career Lab Consulting Logo"
              width={17f0}
              height={200}
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground">{n.label}</a>
            ))}
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <TooltipProvider><Tooltip><TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </TooltipTrigger><TooltipContent>Toggle theme</TooltipContent></Tooltip></TooltipProvider>
              <Button asChild className="gap-2">
                <a href="#contact"><CalendarClock className="h-4 w-4" /> Book a Demo</a>
              </Button>
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2"><Workflow className="h-4 w-4" /> Menu</Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="mt-6 flex flex-col gap-4">
                  {navItems.map((n) => (
                    <a key={n.href} href={n.href} className="text-base" >{n.label}</a>
                  ))}
                  <Button className="mt-4" asChild><a href="#contact">Book a Demo</a></Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Hero */}
      <Hero />

      {/* ----------------- Ultra-Advanced Products Section ----------------- */}
<section
  id="products"
  className="relative py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
>
  {/* Decorative animated shapes */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply opacity-30 animate-blob"></div>
  <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>

  <div className="container mx-auto px-6 text-center relative z-10">
    <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-gray-700">
      Our Flagship Products
    </h2>
    <p className="text-gray-700 dark:text-gray-100 mb-16 max-w-3xl mx-auto text-lg">
      Explore our cutting-edge solutions crafted for AI enthusiasts and professionals. From immersive workshops to advanced platforms, we empower innovation.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Product 1 - Agentic AI Workshop */}
      <motion.div
        className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] transition-transform duration-500 cursor-pointer"
        whileHover={{ y: -10 }}
      >
        <div className="mb-5">
          <div className="text-6xl mb-3">🤖</div>
          <h3 className="text-3xl font-bold text-white mb-2">
            Agentic AI Workshop
          </h3>
          <p className="text-gray-200">
            Intensive hands-on workshops to create agentic AI solutions and build real-world projects with guidance from AI experts.
          </p>
        </div>
        <a
          href="#"
          className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Learn More
        </a>
      </motion.div>

      {/* Product 2 - InternX Platform */}
      <motion.div
        className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-transform duration-500 cursor-pointer"
        whileHover={{ y: -10 }}
      >
        <div className="mb-5">
          <div className="text-6xl mb-3">💼</div>
          <h3 className="text-3xl font-bold text-white mb-2">
            InternX Platform
          </h3>
          <p className="text-gray-200">
            Connect with AI projects, internships, and networking opportunities on a platform designed for AI professionals.
          </p>
        </div>
        <a
          href="#"
          className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore Platform
        </a>
      </motion.div>
    </div>
  </div>
</section>

{/* Tailwind CSS animation for blobs */}
<style jsx>{`
  @keyframes blob {
    0%, 100% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }
  .animate-blob {
    animation: blob 8s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
`}</style>


      {/* Logo Cloud */}
      <LogoCloud />

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading kicker="Our Services" title="IT Consulting, IT Services, AI & Agentic AI" subtitle="From strategy to production ops—delivered responsibly, securely, and fast." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            icon={Building2}
            title="IT Consulting"
            desc="Architecture, strategy, cost optimization, cloud & hybrid."
            points={["Enterprise architecture", "Cloud adoption & FinOps", "Security & compliance", "Solution blueprints"]}
          />
          <ServiceCard
            icon={Server}
            title="IT Services"
            desc="Build/modernize platforms, data, APIs and 24/7 managed ops."
            points={["Platform engineering", "Data platforms & ELT", "API & integration", "SRE & DevOps"]}
          />
          <ServiceCard
            icon={Cpu}
            title="AI Featured Services"
            desc="RAG, NLP, CV, MLOps and evaluation-first delivery."
            points={["Secure RAG & search", "Personalization & predictions", "MLOps & evals", "Prompt & model ops"]}
          />
          <ServiceCard
            icon={Bot}
            title="Agentic AI Services"
            desc="Planning, tooling, and governance for autonomous agents."
            points={["Multi-agent systems", "Tool-use & orchestration", "Guardrails & HITL", "Observability & audits"]}
          />
        </div>
      </section>

      {/* Agentic AI Showcase + ROI */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 pb-14">
        <AgenticShowcase />
      </section>

      {/* Industries & Use-cases */}
      <section id="industries" className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading kicker="Industries" title="Where we move the needle" />
        <Tabs defaultValue="banking" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="health">Healthcare</TabsTrigger>
            <TabsTrigger value="retail">Retail</TabsTrigger>
            <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            <TabsTrigger value="saas">SaaS</TabsTrigger>
          </TabsList>
          <TabsContent value="banking">
            <Card><CardContent className="p-6 grid md:grid-cols-3 gap-4">
              {[
                "KYC automation agents",
                "Fraud triage with graph + LLM",
                "Credit decisioning workbenches",
              ].map((t) => <Badge key={t} variant="secondary" className="justify-start py-2">{t}</Badge>)}
            </CardContent></Card>
          </TabsContent>
          <TabsContent value="health">
            <Card><CardContent className="p-6 grid md:grid-cols-3 gap-4">
              {[
                "Clinical note summarization",
                "RAG over guidelines",
                "Prior auth copilots",
              ].map((t) => <Badge key={t} variant="secondary" className="justify-start py-2">{t}</Badge>)}
            </CardContent></Card>
          </TabsContent>
          <TabsContent value="retail">
            <Card><CardContent className="p-6 grid md:grid-cols-3 gap-4">
              {[
                "Product discovery search",
                "Personalized promotions",
                "Store ops copilots",
              ].map((t) => <Badge key={t} variant="secondary" className="justify-start py-2">{t}</Badge>)}
            </CardContent></Card>
          </TabsContent>
          <TabsContent value="manufacturing">
            <Card><CardContent className="p-6 grid md:grid-cols-3 gap-4">
              {[
                "Quality inspection CV",
                "Maintenance copilots",
                "Supplier intelligence",
              ].map((t) => <Badge key={t} variant="secondary" className="justify-start py-2">{t}</Badge>)}
            </CardContent></Card>
          </TabsContent>
          <TabsContent value="saas">
            <Card><CardContent className="p-6 grid md:grid-cols-3 gap-4">
              {[
                "Sales/CS agent copilots",
                "Security & compliance GPTs",
                "Docs & support RAG",
              ].map((t) => <Badge key={t} variant="secondary" className="justify-start py-2">{t}</Badge>)}
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading kicker="Proof" title="Recent impact" />
        <div className="grid md:grid-cols-3 gap-4">
          {caseStudies.map((c) => (
            <Card key={c.company} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{c.tag}</Badge>
                  <div className="text-xs text-muted-foreground">Case study</div>
                </div>
                <CardTitle className="text-lg">{c.headline}</CardTitle>
                <p className="text-sm text-muted-foreground">{c.company}</p>
              </CardHeader>
              <CardContent className="flex gap-3">
                {c.kpis.map((k) => (
                  <Badge key={k} variant="secondary">{k}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading kicker="Resources" title="Start with the right blueprint" />
        <div className="grid md:grid-cols-3 gap-4">
          {resources.map((r) => (
            <Card key={r.title}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{r.tag}</Badge>
                  <CardTitle className="text-base">{r.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="#contact">Download <ArrowRight className="h-4 w-4" /></a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading kicker="What clients say" title="Outcomes over optics" />
        <TestimonialRail />
      </section>

        {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading kicker="FAQ" title="Answers to common questions" />
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

        {/* Careers */}
      <section id="careers" className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading kicker="Careers" title="Join our mission" subtitle="We’re hiring across engineering, consulting and client success." />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { role: "AI Research Engineer", location: "Remote / Bangalore" },
            { role: "Next.js Frontend Developer", location: "Hybrid / Pune" },
            { role: "Client Success Manager", location: "Remote" },
          ].map((job) => (
            <Card key={job.role}>
              <CardHeader>
                <CardTitle className="text-lg">{job.role}</CardTitle>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading kicker="Contact" title="Let’s build together" subtitle="Reach out and our team will get back to you within 24 hours." />
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleLeadSubmit} className="space-y-4">
            <Input placeholder="Full Name" required />
            <Input type="email" placeholder="Work Email" required />
            <Input placeholder="Company" />
            <Textarea rows={4} placeholder="Your message..." />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p><Mail className="inline h-4 w-4 mr-2" /> sales@careerlabconsulting.com</p>
            <p><Phone className="inline h-4 w-4 mr-2" /> +91-00000-00000</p>
            <p>123 Tech Park, Bangalore, India</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="220"
              loading="lazy"
              className="rounded-md border-0"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Career Lab Consulting Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="font-semibold">Career Lab Consulting</h3>
            </div>
            <p className="mt-2 text-muted-foreground">
              Secure IT platforms & Agentic AI solutions for enterprises.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#services">Services</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <p className="mt-2">Follow us on LinkedIn</p>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Career Lab Consulting. All rights reserved.
        </p>
      </footer>
    </>
  );
}
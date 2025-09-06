"use client";
import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { X, Info } from "lucide-react";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
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

import {
  FaCogs,
  FaLightbulb,
  FaIndustry,
  FaBookOpen,
  FaServer,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

// function Navbar() {
//   return (
//     <nav className="flex justify-center gap-4 p-6 bg-gray-900 shadow-lg">
//       {navItems.map((item, index) => (
//         <a
//           key={index}
//           href={item.href}
//           className="
//             group flex items-center gap-2 px-5 py-3 rounded-xl
//             bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500
//             text-white font-semibold tracking-wide uppercase
//             shadow-md shadow-purple-900/40
//             transition-all duration-500 ease-out
//             hover:scale-105 hover:shadow-xl hover:shadow-pink-500/60
//           "
//         >
//           {/* Icon */}
//           <span className="text-lg relative z-10">{item.icon}</span>

//           {/* Label */}
//           <span className="relative z-10">{item.label}</span>

//           {/* Animated background glow */}
//           <span className="
//             absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500
//             opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-xl rounded-xl
//           "></span>
//         </a>
//       ))}
//     </nav>
//   );
// }

// // export default Navbar;

const logos = [
  "Azure",
  "AWS",
  "GCP",
  "OpenAI",
  "LangChain",
  "HuggingFace",
  "Snowflake",
  "Databricks",
];

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
  {
    company: "FinEdge Bank",
    headline: "Agentic AI for Customer Ops",
    kpis: ["-42% TTR", "+28% CSAT", "99.95% uptime"],
    tag: "Banking",
  },
  {
    company: "HealthNova",
    headline: "Clinical NLP & RAG",
    kpis: ["-21% admin time", "+2.1h saved/clinician/week"],
    tag: "Healthcare",
  },
  {
    company: "RetailHub",
    headline: "Real-time Recommendations",
    kpis: ["+18% conversion", "+11% AOV"],
    tag: "Retail",
  },
];

const faq = [
  {
    q: "What is Agentic AI?",
    a: "Agentic AI uses autonomous, tool-using agents that can reason, plan, act, and learn to complete multi-step business tasks securely.",
  },
  {
    q: "Do you integrate with on-prem systems?",
    a: "Yes. We work across cloud, hybrid, and on-prem. Connectors cover databases, queues, ERPs, CRMs, and custom APIs.",
  },
  {
    q: "How do you handle data privacy?",
    a: "We follow least-privilege principles, encrypted data paths, audit logs, SOC2-ready processes, and region-bound deployments.",
  },
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
        src="/rwhite.png"
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
      <p className="text-center text-lg font-bold text-black mb-4">
        Trusted tech our teams ship every day
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {logos.map((l) => (
          <Card key={l} className="border-dashed">
            <CardContent className="py-6 flex items-center justify-center">
              <span className="font-semibold tracking-wide text-muted-foreground">
                {l}
              </span>
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
      <div className="text-3xl md:text-4xl font-bold tracking-tight">
        {value}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      {kicker && (
        <Badge variant="outline" className="mb-3">
          {kicker}
        </Badge>
      )}
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  points,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full p-2">
            <Icon className="h-5 w-5" />
          </Badge>
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
    const hoursSaved = ((agents * volumePerDay * avgHandleMin) / 60) * 0.35; // 35% automation lift
    const monthly = hoursSaved * costPerHour * 22; // 22 working days
    const annual = monthly * 12;
    return {
      monthly: Math.round(monthly).toLocaleString(),
      annual: Math.round(annual).toLocaleString(),
    };
  }, [agents, avgHandleMin, volumePerDay, costPerHour]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>ROI Estimator</CardTitle>
        <p className="text-sm text-muted-foreground">
          Quickly estimate savings from agentic AI automation.
        </p>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-sm"># of human agents today</label>
          <Input
            type="number"
            value={agents}
            onChange={(e) => setAgents(parseInt(e.target.value || "0"))}
          />
          <label className="text-sm">Avg handle time (minutes)</label>
          <Input
            type="number"
            value={avgHandleMin}
            onChange={(e) => setAvgHandleMin(parseInt(e.target.value || "0"))}
          />
          <label className="text-sm">Tickets/Tasks per day</label>
          <Input
            type="number"
            value={volumePerDay}
            onChange={(e) => setVolumePerDay(parseInt(e.target.value || "0"))}
          />
          <label className="text-sm">Loaded hourly cost (USD)</label>
          <Input
            type="number"
            value={costPerHour}
            onChange={(e) => setCostPerHour(parseFloat(e.target.value || "0"))}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <KPI
            value={`$${savings.monthly}`}
            label="Estimated monthly savings"
          />
          <KPI value={`$${savings.annual}`} label="Estimated annual savings" />
        </div>
      </CardContent>
    </Card>
  );
}

// function KPI({ value, label }: { value: string; label: string }) {
//   return (
//     <div className="flex flex-col">
//       <span className="text-lg font-bold">{value}</span>
//       <span className="text-white/70">{label}</span>
//     </div>
//   );
// }
function Hero() {
  const slideshowVideos = ["/b.mp4", "/a.mp4"]; // public/
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoEnd = () => {
    setIndex((prev) => (prev + 1) % slideshowVideos.length);
  };

  return (
    <div className="relative overflow-hidden h-screen flex">
      {/* Left: Video Background */}
      <div className="relative w-[80%] h-full">
        <video
          key={index} // force reload when index changes
          src={slideshowVideos[index]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Right: Popup Panel */}
      <div className="w-[20%] h-full relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-full w-full bg-black/70 backdrop-blur-xl shadow-2xl border-l border-white/10 p-8 z-20"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Hero Content */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl font-extrabold leading-snug tracking-tight text-white"
              >
                Build, Ship & Scale
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-lg">
                  Enterprise IT & Agentic AI
                </span>
              </motion.h1>

              <p className="mt-4 text-base md:text-lg text-gray-200/90">
                Career Lab Consulting designs secure, production-grade
                platforms, services, and AI agents that deliver measurable
                impact in weeks—not quarters.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg"
                  asChild
                >
                  <a href="#contact">
                    <Rocket className="h-4 w-4" /> Book a Demo
                  </a>
                </Button>

                <Button
                  size="sm"
                  className="gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                            shadow-md hover:shadow-lg transition-all duration-300 rounded-md"
                  asChild
                >
                  <a href="#services">
                    <Sparkles className="h-4 w-4" /> Explore Services
                  </a>
                </Button>
              </div>

              {/* KPIs */}
              <div className="mt-8 grid grid-cols-1 gap-4 text-white text-sm">
                <KPI value="3520+" label="Projects Delivered" />
                <KPI value="92.95%" label="SLA uptime" />
                <KPI value="24/7" label="Global support" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Reopen Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-6 right-6 bg-black/70 text-white px-4 py-2 rounded-lg shadow-md hover:bg-black/90 transition z-20"
          >
            Open Info
          </button>
        )}
      </div>
    </div>
  );
}

function AgenticShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" /> Agentic AI, Explained
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Our agents reason over your data, plan tasks, call tools and APIs,
            and learn from outcomes—all with governance and guardrails.
          </p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={agenticFlowData}
                margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
              >
                <defs>
                  <linearGradient id="agGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="currentColor"
                      stopOpacity={0.35}
                    />
                    <stop
                      offset="95%"
                      stopColor="currentColor"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="step" />
                <YAxis hide />
                <RechartsTooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="currentColor"
                  fillOpacity={1}
                  fill="url(#agGrad)"
                />
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
              <div key={text} className="flex items-center gap-2">
                <I className="h-4 w-4" />
                <span>{text}</span>
              </div>
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
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      4500
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-all duration-500"
        style={{
          transform: `translateX(-${index * (100 / testimonials.length)}%)`,
          width: `${testimonials.length * 100}%`,
        }}
      >
        {testimonials.map((t) => (
          <div key={t.name} className="flex-shrink-0 w-full md:w-1/3 px-2">
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.title}
                    </div>
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

const navItems = [
  { href: "./home/services", label: "Services", icon: <FaCogs /> },
  { href: "./home/solutions", label: "Solutions", icon: <FaLightbulb /> },
  { href: "./home/industries", label: "Industries", icon: <FaIndustry /> },
  { href: "./home/resources", label: "Resources", icon: <FaServer /> },
  { href: "./home/careers", label: "Careers", icon: <FaBriefcase /> },
  { href: "./home/forms", label: "Forms", icon: <FaEnvelope /> },
  { href: "./home/about", label: "About Us", icon: <FaBookOpen /> },
  { href: "./home/contactus", label: "Contact", icon: <FaEnvelope /> },
];

export default function HomePage() {
  const { isDark, toggle } = useDarkMode();

  const [lead, setLead] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const copyrightYear = new Date().getFullYear();

  const handleLeadChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can send 'lead' to your backend or API
    alert(`Thanks ${lead.name}! Our team will reach out to ${lead.email}.`);
    setLead({ name: "", email: "", company: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>
          Career Lab Consulting — IT Consulting, IT Services & Agentic AI
        </title>
        <meta
          name="description"
          content="Career Lab Consulting builds secure IT platforms, AI services and agentic AI solutions that deliver measurable business outcomes."
        />
        <meta
          property="og:title"
          content="Career Lab Consulting — IT & Agentic AI"
        />
        <meta
          property="og:description"
          content="Enterprise IT consulting, managed services, AI featured services and agentic AI solutions."
        />
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
                "https://www.linkedin.com/company/career-lab-consulting",
              ],
              slogan: "Build, Ship & Scale Enterprise IT & Agentic AI",
              brand: "Career Lab Consulting",
              areaServed: "Global",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "sales@careerlabconsulting.com",
                telephone: "+91-00000-00000",
              },
            }),
          }}
        />
      </Head>

      <AnimatedBackground />

      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          {/* Logo Section (independent) */}
          <div className="flex items-center">
            <Image
              src="/cwhite.png"
              alt="Career Lab Consulting Logo"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

          {/* Navigation Bar */}
          <div className="relative hidden md:flex items-center gap-2 px-6 py-0.5 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black border border-gray-600 shadow-2xl overflow-hidden">
            {/* Starry animation background */}
            <div className="absolute inset-0 z-0 animate-pulse">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
            </div>

            {/* Navigation Links (all items) */}
            <div className="relative z-10 flex items-center gap-1">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="px-4 py-2 text-sm font-semibold text-gray-200 hover:text-white bg-gray-800/60 hover:bg-gray-700/80 border border-white/60 rounded-lg shadow-md hover:shadow-white/30 transition-all duration-300"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right-side buttons */}
          <div className="relative z-10 flex items-center gap-2 ml-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggle}
                    className="text-gray-300 hover:text-yellow-400 hover:bg-gray-800"
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle theme</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              asChild
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md"
            >
              <a href="#contact">
                <CalendarClock className="h-4 w-4" /> Book a Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Workflow className="h-4 w-4" /> Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gray-900 text-white">
              <div className="mt-6 flex flex-col gap-4">
                {navItems
                  .filter((n) => n.label !== "About Us")
                  .map((n) => (
                    <a
                      key={n.href}
                      href={n.href}
                      className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                    >
                      {n.label}
                    </a>
                  ))}
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="#contact">Book a Demo</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
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
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-gray-700 text-transparent bg-clip-text">
            Our Flagship Products
          </h2>

          <p className="text-gray-700 dark:text-gray-100 mb-16 max-w-3xl mx-auto text-lg">
            Explore our cutting-edge solutions crafted for AI enthusiasts and
            professionals. From immersive workshops to advanced platforms, we
            empower innovation.
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
                  Intensive hands-on workshops to create agentic AI solutions
                  and build real-world projects with guidance from AI experts.
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
                  Connect with AI projects, internships, and networking
                  opportunities on a platform designed for AI professionals.
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
          0%,
          100% {
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

      {/* ----------------- Services Section ----------------- */}
      <section
        id="services"
        className="mx-auto max-w-7xl w-full px-6 py-20 min-h-[400px] bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg border border-gray-200 my-20"
      >
        {/* Section Heading */}
        <SectionHeading
          kicker="Our Services"
          title="IT Consulting, IT Services, AI & Agentic AI"
          subtitle="From strategy to production ops—delivered responsibly, securely, and fast."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <ServiceCard
            icon={Building2}
            title="IT Consulting"
            desc="Architecture, strategy, cost optimization, cloud & hybrid."
            points={[
              "Enterprise architecture",
              "Cloud adoption & FinOps",
              "Security & compliance",
              "Solution blueprints",
            ]}
          />
          <ServiceCard
            icon={Server}
            title="IT Services"
            desc="Build/modernize platforms, data, APIs and 24/7 managed ops."
            points={[
              "Platform engineering",
              "Data platforms & ELT",
              "API & integration",
              "SRE & DevOps",
            ]}
          />
          <ServiceCard
            icon={Cpu}
            title="AI Featured Services"
            desc="RAG, NLP, CV, MLOps and evaluation-first delivery."
            points={[
              "Secure RAG & search",
              "Personalization & predictions",
              "MLOps & evals",
              "Prompt & model ops",
            ]}
          />
          <ServiceCard
            icon={Bot}
            title="Agentic AI Services"
            desc="Planning, tooling, and governance for autonomous agents."
            points={[
              "Multi-agent systems",
              "Tool-use & orchestration",
              "Guardrails & HITL",
              "Observability & audits",
            ]}
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
            <Card>
              <CardContent className="p-6 grid md:grid-cols-3 gap-4">
                {[
                  "KYC automation agents",
                  "Fraud triage with graph + LLM",
                  "Credit decisioning workbenches",
                ].map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="justify-start py-2"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="health">
            <Card>
              <CardContent className="p-6 grid md:grid-cols-3 gap-4">
                {[
                  "Clinical note summarization",
                  "RAG over guidelines",
                  "Prior auth copilots",
                ].map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="justify-start py-2"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="retail">
            <Card>
              <CardContent className="p-6 grid md:grid-cols-3 gap-4">
                {[
                  "Product discovery search",
                  "Personalized promotions",
                  "Store ops copilots",
                ].map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="justify-start py-2"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="manufacturing">
            <Card>
              <CardContent className="p-6 grid md:grid-cols-3 gap-4">
                {[
                  "Quality inspection CV",
                  "Maintenance copilots",
                  "Supplier intelligence",
                ].map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="justify-start py-2"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="saas">
            <Card>
              <CardContent className="p-6 grid md:grid-cols-3 gap-4">
                {[
                  "Sales/CS agent copilots",
                  "Security & compliance GPTs",
                  "Docs & support RAG",
                ].map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="justify-start py-2"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
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
                  <div className="text-xs text-muted-foreground">
                    Case study
                  </div>
                </div>
                <CardTitle className="text-lg">{c.headline}</CardTitle>
                <p className="text-sm text-muted-foreground">{c.company}</p>
              </CardHeader>
              <CardContent className="flex gap-3">
                {c.kpis.map((k) => (
                  <Badge key={k} variant="secondary">
                    {k}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading
          kicker="Resources"
          title="Start with the right blueprint"
        />
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
                  <a href="#contact">
                    Download <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <SectionHeading
          kicker="What clients say"
          title="Outcomes over optics"
        />
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
        <SectionHeading
          kicker="Careers"
          title="Join our mission"
          subtitle="We’re hiring across engineering, consulting and client success."
        />
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

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-10 bg-gray-50">
        <SectionHeading
          kicker="Contact"
          title="Let’s build together"
          subtitle="Reach out and our team will get back to you within 24 hours."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Contact Form */}
          <form
            onSubmit={handleLeadSubmit}
            className="space-y-4 bg-white p-5 rounded-xl shadow-md"
          >
            <Input
              name="name"
              value={lead.name}
              onChange={handleLeadChange}
              placeholder="Full Name"
              required
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <Input
              name="email"
              type="email"
              value={lead.email}
              onChange={handleLeadChange}
              placeholder="Work Email"
              required
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <Input
              name="company"
              value={lead.company}
              onChange={handleLeadChange}
              placeholder="Company"
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <Textarea
              name="message"
              value={lead.message}
              onChange={handleLeadChange}
              rows={3}
              placeholder="Your message..."
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-900">
            <p className="flex items-center">
              <Mail className="inline h-5 w-5 mr-2 text-indigo-600" />{" "}
              Info@careerlabconsulting.com
            </p>
            <p className="flex items-center">
              <Phone className="inline h-5 w-5 mr-2 text-indigo-600" /> +91
              87002 36923
            </p>
            <p>D-43, 1st Floor, Sector 28, Noida, Uttar Pradesh 201303</p>
            <p>
              A-32, 2nd Floor, Shantipura Main Rd, Phase 2, Electronic City,
              Bengaluru, Karnataka 560100
            </p>

            {/* Noida Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9519579986654!2d77.32480448126773!3d28.571205313038014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b02b6f908d%3A0x3f9da383c70066be!2sCareer%20Lab%20Consulting%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1757045427101!5m2!1sen!2sus"
              width="100%"
              height="180"
              className="rounded-xl border-0 mt-2"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bengaluru Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31119.73534337647!2d77.64887904931072!3d12.845413247322576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA-32%2C%202nd%20Floor%2C%20Shantipura%20Main%20Rd%2C%20Phase%202%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sus!4v1757045745636!5m2!1sen!2sus"
              width="100%"
              height="180"
              loading="lazy"
              className="rounded-xl border-0 mt-2"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Subscribe Newsletter Section */}
      <section className="bg-gray-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6 text-gray-300">
            Get the latest updates and offers right in your inbox.
          </p>
          {/* Newsletter Form with state and handler */}
          {(() => {
            const [email, setEmail] = useState("");
            const handleNewsletterSubmit = (
              e: React.FormEvent<HTMLFormElement>
            ) => {
              e.preventDefault();
              if (email.trim()) {
                alert(`Subscribed with: ${email}`);
                setEmail("");
              }
            };
            return (
              <form
                className="flex flex-col sm:flex-row justify-center gap-2"
                onSubmit={handleNewsletterSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-900"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded font-semibold transition"
                >
                  Subscribe
                </button>
              </form>
            );
          })()}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 border-t mt-12">
        <div className="mx-auto max-w-7xl px-6 py-10 space-y-10">
          {/* Horizontal Sections */}
          <div className="flex flex-wrap justify-between gap-12 text-sm">
            {/* Capabilities */}
            <div className="flex-1 min-w-[220px]">
              <h4 className="font-semibold text-white mb-3">Capabilities</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI & Generative AI",
                  "Cloud",
                  "Engineering",
                  "Software",
                  "Business Process Operations",
                  "Cybersecurity",
                  "Data and AI",
                  "Digital Design and Manufacturing Services",
                  "Digital Engineering",
                  "Digital Workplace",
                  "EdTech",
                  "Enterprise Applications Transformation",
                  "Enterprise Platforms and Edge Services",
                  "Enterprise Transformation Advisory",
                  "Global Capability Center (GCC)",
                  "Intelligent Operations",
                  "Modern Applications",
                  "Networks",
                  "Operational Technology",
                  "Physical AI and AIoT",
                  "Product Engineering",
                  "Supply Chain",
                  "Unified Service Management (USM)",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-2 py-0.5 border border-gray-800 rounded hover:border-gray-500 hover:text-gray-200 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="flex-1 min-w-[220px]">
              <h4 className="font-semibold text-white mb-3">Industries</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Aerospace and Defense",
                  "Automotive",
                  "Consumer Goods",
                  "Energy and Utilities",
                  "Life Sciences and Healthcare",
                  "Manufacturing",
                  "Mining and Natural Resources",
                  "Oil and Gas",
                  "Public Sector",
                  "Retail",
                  "Technology",
                  "Telecom Media and Entertainment Services",
                  "Travel, Transport, Logistics & Hospitality",
                  "Financial Services",
                  "Banking",
                  "Capital Markets",
                  "Financial Crime Compliance and Risk",
                  "Fintech",
                  "Insurance",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-2 py-0.5 border border-gray-800 rounded hover:border-gray-500 hover:text-gray-200 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Ecosystem */}
            <div className="flex-1 min-w-[220px]">
              <h4 className="font-semibold text-white mb-3">Ecosystem</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Who We Are",
                  "About Us",
                  "Analyst Recognitions",
                  "Annual Report 2025",
                  "Awards and Recognition",
                  "Code of Business Ethics and Conduct",
                  "Corporate Social Responsibility",
                  "Diversity, Equity and Inclusion",
                  "Global Presence",
                  "Investor Relations",
                  "Leadership",
                  "Newsroom",
                  "Privacy Trust Center",
                  "Strategic Alliances",
                  "Sustainability",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-2 py-0.5 border border-gray-800 rounded hover:border-gray-500 hover:text-gray-200 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources + Careers + Global Presence */}
            <div className="flex-1 min-w-[220px]">
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Trends and Insights",
                  "Case Studies",
                  "Events and Webinars",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-2 py-0.5 border border-gray-800 rounded hover:border-gray-500 hover:text-gray-200 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <h4 className="font-semibold text-white mt-5 mb-3">Careers</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Careers Overview",
                  "Meet our people",
                  "Explore job opportunities",
                  "Careers by LoB",
                  "Americas",
                  "Asia Pacific",
                  "Europe and Africa",
                  "India",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-2 py-0.5 border border-gray-800 rounded hover:border-gray-500 hover:text-gray-200 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <h4 className="font-semibold text-white mt-5 mb-3">
                Global Presence
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Americas", "EMEA", "APAC"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-2 py-0.5 border border-gray-800 rounded hover:border-gray-500 hover:text-gray-200 transition"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Logo */}
          <div className="mt-6 mb-4 flex justify-end">
            <img
              src="/rwhite.png"
              alt="Company Logo"
              className="h-12 object-contain mr-10 -mt-15 mb-0"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700"></div>

          {/* Social + Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
            <div className="flex flex-wrap gap-2 text-gray-400">
              {[
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/careerlabconsultingofficial",
                },
                { name: "Twitter", url: "https://x.com/CareerLabConsul" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/company/38144534",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/careerlabconsultingofficial",
                },
                {
                  name: "YouTube",
                  url: "https://www.youtube.com/@careerlabconsulting4691",
                },
                {
                  name: "Threads",
                  url: "https://www.instagram.com/careerlabconsultingofficial",
                },
                {
                  name: "Quora",
                  url: "https://www.quora.com/profile/Career-Lab-Consulting-2",
                },
                {
                  name: "Reddit",
                  url: "https://www.reddit.com/user/Fantastic_Offer861/",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 border-2 border-gray-400 rounded hover:border-gray-500 hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-gray-600">
              {[
                { name: "Contact Us", href: "/home/contactus" },
                { name: "Disclaimer", href: "/home/disclaimer" },
                { name: "Privacy Statement", href: "/home/privacy" },
                { name: "Terms of Use", href: "/home/terms" },
                { name: "Sitemap", href: "/home/sitemap" },
                { name: "Raise a Grievance", href: "/home/grievance" },
                { name: "Cookies Policy", href: "/home/cookies" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-2 py-0.5 border border-gray-800 rounded hover:border-gray-500 hover:text-gray-200 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-500 text-xs">
            © {copyrightYear} Career Lab Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

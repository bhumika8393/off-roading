import Hero from "@/components/Hero";
import MetricsDashboard from "@/components/MetricsDashboard";
import SegmentationSlider from "@/components/SegmentationSlider";
import SegmentationClasses from "@/components/SegmentationClasses";
import SideBySideResult from "@/components/SideBySideResult";
import PerClassIoUChart from "@/components/PerClassIoUChart";
import { Brain, Layers, Shield, Zap, Globe, Database } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-32">
      <Hero />

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em] mb-4">Core Competencies</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight">System Performance <br className="hidden md:block" /> & Benchmarking</h3>
            </div>
            <p className="text-foreground/50 max-w-sm mb-1">
              Our model architecture has been optimized for low-latency inference without compromising on segmentation precision.
            </p>
          </div>
          <MetricsDashboard />
        </div>
      </section>

      <SegmentationClasses />

      <SideBySideResult />

      {/* Interactive Demo Preview */}
      <section className="px-6 bg-white/[0.02] py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-mono text-accent-purple uppercase tracking-[0.3em] mb-4">Visual Verification</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Pixel-Perfect Classification in Real-Time</h3>
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Experience the precision of our tailored SegFormer architecture. The model distinguishes between complex desert features including dry bushes, ground clutter, and various rock formations.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: Shield, title: "Robust to Occlusion", desc: "Handles partial visibility of terrain features." },
                { icon: Brain, title: "Context Aware", desc: "Understands spatial relationships between sky, horizon, and ground." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/demo" className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-foreground/10 hover:text-white transition-all inline-block">
              Launch Full Demo
            </Link>
          </div>

          <div className="relative">
            <SegmentationSlider
              beforeImage="/demo-raw.svg"
              afterImage="/demo-seg.svg"
            />
            {/* Legend */}
            <div className="absolute -bottom-10 left-0 right-0 p-6 glass rounded-2xl flex flex-wrap gap-4 justify-center">
              {[
                { label: "Trees", color: "#22c55e" },
                { label: "Rocks", color: "#64748b" },
                { label: "Dry Bush", color: "#f59e0b" },
                { label: "Sky", color: "#3b82f6" },
                { label: "Ground", color: "#78350f" }
              ].map(cls => (
                <div key={cls.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cls.color }} />
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">{cls.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-[0.3em] mb-4">Detailed Performance</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Accuracy Breakthroughs</h3>
        </div>
        <PerClassIoUChart />
      </section>

      {/* Digital Twin Section */}
      <section className="px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-accent-blue uppercase tracking-[0.3em] mb-4">Data Origin</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-12">Synthetic Genesis with Falcon Platform</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Unseen Environments", desc: "Training on environments UGV has never visited." },
              { icon: Database, title: "Automatic Labeling", desc: "100% accurate pixel-level masks generated in simulation." },
              { icon: Zap, title: "Domain Shift", desc: "Techniques used to bridge simulation and real-world results." }
            ].map((item, i) => (
              <div key={i} className="p-8 glass-card rounded-3xl">
                <item.icon className="w-10 h-10 text-accent-blue mx-auto mb-6" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

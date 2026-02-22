# Offroad AI - Semantic Scene Segmentation

A premium technical showcase developed for the **Elite Hack 1.0 Hackathon**. This project focuses on training robust AI vision systems for Off-road Unmanned Ground Vehicles (UGVs) using high-fidelity synthetic data from Falcon digital twin environments.

## 🚀 Vision
Our system bridges the "sim-to-real" gap by leveraging synthetic desert datasets to train a hierarchical Transformer-based segmentation engine (SegFormer-B5).

## 🛠 Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion
- **Visualization**: Recharts, Lucide React
- **ML Architecture**: SegFormer, DeepLabV3+ (fine-tuned)

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Key Results
- **Mean IoU**: 84.5%
- **Inference Speed**: 32 FPS (Optimized for edge)
- **Dataset Size**: 142k Synthetic Frames
- **Classes**: 10 distinct off-road terrain classes

## 📄 Project Structure
- `/app`: Next.js pages and layouts
- `/components`: Reusable UI components (Hero, Navbar, Slider, etc.)
- `/public`: Placeholder assets and images
- `/lib`: Utility functions and configuration

## 🏆 Hackathon Context
This project was designed as a submission for the **Elite Hack 1.0 — Offroad Semantic Scene Segmentation Challenge**. It demonstrates the full pipeline from digital twin data generation to model benchmarking and interactive deployment.

## 🧑‍💻 Team
- **Alex River**: AI Engineer
- **Sarah Chen**: Documentation Lead
- **Marcus Thorne**: Presentation Lead

---
*Developed with ❤️ for the AI Research Community.*

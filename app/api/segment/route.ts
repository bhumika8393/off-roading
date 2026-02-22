import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Simple mock API for segmentation inference
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return NextResponse.json({
        success: true,
        confidence: 0.942,
        latency: "28ms",
        classes_detected: ["Sand", "Rock", "Dry Bush", "Sky"],
        message: "Inference completed on SegFormer-B5 backend."
    });
}

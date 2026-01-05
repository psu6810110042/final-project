// frontend/src/app/page.tsx
"use client"; // Client component for simplicity now
import { useEffect, useState } from "react";

export default function Home() {
    const [status, setStatus] = useState<string>("Loading...");

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/health`)
            .then((res) => res.json())
            .then((data) => setStatus(data))
            .catch(() => setStatus("Backend Offline"));
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900 text-white">
            <h1 className="text-4xl font-bold mb-4">
                Medicine Store Professional
            </h1>
            <div className="p-6 border border-slate-700 rounded-xl bg-slate-800">
                <p>
                    System Status:{" "}
                    <span className="text-green-400 font-mono">{status}</span>
                </p>
            </div>
        </main>
    );
}

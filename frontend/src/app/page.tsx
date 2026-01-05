import { getBaseUrl } from "@/lib/api";

// This function works on BOTH Server and Client!
async function checkSystemStatus() {
    const baseUrl = getBaseUrl();
    console.log(`Fetching from: ${baseUrl}`); // Debugging check

    try {
        const res = await fetch(`${baseUrl}/health`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed");
        return res.json();
    } catch (err) {
        return "Offline";
    }
}

export default async function Home() {
    // This runs on the Server (SSR)
    const status = await checkSystemStatus();

    return (
        <main className="p-10">
            <h1>Medicine Store</h1>
            <p>Status: {status}</p>
        </main>
    );
}

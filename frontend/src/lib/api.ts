export const getBaseUrl = () => {
    // 1. Check if we are running on the Server (Docker/Node.js)
    if (typeof window === "undefined") {
        // Use the internal Docker network URL
        // Fallback to localhost if the variable isn't set (e.g. running npm run dev locally)
        return process.env.INTERNAL_API_URL || "http://localhost:8000/api";
    }

    // 2. We are running in the Browser
    // Use the public URL (localhost)
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
};

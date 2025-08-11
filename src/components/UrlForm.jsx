import { useState } from "react";
import axios from "axios";

export default function UrlForm({ onShorten }) {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Get backend base URL from Vite env variable
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;

    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/shorten`, { longUrl });
      onShorten(res.data.shortUrl);
      setLongUrl("");
    } catch (error) {
      alert("Error shortening URL");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <input
        type="url"
        placeholder="Enter your long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Shortening..." : "Shorten"}
      </button>
    </form>
  );
}

import { useState } from "react";
import UrlForm from "../components/UrlForm";

export default function Home() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Shorten Your URL</h1>
      <p className="text-gray-600 mb-6">Paste your long URL below and get a short link instantly</p>
      
      <UrlForm onShorten={setShortUrl} />

      {shortUrl && (
        <div className="mt-6 p-4 bg-white shadow rounded-lg text-center">
          <p className="text-gray-700">Your short URL:</p>
          <a 
            href={shortUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 font-semibold hover:underline"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

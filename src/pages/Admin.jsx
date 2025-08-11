  import { useEffect, useState } from "react";
  import axios from "axios";

  export default function Admin() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/admin/list`)
        .then(res => setUrls(res.data))
        .catch(() => alert("Error loading data"));
    }, []);

    return (
      <div className="p-6 bg-gray-50 min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left text-gray-700">Short URL</th>
                <th className="px-4 py-2 text-left text-gray-700">Long URL</th>
                <th className="px-4 py-2 text-center text-gray-700">Clicks</th>
              </tr>
            </thead>
            <tbody>
              {urls.map(url => (
                <tr key={url._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <a 
                      href={`${import.meta.env.VITE_API_BASE_URL}/${url.shortCode}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline"
                    >
                      {`${import.meta.env.VITE_API_BASE_URL}/${url.shortCode}`}
                    </a>
                  </td>
                  <td className="px-4 py-2 truncate max-w-[300px]">{url.longUrl}</td>
                  <td className="px-4 py-2 text-center">{url.clicks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

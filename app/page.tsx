"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [aiText, setAiText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/generate");
        const reader = response.body?.getReader();
        const textDecoder = new TextDecoder();

        if (reader) {
          while (true) {
            const readResult = await reader.read();
            const done = readResult?.done ?? true;
            const value = readResult?.value;

            if (done) {
              break;
            }
            if (value) {
              setAiText((prev) => prev + textDecoder.decode(value));
            }
          }
        }
      } catch {
        setAiText("<p> An error occurred</p>");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-3/4 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          AI-Generated Summary
        </h1>
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700"></div>
            <span className="ml-3 text-gray-700">Loading...</span>
          </div>
        ) : (
          <div className="text-gray-700 whitespace-pre-line">{aiText}</div>
        )}
      </div>
    </div>
  );
}
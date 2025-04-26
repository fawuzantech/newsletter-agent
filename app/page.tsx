"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [ html, setHtml ] = useState("")
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
   
      const fetchNews = async () => {
        try{
        const response = await fetch("/api/generate")
        const data = await response.json()
        setHtml(data.html)
  } catch{
    setHtml('<p> An error occured</p>')
  } finally{
    setLoading(false)
  }
}
   fetchNews()
    },[]);
   
  
  return (
    <div className="flex justify-center min-h-screen items-center">
   {loading ? (<p>Loading</p>) : (<div dangerouslySetInnerHTML={{__html: html}} />
)}
    </div>
  );
}

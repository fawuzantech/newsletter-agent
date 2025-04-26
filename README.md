# 📰 Newsletter Agent

This project is a **Newsletter Agent** that automatically **scrapes news articles** from various websites, then **summarizes** them into short, high-quality blurbs ready for email newsletters or blog posts.

Built with:
- **Firecrawl SDK** (for intelligent website crawling and scraping)
- **Together AI API** (for fast and powerful text summarization)

---

## 🖼️ Visual Diagram
![Newsletter Agent Architecture](https://i.ibb.co/MkqNYMWt/illustra.png)

## 📈 System Architecture
Here's a simple flowchart of how the agent works:
```
+--------------------+          +-----------------+          +-------------------+
|   Target Websites   |  --->    | Firecrawl SDK    |  --->    | Together AI API    |
|  (e.g. CNN, BBC)    | Scrape   |   (scraping)     | Extract  | (summarization)    |
+--------------------+          +-----------------+          +-------------------+
                                                                     |
                                                                     v
                                                         +-----------------------+
                                                         |  Summarized News Items  |
                                                         +-----------------------+
```

---

## 🚀 How It Works
1. **Scraping News**  
   Using **Firecrawl SDK**, the agent fetches and parses content from target websites.  
   It extracts article titles, body text, and publication dates.
2. **Summarizing Content**  
   The raw article text is sent to the **Together AI API**, which returns a concise, readable summary.
3. **Output**  
   The final output is a structured list of summarized articles ready to be sent as a newsletter or used elsewhere.

---

## 🛠️ Tech Stack
- **Firecrawl SDK** – Smart web scraper that understands page layouts.
- **Together AI API** – Advanced language model for summarization tasks.
- **Nextjs**  – To orchestrate the workflow.

---

## 📦 Installation
```bash
# Clone the repo
git clone https://github.com/fawuzantech/newsletter-agent.git
cd newsletter-agent
# Install dependencies
npm install firecrawl-sdk together
```

Set your API keys (Firecrawl and Together AI) in an `.env` file:
```env
FIRECRAWL_API_KEY=your_firecrawl_api_key
TOGETHER_API_KEY=your_together_api_key
```

---

## 🧩 Example Usage
```python
from firecrawl import Firecrawl
from together import TogetherAI

# Initialize clients
scraper = Firecrawl(api_key="your_firecrawl_api_key")
summarizer = TogetherAI(api_key="your_together_api_key")

# Scrape a news article
article = scraper.scrape_url("https://www.example.com/news-story")

# Summarize the article
summary = summarizer.summarize(article['content'])
print(summary)
```

---

## 📌 Notes
- Make sure the websites you target allow scraping under their terms of service.
- You can schedule this script with **CRON jobs** or trigger it via **webhooks** to automate daily newsletter creation.

---

## 📚 Future Improvements
- Integrate with **Email sending services** (e.g., Mailchimp, Brevo) to automate delivery.
- Add a **dashboard** to monitor scraping and summarization logs.
- Allow **user input** for selecting target websites dynamically.

---

## 🧑‍💻 Author
- Built with love by [Fawuzan](https://github.com/fawuzantech)
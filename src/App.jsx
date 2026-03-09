import { useState } from "react";

const fields = [
  { name: "name", label: "Piece Name", placeholder: "e.g. Crescent Moon Ring", required: true, type: "input" },
  { name: "metal", label: "Metal", placeholder: "e.g. 14k yellow gold, sterling silver", type: "input" },
  { name: "stone", label: "Stone / Material", placeholder: "e.g. rose quartz, labradorite, none", type: "input" },
  { name: "dimensions", label: "Details / Dimensions", placeholder: "e.g. 2mm band, bezel set, 6mm stone", type: "input" },
  { name: "price", label: "Price ($)", placeholder: "e.g. 285", type: "input" },
  { name: "inspiration", label: "Inspiration / Story", placeholder: "e.g. Inspired by the liminal space between dusk and night...", type: "textarea" },
  { name: "extras", label: "Anything else", placeholder: "e.g. Limited run of 12, handmade to order, 4 week lead time", type: "textarea" },
];

function buildPrompt(form) {
  return `Please generate Temple of Enora brand content for this piece:

Piece Name: ${form.name}
Metal: ${form.metal || "not specified"}
Stone / Material: ${form.stone || "none"}
Details / Dimensions: ${form.dimensions || "not specified"}
Price: ${form.price ? "$" + form.price : "not specified"}
Inspiration / Story: ${form.inspiration || "none provided"}
Additional Notes: ${form.extras || "none"}

Please write all 6 pieces of content:
1. Website product description (3-4 sentences, poetic and evocative)
2. Pinterest pin - SEO (keyword-rich, under 100 chars)
3. Pinterest pin - Poetic (short, scroll-stopping phrase)
4. Pinterest pin - Educational (about the stone, metal, or craft)
5. Instagram caption (poetic opening, product detail, closing thought + hashtags)
6. Email newsletter blurb (2-3 sentences, personal founder tone)

All in the Temple of Enora voice: elegant, poetic, soulful, luxe - never salesy.`;
}

export default function App() {
  const [form, setForm] = useState({ name: "", metal: "", stone: "", dimensions: "", price: "", inspiration: "", extras: "" });
  const [showPrompt, setShowPrompt] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const prompt = buildPrompt(form);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCop​​​​​​​​​​​​​​​​

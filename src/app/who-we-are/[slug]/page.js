/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Data from "@/components/uxGlossary/Data.json";

// Helper function to convert a string into a URL-friendly slug
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")           // Replace spaces with -
    .replace(/[^\w\-]+/g, "")       // Remove all non-word chars
    .replace(/\-\-+/g, "-");        // Replace multiple - with single -
}

export default function TermPage({ params }) {
  const { slug } = params;
  // Find the term that matches the slug (using sName in this example)
  const term = Data.terms.find((term) => slugify(term.sName) === slug);

  if (!term) {
    // If no term is found, you can show a 404 page
    notFound();
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{term.name}</h1>
      {term.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <img src={term.icon} alt={term.sName} />
    </div>
  );
}

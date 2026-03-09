// components/Seo.tsx
import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function Seo({ title, description, canonical }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
}

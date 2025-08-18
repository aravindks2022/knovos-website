// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}

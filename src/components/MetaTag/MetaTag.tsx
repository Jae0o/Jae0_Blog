import { Helmet } from "react-helmet-async";

interface MetaTagProps {
  title: string;
  description: string;
  keywords: string[];

  image?: string;
  url?: string;
}

const MetaTag = ({
  title,
  description,
  keywords,
  image,
  url,
}: MetaTagProps) => {
  const currentUrl = url || window.location.href;
  const keyword = keywords.join(", ");

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keyword}
      />

      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:site_name"
        content="Jae0's Blog"
      />
      <meta
        property="og:description"
        content={description}
      />
      {image && (
        <meta
          property="og:image"
          content={image}
        />
      )}

      <meta
        property="og:url"
        content={currentUrl}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      {image && (
        <meta
          name="twitter:image"
          content={image}
        />
      )}

      <link
        rel="canonical"
        href={currentUrl}
      />

      <meta
        name="author"
        content="Jae0"
      />
    </Helmet>
  );
};

export default MetaTag;

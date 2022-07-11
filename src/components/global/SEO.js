import Head from "next/head";
import siteMetadata from "../../data/siteMetadata";

export default function SEO() {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={siteMetadata.title} />
        <meta name="theme-color" content={siteMetadata.themeColor} />
        <meta name="description" content={siteMetadata.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.desc} />
        <meta property="og:image" content={siteMetadata.previewImg} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteMetadata.url} />
        <meta property="twitter:title" content={siteMetadata.title} />
        <meta property="twitter:description" content={siteMetadata.desc} />
        <meta property="twitter:image" content={siteMetadata.previewImg} />
      </Head>
    </>
  );
}

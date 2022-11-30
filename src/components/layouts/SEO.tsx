import Head from "next/head";
import * as React from "react";

interface Props {
  title: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
}

export default function SEO({
  title,
  description,
  keyword,
  image,
  url,
}: Props): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="noindex,nofollow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="robots" content="noindex" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={"/favicon.ico"} />
      <link rel="apple-touch-icon" href={"/GOOD-DAY_mainLogo.png"} />
      <meta
        name="google-site-verification"
        content="b0fvth4fo1qgmc_KutS3RmpSCKlpM6hS0xo3GI2hR88"
      />
    </Head>
  );
}

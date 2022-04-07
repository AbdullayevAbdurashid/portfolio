const title = "Abdullaev Abdurashid";
const description = "Programmer, front-end developer, innovator";

const SEO = {
  title,
  description,
  canonical: "https://abdurashid.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://abdurashid.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://danielwirtz.com/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@abdullaev",
    site: "@abdulllaev",
    cardType: "summary_large_image",
  },
};

export default SEO;

import { NextSeo, ArticleJsonLd } from "next-seo";

const BlogSeo = ({ title, summary, publishDate, url, image }) => {
  console.log("publishDate →", publishDate);
  const date = new Date(publishDate).toISOString();

  return (
    <>
      <NextSeo
        title={`${title} –Abdullaev Abdurashid`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [
            {
              url: image,
              width: 2240,
              height: 1260,
              alt: title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName="Abdullaev Abdurashid"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[image]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Abdullaev Abdurashid"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;

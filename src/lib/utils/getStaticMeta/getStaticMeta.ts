import { Metadata } from "next";

import { STATIC_META_DATA, StaticMetaKey } from "@/lib/constants";

const getStaticMeta = (type: StaticMetaKey): Metadata => ({
  title: STATIC_META_DATA[type].title,
  description: STATIC_META_DATA[type].description,
  keywords: STATIC_META_DATA[type].keywords,
  creator: STATIC_META_DATA[type].creator,

  openGraph: {
    type: "website",
    title: STATIC_META_DATA[type].title,
    siteName: STATIC_META_DATA[type].title,
    description: STATIC_META_DATA[type].description,
    images: STATIC_META_DATA[type].image,
    url: STATIC_META_DATA[type].url,
  },

  twitter: {
    card: "summary",
    title: STATIC_META_DATA[type].title,
    description: STATIC_META_DATA[type].description,
    images: STATIC_META_DATA[type].image,
    creator: STATIC_META_DATA[type].creator,
  },
});

export default getStaticMeta;

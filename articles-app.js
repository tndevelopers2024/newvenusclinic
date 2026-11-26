/**
 * articles-app.js
 * Central data store and Load More logic for New Venus Clinic blog.
 * All 9 WordPress posts – newest first (IDs 1575 → 1).
 */

const BLOG_POSTS = [
  {
    slug: "76-year-old-gets-infected-stent-removed-from-heart",
    url: "76-year-old-gets-infected-stent-removed-from-heart.html",
    title: "76-year-old gets infected stent removed from heart",
    lang: "en",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog1.png",
    webp: "assets/images/blog1.webp",
    width: 768,
    height: 286,
    alt: "News clipping: 76-year-old gets infected stent removed from heart at Apollo Hospitals OMR",
    excerpt:
      "Experiencing fever for nearly three days after undergoing an angioplasty and stenting procedure seemed abnormal to 76-year-old businessman Mohamed Salim. Read how the infected stent was successfully removed at Apollo Hospitals OMR, Chennai.",
  },
  {
    slug: "man-treated-for-cardiac-stent-infection",
    url: "man-treated-for-cardiac-stent-infection.html",
    title: "Man treated for cardiac stent infection",
    lang: "en",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog2.png",
    webp: "assets/images/blog2.webp",
    width: 768,
    height: 338,
    alt: "News clipping: Man treated for cardiac stent infection at Apollo Hospital Perungudi",
    excerpt:
      "A 77-year-old man was recently treated at Apollo Perungudi Hospital\u2019s branch for a rare cardiac stent infection. Dr. R. Kannaiyan, Dr. Madhu Prabhu Doss, and Dr. M.M. Yusuf led the high-risk procedure.",
  },
  {
    slug: "intracoronary-stent-extraction-surgery-tamil",
    url: "intracoronary-stent-extraction-surgery-tamil.html",
    title: "\u0b87\u0ba4\u0baf \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0b87\u0ba9\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe \u0b95\u0bb0\u0bcb\u0ba9\u0bb0\u0bbf \u0bb8\u0bcd\u0b9f\u0bc6\u0ba9\u0bcd\u0b9f\u0bcd \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b85\u0bb1\u0bc1\u0bb5\u0bc8 \u0b9a\u0bbf\u0b95\u0bbf\u0b9a\u0bcd\u0b9a\u0bc8",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog3.jpg",
    webp: "assets/images/blog3.webp",
    width: 570,
    height: 248,
    alt: "Tamil press coverage of intracoronary stent extraction surgery at Apollo OMR Hospital",
    excerpt:
      "\u0b93\u0b8e\u0bae\u0bcd\u0b86\u0bb0\u0bbf\u0bb2\u0bcd \u0b89\u0bb3\u0bcd\u0bb3 \u0b85\u0baa\u0bcd\u0baa\u0bcb\u0bb2\u0bcb \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0ba9\u0bc8\u0baf\u0bbf\u0bb2\u0bcd 76 \u0bb5\u0baf\u0ba4\u0bc1 \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0b87\u0ba4\u0baf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0ba9\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe \u0b95\u0bb0\u0bcb\u0ba9\u0bb0\u0bbf \u0bb8\u0bcd\u0b9f\u0bc6\u0ba9\u0bcd\u0b9f\u0bcd \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bc1\u0bb5\u0bc8 \u0b9a\u0bbf\u0b95\u0bbf\u0b9a\u0bcd\u0b9a\u0bc8 \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bbf\u0b95\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0ba8\u0bc1\u0b99\u0bcd\u0b95\u0bae\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0ba8\u0bcd\u0ba4\u0ba4\u0bc1.",
  },
  {
    slug: "apollo-omr-complex-stent-extraction-achievement-tamil",
    url: "apollo-omr-complex-stent-extraction-achievement-tamil.html",
    title:
      "\u0b85\u0baa\u0bcd\u0baa\u0bcb\u0bb2\u0bcb OMR \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0ba9\u0bc8 \u0bae\u0bbf\u0b95\u0bb5\u0bc1\u0bae\u0bcd \u0b9a\u0bbf\u0b95\u0bcd\u0b95\u0bb2\u0bbe\u0ba9, \u0b87\u0ba4\u0baf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0baa\u0bca\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0b89\u0bb1\u0bc8 \u0b95\u0bc1\u0bb4\u0bbe\u0baf\u0bc8 \u0bae\u0bbf\u0b95\u0ba4\u0bcd\u0ba4\u0bc1\u0bb2\u0bcd\u0bb2\u0bbf\u0baf\u0bae\u0bbe\u0b95 \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bc1 \u0b8e\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0b9a\u0bbe\u0ba4\u0ba9\u0bc8!",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog6.png",
    webp: "assets/images/blog6.webp",
    width: 872,
    height: 644,
    alt: "Tamil feature report on Apollo OMR Hospital high-risk intracoronary stent extraction procedure",
    excerpt:
      "\u0bae\u0bbf\u0b95\u0bb5\u0bc1\u0bae\u0bcd \u0b85\u0bb0\u0bbf\u0ba4\u0bbe\u0ba9 \u0bae\u0bc7\u0bb2\u0bc1\u0bae\u0bcd \u0b85\u0ba4\u0bbf\u0b95 \u0b86\u0baa\u0ba4\u0bcd\u0ba4\u0bc1\u0bb3\u0bcd\u0bb3 \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0baa\u0bca\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0bc1 \u0b87\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4 \u0b87\u0ba9\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe\u0b95\u0bcb\u0bb0\u0bcb\u0ba9\u0bb0\u0bbf \u0b89\u0bb1\u0bc8 \u0b95\u0bc1\u0bb4\u0bbe\u0baf\u0bc8\u0baa\u0bcd \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1 \u0b87\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1 \u0b85\u0baa\u0bcd\u0baa\u0bcb\u0bb2\u0bcb \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0ba9\u0bc8.",
  },
  {
    slug: "risky-bypass-surgery-gives-new-life-to-76-year-old-hindi",
    url: "risky-bypass-surgery-gives-new-life-to-76-year-old-hindi.html",
    title:
      "\u091c\u094b\u0916\u093f\u092e \u092d\u0930\u0940 \u092c\u093e\u0908\u092a\u093e\u0938 \u0938\u0930\u094d\u091c\u0930\u0940 \u0938\u0947 76 \u0938\u093e\u0932 \u0915\u0947 \u092c\u0941\u091c\u0941\u0930\u094d\u0917 \u0915\u094b \u092e\u093f\u0932\u0940 \u0928\u0908 \u091c\u093f\u0902\u0926\u0917\u0940",
    lang: "hi",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog5.png",
    webp: "assets/images/blog5.webp",
    width: 1350,
    height: 416,
    alt: "Hindi news coverage of risky bypass surgery saving a 76-year-old patient at Apollo Hospital",
    excerpt:
      "\u091a\u0947\u0928\u094d\u0928\u0908. \u0913\u090f\u092e\u0906\u0930 \u0938\u094d\u0925\u093f\u0924 \u090f\u0915 \u092a\u094d\u0930\u093e\u0907\u0935\u0947\u091f \u0939\u0949\u0938\u094d\u092a\u093f\u091f\u0932 \u092e\u0947\u0902 76 \u0938\u093e\u0932 \u0915\u0947 \u092c\u0941\u091c\u0941\u0930\u094d\u0917 \u0915\u0947 \u0939\u0943\u0926\u092f \u092e\u0947\u0902 \u0932\u0917\u093e \u0938\u094d\u091f\u0947\u0902\u091f \u0928\u093f\u0915\u093e\u0932\u0915\u0930 \u091c\u091f\u093f\u0932 \u092c\u093e\u0908\u092a\u093e\u0938 \u0938\u0930\u094d\u091c\u0930\u0940 \u0915\u0930 \u0909\u0928\u094d\u0939\u0947\u0902 \u0928\u092f\u093e \u091c\u0940\u0935\u0928\u0926\u093e\u0928 \u0926\u093f\u092f\u093e \u0917\u092f\u093e\u0964",
  },
  {
    slug: "rare-cardiac-treatment-at-apollo-hospital-telugu",
    url: "rare-cardiac-treatment-at-apollo-hospital-telugu.html",
    title:
      "\u0c05\u0c2a\u0c4b\u0c32\u0c4b \u0c06\u0c38\u0c41\u0c2a\u0c24\u0c4d\u0c30\u0c3f\u0c32\u0c4b \u0c05\u0c30\u0c41\u0c26\u0c48\u0c28 \u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38",
    lang: "te",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog4.png",
    webp: "assets/images/blog4.webp",
    width: 1281,
    height: 438,
    alt: "Telugu press coverage of rare intracoronary stent extraction treatment at Apollo OMR Hospital",
    excerpt:
      "\u0c35\u0c3f\u0c32\u0c4d\u0c32\u0c3f\u0c35\u0c3e\u0c15\u0c02 \u0c28\u0c4d\u0c2f\u0c42\u0c38\u0c4d: \u0c1a\u0c46\u0c28\u0c4d\u0c28\u0c48, \u0c05\u0c2a\u0c4b\u0c32\u0c4b \u0c12\u0c0e\u0c02\u0c06\u0c30\u0c4d \u0c39\u0c3e\u0c38\u0c4d\u0c2a\u0c3f\u0c1f\u0c32\u0c4d, \u0c05\u0c30\u0c41\u0c26\u0c48\u0c28 \u0c2e\u0c30\u0c3f\u0c2f\u0c41 \u0c05\u0c27\u0c3f\u0c15-\u0c30\u0c3f\u0c38\u0c4d\u0c15\u0c4d \u0c07\u0c02\u0c1f\u0c4d\u0c30\u0c3e\u0c15\u0c4b\u0c30\u0c4b\u0c28\u0c30\u0c40 \u0c38\u0c4d\u0c1f\u0c46\u0c02\u0c1f\u0c4d \u0c35\u0c46\u0c32\u0c3f\u0c15\u0c3f\u0c24\u0c40\u0c24 \u0c2a\u0c4d\u0c30\u0c15\u0c4d\u0c30\u0c3f\u0c2f\u0c28\u0c41 \u0c35\u0c3f\u0c1c\u0c2f\u0c35\u0c02\u0c24\u0c02\u0c17\u0c3e \u0c28\u0c3f\u0c30\u0c4d\u0c35\u0c39\u0c3f\u0c02\u0c1a\u0c21\u0c02 \u0c26\u0c4d\u0c35\u0c3e\u0c30\u0c3e \u0c17\u0c41\u0c02\u0c21\u0c46 \u0c36\u0c38\u0c4d\u0c24\u0c4d\u0c30\u0c1a\u0c3f\u0c15\u0c3f\u0c24\u0c4d\u0c38\u0c32\u0c4b \u0c05\u0c26\u0c4d\u0c2d\u0c41\u0c24\u0c2e\u0c48\u0c28 \u0c35\u0c3f\u0c1c\u0c2f\u0c3e\u0c28\u0c4d\u0c28\u0c3f \u0c38\u0c3e\u0c27\u0c3f\u0c02\u0c1a\u0c3f\u0c02\u0c26\u0c3f.",
  },
  {
    slug: "uyirukku-achcuruttalana-stent-ubagaram-mutiyavarai-kattha-marutthuvargal",
    url: "uyirukku-achcuruttalana-stent-ubagaram-mutiyavarai-kattha-marutthuvargal.html",
    title:
      "\u0b89\u0baf\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b85\u0b9a\u0bcd\u0b9a\u0bc1\u0bb1\u0bc1\u0ba4\u0bcd\u0ba4\u0bb2\u0bbe\u0ba9 \u0bb8\u0bcd\u0b9f\u0bc6\u0ba9\u0bcd\u0b9f\u0bcd \u0b89\u0baa\u0b95\u0bb0\u0ba3\u0bae\u0bcd: \u0bae\u0bc1\u0ba4\u0bbf\u0baf\u0bb5\u0bb0\u0bc8\u0b95\u0bcd \u0b95\u0bbe\u0ba4\u0bcd\u0ba4 \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bb0\u0bcd\u0b95\u0bb3\u0bcd",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog7.png",
    webp: "assets/images/blog7.webp",
    width: 1423,
    height: 395,
    alt: "Tamil news report on life-saving stent device removal surgery for elderly patient at Apollo Hospital",
    excerpt:
      "\u0b87\u0ba4\u0baf \u0ba8\u0bbe\u0bb3\u0ba4\u0bcd \u0ba4\u0bbf\u0bb2\u0bcd \u0baa\u0bca\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f \u0bb8\u0bcd\u0b9f\u0bc6\u0ba9\u0bcd\u0b9f\u0bcd \u0b89\u0baa\u0b95\u0bb0\u0ba3\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0ba4\u0bca\u0bb1\u0bcd\u0bb1\u0bc1 \u0baa\u0bbe\u0ba4\u0bbf\u0baa\u0bcd \u0baa\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bb3\u0bcd\u0bb3\u0bbe\u0b95\u0bbf \u0b89\u0baf\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b86\u0baa\u0ba4\u0bcd\u0ba4\u0bbe\u0ba9 \u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bbf\u0bb2\u0bcd \u0b87\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4 \u0bae\u0bc1\u0ba4\u0bbf\u0baf\u0bb5\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0ba8\u0bc1\u0b9f\u0bcd\u0baa\u0bae\u0bbe\u0b95 \u0b9a\u0bbf\u0b95\u0bbf\u0b9a\u0bcd\u0b9a\u0bc8\u0baf\u0bb3\u0bbf\u0ba4\u0bcd\u0ba4\u0bc1 \u0b85\u0baa\u0bcd \u0baa\u0bb2\u0bcd\u0bb2\u0bcb \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0b95\u0bcd \u0b95\u0bc1\u0bb4\u0bc1\u0bb5\u0bbf\u0ba9\u0bb0\u0bcd \u0b89\u0baf\u0bbf\u0bb0\u0bcd \u0b95\u0bbe\u0ba4\u0bcd\u0ba4\u0bc1\u0bb3\u0bcd\u0bb3\u0ba9\u0bb0\u0bcd.",
  },
  {
    slug: "intracoronary-stent-surgery-dinakaran-tamil",
    url: "intracoronary-stent-surgery-dinakaran-tamil.html",
    title:
      "\u0b87\u0ba4\u0baf \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0b87\u0ba9\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe \u0b95\u0bb0\u0bcb\u0ba9\u0bb0\u0bbf \u0bb8\u0bcd\u0b9f\u0bc6\u0ba9\u0bcd\u0b9f\u0bcd \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0b85\u0bb1\u0bc1\u0bb5\u0bc8 \u0b9a\u0bbf\u0b95\u0bbf\u0b9a\u0bcd\u0b9a\u0bc8 (\u0ba4\u0bbf\u0ba9\u0b95\u0bb0\u0ba9\u0bcd)",
    lang: "ta",
    date: "1 August 2024",
    dateShort: "01 Aug 2024",
    dateISO: "2024-08-01",
    category: "Blog",
    image: "assets/images/blog2.png",
    webp: "assets/images/blog2.webp",
    width: 1130,
    height: 497,
    alt: "Tamil newspaper coverage of intracoronary stent extraction surgery at Apollo OMR by Dinakaran",
    excerpt:
      "\u0b93\u0b8e\u0bae\u0bcd\u0b86\u0bb0\u0bbf\u0bb2\u0bcd \u0b89\u0bb3\u0bcd\u0bb3 \u0b85\u0baa\u0bcd\u0baa\u0bcb\u0bb2\u0bcb \u0bae\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0bae\u0ba9\u0bc8\u0baf\u0bbf\u0bb2\u0bcd 76 \u0bb5\u0baf\u0ba4\u0bc1 \u0ba8\u0bcb\u0baf\u0bbe\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0b87\u0ba4\u0baf\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b87\u0ba9\u0bcd\u0b9f\u0bcd\u0bb0\u0bbe \u0b95\u0bb0\u0bcb\u0ba9\u0bb0\u0bbf \u0bb8\u0bcd\u0b9f\u0bc6\u0ba9\u0bcd\u0b9f\u0bcd \u0baa\u0bbf\u0bb0\u0bbf\u0ba4\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4 \u0b85\u0bb1\u0bc1\u0bb5\u0bc8 \u0b9a\u0bbf\u0b95\u0bbf\u0b9a\u0bcd\u0b9a\u0bc8 \u0b95\u0bc1\u0bb1\u0bbf\u0ba4\u0bcd\u0ba4 \u0baa\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bbf\u0b95\u0bc8\u0baf\u0bbe\u0bb3\u0bb0\u0bcd \u0b9a\u0ba8\u0bcd\u0ba4\u0bbf\u0baa\u0bcd\u0baa\u0bc1 \u0ba8\u0bc1\u0b99\u0bcd\u0b95\u0bae\u0bcd\u0baa\u0bbe\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0ba8\u0b9f\u0ba8\u0bcd\u0ba4\u0ba4\u0bc1.",
  },
  {
    slug: "complex-stent-extraction-performed-successfully",
    url: "complex-stent-extraction-performed-successfully.html",
    title: "Complex Stent Extraction Performed Successfully",
    lang: "en",
    date: "27 October 2023",
    dateShort: "27 Oct 2023",
    dateISO: "2023-10-27",
    category: "Blog",
    image: "assets/images/blog1.png",
    webp: "assets/images/blog1.webp",
    width: 1228,
    height: 457,
    alt: "News clipping: Complex Stent Extraction Performed Successfully at Apollo OMR Hospital Chennai",
    excerpt:
      "DOCTORS at Apollo OMR Hospital recently removed a stent, which led to intracoronary infection, from the coronary artery of a 76-year-old patient with precision. It was a rare and high-risk intracoronary stent extraction procedure.",
  },
];

/* ─── Load More Logic ─────────────────────────────────────────── */
const PAGE_SIZE = 3;
const shownSlugs = new Set();
let page = 1;

function getPageParam() {
  const p = parseInt(new URLSearchParams(window.location.search).get("page"), 10);
  return isNaN(p) || p < 1 ? 1 : p;
}

function setPageParam(p) {
  const url = new URL(window.location.href);
  if (p <= 1) {
    url.searchParams.delete("page");
  } else {
    url.searchParams.set("page", p);
  }
  history.replaceState(null, "", url.toString());
}

function createBlogCard(post) {
  const langAttr = post.lang !== "en" ? ` lang="${post.lang}"` : "";
  return `
    <article class="article-card article-card--horizontal" data-slug="${post.slug}"${langAttr}>
      <div class="article-image">
        <a href="${post.url}" aria-label="${escapeAttr(post.title)}">
          <picture>
            <source srcset="${post.webp}" type="image/webp">
            <img src="${post.image}" alt="${escapeAttr(post.alt)}" width="${post.width}" height="${post.height}" loading="lazy">
          </picture>
        </a>
        <span class="article-category" lang="en">Blog</span>
      </div>
      <div class="article-content">
        <div class="article-date" lang="en"><time datetime="${post.dateISO}">${post.date}</time></div>
        <h2><a href="${post.url}">${escapeHtml(post.title)}</a></h2>
        <p class="article-excerpt"${langAttr}>${escapeHtml(post.excerpt)}</p>
        <a href="${post.url}" class="read-more" lang="en" aria-label="Read more: ${escapeAttr(post.title)}">Read More <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
    </article>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return str.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function renderBatch(grid, btn, statusEl) {
  const start = (page - 1) * PAGE_SIZE;
  const batch = BLOG_POSTS.slice(start, start + PAGE_SIZE).filter(
    (p) => !shownSlugs.has(p.slug)
  );
  batch.forEach((p) => {
    shownSlugs.add(p.slug);
    grid.insertAdjacentHTML("beforeend", createBlogCard(p));
  });
  page++;
  setPageParam(page - 1);

  const totalShown = shownSlugs.size;
  if (statusEl) {
    statusEl.textContent = `Showing ${totalShown} of ${BLOG_POSTS.length} articles`;
  }
  if (totalShown >= BLOG_POSTS.length) {
    if (btn) {
      btn.style.display = "none";
      btn.setAttribute("aria-disabled", "true");
    }
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("articlesGrid");
    const btn = document.getElementById("loadMoreArticlesBtn");
    const statusEl = document.getElementById("articlesStatusText");

    if (!grid) return;

    // Clear static placeholder cards and render dynamically from data
    grid.innerHTML = "";
    page = 1;
    shownSlugs.clear();

    // Restore page state from URL (e.g. ?page=2)
    const targetPage = getPageParam();

    // Render all pages up to the target page
    for (let i = 0; i < targetPage; i++) {
      renderBatch(grid, btn, statusEl);
      if (shownSlugs.size >= BLOG_POSTS.length) break;
    }

    if (btn) {
      btn.addEventListener("click", () => {
        renderBatch(grid, btn, statusEl);
      });
    }
  });
}

if (typeof window !== "undefined") {
  window.BLOG_POSTS = BLOG_POSTS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BLOG_POSTS, createBlogCard, PAGE_SIZE };
}



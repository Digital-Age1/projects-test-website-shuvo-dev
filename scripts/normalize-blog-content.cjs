const fs = require('fs');

const path = 'src/content/blog/posts.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const categories = [...new Set(data.posts.map((post) => post.category))];

data.page = data.page || {
  heroTitle: 'Trimming Edge: Blog',
  heroSubtitle: 'Lawn care tips, company updates, and expert advice from your local Western MA landscaping team.',
  heroImage: '/uploads/hero-blog-gardening-flowers.jpg',
  introTitle: 'Latest Lawn Care Articles',
  introText: 'Browse practical lawn care tips, seasonal advice, and service updates from Trimming Edge.',
  categories,
  faqTitle: 'Frequently Asked Questions',
  faqSubtitle: "Feel free to reach out to us if you don't see the answer you need.",
  faq: [
    {
      question: 'Why is Trimming Edge so popular?',
      answer: 'Trimming Edge is a locally operated landscaping company based in Montgomery, MA. Our customers love us because we treat every property as if it were our own - showing up on time, communicating clearly, and consistently delivering high-quality results. Our 5-star Google rating reflects the trust and satisfaction of our community.',
    },
    {
      question: 'What services does Trimming Edge offer in Montgomery?',
      answer: 'We offer a full range of lawn and landscape services in Montgomery, MA and the surrounding areas including lawn mowing, landscape design and installation, tree and shrub care, seasonal cleanups, mulching and bed maintenance, and commercial landscaping. Contact us at (413) 551-9653 for a free estimate.',
    },
    {
      question: 'How does seasonal clean-up work with Trimming Edge?',
      answer: 'Our seasonal cleanup services include spring and fall property cleanups. In the spring, we clear winter debris, prep garden beds, and get your property ready for the growing season. In the fall, we handle leaf removal, cut back perennials, clean up beds, and prepare your landscape for winter. We schedule visits at your convenience and leave your property looking immaculate.',
    },
    {
      question: 'Are lawn mowing services customizable at Trimming Edge?',
      answer: "Absolutely! We customize our lawn mowing schedules to match your lawn's specific needs and your preferences. We offer weekly, bi-weekly, or custom frequency mowing. Every mowing visit includes edging, string trimming, and blowing off hard surfaces - so your lawn always looks completely finished.",
    },
    {
      question: 'Why choose Trimming Edge for commercial landscaping?',
      answer: "Commercial properties require reliability, professionalism, and consistency - and that's exactly what Trimming Edge delivers. We work with property managers, business owners, and HOAs throughout Western Massachusetts, offering flexible scheduling, customized maintenance plans, and a dedicated crew that knows your property inside and out.",
    },
  ],
  ctaTitle: 'Ready for a Healthier Lawn?',
  ctaText: 'Schedule service with Trimming Edge and get local, professional care for your property.',
  ctaPrimaryLabel: 'Schedule a Service',
  ctaPrimaryHref: '/contact-us',
  ctaSecondaryLabel: 'View Services',
  ctaSecondaryHref: '/services',
  seoTitle: 'Lawn Care & Landscaping Blog | Trimming Edge Western MA',
  seoDescription: 'Expert lawn care tips, landscaping advice, and seasonal guides for Western Massachusetts homeowners. Learn from the pros at Trimming Edge.',
  seoKeywords: 'lawn care blog, landscaping tips Western MA, lawn maintenance advice, Trimming Edge blog',
  ogImage: '/uploads/hero-blog-gardening-flowers.jpg',
};

data.posts = data.posts.map((post, index) => {
  const featuredImage = post.featuredImage || post.image || '/uploads/hero-blog-gardening-flowers.jpg';
  const body = post.body || post.content || '';

  return {
    ...post,
    body,
    content: post.content || body,
    featuredImage,
    featuredImageAlt: post.featuredImageAlt || post.title,
    image: post.image || featuredImage,
    featured: typeof post.featured === 'boolean' ? post.featured : index < 3,
    seoTitle: post.seoTitle || `${post.title} | Trimming Edge Blog`,
    seoDescription: post.seoDescription || post.excerpt,
    seoKeywords: post.seoKeywords || (Array.isArray(post.tags) ? post.tags.join(', ') : ''),
    ogImage: post.ogImage || featuredImage,
  };
});

fs.writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);

const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../src/content/blog/posts.json');
const raw = fs.readFileSync(dataPath, 'utf8');
let data;

try {
  data = JSON.parse(raw);
} catch (error) {
  console.error(`Unable to parse ${dataPath}:`, error.message || error);
  process.exit(1);
}

if (!data || !Array.isArray(data.posts)) {
  console.error(`Invalid blog data: expected an object with a posts array at ${dataPath}`);
  process.exit(1);
}

const errors = [];
const seenSlugs = new Set();

const addError = (post, field, message) => {
  const id = post && post.slug ? `${post.slug}` : 'unknown-slug';
  const title = post && post.title ? `"${post.title}"` : 'unknown title';
  const prefix = `Post ${id} (${title})`;
  errors.push(`${prefix}: ${field} ${message}`);
};

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isArray(value) {
  return Array.isArray(value);
}

for (const post of data.posts) {
  if (!isNonEmptyString(post.slug)) {
    addError(post, 'slug', 'is missing or empty');
  } else {
    if (seenSlugs.has(post.slug)) {
      addError(post, 'slug', 'is not unique');
    }
    seenSlugs.add(post.slug);
  }

  if (!isNonEmptyString(post.title)) {
    addError(post, 'title', 'is missing or empty');
  }

  if (!isNonEmptyString(post.excerpt)) {
    addError(post, 'excerpt', 'is missing or empty');
  }

  if (!isNonEmptyString(post.body) && !isNonEmptyString(post.content) && !Array.isArray(post.content)) {
    addError(post, 'body/content', 'is missing or invalid');
  }

  if (!isNonEmptyString(post.date)) {
    addError(post, 'date', 'is missing or empty');
  }

  if (!isNonEmptyString(post.author)) {
    addError(post, 'author', 'is missing or empty');
  }

  if (!isNonEmptyString(post.category)) {
    addError(post, 'category', 'is missing or empty');
  }

  if (!isArray(post.tags)) {
    addError(post, 'tags', 'must be an array');
  }

  if (!isNonEmptyString(post.featuredImage) && !isNonEmptyString(post.image)) {
    addError(post, 'featuredImage/image', 'is missing or empty');
  }

  if (post.seoKeywords !== undefined && !isArray(post.seoKeywords)) {
    addError(post, 'seoKeywords', 'must be an array when present');
  }
}

if (errors.length > 0) {
  console.error('Blog post validation failed with the following errors:');
  errors.forEach((error) => {
    console.error(`- ${error}`);
  });
  process.exit(1);
}

console.log('Blog post validation passed.');
process.exit(0);

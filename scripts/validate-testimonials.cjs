const fs = require('fs');

const filePath = 'src/content/testimonials.json';
const allowedColors = new Set([
  'bg-emerald-500',
  'bg-teal-500',
  'bg-green-600',
  'bg-lime-600',
  'bg-blue-500',
  'bg-purple-500',
]);

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

const errors = [];
const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

if (!Array.isArray(content.items)) {
  errors.push('items must exist and be an array.');
} else {
  content.items.forEach((item, index) => {
    const label = `items[${index}]`;

    if (!item.name) errors.push(`${label}.name is required.`);
    if (!item.text) errors.push(`${label}.text is required.`);

    if (item.rating !== undefined && item.rating !== null && item.rating !== '') {
      const rating = Number(item.rating);
      if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
        errors.push(`${label}.rating must be a number between 0 and 5.`);
      } else if (!Number.isInteger(rating * 2)) {
        errors.push(`${label}.rating must use 0.5 increments.`);
      }
    }

    if (item.color && !allowedColors.has(item.color)) {
      errors.push(`${label}.color must be one of: ${[...allowedColors].join(', ')}.`);
    }

    getInitials(item.name);
  });
}

if (errors.length) {
  console.error('Testimonial validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Testimonial validation passed.');

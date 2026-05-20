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
  return String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
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

    const rating = Number(item.rating);
    if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
      errors.push(`${label}.rating must be a number between 0 and 5.`);
    } else if (!Number.isInteger(rating * 2)) {
      errors.push(`${label}.rating must use 0.5 increments.`);
    }

    if (item.color && !allowedColors.has(item.color)) {
      errors.push(`${label}.color must be one of: ${[...allowedColors].join(', ')}.`);
    }

    if (!item.initials && !getInitials(item.name)) {
      errors.push(`${label}.initials is required or must be generatable from name.`);
    }
  });
}

if (errors.length) {
  console.error('Testimonial validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Testimonial validation passed.');

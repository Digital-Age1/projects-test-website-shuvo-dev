# Simple Contact Form

A small React and Vite contact form application configured for Netlify deployment with Netlify Forms. It uses a hidden static form in `index.html` so Netlify can detect the form during deployment, while the visible React form submits with `fetch("/")`.

## Features

- React with Vite
- Netlify Forms with `data-netlify="true"`
- Hidden static Netlify detection form
- Honeypot spam field named `bot-field`
- Client-side validation
- Success and error feedback
- Responsive card-style layout

## How to run locally

```bash
npm install
npm run dev
```

## How to build

```bash
npm run build
```

## Netlify deploy settings

- Build command: `npm run build`
- Publish directory: `dist`

## Netlify Forms setup after deployment

1. Go to Netlify dashboard.
2. Open the deployed site.
3. Go to Forms.
4. Make sure form detection is enabled.
5. Redeploy if needed.
6. Submit one test message.
7. Go to Project configuration / Notifications / Emails and webhooks / Form submission notifications.
8. Add my Gmail address as the notification receiver.

## Verification checklist

- [ ] Empty form shows validation errors.
- [ ] Invalid email shows validation error.
- [ ] Valid form submits successfully.
- [ ] Submission appears in Netlify Forms dashboard.
- [ ] Gmail receives notification after notification is configured in Netlify.

## Validation checklist

- [ ] The contact form matches the client requirement.
- [ ] The form collects name, email, phone, subject, and message.
- [ ] The user receives clear success/error feedback.
- [ ] The form is responsive on mobile and desktop.

## Project structure

```text
simple-contact-form/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    └── App.css
```

<div style="text-align:center;">
  <img src="./public/logoblue1.png" alt="Image" style="height:40px; width:auto; border-radius:5px;">
</div>

# Drooul

A digital marketplace for UI Kits, Templates and Icons
<br/>

## Overview

This repository contains the sources of Drooul's website:

- It's powered by [Next.js](https://nextjs.org/),
- It uses [Tailwind](https://tailwindcss.com/) CSS framework,
- It uses [Payload](https://payloadcms.com/) as a CMS
- It uses [Resend](https://resend.com/) to send emails.
- It uses [MongoDB](https://mongodb.com/) as a database.
- It also has payment funtionality using [Stripe](https://stripe.com/en-in)
- It's build and deployed with [Netlify](https://www.netlify.com/).

## Requirements

Use the following tools to set up the project:

- [Node.js](https://nodejs.org/) v16.0.0+
- [npm](https://www.npmjs.com/) v7.10.0+

## Run locally

1. Fork the repository by clicking on `Fork` option on top right of the main repository.

2. Open Command Prompt on your local computer.

3. Clone the forked repository by adding your own GitHub username in place of `<username>`.

```bash
    git clone https://github.com/<username>/website/
```

4. Navigate to the website directory.

```bash
    cd drooul
```

5. Install all website dependencies.

```bash
    npm install
```

6. Add all the environment variables

```env
PAYLOAD_SECRET=
MONGODB_URL=
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
RESEND_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

7. Run the website locally.

```bash
    npm run dev
```

8. Access the live development server at [localhost:3000](http://localhost:3000).

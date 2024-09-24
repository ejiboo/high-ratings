## Project Overview
Build a website/web app that provides leaderboards for the top 10/25/50/100 movies, tv shows, music, and books in the past 1w/1m/1y/all time.

## Feature Requirements
- we will use next.js, shadcn, lucid, supabase (for database and storage), clerk (for login)
- Leaderboards for the top 10/25/50/100 movies, tv shows, music, and books in the past 1w/1m/1y/all time. We show the scores in a few different ways.
- Allows users to sign up for their own highratings.com account where they can leave scores from 0-10 stars. Each user has their own dashboard with content their likes, bookmarks, ratings, and lists.
- We need to find a way to get the top 100 subjects for each category automatically, via api or through scraping if it’s legal on said site/platform. We want to integrate a way for these metrics to automatically update every 7 days.
- The Visual content scores come from platforms like IMDB, OMDB, TMDB, Rotten Tomatoes, and Metacritic or Top Film Critics, or any other platforms that provide some of this information for free or commercially.
- The Audio content scores come from platforms like Billboard, Metabrainz, Rolling Stone, Apple Music, Spotify, and Metacritic or Top Music Critics.
- Each subject can also be clicked on and has its own page with all of the ranks, and then similar content from the subjects category, and also a list of places where the subject’s content can be consumed, watched, listened to, streamed, or purchased. Each subject will have the following action buttons; like, bookmark, where to consume, watch, listen to said content, how to get tickets for said content if applicable, and a share button. The share button will open up the device’s default share dialog. You can also see the subjects user rating and if that user has rated said subject.
- Highratings.com will be built for the purpose of generating ad revenue through all of the many pages that we hope users can navigate through. Build it in such a way that has placeholder images where ads can be placed. Optimize the page for this goal. I also want the page to be very simple and easy to navigate. Minimalist. It’s to get information to the users as fast as possible while encouraging them to visit other pages and spend as much time clicking on things on the site.
- The User Dashboard allows one to create an account where they can like, bookmark, add to lists, and rate content on the site. They can also share things like their lists.

## Relevent Docs

## API and other Keys
- Supabase anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvcmFzb3JwaXZ0dmdjcnZyZXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNDI4MTAsImV4cCI6MjA0MjcxODgxMH0.Qg_m681XyDFHShYlp8F5WJfAOcVpuger5OVkZxSVuBQ url: https://corasorpivtvgcrvreqq.supabase.co connection string: postgresql://postgres.corasorpivtvgcrvreqq:[SUPAC0rusC4nt#1986]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
- Lucid 
- Clerk publishable key: pk_test_ZG9taW5hbnQtc2xvdGgtMTUuY2xlcmsuYWNjb3VudHMuZGV2JA
- metabrainz.org live datafeed access token: l0OCO66NYRQbxzxtFV2SlY4qLg9Xoiu9C9kazwZq
- OMDB (omdbapi.com) API key: a9bfc821
- TMDB (themoviedb.org) API key: ed6a9f293cfb45f22e8997b5f088deca API read access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDZhOWYyOTNjZmI0NWYyMmU4OTk3YjVmMDg4ZGVjYSIsIm5iZiI6MTcyNzExODUyOC43ODI2Miwic3ViIjoiNjZmMWJjMzhjMjM3MjU4ZTRjMjZhYjhiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6Ukd9xDcI1hJo4G5Tgvle1KIRGMOxEqz-DbcSfruGXQ
- IMDB API key: not currently using
- Rotten Tomatoes API key: not currently using
- Metacritic API key: not currently using
- Billboard API key: not currently using
- Rolling Stone API key: not currently using
- Apple Music API key: not currently using
- Spotify client ID: 8e0b0ecf32ed4153abab96a02f8cb2b
- Last.fm API key: 083b539f16a2bc79bf5ed286cafdd36a

## Current File Structure
high-ratings-com
├── .next
├── app
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── components
│   ├── hooks
│   ├── lib
│   └── requirements
│       ├── backend_instructions.md
│       ├── frontend_instructions.md
│       ├── mockup-main.png
│       ├── mockup-user-dashboard-book...
│       ├── mockup-user-dashboard-likes...
│       ├── mockup-user-dashboard-lists...
│       └── mockup-user-dashboard-rating...
├── node_modules
├── .env.local
├── .eslintrc.json
├── .gitignore
├── components.json
├── middleware.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

## Rules
- all new components should go into /components and be named like example-component.tsx unless otherwise specified
- all new pages go in /app  

## testing git commit
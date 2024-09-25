## Project Overview
Build a website/web app that can be easily converted into a pwa that provides leaderboards for the top 10/25/50/100 movies, tv shows, music, and books in the past 1week/1month/1year/all time.

## Feature Requirements
- we will use next.js, shadcn, font awesome (for free icons and emojis), supabase (for database and storage), clerk (for login)
- Leaderboards for the top 10/25/50/100 movies, tv shows, music, and books in the past 1week/1month/1year/all time.
- Allows users to sign up for their own highratings.com account where they can leave scores from 0-10 stars. Each user has their own dashboard with content their likes, bookmarks, ratings, and lists.
- We need to find a way to get the top 100 subjects for each category automatically, via api or through scraping if it’s legal on said site/platform. We want to integrate a way for these metrics to automatically update every 7 days. this can be done by a cron job on the server. this can also be done at a later date in order to reduce current complexity.
- The Visual content scores come from platforms like IMDB, OMDB, TMDB, Rotten Tomatoes, Metacritic, Top Film Critics, or any other platforms that provide any of this information for free.
- The Audio content scores come from platforms like Billboard, Metabrainz, Rolling Stone, Apple Music, Spotify, Metacritic, Top Music Critics.
- Each subject can be clicked on to be brought to it's own page with expanded information about it, similar content from the subjects category, and also links to where the subject’s content can be consumed, watched, listened to, streamed, or purchased. Each subject will have the following action buttons; bookmark (bookmark icon), like (heart icon), where to consume, watch, or listen to said content (tv icon for visual, music icon for audio, book icon for books), how to get tickets for said content if applicable (ticket icon), and a share button (share icon). The share button will open up the device’s default share dialog. You can also see the subjects user rating and if that user has rated said subject.
- Highratings.com will be built for the purpose of generating ad revenue through all of the many pages that we hope users can navigate through. Build it in such a way that has placeholder images where ads can be placed. Optimize the page for this goal. I also want the page to be very simple and easy to navigate. Minimalist. It’s to get information to the users as fast as possible while encouraging them to visit other pages and spend as much time clicking on things on the site.
- The User Dashboard allows one to create an account where they can like, bookmark, add to lists, and rate content on the site. They can also share things like their lists.
- Each subject will show an image of the subject, it's numerical rank, a title. it will also show the average rating with the number of ratings in parentheses, release date, runtime, duration or page count, and the subject's mpa-rating or equivalent. it will also show any genre tags associated with the subject. it will also show a description of the subject. it will also show the following action buttons; bookmark (bookmark icon), like (heart icon), where to consume, watch, or listen to said content (tv icon for visual, music icon for audio, book icon for books), how to get tickets for said content if applicable (ticket icon), and a share button (share icon). The share button will open up the device's default share dialog. You can also see the subjects user rating and if that user has rated said subject. it will also show ten stars for the user to rate the subject from 0 to 10.
- there will be tabs for navigating different categories of content. there will be another row of tabs with two sets of tabs for sorting the leaderboards. one set of tabs will be for selecting how many subjects are shown in the leaderboard, and the other set of tabs will be for selecting the time range of the leaderboard.
- there will be a menu at the top right corner that has home, user dashboard, about, and contact. clicking the home button will redirect you to the home page. clicking the user dashboard button will redirect you to the user dashboard. clicking the about button will redirect you to the about page. clicking the contact button will redirect you to the contact page.

## Relevent Docs

## API and other Keys
- Supabase anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvcmFzb3JwaXZ0dmdjcnZyZXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNDI4MTAsImV4cCI6MjA0MjcxODgxMH0.Qg_m681XyDFHShYlp8F5WJfAOcVpuger5OVkZxSVuBQ url: https://corasorpivtvgcrvreqq.supabase.co connection string: postgresql://postgres.corasorpivtvgcrvreqq:[SUPAC0rusC4nt#1986]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
- Lucid API key: not currently using
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
high-ratings-com-20240924-1456
├── .next
├── app
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── components
│   ├── hooks
│   └── lib
├── node_modules
├── requirements
│   ├── backend_instructions.md
│   ├── frontend_instructions.md
│   ├── mockup-main.png
│   ├── mockup-user-dashboard-bookmarks.png
│   ├── mockup-user-dashboard-likes.png
│   ├── mockup-user-dashboard-lists.png
│   └── mockup-user-dashboard-ratings.png
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
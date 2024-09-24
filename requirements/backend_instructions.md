## Project Overview
use this guide to build the backend for high-ratings.com

## Tech Stack
- Next.js
- Supabase (for database and storage)
- Clerk (for login)

## Tables and Buckets already created
supabase storage bucket: movies
supabase storage bucket: tv-shows
supabase storage bucket: music
supabase storage bucket: books
supabase storage bucket: users

supabase database table: movies
supabase database table: tv-shows
supabase database table: music
supabase database table: books
supabase database table: profiles
supabase database table: custom-lists

## Requirements
1. Create user to user table
- After a user signs in via clerk, get the userld from clerk, and check if this userId exist in the "profiles" table, matching "user_id"
- if the user doesn't exist, then create a user in the "profiles" table
- if the user already exists, then proceed, and pass on user_id to neccesary functions
2. Upload relevant images for things like movies, tv shows, music, and books to the relevant supabase storage bucket;
- Add the image url to the relevant data table as "...image_url", and creator_user_id to be the actual user_id
3. Likes, Bookmarks, Ratings interaction
- When user checks on the 'like' button, the num_likes should increase on the relevant table
- when user un-check 'like' button, the num_likes should decrease on the relevant table
- when user bookmarks an item, the bookmark_count should increase on the relevant table
- when user un-bookmarks an item, the bookmark_count should decrease on the relevant table
- when user rates an item, the rating should be added to the relevant table
- when user un-rates an item, the rating should be removed from the relevant table
4. Update the leaderboards

## Documentation
## Example of uploading files to supabase storage
import { createClient } from: '@supabase/supabase-js'

// - Create Supabase client
const supabase = createClient('https://corasorpivtvgcrvreqq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvcmFzb3JwaXZ0dmdjcnZyZXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNDI4MTAsImV4cCI6MjA0MjcxODgxMH0.Qg_m681XyDFHShYlp8F5WJfAOcVpuger5OVkZxSVuBQ') 

//- Upload file using standard upload
async function uploadFile(file) {
const { data, error } = await supabase storage.from('bucket_name').upload('file_path', file)
if (error) {
    //- Handle error
} else {
    // Handle success
}
}

## Info for .env.local

NEXT_PUBLIC_SUPABASE_URL=https://corasorpivtvgcrvreqq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvcmFzb3JwaXZ0dmdjcnZyZXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNDI4MTAsImV4cCI6MjA0MjcxODgxMH0.Qg_m681XyDFHShYlp8F5WJfAOcVpuger5OVkZxSVuBQ

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZG9taW5hbnQtc2xvdGgtMTUuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_MPGMvVuLubeXr2B5x7Wy628D3HQxaNHApYZAz4wxuq
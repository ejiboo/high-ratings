export interface Subject {
  id: number;
  title: string;
  category: 'Movies' | 'TV Shows' | 'Music' | 'Books';
  avgRating: number;
  releaseDate: string;
  runtime?: string;
  mpaaRating?: string;
  artist?: string;
  author?: string;
  genres: string[];
  description: string;
  imageUrl?: string;
  duration?: string; // for music
  pageCount?: number; // for books
  explicitRating?: 'Explicit' | 'Clean'; // for music
}

function generateDummyData(category: Subject['category'], count: number): Subject[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1 + (category === 'Movies' ? 0 : category === 'TV Shows' ? 100 : category === 'Music' ? 200 : 300),
    title: `${category} Title ${i + 1}`,
    category,
    avgRating: Number((Math.random() * 5 + 5).toFixed(1)),
    releaseDate: new Date(Date.now() - Math.random() * 1000000000000).toISOString().split('T')[0],
    runtime: category === 'Movies' || category === 'TV Shows' ? `${Math.floor(Math.random() * 120 + 60)}min` : undefined,
    mpaaRating: category === 'Movies' || category === 'TV Shows' ? ['G', 'PG', 'PG-13', 'R', 'NC-17'][Math.floor(Math.random() * 5)] : undefined,
    artist: category === 'Music' ? `Artist ${i + 1}` : undefined,
    author: category === 'Books' ? `Author ${i + 1}` : undefined,
    genres: ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Romance'].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1),
    description: `This is a sample description for ${category} item ${i + 1}.`,
    imageUrl: Math.random() > 0.2 ? `/images/${category.toLowerCase().replace(' ', '-')}/${i + 1}.jpg` : undefined,
    duration: category === 'Music' ? `${Math.floor(Math.random() * 5 + 2)}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}` : undefined,
    pageCount: category === 'Books' ? Math.floor(Math.random() * 500 + 100) : undefined,
    explicitRating: category === 'Music' ? (Math.random() > 0.7 ? 'Explicit' : 'Clean') : undefined,
  }));
}

const dummyData: Subject[] = [
  ...generateDummyData('Movies', 100),
  ...generateDummyData('TV Shows', 100),
  ...generateDummyData('Music', 100),
  ...generateDummyData('Books', 100),
].sort((a, b) => b.avgRating - a.avgRating || a.id - b.id);

console.log('Total dummy data items:', dummyData.length);

export default dummyData;
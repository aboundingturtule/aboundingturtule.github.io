export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  category: 'Mechanical' | 'Software' | 'Electronics' | 'Aerospace';
  date: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tages: string[];
  views: number;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  password: any;
  role: string;
  phone: string;
  picture: any;
  status: string;
  isverified: boolean;
}

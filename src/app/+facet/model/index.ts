export interface User {
  id: number;
  name: string;
  email: string;
  albums?: Album[];
}

export interface Album {
  id: number;
  userId: number;
  title: string;
}

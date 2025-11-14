export interface CoursType {
  id: number;
  name: string;
  price: number;
  online: boolean;
  image_url: string;
  category_name: string;
  author: string;
}

export interface CoursProps {
  cours: CoursType;
}
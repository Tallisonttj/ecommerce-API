export type Produto = 
  {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    category: {
      id: number;
      name: string;
      image: string;
      slug: string;
    };
    images: [
        image1:string,
        image2:string,
        image3:string
    ]
  }


interface AuthorDetails {
  publicName: string;
}

interface FirstPreviewImage {
  watermarked: string;
}

interface Author {
  details: AuthorDetails;
}

export interface ResponseItem {
  firstPreviewImage: FirstPreviewImage;
  title: string;
  description: string;
  author: Author;
  price: number;
}

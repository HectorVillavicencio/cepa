export interface Notice{
    media_type: "IMAGE" | "CAROUSEL_ALBUM" | "VIDEO";
    media_url: string;
    permalink: string;
    caption: string;
    id: string;
    children?: {
      data: InstagramMedia[];
    };
  }

  interface InstagramMedia {
    id: string;
    media_url: string;
  }



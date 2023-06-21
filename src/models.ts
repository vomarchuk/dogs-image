export type StatusOptions = {
  IDLE: string;
  PENDING: string;
  RESOLVED: string;
  REJECTED: string;
};

export interface INavButton {
  name: string;
  href: string;
}

export interface IImageGallery {
  images: string[];
}

export interface IOnSubmit {
  onSubmit: (value: string) => void;
}
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
  openModal: (value: string) => void;
}

export interface IOnSubmit {
  onSubmit: (value: string) => void;
}
export interface IImageCard {
  imageUrl: string;
  openModal: (value: string) => void;

};

export interface IBreedsList {
  breeds: string[];
  currentBreed: (value: string) => void;

}

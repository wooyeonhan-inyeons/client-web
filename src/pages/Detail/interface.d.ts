export interface DetailCarousel {
  activeStep: number;
  handleStepChange: (setp: number) => void;
  tempWooyeons?: tempWooyeonsInterface[];
  images: Array<imageObj> | undefined;
}

export interface CommentInterface {
  value: string;
  createAt: string;
}

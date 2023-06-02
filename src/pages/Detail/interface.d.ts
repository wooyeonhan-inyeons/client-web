export interface DetailCarousel {
  activeStep: number;
  handleStepChange: (setp: number) => void;
  images: Array<imageObj> | undefined;
}

export interface CommentInterface {
  value: string;
  createAt: string;
}

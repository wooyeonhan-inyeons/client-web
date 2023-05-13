export interface DetailCarousel {
  activeStep: number;
  handleStepChange: (setp: number) => void;
  tempWooyeons: tempWooyeonsInterface[];
}

export interface CommentInterface {
  value: string;
  createAt: string;
}

export interface IntroductionProps {
  introduction: {
    mainTextLine1: string;
    mainTextLine2: string;
    subText: string;
  }[];
  activeStep: number;
  // eslint-disable-next-line no-unused-vars
  handleStepChange: (step: number) => void;
}

export interface SnsProps {
  sns: boolean;
  text: string;
  imgSrc: string;
}

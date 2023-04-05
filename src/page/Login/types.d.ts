export interface IntroductionProps {
  introduction: {
    mainTextLine1: string;
    mainTextLine2: string;
    subText: string;
  }[];
  activeStep: number;
  handleStepChange: () => void;
}

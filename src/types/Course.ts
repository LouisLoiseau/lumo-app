export type Step = {
  question?: string;
  answer?: string;
  description?: string;
  picture: StepPicture;
  dialog?: DialogItem[];
  instruction?: string;
};

export type Course = {
  numberOfSteps: number;
  steps: Step[];
  name?: string;
};

export type DialogItem = {
  speaker: string;
  sentence: string;
  answer?: string;
};

export type StepPicture = {
  url: string;
  position: StepPicturePosition;
};

export type StepPicturePosition = 'left' | 'right';
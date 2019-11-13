export type Step = {
  question?: string;
  answers?: StepAnswer[];
  description?: string;
  picture?: StepPicture;
  dialog?: DialogItem[];
  correct_answer?: number;
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
  completed: boolean;
};

export type StepPicture = {
  url: string;
  position: StepPicturePosition;
};

export type StepPicturePosition = 'left' | 'right';

export type StepAnswer = {
  [key: string]: string;
};
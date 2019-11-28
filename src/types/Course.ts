export type Step = {
  isQuestion: boolean;
  isDialog: boolean;
  question?: StepQuestion;
  description?: string;
  pictures?: StepPicture[];
  dialog?: DialogItem[];
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

export type StepPicture = string;

export type StepPicturePosition = 'left' | 'right';

export type StepAnswer = {
  [key: string]: string;
};

export type StepQuestion = {
  author: string;
  question: string;
  picture: string;
  answers: StepAnswer[];
  correct_answer: number;
}
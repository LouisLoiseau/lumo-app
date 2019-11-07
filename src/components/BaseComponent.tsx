import { Component, ReactNode } from 'react';
import { I18n } from '@/lib';
import { TranslatorParam } from '@/types/TranslatorTypes';

export default abstract class BaseComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
  public translator: I18n = I18n;

  trs(key: string, params?: TranslatorParam): string {
    return this.translator.translate(key, params);
  }

  abstract render(): ReactNode
}
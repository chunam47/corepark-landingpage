import { AppColors, TextColor, BgColor, AppBgImage } from '@assets/colors';

// type Prefix<TObject extends object, TPrefix extends string> = `${TPrefix}${keyof TObject}`;

type Opacity =
  | '/[0.1]'
  | '/[0.2]'
  | '/[0.3]'
  | '/[0.4]'
  | '/[0.5]'
  | '/[0.6]'
  | '/[0.7]'
  | '/[0.8]'
  | '/[0.9]';

declare global {
  interface Window {
    lang: any;
    webkit: any;
  }

  interface String {
    capitalize(): string;
  }
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

window.lang = window.lang || {};
window.webkit = window.webkit || {};

export {};

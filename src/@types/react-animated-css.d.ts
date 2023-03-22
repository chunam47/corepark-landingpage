import { PropsWithChildren } from "react";

declare module 'react-animated-css' {
  interface AnimatedProps extends PropsWithChildren {
    /**
     * The animation-in style.
     * @default "fadeIn"
     */
     animationIn?: AnimationString;

     /**
      * The animation-out style.
      * @default "fadeOut"
      */
     animationOut?: AnimationString;
  }
}

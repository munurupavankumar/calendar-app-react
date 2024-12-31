// alert.d.ts
import * as React from "react"
import { VariantProps } from "class-variance-authority"
import { alertVariants } from "./alert"

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

declare const Alert: React.ForwardRefExoticComponent<
  AlertProps & React.RefAttributes<HTMLDivElement>
>
declare const AlertTitle: React.ForwardRefExoticComponent<
  AlertTitleProps & React.RefAttributes<HTMLParagraphElement>
>
declare const AlertDescription: React.ForwardRefExoticComponent<
  AlertDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>

export {
  Alert,
  AlertTitle,
  AlertDescription,
  alertVariants
}
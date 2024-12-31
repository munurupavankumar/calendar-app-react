import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export interface DialogProps extends DialogPrimitive.DialogProps {}
export interface DialogContentProps extends DialogPrimitive.DialogContentProps {}
export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface DialogTitleProps extends DialogPrimitive.DialogTitleProps {}

declare const Dialog: React.FC<DialogProps>
declare const DialogTrigger: React.FC<DialogPrimitive.DialogTriggerProps>
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>
declare const DialogHeader: React.FC<DialogHeaderProps>
declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>
declare const DialogClose: React.FC<DialogPrimitive.DialogCloseProps>

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
}
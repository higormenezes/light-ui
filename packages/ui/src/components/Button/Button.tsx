import { PolymorphicComponent } from "@light/core"
import { forwardRef } from "react"
import type { TElement, TPolymorphicPropsWithRef } from "@light/core"

const defaultElement: TElement = "button"
type TDefaultElement = typeof defaultElement

export type ButtonProps<E extends TElement = TDefaultElement> =
  TPolymorphicPropsWithRef<E>

function _Button<E extends TElement = TDefaultElement>(
  { as, ...props }: ButtonProps<E>,
  ref: ButtonProps<E>["ref"]
) {
  return <PolymorphicComponent as={as ?? defaultElement} {...props} ref={ref} />
}

export const Button = forwardRef(_Button) as typeof _Button

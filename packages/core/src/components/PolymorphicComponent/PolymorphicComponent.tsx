import type { ReactElement } from "react"
import { forwardRef } from "react"
import type { TElement, TPolymorphicPropsWithRef } from "../../types"

const defaultElement = "div" satisfies TElement
type TDefaultElement = typeof defaultElement

export type PolymorphicComponentProps<E extends TElement = TDefaultElement> =
  TPolymorphicPropsWithRef<E>

type TPolymorphicComponent = <E extends TElement = TDefaultElement>(
  props: PolymorphicComponentProps<E>
) => ReactElement | null

function _PolymorphicComponent<E extends TElement = TDefaultElement>(
  { as, ...props }: PolymorphicComponentProps<E>,
  ref: PolymorphicComponentProps<E>["ref"]
) {
  const Tag = as ?? defaultElement
  return <Tag {...props} ref={ref} />
}

export const PolymorphicComponent = forwardRef(
  _PolymorphicComponent
) as TPolymorphicComponent

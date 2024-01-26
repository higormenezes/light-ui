import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
} from "react"
import type { Override } from "./utils"

export type TElement = ElementType

export type TElementProps<E extends TElement> = {
  as?: E
}

export type TPolymorphicPropsWithoutRef<
  E extends TElement,
  P = unknown,
> = Override<ComponentPropsWithoutRef<E>, P> & TElementProps<E>

export type TPolymorphicPropsWithRef<
  E extends TElement,
  P = unknown,
> = Override<ComponentPropsWithRef<E>, P> & TElementProps<E>

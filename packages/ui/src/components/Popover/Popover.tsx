import type { ReactNode, RefObject } from "react"
import { createPortal } from "react-dom"
import { usePopover } from "./usePopover"
import type { TAnchorReference, TContentReference } from "./types"
import styles from "./popover.module.css"

export type PopoverProps = {
  anchorRef: RefObject<HTMLElement>
  /** @defaultValue false */
  open?: boolean
  children?: ReactNode

  anchorReference?: Partial<TAnchorReference>
  contentReference?: Partial<TContentReference>
}

export function Popover(props: PopoverProps) {
  const {
    anchorRef,
    open: openProp = false,
    anchorReference: anchorReferenceProp,
    contentReference: contentReferenceProp,
    children,
  } = props

  const anchorReference: TAnchorReference = {
    vertical: anchorReferenceProp?.vertical ?? "end",
    horizontal: anchorReferenceProp?.horizontal ?? "start",
  }

  const contentReference: TContentReference = {
    vertical: contentReferenceProp?.vertical ?? "start",
    horizontal: contentReferenceProp?.horizontal ?? "start",
  }

  const { open, style } = usePopover({
    anchorRef,
    open: openProp,
    anchorReference,
    contentReference,
  })

  return (
    open &&
    createPortal(
      <div
        className={styles.test}
        data-light-ui-portal
        style={{ ...style, maxWidth: 300 }}
      >
        {children}
      </div>,
      document.body
    )
  )
}

import type { CSSProperties, RefObject } from "react"
import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { assertNever } from "@light/core"
import type { TAnchorReference, TContentReference } from "./types"

export type UsePopoverProps = {
  anchorRef: RefObject<HTMLElement>
  open: boolean
  anchorReference: TAnchorReference
  contentReference: TContentReference
}

export function usePopover(properties: UsePopoverProps) {
  const { anchorRef, open, anchorReference, contentReference } = properties

  const [style, setStyle] = useState<CSSProperties>({})

  const calculateAnchorPosition = useCallback(() => {
    const anchorElement = anchorRef.current

    if (anchorElement) {
      const anchorElementRect = anchorElement.getBoundingClientRect()

      let left = anchorElementRect.x + window.scrollX
      let top = anchorElementRect.y + window.scrollY
      let translateX = "0%"
      let translateY = "0%"

      switch (anchorReference.horizontal) {
        case "start": {
          left += 0
          break
        }
        case "center": {
          left += anchorElementRect.width / 2
          break
        }
        case "end": {
          left += anchorElementRect.width
          break
        }
        default: {
          assertNever(anchorReference.horizontal)
        }
      }

      switch (anchorReference.vertical) {
        case "start": {
          top += 0
          break
        }
        case "center": {
          top += anchorElementRect.height / 2
          break
        }
        case "end": {
          top += anchorElementRect.height
          break
        }
        default: {
          assertNever(anchorReference.vertical)
        }
      }

      switch (contentReference.horizontal) {
        case "start": {
          translateX = "0%"
          break
        }
        case "center": {
          translateX = "-50%"
          break
        }
        case "end": {
          translateX = "-100%"
          break
        }
        default: {
          assertNever(contentReference.horizontal)
        }
      }

      switch (contentReference.vertical) {
        case "start": {
          translateY = "0%"
          break
        }
        case "center": {
          translateY = "-50%"
          break
        }
        case "end": {
          translateY = "-100%"
          break
        }
        default: {
          assertNever(contentReference.vertical)
        }
      }

      left = Math.ceil(left)
      top = Math.ceil(top)

      setStyle({
        position: "absolute",
        left,
        top,
        transform: `translate(${translateX}, ${translateY})`,
      })
    }
  }, [
    anchorRef,
    anchorReference.horizontal,
    anchorReference.vertical,
    contentReference.horizontal,
    contentReference.vertical,
  ])

  useLayoutEffect(() => {
    if (open) {
      calculateAnchorPosition()
    }
  }, [open, calculateAnchorPosition])

  // event listeners
  useEffect(() => {
    if (open) {
      window.addEventListener("resize", calculateAnchorPosition)
    }

    return () => {
      window.removeEventListener("resize", calculateAnchorPosition)
    }
  }, [calculateAnchorPosition, open])

  return {
    open,
    style,
  }
}

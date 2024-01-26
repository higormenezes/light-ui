"use client"

import { Button } from "@light/ui"
import * as Avatar from "@radix-ui/react-avatar"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>Test</Button>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image
          alt="Colm Tuite"
          className="AvatarImage"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image
          alt="Pedro Duarte"
          className="AvatarImage"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          JD
        </Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="AvatarRoot">
        <Avatar.Fallback className="AvatarFallback">PD</Avatar.Fallback>
      </Avatar.Root>
    </main>
  )
}

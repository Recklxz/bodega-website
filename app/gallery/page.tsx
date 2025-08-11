import type { Metadata } from "next"
import { GalleryPageClient } from "./GalleryPageClient"

export const metadata: Metadata = {
  title: "Gallery | Bodega Kanpur – Photos of Food, Drinks & Ambiance",
  description:
    "Explore Bodega's gallery featuring our elegant ambiance, signature cocktails, Euro-Asian cuisine, and memorable moments from Kanpur's premier cocktail lounge.",
}

export default function GalleryPage() {
  return <GalleryPageClient />
}

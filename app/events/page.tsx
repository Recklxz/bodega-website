import type { Metadata } from "next"
import EventsPageClient from "./EventsPageClient"

export const metadata: Metadata = {
  title: "Private Events & Parties | Bodega Cocktail Bar Kanpur",
  description:
    "Host your next party or corporate event at Bodega Kanpur. Elegant bar venue, customizable menus and full catering services for groups. Inquire now!",
}

export default function EventsPage() {
  return <EventsPageClient />
}

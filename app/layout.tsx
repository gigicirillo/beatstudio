import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Beat Studio Gubbio | Diamo ritmo al tuo benessere", description: "Indoor Cycling, Striding Original, Olistic Workout e Palestra della Salute Rijenera a Gubbio.", openGraph:{title:"Beat Studio Gubbio",description:"Diamo ritmo al tuo benessere.",images:["/assets/hero.jpg"]}, icons:{icon:"/assets/icon.jpg"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="it"><body>{children}</body></html>}

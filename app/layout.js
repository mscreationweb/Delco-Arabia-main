import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/onpoint.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
// import 'owl.carousel'
import 'swiper/css/free-mode';
import { jost, rajdhani } from '@/lib/font'
export const metadata = {
    title: 'Delco Arabia',
    description: 'Delco Arabia',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${jost.variable} ${rajdhani.variable}`}>
            <body>{children}</body>
        </html>
    )
}

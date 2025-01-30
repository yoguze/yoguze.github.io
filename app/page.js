import Link from "next/link"; // 追加
import Image from "next/image";
import "./globals.css"; 

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="title">公式サイト</h1>
        <nav>
          <ul className="nav-list-button">
            <li><Link href="/" className="nav-item">Home</Link></li>
            <li><Link href="/video" className="nav-item">Video</Link></li>
            <li><Link href="/profile" className="nav-item">Profile</Link></li>
            <li><Link href="/schedule" className="nav-item">Schedule</Link></li>
            <li><Link href="/news" className="nav-item">News</Link></li>
          </ul>
        </nav>
        <nav>
          <ul className="nav-list-link">
            <li><Link href="https://www.youtube.com/@sukima2022" className="nav-item-l"><img src="youtube.png"></img></Link></li>
            <li className="nav-item-1"></li>
            <li><Link href="https://www.tiktok.com/@yoguze02" className="nav-item-l"><img src="tiktok.png"></img></Link></li>
            <li className="nav-item-1"></li>
            <li><Link href="https://x.com/Yoguze1210" className="nav-item-l"><img src="x.png"></img></Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Image src="/yoguze.png" alt="yoguze" width={600} height={600} className="main-image" />
      </div>
    </div>
  );
}


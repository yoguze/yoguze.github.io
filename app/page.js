import Image from "next/image";
import "./globals.css"; // ここを修正

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="title">公式サイト</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#" className="nav-item">Home</a></li>
            <li><a href="#" className="nav-item">Video</a></li>
            <li><a href="#" className="nav-item">Profie</a></li>
            <li><a href="#" className="nav-item">Schedule</a></li>
            <li><a href="#" className="nav-item">Account</a></li>
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

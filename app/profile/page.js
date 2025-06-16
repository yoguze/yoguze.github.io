"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./profile.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="title">公式サイト</h1>

        {/* PCナビ */}
        <nav className="pc-nav">
          <ul className="nav-list-button">
            <li><Link href="/" className="nav-item">Home</Link></li>
            <li><Link href="/video" className="nav-item">Video</Link></li>
            <li><Link href="/profile" className="nav-item">Profile</Link></li>
            <li><Link href="/schedule" className="nav-item">Schedule</Link></li>
            <li><Link href="/news" className="nav-item">News</Link></li>
            <li><Link href="/contact" className="nav-item">Contact</Link></li>
          </ul>
          <ul className="nav-list-link">
            <li><Link href="https://www.youtube.com/@sukima2022" className="nav-item-l"><img src="youtube.png" /></Link></li>
            <li><Link href="https://www.tiktok.com/@yoguze02" className="nav-item-l"><img src="tiktok.png" /></Link></li>
            <li><Link href="https://x.com/Yoguze1210" className="nav-item-l"><img src="x.png" /></Link></li>
          </ul>
        </nav>

        {/* ハンバーガー（モバイル用） */}
        <button className="hamburger" onClick={toggleMenu}>☰</button>
      </div>

      {/* モバイルメニュー（オーバーレイ） */}
      {menuOpen && (
        <div className="overlay-menu">
          <button className="close-button" onClick={toggleMenu}>✕</button>
          <ul className="nav-list-button">
            <li><Link href="/" className="nav-item">Home</Link></li>
            <li><Link href="/video" className="nav-item">Video</Link></li>
            <li><Link href="/profile" className="nav-item">Profile</Link></li>
            <li><Link href="/schedule" className="nav-item">Schedule</Link></li>
            <li><Link href="/news" className="nav-item">News</Link></li>
            <li><Link href="/contact" className="nav-item">Contact</Link></li>
          </ul>
          <ul className="nav-list-link">
            <li><Link href="https://www.youtube.com/@sukima2022" className="nav-item-l"><img src="youtube.png" /></Link></li>
            <li><Link href="https://www.tiktok.com/@yoguze02" className="nav-item-l"><img src="tiktok.png" /></Link></li>
            <li><Link href="https://x.com/Yoguze1210" className="nav-item-l"><img src="x.png" /></Link></li>
          </ul>
        </div>
      )
    }
      <div className="margin"></div>
      {/* C: キャラコンセプト */}
<div className="profile-container">
      {/* 左カラム：キャライラスト */}
      <div className="profile-image-section">
        <Image src="/yoguze.png" alt="よぐぜ" width={400} height={600} className="profile-image" />
      </div>

      {/* 右カラム：テキスト情報 */}
      <div className="profile-text-section">
        <h1 className="profile-name">よぐぜ - Yoguze</h1>

        <section className="profile-section">
          <h2>基本プロフィール</h2>
          <ul>
            <li>誕生日：12月10日</li>
            <li>好きなもの：ヨーグルト、アニメ、ゲーム</li>
            <li>苦手なもの：酒、電話、人付き合い</li>
          </ul>
        </section>

        <section className="profile-section">
          <h2>キャラコンセプト</h2>
          <p>
            「社会不適合の進化記録」──
            ゲームとアニメに依存するビビり陰キャが、
            発信を通して少しずつ“変化”していく物語。
          </p>
        </section>
        <section className="profile-section">
          <h2>Q&A</h2>
          <ul>
            <li><strong>Q.</strong> 好きなアニメは？ 　　⇒  <strong>A.</strong> CLANNAD、シュタゲ</li>
            <li><strong>Q.</strong> 苦手なことは？ 　　　⇒  <strong>A.</strong> 電話、人と目を合わせること</li>
            <li><strong>Q.</strong> 最近始めたことは？ 　⇒  <strong>A.</strong> 発信を続けること</li>
          </ul>
        </section>
      </div>
    </div>

      
     {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <h2>よぐぜ</h2>
        </div>
        <div className="footer-center">
          <ul className="footer-nav">
            <li><Link href="/" className="footer-item">Home</Link></li>
            <li><Link href="/video" className="footer-item">Video</Link></li>
            <li><Link href="/profile" className="footer-item">Profile</Link></li>
            <li><Link href="/schedule" className="footer-item">Schedule</Link></li>
            <li><Link href="/news" className="footer-item">News</Link></li>
            <li><Link href="/contact" className="footer-item">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="footer-icons">
            <Link href="https://www.youtube.com/@sukima2022"><img src="youtube.png" alt="YouTube" /></Link>
            <img src="twitch.png" alt="Twitch" />
            <Link href="https://x.com/Yoguze1210"><img src="x.png" alt="X" /></Link>
            <Link href="https://www.tiktok.com/@yoguze02"><img src="tiktok.png" alt="TikTok" /></Link>
            <Link href="https://note.com/yoguze45610"><img src="note.png" alt="Note" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
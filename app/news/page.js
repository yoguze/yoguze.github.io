"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./news.css";

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
     <div className="news">
        <div className="note-container">
          <p className="note-title">直近2ヶ月の出来事</p>
          <div className="note-item">
            <p>9/22：矢上祭でワードディスタンスゲームを展示(自分はほとんど何もしていない模様)</p>
          </div>
          <div className="note-item">
            <p>10/4：東急ストア日吉店でバイトを始める。</p>
          </div>
          <div className="note-item">
            <p>10/6：Pythonデータ分析実践試験に合格</p>
          </div>
          <div className="note-item">
            <p>11/11：ポケモン公式大会「スター団杯」194/14805 位(上位1.5%)</p>
          </div>
          <div className="note-item">
            <p>11/13：慶應AICの講習会「AIビジネス基礎」に参加</p>
          </div>
          <div className="note-item">
            <p>12/4：統計検定2級合格</p>
          </div>
          <div className="note-item">
            <p>12/17：AICビジネス基礎合格証授与</p>
          </div>
          <div className="note-item">
            <p>12/25：クリスマス</p>
          </div>
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
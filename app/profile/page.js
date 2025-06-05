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
            <li><Link href="/music" className="nav-item">Music</Link></li>
            <li><Link href="/news" className="nav-item">News</Link></li>
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
            <li><Link href="/music" className="nav-item">Music</Link></li>
            <li><Link href="/news" className="nav-item">News</Link></li>
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
      {/* Introduction Section */}
      <div className="introduction">
        <div className="intro-left">
          <img src="yoguze.png" alt="Profile" className="intro-image" />
        </div>
        <div className="intro-right">
          <p className="intro-title">自己紹介:よぐぜ</p>
          <p className="intro-text">生年月日:2004年12月10日</p>
          <p className="intro-text">好きなもの:アニメ、モンスト、ポケモン、ヨーグルト</p>
          <p className="intro-text">苦手なもの:酢、炭酸、常識という名の暴力</p>
          <p className="intro-text">コメント:Youtubeでアニメの面白いネタや注目のアニメの解説についての動画を元気に投稿してます！水曜日は、Twitchでゲーム配信があるからぜひ遊びに来てね！</p>
        </div>
      </div>

      {/* Hobby Anime Section */}
      <div className="hobby-anime">
        <p className="hobby-title">好きなアニメTOP3</p>
        <div className="anime-rank">
         <div className="anime-image">
            <img src="bluerock.png"></img>
         </div>
         <div className="anime-detail">
          <p className="hobby-text">1位:ブルーロック</p>
          <p className="anime-description">理由①:1キャラへの思い入れが強い</p>
          <p className="anime-description">ブルーロックは、二次セレクションで生き残った主要メンバーでも25人はいる。それに加えてU20や世界代表など含めると、合計で40人以上はいる。彼らの個性やキャラデザインが原作やアニメ内で超丁寧に描かれているのがすごい。</p>
          <p className="anime-description">理由②:思想や考え方を大きく変えた</p>
          <p className="anime-description">ブルーロック内の絵心甚八の発言は、ちゃんと考えたら当然と思うけど、気づかないところがある。俺は、運のカラクリや天才と秀才(アニメ勢ネタバレ注意)がめちゃくちゃ刺さった。</p>
          <p className="anime-description">理由③:個人的に糸師凛がアニメキャラで一番好き</p>
          <p className="anime-description">強キャラ好きな俺が、一番心にグサッと来た人。二次セレクションで見せた味方の能力を最大限に引き出したり相手の個性をむき出しにして倒すっていうプレースタイルもそうだし、他の人に流されることなく唯我独尊を貫くエゴイスト的なところが超かっこいい。アニメの声とデザインがマッチしすぎてるのもGood！あと、アニメ2期の兄弟のFINAL MATCH UP のシーンはマジでヤバイからみんなも見てほしい。</p>
         </div>
        </div>
        <div className="anime-rank">
         <div className="anime-image">
            <img src="gintama.png"></img>
         </div>
         <div className="anime-detail">
            <p className="hobby-text">2位:銀魂</p>
            <p className="anime-description">理由①:ふざけてる回が面白しろすぎる</p>
            <p className="anime-description">銀魂は、頭のネジがぶっ飛んでるやつしかいないからこそできるおもしろさ。特に、絶妙な下ネタや喧嘩売ってるようにしか見えないパロディで笑かしてくるのは銀魂だけ。俺個人的には、コメディ回のズラ(桂)はガチで好き。</p>
            <p className="anime-description">理由②:シリアス回が感動する</p>
            <p className="anime-description">普段は意味わからないコメディが多い銀魂だけど、将軍暗殺編や歌舞伎町四天王編とかで見せた銀さんの侍魂がマジで心にグッとくる。</p>
         </div>
        </div>
        <div className="anime-rank">
          <div className="anime-image">
            <img src="gotoubun.png"></img>
          </div>
          <div className="anime-detail">
            <p className="hobby-text">3位:五等分の花嫁</p>
            <p className="anime-description">理由①:かわいい</p>
            <p className="anime-description">かわいい。それ以外に読む理由ある？個人的には、五月ちゃんのプク―ってしてる顔は最高。</p>
            <p className="anime-description">理由②:かわいい</p>
            <p className="anime-description">かわいい、以上。みんなはだれが一番好きかな？</p>
          </div>
        </div>
      </div>

      {/* Hobby Game Section */}
      <div className="hobby-game">
        <p className="hobby-title">その他5回以上見たアニメ</p>
        <p className="hobby-text">Reゼロから始める異世界生活</p>
        <p className="hobby-text">鬼滅の刃</p>
        <p className="hobby-text">進撃の巨人</p>
        <p className="hobby-text">イナズマイレブン</p>
        <p className="hobby-text">ワンピース</p>
        <p className="hobby-text">東京リベンジャーズ</p>
        <p className="tellme">「これおススメだよー」ってのがあったらコメントかDMとかで教えて！</p>
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
            <li><Link href="/music" className="footer-item">Music</Link></li>
            <li><Link href="/news" className="footer-item">News</Link></li>
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
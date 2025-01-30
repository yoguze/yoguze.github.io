"use client";

import Link from "next/link";
import "./profile.css";

export default function Profile() {
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

      {/* Profile Section */}
      <div className="profile">
        <div className="profile-container">
          <p className="profile-title">プロフィール</p>
          <p className="profile-p">2004年12月10日:広島県内病院で爆誕⇒愛知県田原市で育つ</p>
          <p className="profile-p">2011年4月:田原中部小学校入学</p>
          <p className="profile-p">2013年4月:親の影響でソフトテニスを始める</p>
          <p className="profile-p">2017年1月:ソフトテニスダブルスで3位をとる。</p>
          <p className="profile-p">(むっつーは前衛で上手い後衛の友達に助けてもらった模様)</p>
          <p className="profile-p">2017年3月:同校卒業</p>
          <p className="profile-p">2017年4月:田原中学校入学</p>
          <p className="profile-p">2018年11月:部活の卓球大会で市内3位に入る(当時卓球にドハマりしてた)</p>
          <p className="profile-p">2020年3月:同校卒業</p>
          <p className="profile-p">2020年4月:愛知県立豊橋東高校入学</p>
          <p className="profile-p">2023年3月:同校卒業</p>
          <p className="profile-p">2024年4月:慶應義塾大学商学部入学⇒今に至る</p>
        </div>
      </div>

      {/* Hobby Section */}
      <div className="hobby">
        <div className="hobby-container">
          <p className="hobby-title">趣味</p>
          <p className="hobby-p">❶アニメ: 同じアニメは最低5回は見ないと気が済まない。特に最近は「五等分の花嫁」にハマってしまった(ラブコメ系は実はこれが初めて)。自分の心の支えとなってるアニメは、ブルーロック・銀魂・ブラッククローバー。</p>
          <p className="hobby-p">❷ゲーム: 最近、一度データを消去したモンストに超ハマってしまっている(モンストのやりすぎが原因で、中3の愛知県模試で志望校の判定がAからDに落ちた経験あり)。</p>
          <p className="hobby-p">大学に入ってからはポケモン対戦もたまにやるようになった。11/8～11/11に開催されたインターネット公式大会で、194/14805という上位1.5%だった。だが実際は資格試験の勉強をしていて、構築を考えたり練習大会に参加したりする暇がなくて基本選出のヘルガーとコノヨザル以外適当に考えてた。だから、この順位見たときは「もう少し真面目にやればよかった」とすごく後悔してる。ちなみに構築は<a href="https://note.com/mute_wasp2483/n/n17c902c3586a" target="_blank" rel="noopener noreferrer" className="kotira">こちら</a>を参照。好きなポケモンはゼルネアス。</p>
          <p className="hobby-p">その他にも、1人でルービックキューブや旅行なども好きである。また、カラオケやボウリング、ボードゲームなど友達と遊ぶことも好きで、仲がいい友達に誘われたり、テンションが上がっているときにはだいたい発狂してる。</p>
        </div>
      </div>
    </div>
  );
}

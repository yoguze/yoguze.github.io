"use client";

import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Link from "next/link";
import Papa from "papaparse";  
import "./schedule.css";

export default function Schedule() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.csv") 
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true, 
          skipEmptyLines: true,
          complete: (result) => {
            const parsedEvents = result.data.map(event => ({
              title: event.Title,
              start: event.Date, 
              color: event.Color || "black",  
              textColor: "black",
              extendedProps: { 
                startTime: event.StartTime,
                endTime: event.EndTime,
                description: event.Description
              }
            }));

            setEvents(parsedEvents);
          }
        });
      })
      .catch(error => console.error("CSV読み込みエラー:", error));
  }, []);

  // ✅ ツールチップの表示関数
  const handleMouseEnter = (info) => {
    const { title, extendedProps } = info.event;
    const { startTime, endTime, description } = extendedProps;

    // 既存のツールチップがあれば削除
    let tooltip = document.getElementById("fc-tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.id = "fc-tooltip";
      tooltip.classList.add("fc-event-tooltip");
      document.body.appendChild(tooltip);
    }

    // ツールチップの内容を設定
    tooltip.innerHTML = `
      <strong>タイトル :</strong> ${title}<br>
      <strong>時間 :</strong> ${startTime} ～ ${endTime}<br>
      <strong>説明 :</strong> ${description}
    `;

    // 位置と表示設定
    tooltip.style.display = "block";
    tooltip.style.position = "absolute";
    tooltip.style.left = `${info.jsEvent.pageX + 10}px`;
    tooltip.style.top = `${info.jsEvent.pageY + 10}px`;
    tooltip.style.zIndex = "1000";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tooltip.style.color = "white";
    tooltip.style.padding = "6px";
    tooltip.style.borderRadius = "4px";
    tooltip.style.fontSize = "12px";
  };

  // ✅ ツールチップの非表示関数
  const handleMouseLeave = () => {
    const tooltip = document.getElementById("fc-tooltip");
    if (tooltip) {
      tooltip.style.display = "none";
    }
  };

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
      {/* Main Content: FullCalendar */}
      <div className="margin"></div>
      <div className="calendar-info">
        <h2>色の意味：</h2>
        <ul>
          <li>🟣:横動画投稿(金曜日の21:00に投稿予定)</li>
          <li>🟠:雑談LIVE配信(火,土の21:00~23:00実施予定)</li>
          <li>🟢:ゲーム配信(水曜日の21:00~23:00に実施予定)</li>
          <li>🟡:モンストの日配信(毎月10,20,30日のある時間帯に開催)</li>
          <li>🔵:その他</li>
        </ul>
      </div>
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}  
          editable={true}
          selectable={true}
          eventMouseEnter={handleMouseEnter}  // ✅ ここに関数をセット
          eventMouseLeave={handleMouseLeave}  // ✅ ここに関数をセット
        />
      </div>
      <footer className="footer">
        {/* 左サイド */}
        <div className="footer-left">
          <h2>よぐぜ</h2>
        </div>

        {/* 中央サイド */}
        <div className="footer-center">
          <ul className="footer-nav">
            <li><Link href="/" className="footer-item">Home</Link></li>
            <li><Link href="/video" className="footer-item">Video</Link></li>
            <li><Link href="/profile" className="footer-item">Profile</Link></li>
            <li><Link href="/schedule" className="footer-item">Schedule</Link></li>
            <li><Link href="/news" className="footer-item">News</Link></li>
          </ul>
        </div>

        {/* 右サイド */}
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

"use client";

import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; 
import interactionPlugin from "@fullcalendar/interaction";
import Link from "next/link";
import Papa from "papaparse";  
import "./schedule.css";

export default function Schedule() {
  const [events, setEvents] = useState([]);
  const [calendarView, setCalendarView] = useState("dayGridMonth");

  useEffect(() => {
    fetch("/events.csv") 
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true, 
          skipEmptyLines: true,
          complete: (result) => {
            const parsedEvents = result.data.map(event => {
              const hasTime = event.StartTime && event.EndTime; // 時間情報があるか

              return {
                title: event.Title || "無題",
                start: hasTime ? `${event.Date}T${event.StartTime}` : event.Date, // 時間付き or 日付のみ
                end: hasTime ? `${event.Date}T${event.EndTime}` : null,
                allDay: !hasTime, // 時間があるなら allDay=false
                color: event.Color || "black",  
                textColor: "black",
                extendedProps: { 
                  startTime: event.StartTime ? event.StartTime.split(":").slice(0, 2).join(":") : "不明",
                  endTime: event.EndTime ? event.EndTime.split(":").slice(0, 2).join(":") : "不明",
                  description: event.Description || "説明なし"
                }
              };
            });

            setEvents(parsedEvents);
          }
        });
      })
      .catch(error => console.error("CSV読み込みエラー:", error));
  }, []);

  

  // ✅ ツールチップの表示関数
  const handleMouseEnter = (info) => {
    const { title,start,extendedProps } = info.event;
    const { startTime, endTime, description } = extendedProps;
    const eventDate = new Date(start);
    const formattedDate = `${eventDate.getFullYear()}年${eventDate.getMonth() + 1}月${eventDate.getDate()}日`;

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
      <strong>日付 :</strong> ${formattedDate}<br>
      <strong>タイトル :</strong> ${title}<br>
      <strong>時間 :</strong> ${startTime} ～ ${endTime}<br>
      <strong>説明 :</strong> ${description}
    `;

    const tooltipWidth = 200;  

// クリックしたイベントの座標を取得
const eventRect = info.jsEvent.target.getBoundingClientRect(); 

// 予定の右下にツールチップの右上を配置
let posX = eventRect.right - tooltipWidth;
let posY = eventRect.bottom + window.scrollY;

// 画面端でツールチップがはみ出さないように補正
if (posX < 0) posX = 10;  // 左にはみ出したら補正
if (posY + 80 > window.innerHeight) posY -= 80 + 20;  // 下にはみ出したら補正

    // 位置と表示設定
    tooltip.style.display = "block";
    tooltip.style.position = "absolute";
    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;
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
        <div className="calendar-view-selector">
          <label>カレンダー表示: </label>
          <select value={calendarView} onChange={(e) => setCalendarView(e.target.value)}>
            <option value="dayGridMonth">月間カレンダー</option>
            <option value="timeGridWeek">週間カレンダー</option>
          </select>
        </div>
      {/* カレンダー表示モード選択 */}
        <FullCalendar
        key={calendarView}
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
          initialView={calendarView}
          events={events}  
          editable={true}
          selectable={true}
          eventMouseEnter={handleMouseEnter}  // ✅ ここに関数をセット
          eventMouseLeave={handleMouseLeave}  // ✅ ここに関数をセット
          eventDisplay="block"
          displayEventTime={false}  // 🔥 ここを追加（時間を非表示にする）
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false, 
          }}
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

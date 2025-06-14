from flask import Flask, request, redirect, jsonify
from flask_cors import CORS
from email.message import EmailMessage
import smtplib
import os
from dotenv import load_dotenv
load_dotenv()

# --- 設定 ---

ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

# --- Flaskアプリ ---
app = Flask(__name__)
CORS(app)  # 全てのオリジンからのリクエストを許可（Next.js用）

# --- メール送信処理 ---
@app.route('/', methods=['POST'])
def contact():
    data = request.form
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    try:
        msg = EmailMessage()
        msg['Subject'] = '【お問い合わせ】'
        msg['From'] = ADMIN_EMAIL  # 自分（ログインする人）
        msg['To'] = ADMIN_EMAIL    # 受信者も自分
        msg.set_content(f"送信者名: {name}\nメール: {email}\n\n{message}")

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(ADMIN_EMAIL, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return jsonify({'status': 'success'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# --- 起動設定 ---
if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))  # Render用にPORTを取得
    app.run(host='0.0.0.0', port=port)

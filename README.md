
# 🧩 Riddle Game - משחק חידות בטרמינל

## 🎯 תיאור הפרויקט

פרויקט זה הוא משחק חידות אינטראקטיבי מבוסס Node.js שבו המשתמש מתבקש לענות על סדרת חידות. המשחק מודד את הזמן שלוקח לענות על כל חידה, שומר את הנתונים עבור כל שחקן, ומציג חיווי על הצלחה או שגיאה.

## 🗂️ מבנה תיקיות

```
project riddles/
├── app.js                  # קובץ ראשי שמפעיל את המשחק
├── classes/
│   ├── Player.js           # מחלקת ניהול שחקנים
│   └── Riddle.js           # מחלקה לניהול חידות והגשה
├── riddles/
│   ├── riddesEesy/         # חידות קלות
│   ├── riddesMedum/        # חידות בינוניות
│   ├── riddesHard/         # חידות קשות
│   └── index.js            # איסוף כל החידות למערך אחד
├── time/
│   └── time.js             # ניהול מדידת זמן ותיעוד
├── node_modules/           # תלות חיצונית - readline-sync
└── package-lock.json       # ניהול גרסאות מודולים
```

## 📦 תלות

- Node.js
- `readline-sync` (לקבלת קלט מהמשתמש)

התקנת התלות:
```bash
npm install readline-sync
```

## ▶️ הרצת המשחק

```bash
node app.js
```

## 🧠 תיאור רכיבי המערכת

### 🔹 מחלקת `Riddle` (`classes/Riddle.js`)
- קולטת את מערך החידות (`ridders`)
- שיטה `ask()` מציגה את החידות, מקבלת קלט ומודדת את זמן התשובה

### 🔹 מחלקת `Player` (`classes/Player.js`)
- יוצרת מופע שחקן חדש עם שם, ניקוד, וזמן מענה
- שיטה `add()` שומרת את הנתונים למערך סטטי

### 🔹 ניהול זמן (`time/time.js`)
- `time()` – מחזיר את זמן התחלה
- `returnTime(start, end)` – מחשב את ההפרש בשניות
- `addSecondsForAsk()` – שומר זמן לכל חידה
- `addTimeForAllRidders()` – שומר את הזמן הכולל

### 🔹 קבצי החידות

דוגמה לקובץ חידה (`r1.js`):
```js
export const r1 = {
  id: "question 1",
  name: "Easy Math",
  question: "What is 1 + 1?",
  answer: "2"
};
```

הקובץ `riddles/index.js` מאגד את כל החידות מכל תיקיית קושי ומייצא מערך בשם `ridders`.

---

## ✍️ קרדיטים
- פיתוח: ישראל ויצמן
- תמיכה בשאלות: ChatGPT

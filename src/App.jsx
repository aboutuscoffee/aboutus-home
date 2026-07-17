const APPS = [
  {
    icon: "🌱",
    name: "豆プロファイル",
    desc: "豆・農園・産地の情報",
    url: "https://aboutuscoffee.github.io/aboutus-beans-profile/",
  },
  {
    icon: "📊",
    name: "売上管理",
    desc: "日報入力・売上推移",
    url: "https://aboutuscoffee.github.io/aboutus-sales/",
  },
  {
    icon: "📈",
    name: "売上昨対",
    desc: "天気・曜日調整後の昨対",
    url: "https://aboutuscoffee.github.io/aboutus-sales-yoy/",
  },
  {
    icon: "✅",
    name: "スタッフ・タスク",
    desc: "担当制度・タスク管理",
    url: "https://aboutuscoffee.github.io/aboutus-staff-todo/",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <p className="text-2xl font-bold text-[#1e3a5f]">About Us Coffee</p>
        <p className="text-sm text-gray-400 mt-1">店舗アプリ ホーム</p>
      </div>

      <div className="w-full max-w-sm grid grid-cols-2 gap-4">
        {APPS.map((app) => (
          <a
            key={app.url}
            href={app.url}
            className="flex flex-col items-center justify-center gap-2 bg-white rounded-2xl shadow-md py-6 px-3 text-center hover:bg-gray-100 active:scale-95 transition"
          >
            <span className="text-3xl">{app.icon}</span>
            <span className="text-sm font-bold text-[#1e3a5f]">{app.name}</span>
            <span className="text-xs text-gray-400">{app.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

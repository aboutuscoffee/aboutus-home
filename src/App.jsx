const APPS = [
  {
    icon: "icon-beans.png",
    name: "豆プロファイル",
    desc: "豆・農園・産地の情報",
    url: "https://aboutuscoffee.github.io/aboutus-beans-profile/",
  },
  {
    icon: "icon-sales.png",
    name: "売上管理",
    desc: "日報入力・売上推移",
    url: "https://aboutuscoffee.github.io/aboutus-sales/",
  },
  {
    icon: "icon-yoy.png",
    name: "売上昨対",
    desc: "天気・曜日調整後の昨対",
    url: "https://aboutuscoffee.github.io/aboutus-sales-yoy/",
  },
  {
    icon: "icon-staff.png",
    name: "スタッフ・タスク",
    desc: "担当制度・タスク管理",
    url: "https://aboutuscoffee.github.io/aboutus-staff-todo/",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4efe9] flex flex-col items-center px-4 py-10">
      <div className="text-center mb-8">
        <p className="text-2xl font-bold text-[#292524]">About Us Coffee</p>
        <p className="text-sm text-[#292524]/50 mt-1">店舗アプリ ホーム</p>
      </div>

      <div className="w-full max-w-sm grid grid-cols-2 gap-4">
        {APPS.map((app) => (
          <a
            key={app.url}
            href={app.url}
            className="flex flex-col items-center gap-2 active:scale-95 transition"
          >
            <img
              src={`${import.meta.env.BASE_URL}${app.icon}`}
              alt={app.name}
              className="w-20 h-20 rounded-2xl shadow-md"
            />
            <span className="text-sm font-bold text-[#292524] text-center">{app.name}</span>
            <span className="text-xs text-[#292524]/50 text-center">{app.desc}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

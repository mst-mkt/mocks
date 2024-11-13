import { IconDots, IconPlus, IconShare2, IconShoppingBag } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <Home />,
})

const SUBJECTS = [
  'コンピュータ・サイエンス',
  '情報連携学概論',
  'リーディング・ライティング',
] as const

const LECTURE_TIMES = [
  '09:00 ~ 10:30',
  '10:40 ~ 12:10',
  '13:00 ~ 14:30',
  '14:45 ~ 16:15',
  '16:30 ~ 18:00',
]

const Home = () => (
  <div className="mx-auto flex w-[92svw] max-w-[600px] flex-col gap-y-8 py-8">
    <hgroup>
      <h1 className="font-bold text-2xl">今日の予定</h1>
      <time className="font-bold text-accent">
        {new Date().getMonth()} / {new Date().getDate()}
      </time>
    </hgroup>
    <main className="flex flex-col gap-y-4">
      {[...Array(2)].map((_, i) => (
        <section key={i} className="relative flex flex-col gap-y-2 rounded-md bg-accent/10 p-4">
          <hgroup>
            <h2 className="text font-bold">{SUBJECTS[i]}</h2>
            <time className="font-bold text-accent text-sm">{LECTURE_TIMES[i]}</time>
          </hgroup>
          <div className="flex flex-col gap-y-1">
            <p className="text-sm">同じクラスの友達</p>
            <div className="flex gap-x-1">
              {[...Array(Math.floor(Math.random() * 3) + 2)].map((_, i) => (
                <div key={i} className="flex">
                  <img
                    src={`https://cataas.com/cat/says/${Math.random()}`}
                    className="h-6 w-6 rounded-full object-cover"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <nav className="absolute top-4 right-4">
            <button
              type="button"
              className="rounded p-2 text-foreground-200 hover:bg-foreground/10"
            >
              <IconShare2 size={20} />
            </button>
            <button
              type="button"
              className="rounded p-2 text-foreground-200 hover:bg-foreground/10"
            >
              <IconDots size={20} />
            </button>
          </nav>
        </section>
      ))}
      <section className="relative flex flex-col gap-y-2 rounded-md border border-accent border-dashed p-4">
        <hgroup>
          <h2 className="text font-bold">空き時間</h2>
          <time className="font-bold text-accent text-sm">12:10 ~ 13:00</time>
        </hgroup>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm">この時間空いている友人</p>
          <div className="flex gap-x-1">
            {[...Array(Math.floor(Math.random() * 3) + 2)].map((_, i) => (
              <div key={i} className="flex">
                <img
                  src={`https://cataas.com/cat/says/${Math.random()}`}
                  className="h-6 w-6 rounded-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <nav className="absolute top-4 right-4">
          <button type="button" className="rounded p-2 text-foreground-200 hover:bg-foreground/10">
            <IconShare2 size={20} />
          </button>
          <button type="button" className="rounded p-2 text-foreground-200 hover:bg-foreground/10">
            <IconDots size={20} />
          </button>
        </nav>
      </section>
      <section className="relative flex flex-col gap-y-2 rounded-md bg-background-50 p-4">
        <hgroup>
          <IconShoppingBag size={24} className="text-accent" />
          <h2 className="text font-bold">バイト</h2>
          <time className="font-bold text-accent text-sm">18:00 ~ 21:00</time>
        </hgroup>
        <nav className="absolute top-4 right-4">
          <button type="button" className="rounded p-2 text-foreground-200 hover:bg-foreground/10">
            <IconShare2 size={20} />
          </button>
          <button type="button" className="rounded p-2 text-foreground-200 hover:bg-foreground/10">
            <IconDots size={20} />
          </button>
        </nav>
      </section>
      <section className="relative flex flex-col gap-y-2 rounded-md border border-accent border-dashed p-4">
        <hgroup>
          <h2 className="text font-bold">空き時間</h2>
          <time className="font-bold text-accent text-sm">21:00 ~</time>
        </hgroup>
        <div className="flex flex-col gap-y-3">
          <p className="text-sm">この時間空いている友人</p>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="flex items-center gap-x-1 rounded-full bg-accent-100 px-4 py-2"
            >
              <IconPlus size={20} className="text-foreground-200" />
              <p>予定を追加</p>
            </button>
          </div>
          <div className="flex gap-x-1">
            {[...Array(Math.floor(Math.random() * 3) + 6)].map((_, i) => (
              <div key={i} className="flex">
                <img
                  src={`https://cataas.com/cat/says/${Math.random()}`}
                  className="h-6 w-6 rounded-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <nav className="absolute top-4 right-4">
          <button type="button" className="rounded p-2 text-foreground-200 hover:bg-foreground/10">
            <IconShare2 size={20} />
          </button>
          <button type="button" className="rounded p-2 text-foreground-200 hover:bg-foreground/10">
            <IconDots size={20} />
          </button>
        </nav>
      </section>
    </main>
    <nav>
      <button
        type="button"
        className="absolute right-[2svw] bottom-[2svw] rounded-full bg-accent p-4 shadow-sm hover:cursor-pointer"
      >
        <IconPlus size={20} className="text-white" />
      </button>
    </nav>
  </div>
)

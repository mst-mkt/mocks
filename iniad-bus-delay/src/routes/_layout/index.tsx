import { IconAlertTriangle, IconSearch } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'
import { array, object, optional, pipe, string, transform, union } from 'valibot'
import { Head } from '../../components/shared/Head'
import { PROJECT_NAME } from '../../constants/project'

const validationSearchParams = object({
  params: optional(
    union([
      pipe(
        string(),
        transform((value) => [value]),
      ),
      array(string()),
    ]),
  ),
})

export const Route = createFileRoute('/_layout/')({
  validateSearch: validationSearchParams,
  component: () => <Home />,
})

const Home = () => (
  <>
    <Head title="Home" description={`Top Page of ${PROJECT_NAME}`} />
    <div className="flex flex-col gap-y-4">
      <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-green-500/16 text-lg">
        いい感じの地図
        <br /> (バスのリアルタイム位置情報付き)
      </div>
      <div className="flex flex-col gap-y-2">
        {/* 遅延情報 */}
        <div className="flex flex-col gap-y-2 rounded-lg border-4 border-yellow-400/30 p-4">
          <div>
            <time className="font-bold text-foreground-400 text-sm">2024/12/20 12:34:56</time>
            <p>東京都交通バス 田町駅行き</p>
          </div>
          <div className="flex items-center gap-x-2">
            <IconAlertTriangle size={36} className="text-yellow-400" />
            <p className="font-bold text-lg">一部遅延あり</p>
          </div>
          <div>
            <div className="flex gap-x-4 text-sm">
              <p className="font-bold">区間:</p>
              <p>渋谷駅 ~ 田町駅</p>
            </div>
            <div className="flex gap-x-4 text-sm">
              <p className="font-bold">遅延時間:</p>
              <p>10分程度</p>
            </div>
          </div>
          <div className="my-2 h-[1px] w-full bg-foreground-800" />
          <button
            type="button"
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-background-50 px-4 py-2"
          >
            <IconSearch size={24} />
            <p>詳しく見る</p>
          </button>
        </div>
        {/* 運転見合わせ情報 */}
        <div className="flex flex-col gap-y-2 rounded-lg border-4 border-red-400/30 p-4">
          <div>
            <time className="font-bold text-foreground-400 text-sm">2024/12/20 12:34:56</time>
            <p>東京都交通バス 田町駅行き</p>
          </div>
          <div className="flex items-center gap-x-2">
            <IconAlertTriangle size={36} className="text-red-400" />
            <p className="font-bold text-lg">運転見合わせ</p>
          </div>
          <div>
            <div className="flex gap-x-4 text-sm">
              <p className="font-bold">区間:</p>
              <p>渋谷駅 ~ 田町駅</p>
            </div>
            <div className="flex gap-x-4 text-sm">
              <p className="font-bold">運転再開時刻:</p>
              <p>未定</p>
            </div>
          </div>
          <div className="my-2 h-[1px] w-full bg-foreground-800" />
          <button
            type="button"
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-background-50 px-4 py-2"
          >
            <IconSearch size={24} />
            <p>詳しく見る</p>
          </button>
        </div>
      </div>
    </div>
  </>
)

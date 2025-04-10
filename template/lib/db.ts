// lib/db.ts（スタブ）

import { useEffect, useState } from "react"



// useDB モック（仮データ返却＋リアルタイム風）
export function useDB(model: string, options: { id: any; realtime?: boolean }) {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    // 仮のデータ構造
    if (model === "application") {
      setTimeout(() => {
        setData({
          id: options.id,
          title: "ダミータイトル",
          status: "reviewing" // ← ここを書き換えて guard 状態テスト可
        })
      }, 200) // 擬似的ロード時間
    }
  }, [model, options.id])

  return data
}

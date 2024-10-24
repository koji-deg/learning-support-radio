'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function LearningSupportRadio() {
  const episodes = [
    {
      date: "2024/10/25",
      title: "AIスキル向上と生成AI",
      audioUrl: "https://storage.castmake-ai.com/channels/pNnQFrLDw7p0XDjVXoIf/episodes/20241024_140626_9IR3RN7HRB3K9J88_episode.mp3",
      articles: [
        {
          title: "[BCG] Five Must-Haves for Effective AI Upskilling",
          url: "https://www.bcg.com/publications/2024/five-must-haves-for-ai-upskilling",
          publishDate: "2024-10-8",
        },
        {
          title: "[McKinsey&Company] Upskilling and reskilling priorities for the gen AI era",
          url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/upskilling-and-reskilling-priorities-for-the-gen-ai-era",
          publishDate: "2024-9-30",
        },
        {
          title: "[HR Morning] Not Upskilling Your Workforce? 4 Reasons It's a Must Now",
          url: "https://www.hrmorning.com/articles/upskilling-your-workforce/",
          publishDate: "2024-10-24",
        },
      ],
    },
    {
      date: "2024/10/24",
      title: "GTDと内向型リーダーシップ",
      audioUrl: "https://storage.castmake-ai.com/channels/pNnQFrLDw7p0XDjVXoIf/episodes/20241024_131100_XS0EPGJBU5HAIMNR_episode.mp3",
      articles: [
        {
          title: "[STUDY HACKER] やるべきことが一瞬で決まり、100％集中できる！　生産性爆上げ「GTD」というテクニック",
          url: "https://studyhacker.net/gtd",
          publishDate: "2024-10-24",
        },
        {
          title: "[STUDY HACKER] 内向型だからこそ信頼される。控えめな人がチームをまとめる2つの「心理テクニック」",
          url: "https://studyhacker.net/takeyuki-nishi-interview303",
          publishDate: "2024-10-23",
        },
        {
          title: "[STUDY HACKER] 上司が理不尽な「ラインオーバー」をしてきたら？　解決策はポイント2つ",
          url: "https://studyhacker.net/yusuke-suzuki-interview03",
          publishDate: "2024-10-09",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl"> {/* max-w-4xl added */}
      <h1 className="text-3xl font-bold mb-8 text-center">学習支援ラジオ</h1>
      <div className="space-y-8">
        {episodes.map((episode, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{episode.date}</CardTitle>
              <h2 className="text-2xl font-semibold">{episode.title}</h2>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <audio controls className="w-full" src={episode.audioUrl}>
                  Your browser does not support the audio element.
                </audio>
              </div>
              <h3 className="text-xl font-semibold mb-2">関連記事</h3>
              <ul className="space-y-2">
                {episode.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <Link href={article.url} className="text-blue-600 hover:underline">
                      {article.title}
                    </Link>
                    <p className="text-sm text-gray-600">公開日: {article.publishDate}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
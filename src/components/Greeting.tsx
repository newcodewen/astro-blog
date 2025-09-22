import { useState } from "react"


export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]

  const [greeting, setGreeting] = useState(randomMessage())

  return (
    <div>
      <h3>{greeting}！感谢来访！</h3>
      <button onClick={() => setGreeting(randomMessage())}>切换</button>
    </div>
  )
}
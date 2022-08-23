import React from "react"
import VideoCard from "./videoCard"

export default {
  title: "partials/videoCard",
  component: VideoCard,
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    video: { control: "text" },
  },
}

export function Primary(args) {
  return (
    <div style={{ width: "314px" }}>
      <VideoCard {...args} />
    </div>
  )
}

Primary.args = {
  title: "Sea Shapes",
  text: "A very calm sea under the gentle rays of the sun",
  video:
    "https://s3-alpha-sig.figma.com/img/5242/9bf3/06212ffe0a0ebd850a59b8cf00df4335?Expires=1662336000&Signature=AZO5a67hvkP3tdie3P4sRy0O61MVh2E6usK7OLOsidcIVa2hLcmSkvjq~a2EleuGmM7n4f3LjJYF0f2FRxod6C4iajt5Ik1ORFchZRrtGelIg9B5Z8Ykotu9hiaB9c4Zis-LY3R7gchDsrU6kKZomxF~iz6~fItIA1mb6ctQrTZPUPnR6-eVg0X5TlKpwXEkfk5c8EgkNAjsG7ddVeMW6hRBpsw~6Xtq2dp6QgDKVqvAlQaG9a-jfvFbAWJXL1Stm0PZ-2uxTXl9rQzRoZILPB4u2oHSQA90GQb1vo3~u0R~sTvWPHZrG4cZJWWmv9AvJbY5MuPxKs9zK7xPPYY8DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}

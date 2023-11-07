"use client";
import { FC, useState } from "react";

const PREFIX = "https://phouse-misc.s3.amazonaws.com/beam-gifs/";

const FILS = [
  "@Beam Demo.mov",
  "Airtable Demo.mov",
  "Cmd + G Demo.mov",
  "Focus Demo.mov",
  "Inbox Demo.gif",
  "Inbox Demo.mov",
  "Linear Demo.mov",
  "Linear Select Demo.mov",
  "Mentions.gif",
  "Mentions.mov",
  "Notion Demo.mov",
  "Threads Demo.gif",
  "Threads Demo.mov",
  "Topics Demo.mov",
  "Wiki Demo.mov",
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selection = FILS[selectedIndex];
  return (
    <main className="flex w-full overflow-hidden p-24 gap-4 max-md:flex-col">
      <div className="flex-0">
        {FILS.map((f, i) => (
          <div
            className={`${
              i === selectedIndex ? "text-blue-500" : ""
            } text-2xl font-bold mr-2 whitespace-nowrap cursor-pointer`}
            key={f}
            onClick={() => setSelectedIndex(i)}
          >
            {f}
          </div>
        ))}
      </div>
      <FileView className="flex-1" file={selection} />
    </main>
  );
}

const FileView: FC<{ file: string; className?: string }> = ({
  file,
  className,
}) => {
  const src = `${PREFIX}${file.replace("+", "%2B")}`;
  return (
    <div className={className}>
      {file.endsWith(".gif") ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="gif" />
      ) : (
        <video src={src} autoPlay loop muted playsInline controls />
      )}
    </div>
  );
};

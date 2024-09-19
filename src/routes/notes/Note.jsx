import { useState, useEffect } from "react";
import { MdOutlineAddReaction } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import img from "/src/assets/DDLogo.png";

export default function Note({
  id,
  text,
  emojis,
  onAddReaction,
  timestamp,
  handleNoteDelete,
}) {
  const timeAgo = (timestamp) => {
    const now = new Date();
    const noteDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - noteDate) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const [showPicker, setShowPicker] = useState(false);
  const [time, setTime] = useState(timeAgo(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeAgo(timestamp));
    }, 4000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const handleEmojiClick = (emojiObject) => {
    onAddReaction(id, emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="w-[50%] px-3 py-1.5">
      <div className="flex items-start gap-2">
        <div className="mt-1 flex-shrink-0 basis-[30px]">
          <img
            src={img}
            alt="name"
            className="h-[30px] w-[30px] rounded-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-1 rounded-md border bg-white p-1.5 dark:border-drkbrd dark:bg-drkbg2">
          <p className="text-sm font-semibold dark:text-white">
            Amit Kadara
            <span className="text-xs font-normal text-[#878686] dark:text-drkcol">
              &nbsp; {time}
            </span>
          </p>
          <div className="break-all">
            <p className="whitespace-pre-wrap text-[13px] leading-normal text-[#545355] dark:text-white">
              {text}
            </p>
          </div>
          {showPicker && (
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              skinTonesDisabled
              searchDisabled
              allowExpandReactions={false}
              reactionsDefaultOpen={true}
              style={{ fontSize: `10px` }}
              className="duration-400 transition-all ease-in-out"
            />
          )}
          <div className="mt-1 flex items-center gap-5 text-gray-600 dark:text-white">
            <div className="flex items-center">
              <MdOutlineAddReaction
                className="cursor-pointer text-lg"
                onClick={() => setShowPicker((prev) => !prev)}
              />
            </div>
            <div className="flex items-center gap-3 text-xs">
              <button onClick={handleNoteDelete}>Delete</button>
            </div>
          </div>
          {emojis && emojis.length !== 0 ? (
            <div className="flex items-center gap-2">
              {emojis.map((reaction, index) => (
                <span key={index} className="">
                  {reaction}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
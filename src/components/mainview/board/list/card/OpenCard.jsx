import { PiXBold, PiPaperclipBold } from "react-icons/pi";

export default function OpenCard() {
  return (
      <div className="rounded-lg bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p>Card title editable on click to input field</p>
            <p>in list todo (trello has options)</p>
          </div>
          <div>
            <PiXBold />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-1">
              members, labels, notifications
            </div>
            {/* Description */}
            <div className="flex flex-col">
              <div>text or pen icon</div>
              <div className="flex flex-col gap-2">
                <p>Description</p>
                <textarea
                  name=""
                  id=""
                  placeholder="Add a more detailed description..."
                >
                  Add word count display maybe?
                </textarea>
              </div>
            </div>
            {/* Files upload */}
            <div className="flex flex-col">
              <div>
                <PiPaperclipBold />
              </div>
              <div className="flex flex-col gap-2">
                <p>Upload Assets</p>
                <button>upload</button>
              </div>
            </div>
            {/* Activity */}
            <div>
              <p>Activity</p>
              <button>Show details</button>
              <div className="flex items-center justify-between">
                <p>profile</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Write a comment..."
                />
              </div>
            </div>
            {/* Comment */}
            <div className="flex items-center justify-between">
              <p>profile</p>
              <div className="flex flex-col">
                <p>
                  Dev Dreamer <span>x minutes ago (edited)</span>
                </p>
                <p>comment editable on click</p>
                <div className="flex items-center gap-1">
                  <p>emoji reaction</p>
                  <p>Edit</p>
                  <p>Delete</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p>Add to card</p>
            {/* add to card list */}
            <ul>
              <li>icon members</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

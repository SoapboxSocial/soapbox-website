import Image from "next/image";
import { APP_STORE_URL } from "../constants";

export default function Room({
  roomName = "Join in the conversation",
  buttonText = "Get the app",
  buttonLink = APP_STORE_URL,
  roomMembers = [
    {
      displayName: "Dean",
      image: "/dean.png",
    },
    {
      displayName: "Jeff",
      image: "/jeff.png",
    },
    {
      displayName: "Unicorn",
      image: "/unicorn.png",
    },
  ],
}) {
  return (
    <div className="room">
      <div className="room-title">{roomName}</div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {roomMembers.slice(0, 3).map((member, i) => (
            <div key={i} className="flex room-head overflow-visible">
              <Image
                height={50}
                width={50}
                className="room-head object-cover object-center rounded-full"
                draggable="false"
                src={member.image}
                alt={member.displayName}
              />
            </div>
          ))}
        </div>
        <a
          href={buttonLink}
          className="room-button focus:outline-none focus:ring-4"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

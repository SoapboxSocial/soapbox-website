import Image from "next/image";
import { APP_STORE_URL } from "../constants";

export default function RoomPreview({
  roomName = "Join in the conversation",
  buttonText = "Get the app",
  buttonLink = APP_STORE_URL,
  roomMembers = [
    {
      display_name: "Dean",
      image: "/dean.png",
    },
    {
      display_name: "Jeff",
      image: "/jeff.png",
    },
    {
      display_name: "Unicorn",
      image: "/unicorn.png",
    },
  ],
}) {
  return (
    <article className="room bg-white rounded-room p-5">
      <h2
        className="text-title2 font-bold"
        style={{ marginBottom: "1.875rem" }}
      >
        {roomName}
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {roomMembers.slice(0, 3).map((member, i) => (
            <div key={i} className="flex room-head overflow-visible">
              <Image
                alt={member.display_name}
                className="h-10 w-10 room-head object-cover object-center rounded-full"
                draggable="false"
                height={40}
                src={member.image}
                width={40}
              />
            </div>
          ))}
        </div>

        <a
          href={buttonLink}
          className="room-button bg-soapbox rounded-button py-2 px-5 text-title3 text-white font-semibold no-underline focus:outline-none focus:ring-4"
        >
          {buttonText}
        </a>
      </div>
    </article>
  );
}

export default function Room({
  roomName = "Join in the conversation",
  buttonText = "Get the app",
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
          {roomMembers.map((member, i) => (
            <img
              key={i}
              className="room-head"
              draggable="false"
              src={member.image}
              alt={member.displayName}
            />
          ))}
        </div>
        <a
          href="https://apps.apple.com/us/app/soapbox-talk-with-anyone/id1529283270"
          className="room-button"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

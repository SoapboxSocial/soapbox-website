export default function Room() {
  return (
    <div className="room">
      <div className="room-title">Join in the conversation</div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          <img
            alt="Dean"
            src="/dean.png"
            className="room-head"
            draggable="false"
          />
          <img
            alt="Jeff"
            src="/jeff.png"
            className="room-head"
            draggable="false"
          />
          <img
            alt="Unicorn"
            src="/unicorn.png"
            className="room-head"
            draggable="false"
          />
        </div>
        <a
          href="https://apps.apple.com/us/app/soapbox-talk-with-anyone/id1529283270"
          className="room-button"
        >
          Get the app
        </a>
      </div>
    </div>
  );
}

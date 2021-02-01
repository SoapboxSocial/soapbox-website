import Image from "next/image";

export default function PostPreview({ title, date, authors }) {
  return (
    <div className="room">
      <div className="room-title">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {authors.map((member, i) => (
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
        <div className="no-underline room-button">{date}</div>
      </div>
    </div>
  );
}

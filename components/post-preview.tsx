import dayjs from "dayjs";

export default function PostPreview({ title, date, authors }) {
  return (
    <article className="room">
      <div
        className="text-footnote font-semibold secondary"
        style={{ marginBottom: 10 }}
      >
        {dayjs(date).format("MMMM D, YYYY")}
      </div>

      <h2 className="text-title2 font-bold" style={{ marginBottom: 30 }}>
        {title}
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {authors.map((member, i) => (
            <div key={i} className="flex room-head overflow-visible">
              <img
                alt={member.displayName}
                className="h-10 w-10 room-head object-cover object-center rounded-full"
                draggable="false"
                height={40}
                src={member.image}
                width={40}
              />
            </div>
          ))}
        </div>

        <div className="no-underline room-button">
          <span className="text-title3">Read</span>
        </div>
      </div>
    </article>
  );
}

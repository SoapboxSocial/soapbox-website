import dayjs from "dayjs";

type Props = {
  title: string;
  date: string;
};

export default function PostPreview({ title, date }: Props) {
  const defaultAuthors = [
    { display_name: "Dean", image: "/dean.png" },
    { display_name: "Jeff", image: "/jeff.png" },
    { display_name: "Mike", image: "/mike.png" },
  ];

  return (
    <article className="room bg-white rounded-room p-5">
      <div
        className="text-footnote font-semibold secondary"
        style={{ marginBottom: 10 }}
      >
        {dayjs(date).format("MMMM D, YYYY")}
      </div>

      <h2
        className="text-title2 font-bold"
        style={{ marginBottom: "1.875rem" }}
      >
        {title}
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {defaultAuthors.map((member, i) => (
            <div key={i} className="flex room-head overflow-visible">
              <img
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

        <div className="room-button bg-soapbox rounded-button py-2 px-5 text-title3 text-white font-semibold no-underline">
          Read
        </div>
      </div>
    </article>
  );
}

import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from "../../../lib/chromium";
import { getHtml } from "../../../lib/template";
import { Room } from "../../../types/shared";

const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === "1";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const roomID = req.query.id as string;

    const ENDPOINT = `https://metadata.soapbox.social/rooms/${roomID}`;

    const r = await fetch(ENDPOINT);

    if (!r.ok) throw new Error(r.statusText);

    const data: Room = await r.json();

    const room = {
      ...data,
      members: data.members
        .sort((a, b) => a.id - b.id)
        .map((member) => ({
          ...member,
          image: `https://cdn.soapbox.social/images/${member.image}`,
        })),
    };

    const html = getHtml(room);

    if (isHtmlDebug) {
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      return;
    }

    const fileType = "jpeg";

    const file = await getScreenshot(html, fileType, isDev);

    res.statusCode = 200;
    res.setHeader("Content-Type", `image/${fileType}`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(file);
  } catch (e) {
    console.error(e);

    const fallback = fs.readFileSync(`${process.cwd()}/public/thumb.jpg`);

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpeg");
    res.end(fallback);
  }
}

const debugRoomData: Room = {
  id: 0,
  name: "My Room Name",
  members: [
    {
      id: 0,
      display_name: "Dean",
      image: "https://cdn.soapbox.social/images/360833143.png",
    },
    {
      id: 0,
      display_name: "Jeff",
      image: "https://cdn.soapbox.social/images/780933635.png",
    },
    {
      id: 0,
      display_name: "Mike",
      image: "https://cdn.soapbox.social/images/426501433.png",
    },
  ],
};

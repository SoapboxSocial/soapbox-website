import { readFileSync } from "fs";
import { join } from "path";
import twemoji from "twemoji";
import { Room } from "../types/shared";
import { sanitizeHtml } from "./sanitizer";
const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getFont(fileName: string) {
  const directory = join(process.cwd(), "fonts");

  return readFileSync(directory + "/" + fileName);
}

const bold = getFont("SFRounded-Bold.woff2").toString("base64");

function getCss() {
  return `
    @font-face {
      font-family: "SF Rounded Pro";
      src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
      font-weight: bold;
      font-style: normal;
    }

    body {
      margin: 0;
      background-color: #8359fe;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "SF Rounded Pro", sans-serif;
    }

    .room {
      background-color: #ffffff;
      border-radius: 30px;
      padding: 20px;
      max-width: 350px;
      width: 100%;
    }

    .room-name {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.35px;

      margin-bottom: 30px;
    }

    .room-members {
      display: flex;
    }

    .room-member {
      margin-right: calc(-0.5rem * var(--tw-space-x-reverse));
      margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));

      display: flex;
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #fff;
      height: 40px;
      width: 40px;
      border-radius: 9999px;
      box-shadow: 0 0 0 4px #fff;
    }

    .room-member img {
      height: 40px;
      width: 40px;
      border-radius: 9999px;
      object-fit: cover;
      object-position: center;
    }

    .room-count p {
      font-size: 24px;
      line-height: 1;
      display: inline-flex;
      align-items: flex-start;
    }

    .room-count p span {
      font-size: 14px;
      line-height: 20px
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }

    .brand-logo {
      position: fixed;
      bottom: 10px;
      right: 10px;

      width: 64px;
      height: 64px;
    }
    
   `;
}

export function getHtml(room: Room) {
  return `<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <title>Generated Image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    ${getCss()}
  </style>

  <body>
    <div class="room">
      <div class="room-name">${emojify(sanitizeHtml(room.name))}</div>

      <div class="room-members">
      ${room.members
        .slice(0, 6)
        .map(
          (member) =>
            `<div class="room-member"><img src="${member.image}" /></div>`
        )
        .join(" ")}

      ${
        room.members.length > 6
          ? `<div class="room-member"><div class="room-count"><p><span>+</span>${
              room.members.length - 6
            }</p></div></div>`
          : ""
      }
      </div>
    </div>

    <img class="brand-logo" src="https://soapbox.social/brand.png" />
  </body>
</html>`;
}

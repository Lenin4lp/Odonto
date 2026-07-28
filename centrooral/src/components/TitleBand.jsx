import React from "react";

const TitleBand = ({ title, color, image, textColor }) => {
  return (
    <div
      className={`h-[100px] sm:h-[150px] lg:h-[200px]   bg-cover bg-center block relative`}
    >
      <div className={`h-full w-screen ${color} relative`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 -z-50 right-0 bottom-0 w-full h-full"
          viewBox="0 0 1920 430"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-labelledby="title desc"
        >
          <title id="title">Banner odontológico editable</title>
          <desc id="desc">
            Franja horizontal responsive con molares, ondas y brillos de
            limpieza.
          </desc>

          <defs>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="100%" stop-color="#000000" />
            </linearGradient>

            <linearGradient
              id="toothGradient"
              x1="0.15"
              y1="0"
              x2="0.85"
              y2="1"
            >
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="72%" stop-color="#FFFFFF" />
              <stop offset="100%" stop-color="#DCEAF7" />
            </linearGradient>

            <filter
              id="softShadow"
              x="-30%"
              y="-30%"
              width="160%"
              height="170%"
            >
              <feDropShadow
                dx="0"
                dy="7"
                stdDeviation="7"
                flood-color="#000000"
                flood-opacity="0.22"
              />
            </filter>

            <symbol id="molar" viewBox="0 0 150 185">
              <path
                class="tooth-body"
                d="M75 7
           C58 1 41 3 29 13
           C16 24 11 41 14 59
           C17 77 25 90 29 106
           C33 121 32 139 39 158
           C43 171 49 181 57 179
           C65 177 64 154 67 140
           C69 130 72 124 75 124
           C78 124 81 130 83 140
           C86 154 85 177 93 179
           C101 181 107 171 111 158
           C118 139 117 121 121 106
           C125 90 133 77 136 59
           C139 41 134 24 121 13
           C109 3 92 1 75 7Z"
                fill="url(#toothGradient)"
                stroke="#494949"
                stroke-width="2.2"
              />
              <path
                class="tooth-highlight"
                d="M36 48 C42 35 50 29 59 27"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="5"
                stroke-linecap="round"
                opacity="0.9"
              />
            </symbol>

            <symbol id="sparkleLarge" viewBox="0 0 48 48">
              <path
                d="M24 1
           C26 14 34 22 47 24
           C34 26 26 34 24 47
           C22 34 14 26 1 24
           C14 22 22 14 24 1Z"
                fill="#FFFFFF"
              />
            </symbol>

            <symbol id="sparkleSmall" viewBox="0 0 26 26">
              <path
                d="M13 1
           C14 8 18 12 25 13
           C18 14 14 18 13 25
           C12 18 8 14 1 13
           C8 12 12 8 13 1Z"
                fill="#FFFFFF"
              />
            </symbol>
          </defs>

          <rect
            class="background"
            width="1920"
            height="430"
            fill="url(#bgGradient)"
          />

          <path
            class="wave-light"
            d="M0 278
       C170 220 330 345 515 318
       C710 289 825 390 1032 332
       C1234 275 1374 230 1555 280
       C1720 326 1815 304 1920 248
       L1920 430 L0 430 Z"
            fill="#DCEEFF"
            opacity="0.72"
          />

          <path
            class="wave-medium"
            d="M0 344
       C205 288 365 394 580 350
       C777 309 900 426 1110 362
       C1307 302 1455 279 1620 334
       C1764 382 1850 351 1920 318
       L1920 430 L0 430 Z"
            fill="#FFFFFF"
            opacity="0.56"
          />

          <path
            class="wave-outline"
            d="M0 367
       C215 302 405 417 630 366
       C845 317 1028 429 1240 360
       C1455 291 1630 326 1920 286"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="4"
          />

          <g class="teeth-left" filter="url(#softShadow)">
            <use
              class="tooth tooth-left-large"
              href="#molar"
              x="45"
              y="158"
              width="165"
              height="204"
            />
            <use
              class="tooth tooth-left-medium"
              href="#molar"
              x="176"
              y="222"
              width="118"
              height="146"
            />
            <use
              class="tooth tooth-left-small"
              href="#molar"
              x="279"
              y="266"
              width="78"
              height="96"
            />
          </g>

          <g class="teeth-right" filter="url(#softShadow)">
            <use
              class="tooth tooth-right-small"
              href="#molar"
              x="1560"
              y="252"
              width="91"
              height="112"
            />
            <use
              class="tooth tooth-right-medium"
              href="#molar"
              x="1640"
              y="205"
              width="132"
              height="163"
            />
            <use
              class="tooth tooth-right-large"
              href="#molar"
              x="1758"
              y="151"
              width="167"
              height="206"
            />
          </g>

          <g class="sparkles-large">
            <use
              class="sparkle sparkle-left-large"
              href="#sparkleLarge"
              x="112"
              y="75"
              width="44"
              height="44"
            />
            <use
              class="sparkle sparkle-right-center"
              href="#sparkleLarge"
              x="1490"
              y="120"
              width="41"
              height="41"
            />
            <use
              class="sparkle sparkle-right-large"
              href="#sparkleLarge"
              x="1812"
              y="82"
              width="38"
              height="38"
            />
          </g>

          <g class="sparkles-small">
            <use
              class="sparkle sparkle-left-small-1"
              href="#sparkleSmall"
              x="176"
              y="126"
              width="25"
              height="25"
            />
            <use
              class="sparkle sparkle-left-small-2"
              href="#sparkleSmall"
              x="327"
              y="202"
              width="23"
              height="23"
            />
            <use
              class="sparkle sparkle-right-small-1"
              href="#sparkleSmall"
              x="1555"
              y="195"
              width="25"
              height="25"
            />
            <use
              class="sparkle sparkle-right-small-2"
              href="#sparkleSmall"
              x="1850"
              y="144"
              width="22"
              height="22"
            />
          </g>
        </svg>
        <h1
          className={`absolute lg:bottom-[75px] right-0 left-0 text-center sm:bottom-[50px] bottom-[30px] ${textColor} text-3xl sm:text-5xl md:text-7xl font-extrabold`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleBand;

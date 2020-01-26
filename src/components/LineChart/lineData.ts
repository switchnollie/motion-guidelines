import { Principle } from "../../types";
import { LineConfig } from "./types";

const lineData: LineConfig[] = [
  {
    id: `${Principle.SquashNStretch}-0`,
    modeId: Principle.SquashNStretch,
    isBad: false,
    path:
      "M0 11.5C14.125 22.5 27.769 28 40.931 28 61.156 28 67.898 0 82.344 0c7.223 0 13.483 15.5 20.225 15.5 6.741 0 10.112-4.5 14.928-4.5 1.284 0 2.728.167 4.334.5M0 59.75C14.125 65.25 27.769 68 40.931 68c20.225 0 26.967-14 41.413-14 7.223 0 13.483 7.75 20.225 7.75 6.741 0 10.112-2.25 14.928-2.25 1.284 0 2.728.083 4.334.25",
    transform: "translate(-677 -189) translate(677 189) translate(3 11)",
    animationDuration: 600
  },
  {
    id: `${Principle.SquashNStretch}-1`,
    modeId: Principle.SquashNStretch,
    isBad: true,
    path:
      "M0 11.5C14.125 22.5 27.769 28 40.931 28 61.156 28 67.898 0 82.344 0c7.223 0 13.483 15.5 20.225 15.5 6.741 0 10.112-4.5 14.928-4.5 1.284 0 2.728.167 4.334.5",
    transform: "translate(-677 -189) translate(677 189) translate(3 11)",
    animationDuration: 250
  },
  {
    id: `${Principle.SquashNStretch}-2`,
    modeId: Principle.SquashNStretch,
    isBad: true,
    path: "M0 59.75L121.831 59.75",
    transform: "translate(-677 -189) translate(677 189) translate(3 11)",
    animationDuration: 250
  },
  {
    id: `${Principle.FollowThrough}-0`,
    modeId: Principle.FollowThrough,
    isBad: false,
    path: "M0 88C18.479 29.333 41.479 0 69 0h55.5",
    transform: "translate(-677 -189) translate(677 189) translate(3 1)",
    animationDuration: 300
  },
  {
    id: `${Principle.FollowThrough}-1`,
    modeId: Principle.FollowThrough,
    isBad: false,
    path:
      "M25 88C43.479 29.333 66.479 0 94 0h30M55 88C73.479 29.333 96.479 0 124 0",
    transform: "translate(-677 -189) translate(677 189) translate(3 1)",
    animationDuration: 300
  },
  {
    id: `${Principle.FollowThrough}-2`,
    modeId: Principle.FollowThrough,
    isBad: true,
    path: "M0 88L64.8433735 5.68434189e-14 124.5 5.68434189e-14",
    transform: "translate(-677 -189) translate(677 189) translate(3 1)",
    animationDuration: 1005
  },
  {
    id: `${Principle.FollowThrough}-3`,
    modeId: Principle.FollowThrough,
    isBad: true,
    path: "M23 88L87.8181818 5.68434189e-14 116 1.13686838e-13",
    transform: "translate(-677 -189) translate(677 189) translate(3 1)",
    animationDuration: 1005
  },
  {
    id: `${Principle.FollowThrough}-4`,
    modeId: Principle.FollowThrough,
    isBad: true,
    path: "M51 88L116 0",
    transform: "translate(-677 -189) translate(677 189) translate(3 1)",
    animationDuration: 1005
  },
  {
    id: `${Principle.Timing}-0`,
    modeId: Principle.Timing,
    isBad: false,
    path:
      "M0 87.802C13 37.942 23.167 9.148 30.5 1.423c5.5-4.74 7.5 3.88 12 3.88 5 0 5-2.5 13-2.5 25.599-.392 48.599-.392 69 0",
    transform: "translate(-677 -189) translate(677 189) translate(3 1.198)",
    animationDuration: 960
  },
  {
    id: `${Principle.Timing}-1`,
    modeId: Principle.Timing,
    isBad: false,
    animationDelay: 400,
    path: "M25.422 87.802c12.17-56.666 27.319-85 45.445-85H125",
    transform: "translate(-677 -189) translate(677 189) translate(3 1.198)",
    animationDuration: 560
  },
  {
    id: `${Principle.Timing}-2`,
    modeId: Principle.Timing,
    isBad: false,
    animationDelay: 550,
    path:
      "M42.422 87.802c12.207-56.666 27.4-85 45.582-85h19.818M62.422 87.802c12.05-56.666 27.05-85 45-85M80 87.802c12.051-56.666 27.051-85 45-85",
    transform: "translate(-677 -189) translate(677 189) translate(3 1.198)",
    animationDuration: 410
  },
  {
    id: `${Principle.Timing}-3`,
    modeId: Principle.Timing,
    isBad: true,
    path: "M25.422 88.802c12.17-56.666 27.319-85 45.445-85H125",
    transform: "translate(-677 -189) translate(677 189) translate(3 .198)",
    animationDuration: 300
  },
  {
    id: `${Principle.Timing}-4`,
    modeId: Principle.Timing,
    isBad: true,
    path:
      "M42.422 88.802c12.207-56.666 27.4-85 45.582-85h19.818M62.422 88.802c12.05-56.666 27.05-85 45-85M80 88.802c12.051-56.666 27.051-85 45-85",
    transform: "translate(-677 -189) translate(677 189) translate(3 .198)",
    animationDuration: 300
  },
  {
    id: `${Principle.Timing}-5`,
    modeId: Principle.Timing,
    isBad: true,
    path:
      "M0 88.802c13-49.86 23.167-78.654 30.5-86.379 5.5-4.74 7.5 3.88 12 3.88 5 0 5-2.5 13-2.5 25.599-.392 48.599-.392 69 0",
    transform: "translate(-677 -189) translate(677 189) translate(3 .198)",
    animationDuration: 300
  },
  {
    id: `${Principle.Timing}-6`,
    modeId: Principle.Timing,
    isBad: true,
    path: "M76 0.802H127V88.802H76z",
    transform: "translate(-677 -189) translate(677 189) translate(3 .198)",
    fill: "red",
    fillOpacity: 0.25,
    animationDuration: 300
  }
];

export default lineData;

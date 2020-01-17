import { Principle } from "../../types";
import { LineConfig } from "./types";

const lineData: LineConfig[] = [
  {
    id: `${Principle.SquashNStretch}-0`,
    modeId: Principle.SquashNStretch,
    path:
      "M3 21.5C17.125 32.5 30.769 38 43.931 38c20.225 0 26.967-28 41.413-28 7.223 0 13.483 15.5 20.225 15.5 6.741 0 10.112-4.5 14.928-4.5 1.284 0 2.728.167 4.334.5M3 69.75C17.125 75.25 30.769 78 43.931 78c20.225 0 26.967-14 41.413-14 7.223 0 13.483 7.75 20.225 7.75 6.741 0 10.112-2.25 14.928-2.25 1.284 0 2.728.083 4.334.25",
    transform: "translate(-677 -190) translate(677 190)",
    animationDuration: 600
  },
  {
    id: `${Principle.FollowThrough}-0`,
    modeId: Principle.FollowThrough,
    path:
      "M0,88 C18.4786325,29.3333333 41.4786325,0 69,0 C96.5213675,0 115.021368,0 124.5,0",
    transform: "translate(3.000000, -0.000000)",
    animationDuration: 500
  },
  {
    id: `${Principle.FollowThrough}-1`,
    modeId: Principle.FollowThrough,
    path:
      "M25,88 C43.4786325,29.3333333 66.4786325,0 94,0 C121.521368,0 131.521368,0 124,0",
    transform: "translate(3.000000, -0.000000)",
    animationDuration: 500,
    animationDelay: 100
  },
  {
    id: `${Principle.FollowThrough}-2`,
    modeId: Principle.FollowThrough,
    path: "M55,88 C73.4786325,29.3333333 96.4786325,0 124,0",
    transform: "translate(3.000000, -0.000000)",
    animationDuration: 500,
    animationDelay: 200
  }
];

export default lineData;

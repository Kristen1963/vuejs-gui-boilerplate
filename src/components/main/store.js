// Copyright 2018 Quinn Michaels
// This file is part of Indra VueJs Gui Boilerplate
//
// Indra VueJs Gui Boilerplate is free software:
// you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Foobar is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Foobar.  If not, see <https://www.gnu.org/licenses/>.

"use strict";
// THIS IS THE STORE TEMPLATE MAKE SURE TO ADDE IT TO THE ./store/index.js file
const main = {
  namespaced: true,
  state: {
    colors: [
      "white",
      "orange-lt",
      "orange-md",
      "orange-dk",
      "yellow",
      'charcoal',
      'blue',
      'red',
      'air',
      'water',
      'fire',
      'earth',
      'pink',
      'santa',
      'rose',
    ],
    icons: [
      "home",
      "apartment",
      "pencil",
      "magic-wand",
      "drop",
      "lighter",
      "poop",
      "sun",
      "moon",
      "cloud",
      "cloud-upload",
      "cloud-download",
      "cloud-sync",
      "cloud-check",
      "database",
      "lock",
      "cog",
      "trash",
      "dice",
      "heart",
      "star",
      "star-half",
      "star-empty",
      "flag",
      "envelope",
      "paperclip",
      "inbox",
      "eye",
      "printer",
      "file-empty",
      "file-add",
      "enter",
      "exit",
      "graduation-hat",
      "license",
      "music-note",
      "film-play",
      "camera-video",
      "camera",
      "picture",
      "book",
      "bookmark",
      "user",
      "users",
      "shirt",
      "store",
      "cart",
      "tag",
      "phone-handset",
      "phone",
      "pushpin",
      "map-marker",
      "map",
      "location",
      "calendar-full",
      "keyboard",
      "spell-check",
      "screen",
      "smartphone",
      "tablet",
      "laptop",
      "laptop-phone",
      "power-switch",
      "bubble",
      "heart-pulse",
      "construction",
      "pie-chart",
      "chart-bars",
      "gift",
      "diamond",
      "linearicons",
      "dinner",
      "coffee-cup",
      "leaf",
      "paw",
      "rocket",
      "briefcase",
      "bus",
      "car",
      "train",
      "bicycle",
      "wheelchair",
      "select",
      "earth",
      "smile",
      "sad",
      "neutral",
      "mustache",
      "alarm",
      "bullhorn",
      "volume-high",
      "volume-medium",
      "volume-low",
      "volume",
      "mic",
      "hourglass",
      "undo",
      "redo",
      "sync",
      "history",
      "clock",
      "download",
      "upload",
      "enter-down",
      "exit-up",
      "bug",
      "code",
      "link",
      "unlink",
      "thumbs-up",
      "thumbs-down",
      "magnifier",
      "cross",
      "menu",
      "list",
      "chevron-up",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "arrow-up",
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "move",
      "warning",
      "question-circle",
      "menu-circle",
      "checkmark-circle",
      "cross-circle",
      "plus-circle",
      "circle-minus",
      "arrow-up-circle",
      "arrow-down-circle",
      "arrow-left-circle",
      "arrow-right-circle",
      "chevron-up-circle",
      "chevron-down-circle",
      "chevron-left-circle",
      "chevron-right-circle",
      "crop",
      "frame-expand",
      "frame-contract",
      "layers",
      "funnel",
      "text-format",
      "text-format-remove",
      "text-size",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "highlight",
      "text-align-left",
      "text-align-center",
      "text-align-right",
      "text-align-justify",
      "line-spacing",
      "indent-increase",
      "indent-decrease",
      "pilcrow",
      "direction-ltr",
      "direction-rtl",
      "page-break",
      "sort-alpha-asc",
      "sort-amount-asc",
      "hand",
      "pointer-up",
      "pointer-right",
      "pointer-down",
      "pointer-left",
    ]
  },
  getters: {
    colors(state) {
      return state.colors;
    },
    icons(state) {
      return state.icons;
    },
    title(state) {
      return state.title;
    },
    describe(state) {
      return state.describe;
    },
  },
  mutations: {},
  actions: {},
}

export { main }

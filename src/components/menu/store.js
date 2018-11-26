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

const menu = {
  namespaced: true,
  state: {
    open: false,
    title: 'Quinn Michaels',
    items: [
      {
        href: 'main',
        class: 'icn icn-home',
        text: 'home',
      },
      {
        href: 'gallery',
        class: 'icn icn-picture',
        text: 'gallery',
      },
      {
        href: 'blog',
        class: 'icn icn-pencil',
        text: 'blog',
      }
    ],

  },
  getters: {
    open(state) {
      return state.open
    },
    items(state) {
      return state.items
    },
    title(state) {
      return state.title
    }
  },
  mutations: {
    toggle(state) {
      state.open = !state.open
    }
  },
  actions: {
    toggle({commit}) {
      commit('toggle');
    },
  },
}

export { menu }

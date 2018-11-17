'use strict'
// Copyright 2018 Quinn Michaels
//
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

import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

import *component* from './index.vue'
import {*store*} from './store.js'

describe('*component*', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(*store*)
  })

  it('expect component to be defined', () => {
    const wrapper = shallowMount(*component*, {store, localVue})
    expect(wrapper).to.not.be.an('undefined')
  })
})

<!--
Copyright 2018 Quinn Michaels

This file is part of Indra VueJs Gui Boilerplate

Indra VueJs Gui Boilerplate is free software:
you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Foobar is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
 -->

<template>
  <main :class="{'main': true}">
    <section class="information" id="information">
      <h2><i class="icn icn-eye"></i> Contact</h2>
      <h5>Email</h5>
      <ul>
        <li><a href="mailto:contact@indra.design">contact@indra.design</a></li>
      </ul>
      <h5>Social Media</h5>
      <ul>
        <li><a href="https://twitter.com/indradotai">twitter.com/indradotai</a></li>
        <li><a href="http://www.youtube.com/IndraDeva">youtube.com/IndraDeva</a></li>
      </ul>
    </section>
  </main>
</template>

<script>
// template javascript

export default {
  name: 'IndraMain',
  components: {},
  computed: {},
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
// custom template styles
  @require '../../styles/vars'
  .main
    transition: $transition
    padding: 1rem
    max-width: 900px
    margin: auto

    > section
      transition: $transition
      margin-bottom: 5rem

    .technology
      .badges
        text-align: center
        padding: .5rem

        img
          margin: 0 .5rem
        &.testing
          img
            width: auto
            height: 100px

    .hero-image, .hero-content > h1
      display: none

    @media screen and (min-width: 700px)
      .hero-image, .hero-content > h1
        display: inherit
  .chat-open
        margin-right: $chat-width - $chat-gap
</style>

export default {
  template: `
    <nav class="menu">
      <a 
        v-for="c of categories"
        :key="c"
        :href="'/' + c.toLowerCase()" 
        class="category"
        @click.prevent="$emit('click-category', c)"
      > {{ c }}</a>
    </nav>
  `,
  setup() {
    const categories = ["HTML", "CSS", "Javascript"];

    return {
      categories,
    };
  },
};

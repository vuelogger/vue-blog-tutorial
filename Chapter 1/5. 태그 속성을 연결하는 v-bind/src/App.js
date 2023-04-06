export default {
  template: `
    <nav class="menu">
      <a 
        :href="'/' + categories[0].toLowerCase()" 
        class="category"
      > 
        {{ categories[0] }}
      </a>
      <a 
        :href="'/' + categories[1].toLowerCase()" 
        class="category"
      > 
        {{ categories[1] }}
      </a>
      <a 
        :href="'/' + categories[2].toLowerCase()" 
        class="category"
      > 
        {{ categories[2] }}
      </a>
    </nav>
	`,

  setup() {
    const categories = ["HTML", "CSS", "Javascript"];
    return {
      categories,
    };
  },
};

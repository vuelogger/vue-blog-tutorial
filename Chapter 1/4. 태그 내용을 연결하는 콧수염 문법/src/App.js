export default {
  template: `
    <nav class="menu">
      <a href="" class="category">{{ categories[0] }}</a> 
      <a href="" class="category">{{ categories[1] }}</a> 
      <a href="" class="category">{{ categories[2] }}</a> 
    </nav>
	`,

  setup() {
    const categories = ["HTML", "CSS", "Javascript"];
    return {
      categories,
    };
  },
};

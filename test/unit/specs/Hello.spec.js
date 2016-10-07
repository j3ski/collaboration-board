import Vue from 'vue';
import Comments from 'src/components/Comments';

describe('Comments.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Comments)
    });
    expect(vm.$el.querySelector('section h2').textContent).to.equal('Comments');
  });
});

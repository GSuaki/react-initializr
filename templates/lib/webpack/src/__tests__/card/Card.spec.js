require('jsdom-global/register');
const React = require('react');
const { mount } = require('enzyme');
const renderer = require('react-test-renderer');

const Card = require('../../card/src/Card').default;

const onCardClick = jest.fn()

const mockProps = {
  showPlaceholder: false,
  onCardClick
};

const mountComponent = (props = mockProps) => {
  const component = (
    <Card { ...props } >
      <div className="content">Hello</div>
    </Card>
  )

  const element = mount(component)

  return { component, element }
}

describe('Components -> Card', () => {
  it('render', () => {
    const { component, element } = mountComponent();

    expect(element.find('.card')).toHaveLength(1);
    expect(element.find('.content')).toHaveLength(1);

    expect(renderer.create(component).toJSON()).toMatchSnapshot();
  });
  
  it('render with placeholder', () => {
    const { component, element } = mountComponent({
      ...mockProps,
      showPlaceholder: true
    })

    expect(element.find('.card')).toHaveLength(1);
    expect(element.find('.content')).toHaveLength(0);
    expect(element.find('.awesome-placeholder')).toHaveLength(1);

    expect(renderer.create(component).toJSON()).toMatchSnapshot();
  });
  
  it('simulate card click event: onCardClick', () => {
    const { element } = mountComponent();

    element.find('.card').simulate('click');
    expect(onCardClick).toHaveBeenCalledTimes(1);
  });
});

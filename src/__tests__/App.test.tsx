import React from 'react';
import { shallow } from 'enzyme';
import App from '@/App';
it('renders without crashing', () => {
  shallow(<App />);
});

// it('renders children when passed in', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
// });
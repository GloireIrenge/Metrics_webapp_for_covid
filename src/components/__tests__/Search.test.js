import renderer from 'react-test-renderer';

import SearchBar from '../Search';

it('<SearchBar /> Fetch Properly', () => {
  const tree = renderer.create(
    <SearchBar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

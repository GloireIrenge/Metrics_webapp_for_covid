import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';

import Case from '../Case';

const coun = {
  country: {
    abbreviation: 'CU',
    id: 'Cuba',
    life_expectancy: '76.2',
  },
};
it('<Case /> fectch country cases', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <Case country={coun} />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

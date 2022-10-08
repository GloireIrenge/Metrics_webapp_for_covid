import { useSelector } from 'react-redux';

import style from './css/Menu.module.css';

const Menu = () => {
  const { all } = useSelector((state) => state.cases);

  const totalConfirmed = all.reduce((sum, country) => sum += country.confirmed, 0);
  const population = all.reduce((sum, country) => {
    if (country.population === undefined || null) {
      sum += 0;
      return sum;
    }
    sum += country.population;
    return sum;
  }, 0);

  const deaths = all.reduce((sum, country) => sum += country.deaths, 0);
  return (
    <section className={style.Menu}>
      <div>
        <p>
          {totalConfirmed}
          <span> Cases</span>
        </p>
      </div>
    </section>
  );
};

export default Menu;

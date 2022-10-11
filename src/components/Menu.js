import { useSelector } from 'react-redux';

import style from './css/Menu.module.css';

const Menu = () => {
  const { all } = useSelector((state) => state.cases);
  const totalConfirmed = all.reduce((sum, country) => sum + country.confirmed, 0);
  return (
    <section className={style.Menu}>
      <div>
        <h3>
          {totalConfirmed}
          <span> Total cases in the world</span>
        </h3>
      </div>
    </section>
  );
};

export default Menu;

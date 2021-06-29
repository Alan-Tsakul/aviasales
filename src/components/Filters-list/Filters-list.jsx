/*eslint-disable*/
import React from 'react';
import styles from './Filters-list.module.scss';
import FiltersItem from '../Filters-item/Filters-item';

const FiltersList = () => {
  const elements = [
    {
      label: ' Все',
      id: 0,
    },
    {
      label: ' Без пересадок',
      id: 1,
    },
    {
      label: ' 1 пересадка',
      id: 2,
    },
    { 
      label: ' 2 пересадки',
      id: 3,
    },
    {
      label: ' 3 пересадки',
      id: 4,
    },
  ];
  const checkboxesList = elements.map((item) => <FiltersItem key={item.id} label={item.label} />);
  console.log(elements)
  return <div className={(styles['filters-list__controls'])}>{checkboxesList}</div>;
};

export default FiltersList;

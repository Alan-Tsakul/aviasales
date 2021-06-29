/*eslint-disable*/
import React from 'react';
import { Checkbox } from 'antd';
import styles from './Input.module.scss';

const Input = () => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const plainOptions = ['Все', 'Без пересадок', ' 1 пересадка', ' 2 пересадки', ' 3 пересадки'];
  return (
    <Checkbox.Group
      options={plainOptions}
      defaultValue={['Без пересадок', ' 1 пересадка', ' 2 пересадки']}
      onChange={onChange}
    />
  );
};

export default Input;

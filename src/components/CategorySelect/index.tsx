import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

import { categories } from '../../utils/categories';
import { Category } from '../Category';

import { CategorySelectProps } from './types';

export function CategorySelect({ 
  categorySelected, 
  setCategory, 
  hasCheckBox = false
}: CategorySelectProps) {
  return (
    <ScrollView 
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(({ id, title, icon }) => (
        <Category 
          key={id}
          title={title}
          icon={icon}
          checked={id === categorySelected}
          hasCheckBox={hasCheckBox}
          onPress={() => setCategory(id)}
        />
      ))}
    </ScrollView>
  );
}

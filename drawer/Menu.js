import * as React from 'react';
import { Drawer } from 'react-native-paper';

const Menu = () => {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section title="Some title">
      <Drawer.CollapsedItem
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.CollapsedItem
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default Menu;
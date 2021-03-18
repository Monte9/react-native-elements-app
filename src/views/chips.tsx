import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Chip, withTheme } from 'react-native-elements';
import { Header, SubHeader } from './header';

type ChipsComponentProps = {};

const Buttons: React.FunctionComponent<ChipsComponentProps> = () => {

  return (
    <>
      <Header title="Chips" />
      <ScrollView>
        <View style={styles.contentView}>
          <View style={{ alignItems: 'center' }}>
            <Chip
              title={'Test Chip'}
            />
            <Chip
              title={'Test Chip'}
              icon={{
                name: 'home',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
            />
            <Chip
              title={'Test Chip'}
              type="outline"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    marginTop: 20,
  },
});

export default withTheme(Buttons, '');

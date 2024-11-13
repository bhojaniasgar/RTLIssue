/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Created by Asgar Bhojani
 * Dated on : 13 Nov 2024
 * @format
 */

import React, {useCallback} from 'react';
import {Button, I18nManager, StyleSheet, Text, View} from 'react-native';
import RNRestart from 'react-native-restart';

function App(): React.JSX.Element {
  const onApplyRTL = useCallback(() => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.restart();
    }
  }, []);

  const onApplyLTR = useCallback(() => {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      RNRestart.restart();
    }
  }, []);

  return (
    <View style={styles.area}>
      <Text>Test Block</Text>
      <View style={styles.testBlock}>
        <Text>Left</Text>
        <Text>Right</Text>
      </View>
      <View style={styles.testBlock}>
        <Text>Left</Text>
        <Text>Right</Text>
      </View>
      <Button title={'Apply RTL'} onPress={onApplyRTL} />
      <Button title={'Apply LTR'} onPress={onApplyLTR} />
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginVertical: 50,
    paddingHorizontal: 24,
  },
  testBlock: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
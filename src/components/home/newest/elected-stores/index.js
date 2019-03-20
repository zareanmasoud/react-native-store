import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import ElectedStore from "./elected-store";
import styles from './styles';
import electedStores from './options';
import {strings as _} from "../../../../locales/i18n";

const ElectedStores = () => {
  return (
    <View style={styles.electedStoresView}>
      <View style={styles.titleRow}>
        <Text style={styles.titleTxt}>{_('elected_stores')}</Text>
        <Text style={styles.allButtonTxt}>{_('show_all')}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
        {
          electedStores.map((electedStore) => (<ElectedStore key={electedStore.id} electedStore={electedStore}/>))
        }
      </ScrollView>
    </View>
  )
};

export default ElectedStores

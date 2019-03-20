import React from 'react';
import {ScrollView, View} from 'react-native';
import Offer from "./offer";
import styles from './styles';
import offers from './options';

const Offers = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
        {
          offers.map((offer) => (<Offer key={offer.id} offer={offer}/>))
        }
      </ScrollView>
    </View>
  )
};

export default Offers;

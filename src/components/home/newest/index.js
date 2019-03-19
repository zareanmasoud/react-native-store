import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import options from './options.json';
import Offer from './offer';

const Newest = () => {
  return(
    <ScrollView>
      {
        options.offers.map((offer) => (<Offer key={offer.id} offer={offer}/>))
      }
    </ScrollView>
  )
};

export default Newest;

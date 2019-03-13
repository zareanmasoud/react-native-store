import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Gallery = props => {
  const {gallery} = props;
  const {id} = props.gallery;
  return (
    <View key={id} style={styles.gallery}>
      <View style={styles.imageContainer}>
        <Image source={{uri: gallery.illustration}} style={styles.image}/>
        <View style={styles.titleBox}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{gallery.title}</Text>
          </View>
          <View style={styles.createdAtButton}>
            <Text style={styles.createdAt}>۱ ساعت پیش</Text>
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.body} numberOfLines={2}>{gallery.body}</Text>
      </View>
      {/*<Text style={styles.name}>{gallery['artist.name']}</Text>*/}
      {/*<View style={styles.panel}>*/}
      {/*<TouchableOpacity onPress={() => handleShowHandicrafts(gallery)}>*/}
      {/*<Text style={styles.titleTextButton}>{_(PAINTINGS)}</Text>*/}
      {/*</TouchableOpacity>*/}
      {/*<TouchableOpacity onPress={() => handleShowPaintings(gallery)}>*/}
      {/*<Text style={styles.titleTextButton}>{_(HANDICRAFTS)}</Text>*/}
      {/*</TouchableOpacity>*/}
      {/*</View>*/}
    </View>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.object.isRequired,
  handleShowHandicrafts: PropTypes.func.isRequired,
  handleShowPaintings: PropTypes.func.isRequired,
};

export default Gallery;

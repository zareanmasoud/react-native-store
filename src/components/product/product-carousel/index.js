import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderEntry from "./slider-entry/SliderEntry";
import {sliderWidth, itemWidth} from './slider-entry/styles/SliderEntry.style';
import styles, {colors} from './slider-entry/styles/index.style';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    }
  }

  get pagination() {
    // const {activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={this.props.data.length}
        activeDotIndex={this.state.activeSlide}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const SLIDER_1_FIRST_ITEM = 1;
    return (
      <View style={{alignItems: 'center'}}>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={this.props.data}
          renderItem={this.renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.0}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={false}
          loopClonesPerSide={2}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({activeSlide: index})}
        />
        {this.pagination}
        <View style={styles.navigationView}>
          <View style={styles.navigationPanel}>
            <TouchableOpacity onPress={() => this._slider1Ref.snapToPrev()}>
              <Icon style={styles.angleIcon} name={'angle-right'} size={30} color={'black'}/>
            </TouchableOpacity>
          </View>
          <View style={styles.navigationWhiteSpace}/>
          <View style={styles.navigationPanel}>
            <TouchableOpacity onPress={() => this._slider1Ref.snapToNext()}>
              <Icon style={styles.angleIcon} name={'angle-left'} size={30} color={'black'}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  renderItemWithParallax = ({item, index}, parallaxProps) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  };
}

export default ProductCarousel;

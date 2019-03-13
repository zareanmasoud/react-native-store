import React, {Component} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import MainMenu from "../../components/shared/main-menu/index";
import PropTypes from 'prop-types';
import styles from './styles';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onScrollMoveNav = this.onScrollMoveNav.bind(this);
  }

  state = {
    footerScrollY: new Animated.Value(0),
    headerScrollY: new Animated.Value(0),
  };

  onScrollMoveNav(event) {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const footerDirection = currentOffset > this.offset ? 'down' : 'up';
    const headerDirection = currentOffset > this.offset ? 'up' : 'down';
    const distance = this.offset ? (this.offset - currentOffset) : 0;
    const footerNewPosition = this.state.footerScrollY._value - distance;
    const headerNewPosition = this.state.headerScrollY._value + distance;

    if (currentOffset > 0 && currentOffset < (this.contentHeight - this.scrollViewHeight)) { // Don't react at iOS ScrollView Bounce
      if (footerDirection === 'down') {
        if (this.state.footerScrollY._value < 90) {
          this.state.footerScrollY.setValue(footerNewPosition > 90 ? 90 : footerNewPosition);
        }
      }
      if (footerDirection === 'up') {
        if (this.state.footerScrollY._value >= 0) {
          this.state.footerScrollY.setValue(footerNewPosition < 0 ? 0 : footerNewPosition)
        }
      }
      if (headerDirection === 'down') {
        if (this.state.headerScrollY._value < 0) {
          this.state.headerScrollY.setValue(headerNewPosition < 0 ? headerNewPosition : 0);
        }
      }
      if (headerDirection === 'up') {
        if ((this.state.headerScrollY._value <= 0) && (this.state.headerScrollY._value > -190)) {
          this.state.headerScrollY.setValue(headerNewPosition > 190 ? 190 : headerNewPosition)
        }
      }
      this.offset = currentOffset
    }
  }

  render() {
    const Header = this.props.header;
    return (
      <View>
        <ScrollView
          onContentSizeChange={(w, h) => {
            this.contentHeight = h
          }}
          onLayout={(ev) => {
            this.scrollViewHeight = ev.nativeEvent.layout.height
          }}
          // onScroll={this.onScrollMoveNav}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          <View style={styles.scrollItem}>
            {this.props.children}
          </View>
        </ScrollView>
        <Animated.View style={[
          styles.header,
          {transform: [{translateY: this.state.headerScrollY}]}
        ]}
        >
          <Header navigation={this.props.navigation}/>
        </Animated.View>
        <Animated.View style={[
          styles.footer,
          {transform: [{translateY: this.state.footerScrollY}]}
        ]}
        >
          <MainMenu navigation={this.props.navigation} active={this.props.active}/>
        </Animated.View>
      </View>
    );
  }
}

NavBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
  header: PropTypes.func.isRequired,
};

export default NavBar;

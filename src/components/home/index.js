import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {HOME} from "../../routes/constants";
import NavBar from "../../layout/nav-bar/index";
import TopBar from "../shared/top-bar";
import NoneHeader from '../shared/headers/none';
import HomeHeader from "../shared/headers/home";
import CategoryList from "./category-list";
import {BEST_SELLERS, CATEGORIES, NEWEST} from "./constants";
import Newest from './newest';
import {RED} from "../../styles/theme";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: CATEGORIES,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      navigation: this.props.navigation,
    })
  }

  static propTypes = {};

  getSelectedTab = () => {
    switch (this.state.selectedTab) {
      case CATEGORIES:
        return <CategoryList/>;
      case NEWEST:
        return <Newest navigation={this.props.navigation}/>;
      case BEST_SELLERS:
        return;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TopBar barStyle={'light-content'} backgroundColor={RED} paddingTop={0}/>
        <View style={styles.bodyContainer}>
          <NavBar navigation={this.props.navigation} active={HOME} header={NoneHeader}>
            <HomeHeader navigation={this.props.navigation} setSelected={this.setSelected} selected={this.state.selectedTab}/>
            {
              this.getSelectedTab()
            }
          </NavBar>
        </View>

      </View>
    );
  }

  setSelected = (tab) => {
    this.setState({
      selectedTab: tab,
    })
  }
}

HomeScreen.navigationOptions = ({navigation}) => {
  const {params = {}} = navigation.state;
  return {
    header: null,
  };
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;

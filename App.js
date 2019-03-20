import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import YouTube from 'react-native-youtube'

export default class App extends Component {
  state = {
    entries:[
      'pTRYZ9T6vU4',
      'bcAvLd5eqKA',
      'wL7R20wYT_0',
      'RuyLyHRYQqM'
    ]
  }

  constructor(props) {
   super(props)
   this._carousel=null
  }

  componentDidMount = async () => {

  }

  wp(percentage) {
    const { width, height } = Dimensions.get('window');
    const value = (percentage * width) / 100;
    return Math.round(value);
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={{flex:1, borderRadius:5, borderColor:'#ccc', borderWidth: 1, }}>
        <YouTube
          videoId={item}
          play={false}
          fullscreen={false}
          loop={true}
          style={{ alignSelf: 'stretch', height: '100%' }}
        />
      </View>
    )
  }

  render = () => {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const slideWidth = this.wp(80);
    const itemHorizontalMargin = this.wp(2);

    const sliderWidth = viewportWidth;
    const itemWidth = slideWidth + itemHorizontalMargin * 2;

    return (
      <View style={styles.container}>
        <View style={{flex:0.5,alignItems: 'center', justifyContent: 'center'}}>
          <Carousel
            hasParallaxImages={true}
            inactiveSlideScale={0.90}
            inactiveSlideOpacity={0.90}
            keyExtractor={(item,index)=> index}
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

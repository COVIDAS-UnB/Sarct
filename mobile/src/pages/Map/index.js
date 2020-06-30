import React, { useRef } from 'react';
import { Animated } from 'react-native';
import {
  PinchGestureHandler,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { Container } from './styles';
import terreoFT from '~/assets/map.png';

const Map = () => {
  const panRef = useRef();
  const pinchRef = useRef();

  const baseScale = new Animated.Value(1);
  const pinchScale = new Animated.Value(1);
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const scale = Animated.multiply(baseScale, pinchScale);
  let lastScale = 1;
  let offsetX = 0;
  let offsetY = 0;

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: true }
  );
  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
          translationX: translateX,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onPinchHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  }

  function onPanHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX, translationY } = event.nativeEvent;

      offsetX += translationX;
      offsetY += translationY;

      translateX.setValue(0);
      translateY.setValue(0);

      translateX.setOffset(offsetX);
      translateY.setOffset(offsetY);
    }
  }

  return (
    <Container>
      <PanGestureHandler
        ref={panRef}
        simultaneousHandlers={[pinchRef]}
        onGestureEvent={onPanGestureEvent}
        onHandlerStateChange={onPanHandlerStateChange}>
        <Animated.View>
          <PinchGestureHandler
            ref={pinchRef}
            simultaneousHandlers={[panRef]}
            onGestureEvent={onPinchGestureEvent}
            onHandlerStateChange={onPinchHandlerStateChange}>
            <Animated.Image
              style={{
                width: 3000,
                height: 2640,
                transform: [
                  { perspective: 200 },
                  { scale },
                  { translateX },
                  { translateY },
                ],
              }}
              source={terreoFT}
            />
          </PinchGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

export default Map;

import { Canvas, DiffRect, rect, rrect } from '@shopify/react-native-skia';
import { Dimensions, Platform, StyleSheet } from 'react-native';

const innerDimension = 250;
const width = 310;
const height = 500;

const outer = rrect(rect(0, 0, width, height), 0, 0);
const inner = rrect(
  rect(
    width / 2 - innerDimension / 2,
    height / 2 - innerDimension / 2 - 50,
    innerDimension,
    innerDimension
  ),
  50,
  50
);

export const Overlay = () => {
  return (
    <Canvas
      style={{
        ...(Platform.OS === 'android' ? { flex: 1 } : StyleSheet.absoluteFillObject),
        borderRadius: 8,
      }}>
      <DiffRect inner={inner} outer={outer} color="black" opacity={0.5} />
    </Canvas>
  );
};
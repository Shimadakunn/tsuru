import { Text, View } from 'react-native';

const Receipt = () => (
  {/* Transaction Receipt */}
  <View className="flex w-full rounded-lg border-2 border-dashed p-2">
    {/* Swapping */}
    <View className="flex flex-row items-center justify-between">
   <Text className="text-lg" style={{ fontFamily: '' }}>
     Spending
   </Text>
   <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
     500 USDC
   </Text>
 </View>
 {/* Receiving */}
 <View className="flex flex-row items-center justify-between">
   <Text className="text-lg" style={{ fontFamily: '' }}>
     Receiving
   </Text>
   <Text className="text-lg" style={{ fontFamily: 'GaeilgeKids' }}>
     0.01 ETH
   </Text>
 </View>
 {/* Dotted separator */}
 <View className="my-2 w-full border border-dashed " />
 {/* Gas Fee */}
 <View className="flex flex-row items-center justify-between">
   <Text className="text-lg" style={{ fontFamily: '' }}>
     Gas Fee
   </Text>  
   <Text>~1 %</Text>
    </View>
  </View>
);

export { Receipt };

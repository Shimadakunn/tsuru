import { CameraView, useCameraPermissions } from 'expo-camera';
import { Scan } from 'lucide-react-native';
import { useEffect } from 'react';
import { View } from 'react-native';

import { FullModal, Text } from '~/components/ui';
import { Overlay } from '~/components/ui/overlay';

interface ScanProps {
  showScan: boolean;
  setShowScan: (show: boolean) => void;
}

const ScanModal = ({ showScan, setShowScan }: ScanProps) => {
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (permission?.status === 'undetermined' && showScan) {
      requestPermission();
    }
  }, [permission, showScan]);

  return (
    <FullModal isVisible={showScan} hideModal={() => setShowScan(false)} height={0.69}>
      <View className="h-full w-full flex-col items-center justify-between gap-2">
        <View className="flex w-full flex-col gap-1">
          {/* Add Gas Title */}
          <View className="flex flex-row items-center justify-start gap-2">
            <Scan size={20} color="black" strokeWidth={3} />
            <Text className="text-2xl" style={{ fontFamily: 'Lexend_700Bold' }}>
              Scan
            </Text>
          </View>

          {/* Description */}
          <Text className="text-sm">
            Read a QR code to send tokens to an address or connect to a decentralized app.
          </Text>
        </View>
        <View className="w-full flex-1">
          <CameraView
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            facing="back"
            onBarcodeScanned={({ data }) => {
              console.log(data);
            }}
          />
          <Overlay />
        </View>
      </View>
    </FullModal>
  );
};

export default ScanModal;

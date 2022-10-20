import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.extraLarge,
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
    <Image source={imgUrl} resizeMode='contain' style={{width:24, height: 24}}/>
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

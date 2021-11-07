import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

export type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox: boolean;
  checked?: boolean;
}
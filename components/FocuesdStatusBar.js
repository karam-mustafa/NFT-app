import { useIsFocused } from '@react-navigation/native'
import { StatusBar } from 'react-native'

const FocuesdStatusBar = (props) => {
  const isFouced = useIsFocused();

  return isFouced ? <StatusBar animated={true}  {...props}/> : null;
}

export default FocuesdStatusBar
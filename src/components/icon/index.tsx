import { Animated } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from './config.json'

const Icon = createIconSetFromFontello(fontelloConfig)
export const AnimatedIcon = Animated.createAnimatedComponent(Icon)

export default Icon

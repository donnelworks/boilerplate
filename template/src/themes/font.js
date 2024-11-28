import { StatusBar } from "react-native";
import metric from "./metric"

const size =  {
    value: (size, standardScreenHeight = 680) => {
        const standardLength = metric.screenWidth > metric.screenHeight ? metric.screenWidth : metric.screenHeight;
        const offset = metric.screenWidth > metric.screenHeight ? 0 : StatusBar.currentHeight;
        const deviceHeight = standardLength - offset;
        const sizeValue = (size * deviceHeight) / standardScreenHeight;
        return Math.round(sizeValue);
    },
    precent: (percent) => {
        const standardLength = metric.screenWidth > metric.screenHeight ? metric.screenWidth : metric.screenHeight;
        const offset = metric.screenWidth > metric.screenHeight ? 0 : StatusBar.currentHeight;
        const deviceHeight = standardLength - offset;
        const sizePrecent = (percent * deviceHeight) / 100;
        return Math.round(sizePrecent);
    }
};

const type = {
    OpenSansLight: 'OpenSans-Light',
    OpenSansLightItalic: 'OpenSans-LightItalic',
    OpenSansRegular: 'OpenSans-Regular',
    OpenSansItalic: 'OpenSans-Italic',
    OpenSansSemiBold: 'OpenSans-SemiBold',
    OpenSansSemiBoldItalic: 'OpenSans-SemiBoldItalic',
    OpenSansBold: 'OpenSans-Bold',
    OpenSansBoldItalic: 'OpenSans-BoldItalic',
    OpenSansExtraBold: 'OpenSans-ExtraBold',
    OpenSansExtraBoldItalic: 'OpenSans-ExtraBoldItalic',
};

export {size, type};
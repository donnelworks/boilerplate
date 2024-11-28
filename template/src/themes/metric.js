const { Dimensions } = require("react-native");

const {width, height} = Dimensions.get('window');

const metric = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
};

export default metric;
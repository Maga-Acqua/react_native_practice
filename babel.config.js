module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["react-native-reanimated/plugin"], //after change run 'npx expo start -c'  
  };
};

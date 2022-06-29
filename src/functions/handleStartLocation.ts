import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';

export function handleStartLocation() {
  BackgroundGeolocation.configure({
    desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
    stationaryRadius: 50,
    distanceFilter: 50,
    notificationTitle: 'Background tracking',
    notificationText: 'enabled',
    debug: true,
    startOnBoot: false,
    stopOnTerminate: true,
    locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
    interval: 10000,
    fastestInterval: 5000,
    activitiesInterval: 10000,
    stopOnStillActivity: false,
    url: 'http://192.168.81.15:3000/location',
    httpHeaders: {
      'X-FOO': 'bar',
    },
    // customize post properties
    postTemplate: {
      lat: '@latitude',
      lon: '@longitude',
      foo: 'bar', // you can also add your own properties
    },
  });
}

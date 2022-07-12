import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import {api} from '../services/api';
import {getUniqueId} from 'react-native-device-info';

import {locationLatitude, locationLongitude} from '../@types/storage';

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
      locationLatitude: '@latitude',
      locationLongitude: '@longitude',
    },
  });
  const OfflineLocation = async () => {
    const headers = {
      phoneId: getUniqueId(),
    };
    let offlineLocations = [];
    NetInfo.addEventListener(async state => {
      if (!state.isConnected) {
        BackgroundGeolocation.getValidLocations(async response => {
          const latitude = response.map(lat => lat.latitude);
          const longitude = response.map(long => long.longitude);
          AsyncStorage.setItem(locationLatitude, `${latitude}`);
          AsyncStorage.setItem(locationLongitude, `${longitude}`);
          response.forEach(item => {
            offlineLocations.push({
              latitude: item.latitude,
              longitude: item.longitude,
              speed: item.speed,
              time: item.time,
              id: item.id,
            });
          });
        });
      } else if (state.isConnected) {
        if ((offlineLocations = [])) {
        } else {
          const offlineSend = await api.put(offlineLocations, headers);
          return offlineSend.data;
        }
      }
    });
  };
  setInterval(() => {
    OfflineLocation();
  }, 5000);
}

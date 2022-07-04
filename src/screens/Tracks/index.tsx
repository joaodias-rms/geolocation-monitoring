import React, {useState, useEffect} from 'react';

import {Container, Header, HeaderTitle, TracksList} from './styles';

import {Walk} from '../../database/models/walk';

import {database} from '../../database';

import {CardTrack} from '../../components/CardTrack';
import {Alert} from 'react-native';

export function Tracks() {
  const [walks, setWalks] = useState<Walk[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchWalks() {
      try {
        const walkCollection = database.get<Walk>('walks');
        const walks = await walkCollection.query().fetch();

        if (isMounted) {
          setWalks(walks);
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Attention', 'Error to get last tracked Walks');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchWalks();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <Container>
      <Header>
        <HeaderTitle>Last tracked walks</HeaderTitle>
      </Header>
      <TracksList
        data={walks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardTrack data={item} />}
      />
    </Container>
  );
}

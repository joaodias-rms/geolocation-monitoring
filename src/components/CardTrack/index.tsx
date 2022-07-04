import React from 'react';

import {
  Container,
  WalkDataContainer,
  WalkInfo,
  WalkID,
  WalkDate,
  TrackInfo,
  TrackDistance,
  TrackTimeContainer,
  TrackTimeContent,
  TrackHours,
  TrackMinutes,
} from './styles';

import {Walk} from '../../database/models/walk';

interface Props {
  data: Walk;
}

export function CardTrack({data}: Props) {
  return (
    <Container>
      <WalkDataContainer>
        <WalkInfo>
          <WalkID>#{data.id}</WalkID>
          <WalkDate>{data.date}</WalkDate>
        </WalkInfo>
        <TrackInfo>
          <TrackDistance>Distance Walked: {data.distance}KM</TrackDistance>
          <TrackTimeContainer>
            <TrackTimeContent>Walk Time:</TrackTimeContent>
            <TrackHours>{data.hours}H</TrackHours>
            <TrackMinutes>{data.minutes}M</TrackMinutes>
          </TrackTimeContainer>
        </TrackInfo>
      </WalkDataContainer>
    </Container>
  );
}

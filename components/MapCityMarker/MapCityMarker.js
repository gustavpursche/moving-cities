import React, { useState } from 'react';

import { Marker } from '../Map';

import { convertStrapiToMapbox } from '../../lib/coordiantes';

import * as styles from './mapCityMarker.styles';

export default function MapCityMarker({
  name,
  coordinates,
  chapter_1,
  chapter_2,
  chapter_3,
  chapter_4,
  isActive = false,
  onClick = () => {}
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasProfile = [chapter_1, chapter_2, chapter_3, chapter_4].reduce((acc, chapter) => {
    if (chapter.length > 0) {
      return true;
    }

    return acc;
  }, false);

  const onMouseEnter = () => {
    setIsFocused(true);
  };

  const onMouseLeave = () => {
    setIsFocused(false);
  };

  const markerProps = {
    coordinates: convertStrapiToMapbox(coordinates),
    anchor: 'top',
    onClick: hasProfile ? onClick : undefined,
    onMouseEnter: hasProfile ? onMouseEnter : undefined,
    onMouseLeave: hasProfile ? onMouseLeave : undefined
  };

  return (
    <Marker {...markerProps}>
      <div css={styles.container}>
        {isActive ? (
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            css={styles.profileIcon}>
            <circle
              cx="20.5"
              cy="20.5"
              r="19.9"
              stroke="#002286"
              strokeWidth="1.2"
              strokeDasharray="12 5"
            />
            <circle
              cx="20.78"
              cy="20.74"
              r="13.95"
              fill="#98A2FF"
              stroke="#002286"
              strokeWidth="1.2"
            />
            <circle
              cx="20.78"
              cy="20.73"
              r="9.1"
              fill="#98A2FF"
              stroke="#002286"
              strokeWidth="1.2"
            />
          </svg>
        ) : (
          <>
            {hasProfile ? (
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                css={styles.profileIcon}>
                <circle
                  cx="10.02"
                  cy="10.02"
                  r="9.52"
                  fill="#FFF95E"
                  stroke={isFocused ? '#002286' : '#B8B27C'}
                />
                <circle
                  cx="10.02"
                  cy="10.02"
                  r="6.18"
                  fill="#FFF95E"
                  stroke={isFocused ? '#002286' : '#B8B27C'}
                />
              </svg>
            ) : (
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                css={styles.icon}>
                <circle cx="3.7" cy="3.2" r="3" fill="#FFFAD4" stroke="#C4C4C4" strokeWidth=".3" />
              </svg>
            )}
          </>
        )}

        {hasProfile && <span css={styles.name}>{name}</span>}
      </div>
    </Marker>
  );
}
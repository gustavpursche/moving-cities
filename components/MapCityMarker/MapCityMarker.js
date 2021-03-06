import React, { useState } from 'react';

import { Marker } from '../Map';

import * as styles from './mapCityMarker.styles';

export default function MapCityMarker({
  name,
  coordinates,
  isActive = false,
  isHighlighted = false,
  zoom,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  hasProfile
}) {
  const [isFocused, setIsFocused] = useState(false);

  const mouseEnter = () => {
    setIsFocused(true);
    onMouseEnter();
  };

  const mouseLeave = () => {
    setIsFocused(false);
    onMouseLeave();
  };

  const markerProps = {
    coordinates: coordinates,
    anchor: 'top',
    onClick: hasProfile ? onClick : undefined,
    onMouseEnter: hasProfile ? mouseEnter : undefined,
    onMouseLeave: hasProfile ? mouseLeave : undefined
  };

  const fillColor = isHighlighted || isFocused ? '#FF7C74' : '#fffad4';
  const strokeColor = isHighlighted || isFocused ? '#FFFAD4' : '#B8B27C';

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
              stroke="black"
              strokeWidth="1.2"
              strokeDasharray="12 5"
            />
            <circle
              cx="20.78"
              cy="20.74"
              r="13.95"
              fill="#FF7C74"
              stroke="black"
              strokeWidth="1.2"
            />
            <circle cx="20.78" cy="20.73" r="9.1" fill="#FF7C74" stroke="black" strokeWidth="1.2" />
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
                <circle cx="10.02" cy="10.02" r="9.52" fill={fillColor} stroke={strokeColor} />
                <circle cx="10.02" cy="10.02" r="6.18" fill={fillColor} stroke={strokeColor} />
              </svg>
            ) : (
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                css={styles.icon}>
                <circle
                  cx="3.7"
                  cy="3.2"
                  r="3"
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth=".3"
                />
              </svg>
            )}
          </>
        )}

        {(hasProfile || (zoom && zoom > 8)) && <span css={styles.name}>{name}</span>}
      </div>
    </Marker>
  );
}

import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import Controls from './Controls';
import Info from './Info';

import * as styles from './map.styles';

const MapboxMap = ReactMapboxGl({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN
});

export default function Map({ children, onInfoOpen = () => {}, ...props }) {
  return (
    <div css={styles.container}>
      <MapboxMap
        style="mapbox://styles/gustavpursche/ckig79xzb3nue1atbymcmf04v"
        containerStyle={styles.container}
        {...props}>
        <Controls>
          <Info onClick={() => onInfoOpen()} />
          <ZoomControl style={styles.zoomControl} />
        </Controls>

        {children}
      </MapboxMap>
    </div>
  );
}
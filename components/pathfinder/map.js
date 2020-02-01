
import ReactMapboxGl, { Layer, Feature, Popup, MapContext, Image, Marker } from 'react-mapbox-gl';

const MapGL = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoia2lsbGV2MTEyMyIsImEiOiJjazFxbzd2YW4wMzZ2M2NsZXpkMXFxczB5In0.XJVy74eh9v8u0pD7K8Df7g'
});
// onContextMenu = {(map, event) => this.setState({ ...this.state, popupCoordinate: event.lngLat })}
// onClick = {(map, event) => this.setState({ ...this.state, popupCoordinate: undefined })}
// onMove = {(map, event) => this.setState({ ...this.state, popupCoordinate: undefined })}
// onStyleLoad = {(map, _) => {
//   this.subscription1 = this.props.viewModel.center.subscribe((center) => {
//     if (center) {
//       console.log("Jumping")
//       map.flyTo({ center, zoom: 13 })
//     }
//   });
// }}

const icons = ["building", "castle", "church", "kostel", "tower"]

const Map = ({ objects, selected, select }) => {
  return (<>
    <MapGL
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '15px'
      }}
      center={selected.location}
      onError={(error) => console.log(error)}
      onStyleLoad={ (map,_) => map.flyTo({ center: selected.location, zoom: 13}) }
    >
      {objects
        .map(place => <Marker key={place.id}
          coordinates={place.location}
          anchor="bottom"
          onClick={() => select(place)}>
          <img src={ place === selected ? '/img/map-icons/building-active.svg' :  '/img/map-icons/building.svg'} />
        </Marker>
        )}
    </MapGL>
  </>)
}

export default Map
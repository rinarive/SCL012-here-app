import React, { Fragment } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import CustomizedInputBase from './searchPlaces'

<<<<<<< HEAD

=======
>>>>>>> 94ecb0d61b6b27bbe2adff2ee0c8578883daa3d5
const MapContainer = (props) => {

    const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?pois=true&apiKey=kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig &api:320`;

    return (
        <Fragment>
<<<<<<< HEAD
            <CustomizedInputBase />
            <Map
                center={props.center}
                zoom={props.zoom}
            >
=======
               <CustomizedInputBase/>
            <Map
                center={props.center}
                zoom={props.zoom} 
                >
>>>>>>> 94ecb0d61b6b27bbe2adff2ee0c8578883daa3d5
                <TileLayer
                    attribution="&copy; Here 2019"
                    url={hereTileUrl}
                />
                <Marker position={props.center}>
                    <Popup>
<<<<<<< HEAD
                        Esta es mi ubicación actual
=======
                        Estoy parada <br /> en las coordenadas de react
>>>>>>> 94ecb0d61b6b27bbe2adff2ee0c8578883daa3d5
                    </Popup>
                </Marker>

                {props.locals.map(item => {
                    return (
                        <div key={item.key}>
<<<<<<< HEAD
                            <Marker position={item.position}>
                                <Popup>{item.content}</Popup>
                            </Marker>
=======
                        <Marker position={item.position}>
                            <Popup>{item.content}</Popup>
                        </Marker>
>>>>>>> 94ecb0d61b6b27bbe2adff2ee0c8578883daa3d5
                        </div>
                    )
                })
                }

            </Map>
<<<<<<< HEAD

=======
         
>>>>>>> 94ecb0d61b6b27bbe2adff2ee0c8578883daa3d5
        </Fragment>
    )
}

export default MapContainer

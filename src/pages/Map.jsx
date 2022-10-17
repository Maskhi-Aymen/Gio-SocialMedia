import React from 'react'
import '../assets/css/map.css';
import Table from '../components/table/Table'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import customerList from '../assets/JsonData/customers-list.json'
import L from 'leaflet'
import LeafletMarker from 'leaflet'



const Customers = () => {
    L.icon = function (options) {
        return new L.Icon({
            iconUrl:require("../assets/images/tuat.png"),
            iconAnchor: new L.Point(0, 0),
            popupAnchor: new L.Point(10, 0),
            iconSize: new L.Point(55, 55),
            className: 'leaflet-div-icon'
        });
    };
    const markerIcon = new L.icon()
    const position = [51.505, -0.09]
    return (
        <div>
            <h2 className="page-header">
                Map
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <div className="google-map">
                                <MapContainer center={[36.814416, 10.062085]} zoom={15} scrollWheelZoom={false} style={{height:'100%'}}>
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Marker position={[36.814416, 10.062083]} >
                                        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
                                    </Marker>
                                    {data.map((item) => (<><img src="" alt='icon' />
                                        <Marker position={item.location} icon={new L.Icon({
                                            iconUrl:require("../assets/images/marker.png"),
                                            iconAnchor: new L.Point(0, 0),
                                            popupAnchor: new L.Point(10, 0),
                                            iconSize: new L.Point(55, 55),
                                            className: 'leaflet-div-icon'
                                        })}> </Marker></>
                                        ))}
                                        
                                    <Marker position={[36.814113, 10.064423]} icon={markerIcon} ></Marker>
                                    <div className="map-content">
                                        <h3 className="switch__color">Contact</h3>
                                        <span>Maskhi Aymen</span>
                                        <br />
                                        <span>Location : Manouba , Tunisia</span>
                                        <br />
                                        <span>Email: aymen.maskhi@ensi-uma.tn</span>
                                    </div>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers


const data=[
    {
       "user": "aa",
       "type":"sport",
       "online": false,
       "image": "../assets/images/tuat.png",
       "location": [36.814416, 10.062082],
       "lien":"https", 
    },
    {
        "user": "bb",
        "type":"sport",
        "online": false,
        "image": "../assets/images/tuat.png",
        "location": [36.814411, 10.062071],
        "lien":"https", 
     },
     {
        "user": "cc",
        "type":"sport",
        "online": false,
        "image": "../assets/images/tuat.png",
        "location": [36.808488, 10.072289],
        "lien":"https", 
     },
     {
        "user": "dd",
        "type":"sport",
        "online": false,
        "image": "../assets/images/tuat.png",
        "location": [36.808567, 10.068351],
        "lien":"https", 
     },
]
import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Rank.css';
import L from 'leaflet';

// Naprawiamy problem z ikoną markera
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const center = [41.9028, 12.4964];

const locations = [
  {
    id: 1,
    position: [45.4642, 9.1900],
    title: "Sky Bar Milano",
    image: `${process.env.PUBLIC_URL}/gallery-images/1.jpg`,
    description: "Najlepszy Aperol Spritz serwowany z widokiem na Duomo di Milano. Kultowe miejsce łączące tradycję z nowoczesnością."
  },
  {
    id: 2,
    position: [41.3851, 2.1734],
    title: "Sunset Lounge Barcelona",
image: `${process.env.PUBLIC_URL}/gallery-images/2.jpg`,
    description: "Taras z widokiem na Sagrada Familia, gdzie Aperol Spritz podawany jest z katalońskim twistem."
  },
  {
    id: 3,
    position: [44.4949, 11.3426],
    title: "Ristorante Teresina",
image: `${process.env.PUBLIC_URL}/gallery-images/3.jpg`,
    description: "Delicious Aperol Spritz served in a cozy atmosphere in the heart of Bologna, right next to Piazza Maggiore."
  },
  {
    id: 4,
    position: [44.4937, 11.3432],
    title: "Caffe del Rosso",
image: `${process.env.PUBLIC_URL}/gallery-images/4.jpg`,
    description: "Sophisticated Aperol Spritz served between espresso, cappuccino and locals in the historic center of Bologna."
  },
  {
    id: 5,
    position: [43.7696, 11.2558],
    title: "Osteria del Fiore",
image: `${process.env.PUBLIC_URL}/gallery-images/5.jpg`,
    description: "Florentine Aperol Spritz with a stunning view of Ponte Vecchio. Full of flavor, full of fun."
  },
  {
    id: 6,
    position: [41.9028, 12.4964],
    title: "Bar del Fico",
image: `${process.env.PUBLIC_URL}/gallery-images/6.jpg`,
    description: "Classic Roman aperitivo spot near the Pantheon. Experience Aperol Spritz in the eternal city, surrounded by ancient history."
  },
  {
    id: 7,
    position: [40.8518, 14.2681],
    title: "Terrazza Calabritto",
image: `${process.env.PUBLIC_URL}/gallery-images/7.jpg`,
    description: "Elegant rooftop bar in Naples' fashionable Chiaia district, offering Aperol Spritz with breathtaking views of the Bay of Naples."
  },
  {
    id: 8,
    position: [38.1157, 13.3615],
    title: "Bocum Mixology",
image: `${process.env.PUBLIC_URL}/gallery-images/8.jpg`,
    description: "Modern bar in historic Palermo, where Aperol Spritz meets Sicilian hospitality. Steps away from the famous Quattro Canti."
  },
  {
    id: 9,
    position: [41.1272, 16.8718],
    title: "Caffè Borghese",
image: `${process.env.PUBLIC_URL}/gallery-images/9.jpg`,
    description: "Charming spot in Bari's old town, where you can enjoy Aperol Spritz alongside traditional Puglian aperitivo."
  },
  {
    id: 10,
    position: [39.2238, 9.1217],
    title: "Libarium Nostrum",
image: `${process.env.PUBLIC_URL}/gallery-images/10.jpg`,
    description: "Stylish rooftop bar in Cagliari's Castello district, offering Aperol Spritz with panoramic views of the Mediterranean Sea and ancient city walls."
  },
  {
    id: 11,
    position: [41.0976, 9.4037],
    title: "Phi Beach",
image: `${process.env.PUBLIC_URL}/gallery-images/11.jpg`,
    description: "Exclusive Costa Smeralda beach club where Aperol Spritz meets luxury yacht life and stunning Sardinian sunsets."
  },
  {
    id: 12,
    position: [37.5079, 15.0830],
    title: "Vermut",
image: `${process.env.PUBLIC_URL}/gallery-images/12.jpg`,
    description: "Trendy bar near Piazza Duomo, serving Aperol Spritz with a view of Mount Etna and Baroque architecture."
  },
  {
    id: 13,
    position: [38.0186, 12.5137],
    title: "Torre di Ligny",
image: `${process.env.PUBLIC_URL}/gallery-images/13.jpg`,
    description: "Historic watchtower bar offering Aperol Spritz at sunset with views of the Egadi Islands and salt pans."
  },
  {
    id: 14,
    position: [36.8986, 15.0687],
    title: "Ortigia Social",
image: `${process.env.PUBLIC_URL}/gallery-images/14.jpg`,
    description: "Charming spot in Ortigia's ancient streets, where Aperol Spritz is served alongside fresh seafood and local traditions."
  }
];

class Rank extends Component {
  render() {
    return (
      <div className='rank-section'>
        <h1 className="rank-title">Aperol World Map</h1>
        <div className="rank-container">
          <div className="rank-intro">
            <h2>Discover Aperol Spots Around the World</h2>
            <p>Click on the markers to explore unique Aperol experiences in different locations.</p>
          </div>
          
          <MapContainer 
            center={center} 
            zoom={4} 
            style={{ height: '70vh', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map(location => (
              <Marker key={location.id} position={location.position}>
                <Popup>
                  <div className="location-info">
                    <h3>{location.title}</h3>
                    <img 
                      src={location.image} 
                      alt={location.title}
                      className="location-image"
                    />
                    <p>{location.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    );
  }
}

export default Rank;


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Badge } from '@/components/ui/Badge';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Red Marker
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const neighborhoods = [
  { name: 'Copacabana', position: [-22.9714, -43.1822] as [number, number] },
  { name: 'Ipanema', position: [-22.9836, -43.2043] as [number, number] },
  { name: 'Leblon', position: [-22.9828, -43.2201] as [number, number] },
  { name: 'Botafogo', position: [-22.9510, -43.1806] as [number, number] },
  { name: 'Flamengo', position: [-22.9348, -43.1755] as [number, number] },
  { name: 'Tijuca', position: [-22.9333, -43.2384] as [number, number] },
  { name: 'Barra da Tijuca', position: [-23.0036, -43.3283] as [number, number] },
  { name: 'Recreio', position: [-23.0179, -43.4688] as [number, number] },
  { name: 'Jacarepaguá', position: [-22.9691, -43.3995] as [number, number] },
  { name: 'Méier', position: [-22.9015, -43.2798] as [number, number] },
  { name: 'Centro', position: [-22.9068, -43.1729] as [number, number] },
  { name: 'Lapa', position: [-22.9142, -43.1806] as [number, number] },
  { name: 'Santa Teresa', position: [-22.9234, -43.1908] as [number, number] },
  { name: 'Urca', position: [-22.9542, -43.1651] as [number, number] },
  { name: 'Laranjeiras', position: [-22.9360, -43.1895] as [number, number] },
  { name: 'Gávea', position: [-22.9772, -43.2344] as [number, number] },
  { name: 'São Conrado', position: [-22.9934, -43.2685] as [number, number] },
  { name: 'Maracanã', position: [-22.9126, -43.2281] as [number, number] },
  { name: 'Vila Isabel', position: [-22.9144, -43.2458] as [number, number] },
  { name: 'Penha', position: [-22.8396, -43.2764] as [number, number] }
];

export function CoverageMap() {
  return (
    <div className="w-full">
      <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 z-0 relative">
        <MapContainer 
          center={[-22.93, -43.25]} 
          zoom={11} 
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {neighborhoods.map((n, idx) => (
            <Marker key={idx} position={n.position} icon={customMarkerIcon}>
              <Popup>
                <div className="font-bold text-center">
                  <span className="text-[#E10600]">📍</span> {n.name}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {neighborhoods.map((n, idx) => (
          <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200">
            {n.name}
          </span>
        ))}
      </div>
    </div>
  );
}

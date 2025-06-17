
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Weight } from 'lucide-react';

interface Animal {
  id: string;
  name: string;
  category: string;
  price: number;
  location: string;
  age: string;
  weight: string;
  image: string;
  seller: string;
  description: string;
}

interface AnimalCardProps {
  animal: Animal;
  onClick: (animal: Animal) => void;
}

const AnimalCard = ({ animal, onClick }: AnimalCardProps) => {
  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:border-farm-green transition-all duration-300 hover:shadow-lg transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          onClick={() => onClick(animal)}
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-farm-green text-white">
            {animal.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-farm-brown-dark group-hover:text-farm-green transition-colors">
              {animal.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {animal.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-farm-green">
              {formatPrice(animal.price)}
            </div>
            <div className="text-sm text-gray-500">
              {animal.seller}
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{animal.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{animal.age}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Weight className="w-4 h-4" />
              <span>{animal.weight}</span>
            </div>
          </div>

          <Button 
            className="w-full bg-farm-green hover:bg-farm-green-dark text-white"
            onClick={() => onClick(animal)}
          >
            Lihat Detail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;

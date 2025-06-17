
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Weight, Phone, MessageSquare, User } from 'lucide-react';

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
  phone?: string;
  sellerRating?: number;
}

interface AnimalDetailModalProps {
  animal: Animal | null;
  open: boolean;
  onClose: () => void;
}

const AnimalDetailModal = ({ animal, open, onClose }: AnimalDetailModalProps) => {
  if (!animal) return null;

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-farm-brown-dark">
            {animal.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gambar */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-farm-green text-white text-sm">
                  {animal.category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Informasi Detail */}
          <div className="space-y-6">
            {/* Harga */}
            <div>
              <div className="text-3xl font-bold text-farm-green mb-2">
                {formatPrice(animal.price)}
              </div>
              <p className="text-gray-600">
                {animal.description}
              </p>
            </div>

            <Separator />

            {/* Spesifikasi */}
            <div className="space-y-3">
              <h4 className="font-semibold text-farm-brown-dark">Spesifikasi</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-farm-green" />
                  <div>
                    <span className="text-sm text-gray-600">Lokasi:</span>
                    <span className="ml-2 font-medium">{animal.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-farm-green" />
                  <div>
                    <span className="text-sm text-gray-600">Umur:</span>
                    <span className="ml-2 font-medium">{animal.age}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Weight className="w-5 h-5 text-farm-green" />
                  <div>
                    <span className="text-sm text-gray-600">Berat:</span>
                    <span className="ml-2 font-medium">{animal.weight}</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Info Penjual */}
            <div className="space-y-3">
              <h4 className="font-semibold text-farm-brown-dark">Penjual</h4>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-farm-green" />
                <div>
                  <div className="font-medium">{animal.seller}</div>
                  <div className="text-sm text-gray-600">
                    ⭐ {animal.sellerRating || 4.5} (128 ulasan)
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Tombol Aksi */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-farm-green hover:bg-farm-green-dark text-white py-3"
                size="lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat Penjual
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-farm-green text-farm-green hover:bg-farm-green hover:text-white py-3"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Penjual
              </Button>
              <Button 
                className="w-full bg-farm-gold hover:bg-farm-gold/90 text-white py-3"
                size="lg"
              >
                Beli Sekarang
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimalDetailModal;

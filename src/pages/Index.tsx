
import { useState } from 'react';
import Header from '@/components/Header';
import AnimalFilter from '@/components/AnimalFilter';
import AnimalCard from '@/components/AnimalCard';
import AnimalDetailModal from '@/components/AnimalDetailModal';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, ShieldCheck } from 'lucide-react';

// Mock data untuk hewan ternak
const mockAnimals = [
  {
    id: '1',
    name: 'Sapi Limosin Jantan',
    category: 'Sapi',
    price: 25000000,
    location: 'Bandung',
    age: '2 tahun',
    weight: '450 kg',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=300&fit=crop',
    seller: 'Pak Budi Farm',
    description: 'Sapi limosin jantan sehat, siap potong atau breeding. Sudah divaksin lengkap.',
    phone: '08123456789',
    sellerRating: 4.8
  },
  {
    id: '2',
    name: 'Kambing Etawa Betina',
    category: 'Kambing',
    price: 8500000,
    location: 'Yogyakarta',
    age: '1.5 tahun',
    weight: '65 kg',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=500&h=300&fit=crop',
    seller: 'Ternak Sejahtera',
    description: 'Kambing etawa betina produktif, cocok untuk perah maupun breeding.',
    phone: '08123456788',
    sellerRating: 4.6
  },
  {
    id: '3',
    name: 'Domba Garut Jantan',
    category: 'Domba',
    price: 4500000,
    location: 'Garut',
    age: '10 bulan',
    weight: '35 kg',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=500&h=300&fit=crop',
    seller: 'Domba Garut Asli',
    description: 'Domba garut jantan berkualitas tinggi, cocok untuk kurban atau breeding.',
    phone: '08123456787',
    sellerRating: 4.9
  },
  {
    id: '4',
    name: 'Kerbau Murrah',
    category: 'Kerbau',
    price: 18000000,
    location: 'Medan',
    age: '3 tahun',
    weight: '380 kg',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=300&fit=crop',
    seller: 'Kerbau Nusantara',
    description: 'Kerbau murrah sehat dan kuat, cocok untuk bajak sawah atau perah.',
    phone: '08123456786',
    sellerRating: 4.7
  },
  {
    id: '5',
    name: 'Ayam Kampung Super',
    category: 'Ayam',
    price: 150000,
    location: 'Bogor',
    age: '6 bulan',
    weight: '2.5 kg',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop',
    seller: 'Ayam Kampung Prima',
    description: 'Ayam kampung super sehat, bebas antibiotik dan hormon.',
    phone: '08123456785',
    sellerRating: 4.5
  },
  {
    id: '6',
    name: 'Sapi Bali Betina',
    category: 'Sapi',
    price: 22000000,
    location: 'Bali',
    age: '2.5 tahun',
    weight: '420 kg',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=300&fit=crop',
    seller: 'Sapi Bali Asli',
    description: 'Sapi bali betina produktif, cocok untuk breeding atau penggemukan.',
    phone: '08123456784',
    sellerRating: 4.8
  }
];

const Index = () => {
  const [filteredAnimals, setFilteredAnimals] = useState(mockAnimals);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (filters: any) => {
    let filtered = mockAnimals;

    if (filters.category) {
      filtered = filtered.filter(animal => 
        animal.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.location) {
      filtered = filtered.filter(animal => 
        animal.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(animal => 
        animal.price >= filters.priceRange[0] && animal.price <= filters.priceRange[1]
      );
    }

    setFilteredAnimals(filtered);
  };

  const handleAnimalClick = (animal: any) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-farm-green to-farm-green-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Marketplace Hewan Ternak Terpercaya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 animate-fade-in">
              Jual beli hewan ternak berkualitas tinggi dengan mudah dan aman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-white text-farm-green hover:bg-gray-100 text-lg px-8 py-3">
                Mulai Belanja
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-farm-green text-lg px-8 py-3">
                Jual Hewan Anda
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-farm-green rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-farm-brown-dark">10,000+</div>
                <div className="text-gray-600">Hewan Terjual</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-farm-green rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-farm-brown-dark">5,000+</div>
                <div className="text-gray-600">Peternak Terdaftar</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-farm-green rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-farm-brown-dark">100%</div>
                <div className="text-gray-600">Transaksi Aman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Hewan */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-farm-brown-dark mb-4">
              Hewan Ternak Pilihan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan hewan ternak berkualitas tinggi dari peternak terpercaya di seluruh Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <AnimalFilter onFilterChange={handleFilterChange} />
            </div>

            {/* Daftar Hewan */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAnimals.map((animal) => (
                  <AnimalCard
                    key={animal.id}
                    animal={animal}
                    onClick={handleAnimalClick}
                  />
                ))}
              </div>

              {filteredAnimals.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg">
                    Tidak ada hewan yang sesuai dengan filter Anda
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Detail */}
      <AnimalDetailModal
        animal={selectedAnimal}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;

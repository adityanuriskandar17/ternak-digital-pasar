
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

const AnimalFilter = ({ onFilterChange }: FilterProps) => {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    priceRange: [0, 50000000],
    age: ''
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      category: '',
      location: '',
      priceRange: [0, 50000000],
      age: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <Card className="p-6 bg-white border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-farm-brown-dark">Filter Hewan</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={resetFilters}
          className="text-farm-green border-farm-green hover:bg-farm-green hover:text-white"
        >
          Reset
        </Button>
      </div>

      <div className="space-y-6">
        {/* Kategori Hewan */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kategori Hewan
          </label>
          <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger className="border-gray-300 focus:border-farm-green focus:ring-farm-green">
              <SelectValue placeholder="Pilih kategori" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="sapi">Sapi</SelectItem>
              <SelectItem value="kambing">Kambing</SelectItem>
              <SelectItem value="domba">Domba</SelectItem>
              <SelectItem value="kerbau">Kerbau</SelectItem>
              <SelectItem value="ayam">Ayam</SelectItem>
              <SelectItem value="bebek">Bebek</SelectItem>
              <SelectItem value="ikan">Ikan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lokasi
          </label>
          <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
            <SelectTrigger className="border-gray-300 focus:border-farm-green focus:ring-farm-green">
              <SelectValue placeholder="Pilih lokasi" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="jakarta">Jakarta</SelectItem>
              <SelectItem value="bandung">Bandung</SelectItem>
              <SelectItem value="surabaya">Surabaya</SelectItem>
              <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
              <SelectItem value="medan">Medan</SelectItem>
              <SelectItem value="semarang">Semarang</SelectItem>
              <SelectItem value="palembang">Palembang</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Range Harga */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Range Harga
          </label>
          <div className="px-3 py-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange('priceRange', value)}
              max={50000000}
              min={0}
              step={1000000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Rp {filters.priceRange[0].toLocaleString('id-ID')}</span>
              <span>Rp {filters.priceRange[1].toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>

        {/* Umur */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Umur
          </label>
          <Select value={filters.age} onValueChange={(value) => handleFilterChange('age', value)}>
            <SelectTrigger className="border-gray-300 focus:border-farm-green focus:ring-farm-green">
              <SelectValue placeholder="Pilih umur" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="muda">Muda (&lt; 1 tahun)</SelectItem>
              <SelectItem value="dewasa">Dewasa (1-3 tahun)</SelectItem>
              <SelectItem value="tua">Tua (&gt; 3 tahun)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default AnimalFilter;

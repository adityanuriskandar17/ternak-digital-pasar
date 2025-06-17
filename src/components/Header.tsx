
import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-farm-green to-farm-green-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐄</span>
            </div>
            <h1 className="text-xl font-bold text-farm-brown-dark">TernakKu</h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Cari hewan ternak..."
                className="pl-10 border-gray-300 focus:border-farm-green focus:ring-farm-green"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-farm-green-dark transition-colors">
              Beranda
            </a>
            <a href="#" className="text-gray-700 hover:text-farm-green-dark transition-colors">
              Jual Hewan
            </a>
            <a href="#" className="text-gray-700 hover:text-farm-green-dark transition-colors">
              Bantuan
            </a>
            <Button variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Masuk
            </Button>
            <Button className="bg-farm-green hover:bg-farm-green-dark">
              Daftar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Cari hewan ternak..."
                  className="pl-10 border-gray-300 focus:border-farm-green focus:ring-farm-green"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 hover:text-farm-green-dark py-2">
                  Beranda
                </a>
                <a href="#" className="text-gray-700 hover:text-farm-green-dark py-2">
                  Jual Hewan
                </a>
                <a href="#" className="text-gray-700 hover:text-farm-green-dark py-2">
                  Bantuan
                </a>
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" className="flex-1 border-farm-green text-farm-green hover:bg-farm-green hover:text-white">
                    Masuk
                  </Button>
                  <Button className="flex-1 bg-farm-green hover:bg-farm-green-dark">
                    Daftar
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

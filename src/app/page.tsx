import React from 'react';

// Placeholder para o Header
const Header = () => {
  return (
    <header className="w-full bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">LOGO AQUI</div>
        {/* Navegação pode ser adicionada aqui no futuro */}
      </div>
    </header>
  );
};

// Placeholder para a Seção Sobre
const AboutSection = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Sobre Nosso Site</h2>
        <p className="text-gray-600 text-center">
          Este é um breve texto sobre o propósito do site. Aqui você encontrará as melhores ofertas e links de afiliados para produtos do Mercado Livre, selecionados especialmente para você!
        </p>
      </div>
    </section>
  );
};

// Placeholder para o Card de Produto
interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{name}</h3>
        <p className="text-xl font-bold text-gray-900 mb-3">{price}</p>
        <button className="w-full bg-[#FFF159] text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};

// Placeholder para a Grade de Produtos
const ProductGrid = () => {
  const products = [
    { imageUrl: 'https://via.placeholder.com/300x200.png?text=Produto+1', name: 'Nome do Produto Incrível 1 com Descrição Longa', price: 'R$ 99,90' },
    { imageUrl: 'https://via.placeholder.com/300x200.png?text=Produto+2', name: 'Produto Fantástico 2', price: 'R$ 149,50' },
    { imageUrl: 'https://via.placeholder.com/300x200.png?text=Produto+3', name: 'Super Oferta Produto 3', price: 'R$ 75,00' },
    { imageUrl: 'https://via.placeholder.com/300x200.png?text=Produto+4', name: 'Item Exclusivo Produto 4', price: 'R$ 299,99' },
  ];

  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} imageUrl={product.imageUrl} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Placeholder para o Footer
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Seu Site de Afiliados. Todos os direitos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">
          Inspirado no design do Mercado Livre e Thesus.
        </p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <AboutSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}


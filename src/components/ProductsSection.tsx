import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { products } from '../data/products';

const ProductsSection = () => {
  const navigate = useNavigate();

  const handleViewProduct = (product: (typeof products)[0]) => {
    navigate(`/products/${product.id}`, { state: product });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título igual ao da gallery */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Crystal e Innovar Professional andam juntos para cuidar da sua beleza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="transform scale-95 hover:scale-100 transition-transform origin-top bg-white border-spa-primary/10"
            >
              <CardHeader className="pb-0">
                <div className="w-full h-[400px] overflow-hidden rounded-t-lg mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardTitle
                  className="text-xl font-semibold text-spa-teal cursor-pointer hover:text-spa-teal/80 transition-colors"
                  onClick={() => handleViewProduct(product)}
                >
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-gray-600">{product.description}</p>
              </CardContent>

              <CardFooter className="flex justify-between items-center">
                <p className="text-xl font-bold text-spa-teal">
                  € {product.price.toFixed(2)}
                </p>
                <Button
                  variant="outline"
                  className="border-spa-teal text-spa-teal hover:bg-spa-teal/10"
                  onClick={() => handleViewProduct(product)}
                >
                  Ver Detalhes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

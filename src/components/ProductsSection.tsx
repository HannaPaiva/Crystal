import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const products = [
  {
    id: 1,
    name: "Shampoo Revitalizante",
    price: 59.90,
    description: "Shampoo profissional para cabelos danificados",
    image: "./products/products-01.jpg",
    details: [
      "Volume: 300ml",
      "Para cabelos danificados",
      "Uso profissional",
      "Sem parabenos",
      "Vegano"
    ]
  },
  {
    id: 2,
    name: "Máscara Hidratante",
    price: 89.90,
    description: "Máscara de tratamento intensivo",
    image: "./products/products-02.jpg",
    details: [
      "Volume: 250g",
      "Para todos os tipos de cabelo",
      "Hidratação profunda",
      "Sem sulfatos",
      "Fragrância suave"
    ]
  },
  {
    id: 3,
    name: "Óleo Capilar",
    price: 49.90,
    description: "Óleo para finalização e brilho",
    image: "./products/products-03.jpg",
    details: [
      "Volume: 100ml",
      "Livre de silicone",
      "Anti-frizz",
      "Com filtro UV",
      "Para todos os tipos de cabelo"
    ]
  },
];

const ProductsSection = () => {
  const navigate = useNavigate();

  const handleViewProduct = (product: typeof products[0]) => {
    navigate(`/products/${product.id}`, { state: product });
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-4xl font-bold text-spa-teal text-center">
            Nossos Produtos
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col hover:shadow-lg transition-shadow bg-white border-spa-primary/10"
            >
              <CardHeader className="pb-0">
                <div className="w-full h-[500px] overflow-hidden rounded-t-lg mb-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain"
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
                <p className="text-2xl font-bold text-spa-teal mt-4">
                  € {product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
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
      </main>
    </div>
  );
};

export default ProductsSection;

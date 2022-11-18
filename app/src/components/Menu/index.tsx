import { useState } from 'react';
import { FlatList } from 'react-native';

import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';

import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';

import { AddToCartButton, ProductContainer, ProductDetails, ProductImage, Separator } from './styles';

interface MenuProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

export function Menu({ products, onAddToCart }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        product={selectedProduct}
        onClose={() => setIsModalVisible(false)}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({item: product}) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.0.112:3001/uploads/${product.imagePath}`
              }}
            />
            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color="#666666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle/>
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}

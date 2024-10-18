import React from 'react';
import Mapping from './Mapping';

function Mapwrap() {
  const allProducts = [
    {
      id: 1,
      name: 'Wireless Mouse',
      category: 'Electronics',
      price: 29.99,
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Bluetooth Headphones',
      category: 'Electronics',
      price: 59.99,
      inStock: true,
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Smartphone Case',
      category: 'Accessories',
      price: 19.99,
      inStock: true,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Laptop Stand',
      category: 'Furniture',
      price: 39.99,
      inStock: true,
      rating: 4.6,
    },
    {
      id: 5,
      name: 'USB-C Charger',
      category: 'Electronics',
      price: 14.99,
      inStock: true,
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Gaming Mouse Pad',
      category: 'Accessories',
      price: 24.99,
      inStock: true,
      rating: 4.3,
    },
    {
      id: 7,
      name: 'Portable Power Bank',
      category: 'Electronics',
      price: 39.99,
      inStock: false,
      rating: 4.5,
    },
    {
      id: 8,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 199.99,
      inStock: true,
      rating: 4.6,
    },
    {
      id: 9,
      name: 'Ergonomic Office Chair',
      category: 'Furniture',
      price: 129.99,
      inStock: true,
      rating: 4.8,
    },
    {
      id: 10,
      name: 'Wireless Earbuds',
      category: 'Electronics',
      price: 79.99,
      inStock: true,
      rating: 4.4,
    },
    {
      id: 11,
      name: 'HDMI Cable',
      category: 'Accessories',
      price: 9.99,
      inStock: true,
      rating: 4.1,
    },
    {
      id: 12,
      name: 'Webcam',
      category: 'Electronics',
      price: 49.99,
      inStock: true,
      rating: 4.5,
    },
    {
      id: 13,
      name: 'Desk Organizer',
      category: 'Office Supplies',
      price: 19.99,
      inStock: true,
      rating: 4.2,
    },
    {
      id: 14,
      name: 'Digital Thermometer',
      category: 'Health',
      price: 15.99,
      inStock: true,
      rating: 4.3,
    },
    {
      id: 15,
      name: 'Air Fryer',
      category: 'Kitchen Appliances',
      price: 99.99,
      inStock: true,
      rating: 4.6,
    },
    {
      id: 16,
      name: 'Fitness Tracker',
      category: 'Electronics',
      price: 79.99,
      inStock: false,
      rating: 4.5,
    },
    {
      id: 17,
      name: 'Electric Kettle',
      category: 'Kitchen Appliances',
      price: 39.99,
      inStock: true,
      rating: 4.4,
    },
    {
      id: 18,
      name: 'Portable Bluetooth Speaker',
      category: 'Electronics',
      price: 49.99,
      inStock: true,
      rating: 4.6,
    },
    {
      id: 19,
      name: 'Indoor Plant',
      category: 'Home Decor',
      price: 29.99,
      inStock: true,
      rating: 4.7,
    },
    {
      id: 20,
      name: 'Travel Backpack',
      category: 'Accessories',
      price: 69.99,
      inStock: true,
      rating: 4.5,
    },
  ];
  return (
    <>
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        <p className="text-center my-3 mt-8">
          Using Map to traverse array items
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between">
          {allProducts.map((item) => (
            <Mapping
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              inStock={item.inStock}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Mapwrap;

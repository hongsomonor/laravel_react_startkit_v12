
import MainLayout from '@/layouts/MainLayout';
import React from 'react'

const Products = () => {
  return (
    <div>Products</div>
  )
}

export default Products

Products.layout = (page: React.ReactElement) => <MainLayout children={page} />;

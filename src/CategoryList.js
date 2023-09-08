import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetails() {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const productId = 6; // Замініть це на ідентифікатор продукту, який ви хочете отримати
    axios.get('http://localhost:8081/${productId}')
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error('Помилка отримання даних про продукт:', error);
      });
  }, []);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Деталі продукту</h1>
      <h2>{category.name}</h2>
      <p>Опис: {category.description}</p>
      {/* Додайте інші поля для відображення інформації про продукт */}
    </div>
  );
}

export default ProductDetails;

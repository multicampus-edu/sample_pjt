
import React from "react";
import { useParams } from "react-router-dom";

const productMap = {
  1: { id: 1, name: "노트북", price: 1200000 },
  2: { id: 2, name: "무선 이어폰", price: 150000 },
  3: { id: 3, name: "스마트워치", price: 300000 },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productMap[parseInt(id!)];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg mb-2">가격: {product.price.toLocaleString()}원</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded">장바구니 담기</button>
    </div>
  );
};

export default ProductDetail;

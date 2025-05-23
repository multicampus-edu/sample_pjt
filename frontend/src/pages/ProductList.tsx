
import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "노트북", price: 1200000 },
  { id: 2, name: "무선 이어폰", price: 150000 },
  { id: 3, name: "스마트워치", price: 300000 },
];

const ProductList = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">상품 목록</h2>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p>가격: {p.price.toLocaleString()}원</p>
            <Link to={"/product/" + p.id} className="text-blue-500 underline">
              상세 보기
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

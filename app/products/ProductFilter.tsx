"use client";

import { useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

export default function ProductFilter({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const q = query.trim().toLowerCase();
  const visible = products.filter(
    (p) =>
      (!inStockOnly || p.inStock) &&
      (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  );

  return (
    <>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", margin: "1rem 0" }}>
        <input
          type="search"
          placeholder="Search by name or category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "0.5rem", minWidth: "260px" }}
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />{" "}
          In stock only
        </label>
        <span>
          {visible.length} of {products.length}
        </span>
      </div>

      <div className="services-grid">
        {visible.map((product) => (
          <div className="service-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>
              {product.category} · ${product.price.toFixed(2)} ·{" "}
              {product.inStock ? "In stock" : "Out of stock"}
            </p>
          </div>
        ))}
        {visible.length === 0 && <p>No products match your filters.</p>}
      </div>
    </>
  );
}

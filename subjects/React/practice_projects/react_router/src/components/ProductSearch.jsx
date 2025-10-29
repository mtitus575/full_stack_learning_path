import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//Mock data (in real app, data comes from API)
const allProducts = [
  { id: 1, name: "iPhone 14", category: "electronics", price: 999 },
  { id: 2, name: "React Book", category: "books", price: 29 },
  { id: 3, name: "Blue Jeans", category: "clothing", price: 79 },
  { id: 4, name: "Laptop", category: "electronics", price: 1299 },
  { id: 5, name: "JavaScript Guide", category: "books", price: 39 },
  { id: 6, name: "Red Shirt", category: "clothing", price: 25 },
];

function ProductSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

  //get the current filter values from the URL:
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sort") || "name";

  //filter products based on their URL:
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      query === "" || product.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  //sort products:
  filteredProducts.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  //update searchTerm when the URL change
  useEffect(() => {
    setSearchTerm(searchParams.get("q") || "");
  }, [searchParams]);

  //Handle search form submisson:
  function handleSearch(e) {
    e.preventDefault();
    updateParams({ q: searchTerm });
  }

  //Helper function to update params without losing existing ones
  function updateParams(newParams) {
    const current = Object.fromEntries(searchParams);
    setSearchParams({ ...current, ...newParams });
  }

  //Clear search but keep other filters:
  function clearSearch() {
    const current = Object.fromEntries(searchParams);
    delete current.q;
    setSearchParams(current);
    setSearchTerm("");
  }

  return (
    <div>
      <strong>Search Products:</strong>
      <form onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products..."
          type="text"
          name="searchTerm"
        />
        <button type="submit">Search</button>
        {query && (
          <button type="button" onClick={clearSearch}>
            Clear
          </button>
        )}
      </form>
      <div>
        <strong>Filter: </strong>
        <select
          value={category}
          onChange={(e) => updateParams({ category: e.target.value })}
        >
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div>
        <strong>Sortby: </strong>
        <select
          value={sortBy}
          onChange={(e) => updateParams({ sort: e.target.value })}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      {/* Results: */}
      <div>
        <h3>Your Search Results:</h3>
      <p>We found {filteredProducts.length} products.</p>

        {filteredProducts.length === 0 ? (
          <p>No products found. Try adjusting your search or filters.</p>
        ) : (
          <div>
            {filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <h4>{product.name}</h4>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* Current URL for debugging */}
      <div>
        <strong>Current URL:</strong> {window.location.href}
      </div>
    </div>
  );
}

export default ProductSearch;

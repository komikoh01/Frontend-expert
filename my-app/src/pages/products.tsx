import "../globals.css";
import useProducts from "../components/IE1/hooks/useProducts";
import ProductInfo from "../components/IE1/ProductInfo";
import SearchBar from "../components/IE1/SearchBar";

export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
};

export default function Products() {
const { handleSearch, filteredProducts, products, setProducts, editingID, setEditingID, editedName, setEditedName, handleDone, completedProducts} = useProducts()

  const handleEditName = (id: number) => {
    const productToEdit = products.find(p => p.id === id)
    if(productToEdit) {
      setEditingID(id)
      setEditedName(productToEdit.name)
    }
  };

  const saveEdit = () => {
    if(editingID === null) return
    setProducts(prevProducts => prevProducts.map(product => product.id === editingID ? {...product, name: editedName} : product))
    setEditingID(null)
    setEditedName("")
  }

  const handleSetName = (e: React.KeyboardEvent) => {
    if(e.key === "Enter") saveEdit()
  }

  return (
    <section className=" min-w-full flex flex-col gap-3 py-4 px-6 relative">
      <SearchBar onSearch={handleSearch} />
      <ul className=" grid grid-cols-4 gap-5 place-content-center mx-auto p-3">
        {filteredProducts.map((product) => (
          <ProductInfo onEdit={handleEditName} onSet={handleSetName} onSave={saveEdit} onDone={handleDone} isDone={completedProducts.includes(product.id)} product={product} editedName={editedName} setEditedName={setEditedName} editingID={editingID}/>
        ))}
      </ul>
    </section>
  );
}
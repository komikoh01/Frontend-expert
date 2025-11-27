// import { useRef} from "react";
import type { Product } from "../../pages/products"

export default function ProductInfo({
  onEdit,
  onSet,
  onSave,
  onDone,
  product,
  editingID,
  editedName,
  setEditedName,
  isDone,
}: {
  onEdit: (id: number) => void;
  onSet: (e: React.KeyboardEvent) => void;
  onSave: () => void;
  onDone: (id: number) => void;
  product: Product;
  editingID: number | null;
  editedName: string;
  setEditedName: React.Dispatch<React.SetStateAction<string>>;
  isDone: boolean;
}) {
  const handleProductClick = (e: React.MouseEvent) => {
    const isNameArea = (e.target as HTMLElement).closest("[data-name-area]");
    if (!isNameArea && editingID !== product.id) {
      onDone(product.id);
    }
  };

  return (
    <li
      key={product.id}
      className={`${isDone ? "line-through bg-amber-400 text-black" : " bg-gradient-to-br from-slate-950 via-slate-700 to-slate-950" } flex flex-col justify-center items-center gap-3 w-[300px] rounded-lg p-2 `}
      onClick={handleProductClick}
    >
      <div
        className={`flex gap-2 justify-center items-center flex-col 
              }`}
      >
        <div
          data-name-area
          className={`
           " bg-blue-900 px-3 py-2 rounded-lg ${
             editingID === product.id ? "" : " cursor-pointer"
           }`}
          onClick={() => {
            if (editingID != product.id) onEdit(product.id);
          }}
        >
          {editingID === product.id ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onKeyDown={onSet}
              onBlur={onSave}
            />
          ) : (
            <h2 className=" font-bold text-lg tracking-tight">
              {product.name}
            </h2>
          )}
        </div>
        <p>$ {product.price}</p>
      </div>
      <p className=" font-semibold text-sm tracking-tighter">
        {product.description}
      </p>
    </li>
  );
}

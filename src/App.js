import React from "react";
import ProductList from "./components/ProductList";
import { FaFilter } from "react-icons/fa"; // Thêm biểu tượng từ react-icons
import Header from "./components/trangheader";
function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
     <Header/>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Tuyển dụng cộng tác viên online</h2>
          <p className="text-red-600">Hoa hồng 700k / 1 sản phẩm</p>
        </div>

        {/* Phần Bộ lọc và sắp xếp */}
        <div className="my-4 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
          {/* Thay button "Bộ lọc" bằng khung xám có icon */}
          <div className="flex items-center bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white cursor-pointer">
            <FaFilter className="mr-2" /> {/* Icon kế bên chữ "Bộ lọc" */}
            <span>Bộ lọc</span>
          </div>

          <div className="flex space-x-4">
            <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
              Mặc định
            </button>
            <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
              Từ Giá thấp đến cao
            </button>
            <button className="bg-gray-200 p-2 rounded-md hover:bg-black hover:text-white">
              Từ Giá cao đến thấp
            </button>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <ProductList />
      </div>
    </div>
  );
}

export default App;




import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <Layout>
      <Link
        className=" bg-blue-900 text-white py-1 px-2 rounded-md "
        href={"/products/new"}>
        Add new product
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Product Name</td>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>
                <Link href={"/products/edit/" + product._id}>
                  <BsFillPencilFill />
                  Edit
                </Link>
                <Link href={"/products/delete/" + product._id}>
                  <BsFillTrashFill />
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

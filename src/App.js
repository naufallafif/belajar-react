import './App.css';
import ProductCart from './components/ProductCard';
import { Products } from './data/Product';


function App() {

  return (
    <div className='cards'>
      {Products.map(Product => {
       return <ProductCart key={Product.id} nama={Product.nama} deskripsi = {Product.deskripsi} imageURL = {Product.imageURL}/>
      })}
   
  </div>

  );
}

export default App;

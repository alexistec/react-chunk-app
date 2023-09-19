import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import "../styles/custom-styles.css"

const product={
    id:'1',
    title:'Product name',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr/>
        <div style={{
            display : 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product={product}>
              <ProductCard.Image/>
              <ProductCard.Title className="text-bold"/> 
              <ProductCard.Buttons/>
            </ProductCard> 
            
            <ProductCard product={product}  className="bg-dark">
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold"/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>
            <ProductCard 
              style={{ backgroundColor: 'blue' }}
              product={product} >
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle style={{ color: 'yellow' }} />
              <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}

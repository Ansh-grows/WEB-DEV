import { Product } from "./product"
export function Products({products,children}){
    console.log(children);
    return (
        <>
        <div style={{backgroundColor:"pink",color:"black"}}>
                {products.map(({title,price},i)=>{
                  return <Product key={i} title={title} price={price}/>
                })}
            </div>
        </>
    )
}
import { Product } from "./product"
let books = [
    {
        title:"can we be strangers again?",
        price:200
    }
]
export function Books(){
    return(
        <>
        {
        books.map(({title , price})=>{
            return <Product title={title} price={price}/>

        })
        }
        </>
    )
}
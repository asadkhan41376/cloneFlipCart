import AddTocart from "@/app/AddToCartLatout";


const page = ({params }) => {
  const {id}=params ;
 
  return (
    <>
<AddTocart id={id}/>

    
    </>
  )
}

export default page;

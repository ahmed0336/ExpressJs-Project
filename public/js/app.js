
const App = () => {

     const [products,setproducts]=React.useState([]);


     React.useEffect(()=>{
    
fetchProducts()

     },[])

     function fetchProducts (){
        fetch('/api/products')
        .then((res)=>res.json())
        .then(data =>{
            console.log(data)

            setproducts(data)
        })
     }


    return (
        <>
        < h1 > hello from react</h1 >
            <ul class="list-group">
                <li className="list-group-item active" aria-current="true">An active item</li>
              
            </ul>

        </>
    ) 
         
    
}

ReactDOM.render(<App />, document.getElementById('app'));

// humera browser jsx ke matlb nai smjhta hai tou is liye hum babel use krte hai
// jsx to normal js ==>babel is transpiler hai jo jsx ko compile kr ke js me convert krega
// jsx me classname
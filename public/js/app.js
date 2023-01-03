

const App = () => {

    const [products, setproducts] = React.useState([]);

    const [form, setform] = React.useState({
        name: '',
        price: ''
    });


    React.useEffect(() => {

        fetchProducts()

    }, [])

    function fetchProducts() {
        fetch('/api/products')
            .then((res) => res.json())
            .then(data => {
                console.log(data.products)

                setproducts(data.products)
            })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.price) {
            
            return;
        }

        fetch('/api/products', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // object ko json string convert krna hoga jset uper form me hai
            body: JSON.stringify(form)

        }).then(res => res.json())
            .then(data => {
                
        fetchProducts()
        setform({
            name:"",
            price:""
        })

                console.log("data==>", data);
            })

    }

    const updateForm = (event, field) => {
        if (field === 'name') {
            setform({
                ...form,
                name: event.target.value
            })
        } else if (field === 'price') {
            setform({
                ...form,
                price: event.target.value
            })
        }

    }

    // yeh mne filter hai mtlb dlte ho raha front-end se magr me phir b hai is dbt api use kr ke serve se b delete krn hai
    // const deletefun = (id) =>{

    // const filterwork =products.filter((a,index)=>{
    //    return a.id !== id 
    // })

    //     console.log("id==>",id)
    //     console.log("filter==>",filterwork)

    //     setproducts(filterwork)

    // }

    const deletefun = (productID) =>{
        fetch(`/api/products/${productID}`, {
            method:"DELETE"
        } ).then((resp)=> resp.json())
        .then((data)=>{
            fetchProducts();
            console.log(data)
        })
    }




    return (
        <>
            < h1 > hello from react</h1 >

            <div className="card">
                <div className="card-header">
                    Add a Product
                </div>

                <div className="card-body" >

                    {/* <form onClick={handleSubmit} >
                        <input className="form-control mt-3" onChange={()=>updateForm(event,'name')} value={form.name} placeholder="product name.."  />
                        <input className="form-control mt-3" onChange={()=>updateForm(event,'price')} value={form.price} placeholder="product price.."  />
                        <button type="submit"  className="btn btn-primary mt-3">submit</button>
                    </form>  */}
                    <form onClick={handleSubmit}>
                        <input type="text" value={form.name} onChange={() => updateForm(event, 'name')} placeholder="Product name..." className="form-control mt-3" />
                        <input type="text" value={form.price} onChange={() => updateForm(event, 'price')} placeholder="Product price..." className="form-control mt-3" />
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>

                </div>


            </div>

            <ul class="list-group mt-4">
                {
                    products.map((product, index) => {
                        return (
                            <>
                                <li key={product.id} className="list-group-item d-flex justify-content-between  " aria-current="true">
                                    <div>
                                        <strong>{product.name}: </strong>
                                        ${product.price}
                                    </div>

                                    <div onClick={ () => deletefun(product.id)} >
                                        icon
                                    </div>
                                </li>

                            </>
                        )

                    })
                }



            </ul>

        </>
    )


}

ReactDOM.render(<App />, document.getElementById('app'));

// humera browser jsx ke matlb nai smjhta hai tou is liye hum babel use krte hai
// jsx to normal js ==>babel is transpiler hai jo jsx ko compile kr ke js me convert krega
// jsx me classname
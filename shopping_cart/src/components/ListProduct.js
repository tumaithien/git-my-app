
function ListProduct({children, title}) {
    // function showElementItems(products){
    //     let xhtml = <b>{config.NOTI_EMPTY_PRODUCT}</b>
    //     if(products.length > 0){
    //         xhtml = products.map((items, index) => {
    //             return(
    //                 <ItemProduct key={index} items={items} />
    //             )
    //         })
    //     }
    //     return xhtml;
    // }
    return (
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <div className="panel panel-primary">
                <div className="panel-heading"><h1 className="panel-title">List Products</h1></div>
                <div className="panel-body" id="list-product">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default ListProduct;
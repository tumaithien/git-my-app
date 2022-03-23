import Items from "./Items"

function BugetExpenses({listExpenses, total}) {
    return(
        <>
            <div className="expenses">
                    <h2 className="expenses__title">Expenses</h2>
                    <div className="expenses__list">
                    {
                        listExpenses.map(item => {
                            return <Items key={item.id} data={item} total={total} />
                        })
                    }
                    </div>
                </div>
        </>
    )
}

export default BugetExpenses
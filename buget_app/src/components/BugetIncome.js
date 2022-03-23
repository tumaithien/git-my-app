import Items from "./Items"

function BugetIncome({listIncome}) {
    return (
        <>
            <div className="income">
                <h2 className="icome__title">Income</h2>
                <div className="income__list">
                    {
                        listIncome.map(item => {
                            return <Items key={item.id} data={item} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BugetIncome
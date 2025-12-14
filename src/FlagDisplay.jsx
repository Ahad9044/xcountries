

const FlagDisplay = ({ data }) => {
    // console.log(data)
    const { name, flag } = data
    return (
        <div>
            <div className='border rounded-xl h-40 w-40  '>
                <img className="h-20 w-20 m-auto mb-4 mt-2" src={flag} alt={name} />
                <h3 className="ml-5">{name}</h3>
            </div>
        </div>
    )
}

export default FlagDisplay

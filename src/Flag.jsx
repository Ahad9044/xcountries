
import { useEffect, useState } from "react"
import FlagDisplay from "./FlagDisplay"

const Flag = () => {
    const [flagData, setFlagData] = useState([])
    const fetchFlag = async () => {
        try{
            const raw = await fetch('https://xcountries-backend.labs.crio.do/all')
            const data = await raw.json()
            setFlagData(data)
        }catch(err){
            console.error( "Error fetching data: " ,err)
        }
        //    console.log(data)
    }
    useEffect(() => {
        fetchFlag()
    }, [])
    return (
        <div>
            <h1 className="mb-8"> Flag Display </h1>
            <div className="m-4 flex gap-4 flex-wrap">
                {
                    flagData.length > 0 && 
                    flagData.map((flag , key)=>{
                         return    <FlagDisplay key={key} data={flag} /> })
                }
            </div>
        </div>
    )
}
export default Flag

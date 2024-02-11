

export const FormOption = ({label, id, placeholder, object, defaut }) => {

    return(
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize"> {label} </label>
                <select id={id} className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60">
                    <option key="0" value={defaut} id={defaut}> </option>
                    {  object.map((o) => 
                        <option key={o.id} value={o.id} id={id + o.id}>{o.name}</option>
                    ) }
                </select>
            </div>
            
        </div>
    )
    
}

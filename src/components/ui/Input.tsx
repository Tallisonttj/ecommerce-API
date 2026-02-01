
'use Client'
type inputType = {
   label:string
   type:string
   value:string
   className?:string
   onclick: (e:string) => void
   onblur?: () => void

}
export const Search = () => {
   
    return(
    <div className="bg-input rounded-2xl p-2 flex text-center gap-2">
      <img src="/assets/images/buscaDestop.svg" alt="" />
      <input type="text" name="" id="" placeholder="Search for products" className="outline-none" />
    </div>
  
    )
   
}

export const Input = ({label, type, value, onclick, className, onblur }:inputType) => {

  return (
    <label className={`text-[19px] md:text-xl text-left items-center h-18 p-2 w-full flex focus-within:flex-col focus-within:text-sm focus-within:items-baseline  has-[input:not(:placeholder-shown)]:text-sm has-[input:not(:placeholder-shown)]:flex-col has-[input:not(:placeholder-shown)]:items-baseline md:max-w-md}`}>
              {label}
              <input
                type={type}
                placeholder=""
                onBlur={onblur}
                value={value}
                onChange={(e) => onclick(e.target.value)}
                className={`outline-none ${className}`}
              />
            </label>

  )

}
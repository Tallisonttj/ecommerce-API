
type prop = {
    onclick: () => void
    msg: string
    className?:string
}
export const Button = ({onclick, msg, className}:prop) => {

    return (
        <button onClick={onclick} className={`border border-neutral-500 px-3 rounded-2xl bg-white ${className}`}>
            <p>{msg}</p>
        </button>
    )

}
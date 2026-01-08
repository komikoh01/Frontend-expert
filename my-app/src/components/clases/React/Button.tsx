type ButtonProps = {
    title: string
}

function Button(props: ButtonProps) {
    return (
        <button className=" text-center font-bold text-base tracking-tighter px-3 py-1 !bg-green-400 backdrop-blur-sm">{props.title}</button>
    )
}

export default Button
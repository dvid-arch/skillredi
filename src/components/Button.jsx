

function Button({text,color}) {
  return (
    <button className={`${color} px-6 py-3 rounded-[8px] border-2 border-green-800`}>
        {text}
    </button>
  )
}

export default Button
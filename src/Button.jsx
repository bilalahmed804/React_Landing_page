function Button (){
    return(
        <button className={`border ${borderColor ? borderColor : "border-blue-400"} ${bgColor ? bgColor :"bg-white"} ${txtColor ? txtColor : "txt-black"} rounded-md p-3 m-4`}></button>
    )
}
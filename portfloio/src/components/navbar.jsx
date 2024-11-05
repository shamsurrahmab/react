

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between bg-[yellow] px-5">
            <div className="text-4xl font-bold flex flex-row justify-between h-[50px] w-full text-[green]">
                logo
            </div>
            <ul className="flex flex-row text-blue-400 gap-4 ">
                <li>about</li>
                <li>contact</li>
                <li>services</li>
            </ul>
        </div>
    )
}
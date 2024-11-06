

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between bg-[yellow] px-5">
            <div className="text-4xl  font-bold flex flex-row justify-between h-[50px] w-full text-[greencd]">
                logo
            </div>
            <ul className="flex flex-row text-blue-400 gap-4 font-bold text-[20px]">
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </div>
    )
}
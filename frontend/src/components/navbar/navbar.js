const Navbar=()=>{
    return(
        <div className="text-xxs h-100 bg-black text-white h-10 flex md:text-lg">
            <ul className="flex gap-4 ml-4 items-center">
                <li className="mr-5 max-w-36">Home</li>
                <li className="max-w-36">About me</li>
                <li className="max-w-36">Contact me</li>
                <li className="max-w-36">Projects</li>
                <li className="max-w-36">Articles</li>
            </ul>
        </div>
    );
}

export default Navbar;
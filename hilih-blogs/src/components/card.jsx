function Card(){
    return(
        <div className="hover:scale-125 transition duration-300 shadow-md rounded-lg w-64 h-64 text-center m-4">
            <h4 className="font-boldItalic text-lg">"The trials and tribulations"</h4>
            <h6 className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit amet error neque fugit 
                exercitationem et debitis odit possimus veniam ratione qui,cupiditate commodi ipsum ipsam magnam 
                voluptates dolore dolorum veritatis.</h6>
            <div className={""}>
                <img src={"/vendor.png"} alt={"user"} width={40}/>
                <h7 className="text-bay-leaf">HiliH</h7><br/>
                <h7>29/12/2023</h7>
            </div>
        </div>
    )
}
export default Card
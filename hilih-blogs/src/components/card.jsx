function Card(){
    return(
        <div className="card-1">
            <h4>Title</h4>
            <h6>Lorem ipsum Lorem ipsum Lorem <br/>ipsum Lorem ipsum Lorem ipsum</h6>
            <div className={"info"}>
                <img src={"/vendor.png"} alt={"user"} width={40}/>
                <h7>HiliH</h7><br/>
                <h7>29/12/2023</h7>
            </div>
        </div>
    )
}
export default Card
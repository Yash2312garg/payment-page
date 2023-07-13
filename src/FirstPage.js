import card from "./creditcard.jpg"

const FirstPage=()=>{
    return(
        <div className="firstpage">
            <div className="prallax">
                <div className="text">
                    <h3>START SAVING MONEY...</h3>
                    <h1>SMART CREDIT CARD FOR YOUR DAILY LIFE.</h1>
                    <button className="download">DOWNLOAD</button>
                </div>
                <div className="img1">
                    <img className="creditcard"src={card} alt="payment gateway" width="400px"  />
                </div>
            </div>

        </div>
    )
}
export default FirstPage;
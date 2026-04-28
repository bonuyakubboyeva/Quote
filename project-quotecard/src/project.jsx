import './project'
function Card(props){
    return( 
        <div className="card" style={{width:'350px', height:'200px', backgroundColor:'black', color:'azure', marginLeft:'400px', marginTop:'50px'}}>
            <h1 style={{color:'azure', paddingTop:'20px'}}>{props.bankname}</h1>
            <div className="image"></div>
            <p className="cardname">{props.cardname}</p>
            <p className="data">{props.data}</p>
            <p className="cardholder">{props.cardholder}</p>
        </div> 
    )
}

export default Card;
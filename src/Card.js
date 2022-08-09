// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
function Card(props) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.plan}</h5>
                    <h6 className="card-price text-center">${props.cardData.price}<span className="period">/month</span></h6>
                    <hr></hr>
                    <ul className="fa-ul">
                        {
                            props.cardData.perks.map((item) => {
                                return <li className={!item.isEnable ? "text-muted" : ""}>
                                    {/* <span className="fa-li">
                                        {
                                          !item.isEnable ? <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                        }
                                    </span> */}
                                    <span>
                                        {
                                            item.isBold ? <strong>{item.perk}</strong> : item.perk

                                        }
                                    </span>
                                </li>
                            })
                        }
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
import awards from "../../data/award"


const Aword = () => {
  return (
  <div className="education">
                            <h4 className="label">Awards</h4>
                            <ul className="education-list">
                              {awards.map((awards,index)=>(
                                  <li className="item" key={index}>
                                    <span className="year"> {awards.year} </span>
                                    <p>
                                        <span>{awards.title}</span><br />
                                       {awards.description}
                                    </p>
                                </li>
                          
                              ))}
                              
                            </ul>
                        </div>
  )
}

export default Aword
import React from "react";
import Book from "../../../models/Book";
import SachModel from "../../../models/SachModel";
interface SachPropsInterFace {
    sach: SachModel;
}
const SachProps: React.FC<SachPropsInterFace> = (props) => {

    return  (
        <div className="col-md-3 mt-2">
            <div className="card">
                {/* <img src={require(book.imageUrl)}
                className = "card-img-top"
                alt = {book.title}
                style={{height: '200px'}}
                /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.sach.tenSach}</h5>
                    <p className="card-text">{props.sach.moTa}</p>
                    <div className="price">
                        <span className = "original-price">
                            <del>{props.sach.giaNiemYet}</del>
                        </span>
                        <span className="discouted-price">
                            <strong>{props.sach.giaBan}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>

                        </div>

                    </div>

                </div>
                

            </div>

        </div>
        

    );
    
}
export default SachProps;
import React, {useEffect} from "react";
import {useSelector} from "react-redux";

export default function Dashboard () {

    const product = useSelector(state => state.products);
    const post = useSelector(state => state.posts);


    return (
        <div className="col-md grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-danger card-img-holder text-white">
                                <div className="card-body">
                                    <h4 className="font-weight-normal mb-3">Số lượng sản phẩm
                                        <i className="mdi mdi-chart-line mdi-24px float-right" />
                                    </h4>
                                    <h2 className="mb-5">{product.length}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-danger card-img-holder text-white">
                                <div className="card-body">
                                    <h4 className="font-weight-normal mb-3">Số lượng bài viết
                                        <i className="mdi mdi-chart-line mdi-24px float-right" />
                                    </h4>
                                    <h2 className="mb-5">{post.length}</h2>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-4 stretch-card grid-margin">*/}
                        {/*    <div className="card bg-gradient-info card-img-holder text-white">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <img src="images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />*/}
                        {/*            <h4 className="font-weight-normal mb-3">Weekly Orders*/}
                        {/*                <i className="mdi mdi-bookmark-outline mdi-24px float-right" />*/}
                        {/*            </h4>*/}
                        {/*            <h2 className="mb-5">45,6334</h2>*/}
                        {/*            <h6 className="card-text">Decreased by 10%</h6>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-4 stretch-card grid-margin">*/}
                        {/*    <div className="card bg-gradient-success card-img-holder text-white">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <img src="images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />*/}
                        {/*            <h4 className="font-weight-normal mb-3">Visitors Online*/}
                        {/*                <i className="mdi mdi-diamond mdi-24px float-right" />*/}
                        {/*            </h4>*/}
                        {/*            <h2 className="mb-5">95,5741</h2>*/}
                        {/*            <h6 className="card-text">Increased by 5%</h6>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </div>
    )
}

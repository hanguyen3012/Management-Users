import React from "react";
import { connect } from "react-redux";
import loaderImg from "../../assets/images/loaderImg.gif"
import Image from "../../components/atoms/Image";
import "./index.css"
const PageLoader = (props: any) => {
  const { loading } = props;

  if (!loading) {
    return null;
  }

  return (
    <div className="loading-container">   
      <div className="loader">
        <Image src={loaderImg} alt="loading" />
        </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.authReducer.loading,
});

export default connect(mapStateToProps)(PageLoader);

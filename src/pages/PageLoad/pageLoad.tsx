import React, { Component } from "react";
import { connect } from "react-redux";

const PageLoader = (props: any) => {


    const { loading } = props;

    if (!loading) return null;

    return (
        <div className="loading-container">
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        </div>
    );
}


const mapStateToProps = (state: any) => ({
    loading: state.authReducer.loading,
});

export default connect(mapStateToProps)(PageLoader);
import React from "react";

export default function LoadingContainer() {
    return (
        <div className="container box-1">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="spinner spinner-border text-primary" style={ { width: "100px", height: "100px" } }
                         role="status">
                    </div>
                </div>
            </div>
        </div>
    );
};

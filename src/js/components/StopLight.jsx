import React, { useState } from 'react';

const StopLight = () => {
    const [activeColor, setColorActive] = useState("yellow");

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">

            <div className="bg-dark p-4 rounded-4 d-flex flex-column gap-3" style={{ width: "130px" }}>

                <div
                    className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold ${activeColor === "red" ? "bg-danger" : "bg-secondary"}`}
                    onClick={() => setColorActive("red")}
                    style={{ width: "80px", height: "80px", cursor: "pointer", fontSize: "12px" }}
                >
                    {/* {activeColor === "red" ? "ON" : "OFF"} */}
                </div>

                <div
                    className={`rounded-circle d-flex align-items-center justify-content-center text-dark fw-bold ${activeColor === "yellow" ? "bg-warning" : "bg-secondary"}`}
                    onClick={() => setColorActive("yellow")}
                    style={{ width: "80px", height: "80px", cursor: "pointer", fontSize: "12px" }}
                >
                    {/* {activeColor === "yellow" ? "" : ""} */}
                </div>

                <div
                    className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold ${activeColor === "green" ? "bg-success" : "bg-secondary"}`}
                    onClick={() => setColorActive("green")}
                    style={{ width: "80px", height: "80px", cursor: "pointer", fontSize: "12px" }}
                >
                  {/*   {activeColor === "green" ? "ON" : "OFF"} */}
                </div>

            </div>
        </div>
    )
}

export default StopLight;
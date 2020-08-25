// ==================== WORK SWAP (TK: see Work.jsx that handles WorkNav): REF https://reactjs.org/docs/higher-order-components.html ====================
// ==================== (there *has* to be a better way to handle multiple pages/components that have identical structures...) ====================

import React from 'react';


export const WorkEmployer = ({ employer }) => {
    return (
        <div>
            <h2>WorkEmployer Component</h2>
            <p>Work:  { employer }</p>
        </div>
    )
}
import React from 'react'
import reactDom from 'react-dom'

export default function Loading() {
    return reactDom.createPortal(
        <div className="pageLoading">
            <div></div>
        </div>,
        document.getElementById('root2')
    )
}

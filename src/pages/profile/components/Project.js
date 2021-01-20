import React from 'react'
import ProjectItem from './ProjectItem'

export default function Project() {
    return (
        <div className="tab3">
            <div className="row">
                <ProjectItem thumbnail="/img/img8.png" name="Furnitown" />
                <ProjectItem thumbnail="/img/img5.png" name="GboxMB" />
            </div>
            <div className="btn-wrap">
                <div className="btn overlay btn-icon round">
                    <img src="/img/icon-upload.svg" alt="" /> Tải lên
                </div>
            </div>
        </div>
    )
}

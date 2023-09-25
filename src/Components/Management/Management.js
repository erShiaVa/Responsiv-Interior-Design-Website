import React from 'react';
import './management.scss';

function Management() {
  return (
    <div className='container'>
        <div className="management">
            <div className="management__card">
                <h3 className="heading__three">Interior design & all the furniture</h3>
                <p className="paragraph">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                    per inceptos himenaeos. Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                </p>
                <button className="button-secondary">read more</button>
            </div>

            <div className="management__card">
                <h3 className="heading__three">Color consulting & color design</h3>
                <p className="paragraph">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                    per inceptos himenaeos. Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                </p>
                <button className="button-secondary">read more</button>
            </div>

            <div className="management__card">
                <h3 className="heading__three">Project management & budgeting</h3>
                <p className="paragraph">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                    per inceptos himenaeos. Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                </p>
                <button className="button-secondary">read more</button>
            </div>

        </div>
    </div>
  )
}

export default Management
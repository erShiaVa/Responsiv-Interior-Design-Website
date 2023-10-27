import React from 'react';
import './management.scss';

function Management() {
  return (
    <section className="management">
        <div className="management__heading">
            <p className="description">what makes us different</p>
            <h2 className="heading__two">Our design engineering services</h2>
        </div>
        <div className="management__container">
            <div className="management__box">
                <div className="management__one left">
                    <p className="big-paragraph">Sustainable design</p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veniam soluta asperiores quidem mollitia, deserunt at 
                        commodi et, saepe nobis quis, exercitationem error tempora 
                        voluptas. Voluptatibus odit cumque praesentium eligendi expedita.
                    </p>
                </div>
                <div className="management__one left">
                    <p className="big-paragraph">Customized design</p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veniam soluta asperiores quidem mollitia, deserunt at 
                        commodi et, saepe nobis quis, exercitationem error tempora 
                        voluptas. Voluptatibus odit cumque praesentium eligendi expedita.
                    </p>
                </div>
            </div>

            <div className="management__box">
                <div className="management__one">
                    <p className="big-paragraph">Concept development</p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veniam soluta asperiores quidem mollitia, deserunt at 
                        commodi et, saepe nobis quis, exercitationem error tempora 
                        voluptas. Voluptatibus odit cumque praesentium eligendi expedita.
                    </p>
                </div>
                <div className="management__one">
                    <p className="big-paragraph">Project Management</p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veniam soluta asperiores quidem mollitia, deserunt at 
                        commodi et, saepe nobis quis, exercitationem error tempora 
                        voluptas. Voluptatibus odit cumque praesentium eligendi expedita.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Management
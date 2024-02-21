 import React from "react";

 interface DetailsBlockProps {
    img: string;
    title: string;
}

export const DetailsBlock: React.FC<DetailsBlockProps> = ({img,title}) => {
    return (
        <div className="detailsBlock">
            <div className="left_side">
                <h3>About</h3>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in 
                    veniam illum hic quidem laudantium eveniet sint. Illo aperiam cupiditate, incidunt 
                    dicta molestias voluptate harum accusamus. Repellendus laudantium fuga debitis tempora sed culpa mollitia, 
                    rem a, delectus totam fugiat impedit magnam quaerat numquam commodi nobis harum dolorum voluptates consequuntur possimus?</p>
                </div>

            <div className="right_side">
                <img src={img} alt="" />
            </div>
        </div>
    )
}



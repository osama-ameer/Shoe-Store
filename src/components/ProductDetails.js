import React from 'react';
import {useParams} from 'react-router-dom'

export default function ProductDetails() {
    const shoe ={
        "kyrie-7-ep-basketball-shoe-kMwm27": {
            name: "Kyrie 7 EP",
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b2cee0c4-ffa6-4c28-a7b1-e84d8da7426f/kyrie-7-ep-basketball-shoe-kMwm27.jpg'
        },
        "kyrie-7-ep-basketball-shoe-8ZrrMn": {
            name:"Kyrie 7 EP 'Sisterhood'",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0c98d012-7599-4347-b069-0a7922bb814e/kyrie-7-ep-sisterhood-basketball-shoe-8ZrrMn.jpg"
        },
        "air-force-1-crater-shoe-Z7JHnk": {
            name:"Nike Air Force 1 Crater",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f5db5b2-e8ba-4458-b32c-475b83336fa8/air-force-1-crater-shoe-Z7JHnk.jpg"
        },
        "air-jordan-xxxv-pf-basketball-shoe-QrRrHz": {
            name:"Air Jordan XXXV PF",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9896b12f-1120-47fb-8a73-765b60708f32/air-jordan-xxxv-pf-basketball-shoe-QrRrHz.jpg"
        },
        "blazer-mid-77-infinite-shoe-dCp5Mm": {
            name:"Nike Blazer Mid '77 Infinite",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/050ad745-6f85-4000-a6fe-287da86738da/blazer-mid-77-infinite-shoe-dCp5Mm.jpg"
        },
        "blazer-mid-77-vintage-shoe-dNWPTj": {
            name:"Nike Blazer Mid '77 Vintage",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a11caa5a-95ee-46ce-9a28-c1b9b983e1d5/blazer-mid-77-vintage-shoe-dNWPTj.jpg"
        },
        "air-max-1-shoe-SS9rJG": {
            name:"Nike Air Max 1",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75b7368c-8873-4662-9f89-157bd2cfb97f/air-max-1-shoe-SS9rJG.jpg"
        },
        "air-max-95-essential-shoe-R8WBq5": {
            name:"Nike Air Max 95 Essential",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7f48a7d-48ac-476c-9837-d660261639b3/air-max-95-essential-shoe-R8WBq5.jpg"
        },
        "metcon-6-training-shoe-mW5Pwg": {
            name:"Nike Metcon 6",
            image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/709ce3af-540e-433d-92fe-fb83371c25c3/metcon-6-training-shoe-mW5Pwg.jpg"
        }

    }

    const {productID} = useParams();
    const product = shoe[productID];
    const {name, image} = product

    
    return (
        <div>
            <center><h3>Product Details</h3></center>
            <div className="product" style={{
                margin: "30px 500px"
            }}>
            <img src={image} alt={name} style={{
                width: "350px",
                height: "350px"
            }} />
            <center><h2>{name}</h2></center>
            </div>
            
        </div>
    )
}

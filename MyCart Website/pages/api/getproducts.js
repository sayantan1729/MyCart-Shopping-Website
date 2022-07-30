import product from "../../models/product"
import connectDb from "../../middleware/mongoose"

const handler=async(req,res)=>{
    let products= await product.find()
    let man={}
    for(let item of products){
        if(item.title in man)
        {
             if(!man[item.title].color.includes(item.color) && item.availableQty>0){
                man[item.title].color.push(item.color)
             }
             if(!man[item.title].size.includes(item.size) && item.availableQty>0){
                man[item.title].size.push(item.size)
             }
        }
        else{
            man[item.title]=JSON.parse(JSON.stringify(item))
            if(item.availableQty>0)
            {
                man[item.title].color=[item.color]
                man[item.title].size=[item.size]

            }
        }
    }
    res.status(200).json({ man })
}
export default connectDb(handler);
  
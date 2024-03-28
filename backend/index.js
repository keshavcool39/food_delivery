const express=require("express");
const { Organization, Item, Pricing } = require("./bd");
const app=express();
app.use(express.json())

const PORT=process.env.PORT || 3000;


app.post("/keshav",async(req,res)=>{
    const zone=req.body.zone;
    const organization_id=req.body.organization_id;
    const total_distance=req.body.total_distance;
    const item_type=req.body.item_type;

    if (!zone || !organization_id || !total_distance || !item_type) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

   

 

    if(total_distance<5){
        return res.json({total_price:10})

    }
    if(total_distance>5 && item_type=="perishable")
    {
        let more=total_distance-5;
        let calc=1.5*more;
        let ans=calc+10;
        return res.json({total_price:ans})
    }
    
    if(item_type=="non-perishable")
    {
        let more=total_distance-5;
        let calc=more;
        let ans=calc+10
        return res.json({total_price:ans})
    }
})


const start=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log("connected");
        });

    }
    catch(error){
        console.log(error)
    }
}
start();
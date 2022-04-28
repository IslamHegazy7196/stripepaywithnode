const Stripe=require('stripe')(process.env.Secret_key)

const stripe=async(req,res)=>{
    const {purchase,total_amount,shipping_fee}=req.body
    const calculate=()=>{
        // recalculte total using data from database
        return total_amount+shipping_fee
    }
    const paymentIntent=await stripe.paymentIntents.create({
        amount:calculate(),
        currency:'usd',
    })
    console.log(req.body)
    res.send('111111')
}

module.exports=stripe
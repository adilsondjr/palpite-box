export default async(req, res) => {
  console.log(JSON.parse(req.body))
  res.end(JSON.stringify({
    showCoupon: true,
    message: 'Ola FSM'
  }));
}